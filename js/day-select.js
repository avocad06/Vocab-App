/**
 * js/day-select.js
 *
 * 학년(G1~G3) 탭 + Day 그리드 선택 UI.
 *  - 시작 화면과 'Day 변경' 모달 양쪽에서 같은 렌더러를 재사용한다.
 *  - 각 Day 버튼의 ☰ 아이콘 → 해당 Day의 단어·뜻 목록 모달.
 * words.js의 grade/day 필드를 집계해 동적으로 렌더링하므로
 * 단어·Day·학년이 늘어나도 코드 수정이 필요 없다.
 */
(function () {
  'use strict';

  let _words = [];
  let _byGrade = new Map();   // grade → (day → 단어 수)
  let _wlStart = null;        // 단어 목록 모달의 '이 Day 시작' 동작
  let _pickerCancel = null;   // Day 변경 모달의 닫기 동작

  function aggregate() {
    _byGrade = new Map();
    _words.forEach(w => {
      if (!w.grade || !w.day) return;
      if (!_byGrade.has(w.grade)) _byGrade.set(w.grade, new Map());
      const days = _byGrade.get(w.grade);
      days.set(w.day, (days.get(w.day) || 0) + 1);
    });
  }

  function wordsOf(grade, day) {
    return _words
      .filter(w => w.grade === grade && w.day === day)
      .sort((a, b) => (a.seq ?? 999) - (b.seq ?? 999));
  }

  // ── 학년 탭 + Day 그리드 (시작 화면·모달 공용) ────────────────
  function renderSelection(tabsEl, gridEl, opts) {
    const { onStart, current } = opts;
    const grades = [..._byGrade.keys()].sort((a, b) => a - b);
    if (!grades.length) return;
    let cur = (current && grades.includes(current.grade)) ? current.grade : grades[0];

    function renderTabs() {
      tabsEl.innerHTML = '';
      grades.forEach(g => {
        const btn = document.createElement('button');
        btn.className = 'grade-tab' + (g === cur ? ' is-selected' : '');
        btn.textContent = 'G' + g;
        btn.addEventListener('click', () => {
          if (cur === g) return;
          cur = g;
          renderTabs();
          renderGrid();
        });
        tabsEl.appendChild(btn);
      });
    }

    function renderGrid() {
      gridEl.innerHTML = '';
      const days = _byGrade.get(cur);
      [...days.keys()].sort((a, b) => a - b).forEach(d => {
        const isCurrent = current && current.grade === cur && current.day === d;
        const cell = document.createElement('div');
        cell.className = 'day-btn' + (isCurrent ? ' is-current' : '');
        cell.setAttribute('role', 'button');
        cell.tabIndex = 0;

        const label = document.createElement('span');
        label.className = 'day-btn__label';
        label.textContent = 'Day ' + d;

        const count = document.createElement('span');
        count.className = 'day-btn__count';
        count.textContent = days.get(d) + '단어';

        const list = document.createElement('button');
        list.className = 'day-btn__list';
        list.title = '단어 목록 보기';
        list.setAttribute('aria-label', `G${cur} Day ${d} 단어 목록`);
        list.textContent = '☰';
        list.addEventListener('click', (e) => {
          e.stopPropagation();
          openWordList(cur, d, onStart);
        });

        cell.appendChild(label);
        cell.appendChild(count);
        cell.appendChild(list);
        cell.addEventListener('click', () => onStart(cur, d));
        cell.addEventListener('keydown', (e) => {
          if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onStart(cur, d); }
        });
        gridEl.appendChild(cell);
      });
    }

    renderTabs();
    renderGrid();
  }

  // ── 단어 목록 모달 ───────────────────────────────────────────
  function openWordList(grade, day, onStart) {
    const modal = document.getElementById('wordlist-modal');
    const list = wordsOf(grade, day);
    document.getElementById('wordlist-title').textContent =
      `G${grade} · Day ${day} (${list.length}단어)`;

    const body = document.getElementById('wordlist-body');
    body.innerHTML = '';
    list.forEach((w, i) => {
      const row = document.createElement('div');
      row.className = 'wordlist__item';

      const num = document.createElement('span');
      num.className = 'wordlist__num';
      num.textContent = i + 1;

      const word = document.createElement('span');
      word.className = 'wordlist__word';
      word.textContent = w.word;

      const meaning = document.createElement('span');
      meaning.className = 'wordlist__meaning';
      meaning.textContent = w.meaning;

      row.appendChild(num);
      row.appendChild(word);
      row.appendChild(meaning);
      body.appendChild(row);
    });

    _wlStart = () => {
      closeWordList();
      onStart(grade, day);
    };
    modal.hidden = false;
    body.scrollTop = 0;
  }

  function closeWordList() {
    document.getElementById('wordlist-modal').hidden = true;
  }

  // ── Day 변경 모달 (학습 중) ──────────────────────────────────
  function openPicker({ current, onPick, onCancel }) {
    const modal = document.getElementById('day-modal');
    renderSelection(
      document.getElementById('modal-grade-tabs'),
      document.getElementById('modal-day-grid'),
      {
        current,
        onStart: (g, d) => {
          modal.hidden = true;
          onPick(g, d);
        },
      }
    );
    _pickerCancel = () => {
      modal.hidden = true;
      if (onCancel) onCancel();
    };
    modal.hidden = false;
  }

  // ── 초기화 ───────────────────────────────────────────────────
  function init({ tabsEl, gridEl, words, onStart }) {
    _words = words || [];
    aggregate();
    renderSelection(tabsEl, gridEl, { onStart });

    // 모달 공통 버튼 배선 (1회)
    document.getElementById('btn-wordlist-close')
      ?.addEventListener('click', closeWordList);
    document.getElementById('btn-wordlist-start')
      ?.addEventListener('click', () => { if (_wlStart) _wlStart(); });
    document.getElementById('wordlist-modal')
      ?.addEventListener('click', (e) => {
        if (e.target === e.currentTarget) closeWordList();
      });
    document.getElementById('btn-day-modal-close')
      ?.addEventListener('click', () => { if (_pickerCancel) _pickerCancel(); });
    document.getElementById('day-modal')
      ?.addEventListener('click', (e) => {
        if (e.target === e.currentTarget && _pickerCancel) _pickerCancel();
      });
  }

  window.DaySelect = { init, openPicker };
})();
