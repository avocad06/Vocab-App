/**
 * js/main.js
 *
 * 흐름: 학년·Day 선택 (day-select.js) → 해당 Day의 단어만 카드 생성 → 재생
 * 데이터는 words.js 한 번 로드 후 메모리에서 필터 — 추가 통신 없음.
 */
(function () {
  'use strict';

  const root = document.getElementById('vocab-root');
  const startWrap = document.getElementById('vocab-start-wrap');
  const layout = document.getElementById('vocab-layout');
  const btnPrev = document.getElementById('btn-prev');
  const btnNext = document.getElementById('btn-next');
  const restartWrap = document.getElementById('vocab-restart-wrap');
  const btnRestart = document.getElementById('btn-restart');
  const btnDaySelect = document.getElementById('btn-day-select');
  const btnAutoplay = document.getElementById('btn-autoplay');
  const autoplayWrap = document.getElementById('vocab-autoplay-wrap');
  const btnHelp = document.getElementById('btn-help');
  const helpModal = document.getElementById('help-modal');
  const btnHelpClose = document.getElementById('btn-help-close');
  const indicatorWrap = document.getElementById('day-indicator-wrap');
  const dayIndicator = document.getElementById('day-indicator');

  // 현재 학습 중인 Day의 단어·카드 (선택 시 채워짐)
  let dayWords = [];
  let cards = [];
  let currentGrade = null;
  let currentDay = null;

  let currentIndex = 0;
  let isFullscreen = false;  // 풀스크린 중 여부 — 이때만 버튼 완전 차단
  let autoplay = true;   // 자동재생 기본값: ON
  let isModalOpen = false;  // 모달 열림 여부 — autoplay 차단용

  // 풀스크린 상태 변경 (vocab-player.js 에서 호출)
  function setFullscreen(active) {
    isFullscreen = active;
    const vis = active ? 'hidden' : 'visible';
    if (autoplayWrap) autoplayWrap.style.visibility = vis;
    if (indicatorWrap) indicatorWrap.style.visibility = vis;
  }

  // 선택된 Day의 카드 생성 (10~20장 — 청크 분할·로딩 오버레이 불필요)
  function buildCards(list) {
    root.innerHTML = '';
    cards = [];
    const frag = document.createDocumentFragment();
    list.forEach(w => {
      const card = VocabCard.createCard(w);
      frag.appendChild(card);
      cards.push(card);
    });
    root.appendChild(frag);
  }

  // 버튼 상태 = 인덱스에만 종속
  // 재생 여부와 무관하게 인덱스가 바뀌는 순간 즉시 반영
  function updateButtons(index) {
    const isLast = index === cards.length - 1;
    btnPrev.style.visibility = 'visible';                    // 항상 표시
    btnNext.style.visibility = isLast ? 'hidden' : 'visible';
    restartWrap.classList.toggle('is-visible', isLast);
  }

  // 현재 카드 활성화
  function showCard(index) {
    cards.forEach((c, i) => c.classList.toggle('is-active', i === index));
    // 현재·다음 카드 썸네일은 lazy를 풀어 즉시 로딩
    // (Day 전환 직후 스냅이 빈 화면으로 보이는 현상 방지)
    [index, index + 1].forEach(i => {
      const img = cards[i]?.querySelector('.vocab-card__snap img');
      if (img && img.loading === 'lazy') img.loading = 'eager';
    });
    updateButtons(index);
  }

  // 카드 재생
  // playId로 이전 호출과 현재 호출을 구분 — autoplay 체인이 끊기지 않도록
  let _playId = 0;
  let isSequenceDone = false;

  async function playCard(index) {
    AudioPlayer.stopAll();
    VocabPlayer.stopSequence();
    currentIndex = index;
    isSequenceDone = false;
    const myId = ++_playId;
    showCard(index);
    try {
      await VocabPlayer.play(cards[index], dayWords[index]);
    } catch (err) {
      console.warn('[main] playCard 실패:', err);
    } finally {
      isFullscreen = false;
      if (myId === _playId) isSequenceDone = true;
    }

    // sequence 완료 → autoplay ON이면 다음 카드
    if (myId === _playId && autoplay && !isModalOpen && currentIndex < cards.length - 1) {
      await playCard(currentIndex + 1);
    }
  }

  // 이전 버튼 — 풀스크린 중에만 차단
  // 첫 번째 카드에서 누르면 학년·Day 선택 화면으로 복귀 (새로고침)
  btnPrev.addEventListener('click', () => {
    if (isFullscreen) return;
    disableAutoplay();
    if (currentIndex === 0) {
      location.reload();
      return;
    }
    playCard(currentIndex - 1);
  });

  // 다음 버튼 — 풀스크린 중에만 차단
  btnNext.addEventListener('click', () => {
    if (isFullscreen || currentIndex === cards.length - 1) return;
    disableAutoplay();
    playCard(currentIndex + 1);
  });

  // 처음부터 버튼 — 현재 Day를 처음부터 다시
  btnRestart.addEventListener('click', () => {
    if (isFullscreen) return;
    playCard(0);
  });

  // 다른 Day 버튼 — Day 변경 모달 열기
  btnDaySelect?.addEventListener('click', () => {
    if (isFullscreen) return;
    openDayPicker();
  });

  // 자동재생 OFF로 전환
  function disableAutoplay() {
    if (!autoplay) return;
    autoplay = false;
    btnAutoplay?.classList.replace('is-on', 'is-off');
    // 텍스트는 항상 'Auto' 유지 — 색상으로만 구분
  }

  // 자동재생 토글
  btnAutoplay?.addEventListener('click', () => {
    autoplay = !autoplay;
    btnAutoplay.classList.toggle('is-on', autoplay);
    btnAutoplay.classList.toggle('is-off', !autoplay);

    // sequence가 끝난 상태에서 Auto ON → 0.5초 후 다음 카드
    if (autoplay && isSequenceDone && !isModalOpen && currentIndex < cards.length - 1) {
      setTimeout(() => {
        if (autoplay && isSequenceDone && !isModalOpen && currentIndex < cards.length - 1) {
          playCard(currentIndex + 1);
        }
      }, 500);
    }
  });

  // 도움말 모달
  // 카드를 초기 상태(스냅+빈칸)로 리셋만 하고 재생은 하지 않음
  function resetCardDisplay(index) {
    cards.forEach((c, i) => c.classList.toggle('is-active', i === index));
    const card = cards[index];

    // 풀스크린 강제 정리
    const fs = card.querySelector('.vocab-fs');
    if (fs) {
      fs.classList.remove('is-active');
      const fsImg = fs.querySelector('.vocab-fs__img');
      if (fsImg) { fsImg.style.cssText = ''; VocabPlayer.safePause(fsImg); }
      fs.querySelectorAll('.is-visible').forEach(el => el.classList.remove('is-visible'));
      fs.querySelectorAll('.is-highlight').forEach(el => el.classList.remove('is-highlight'));
      card.classList.remove('is-fs-open');
    }

    // 카드 초기 상태: 스냅 표시 + 빈칸
    card.querySelector('.vocab-card__snap')?.classList.add('is-visible');
    card.querySelectorAll('.vocab-card__letter').forEach(l => l.classList.remove('is-visible', 'is-highlight'));
    card.querySelectorAll('.vocab-card__blank').forEach(b => b.classList.add('is-visible'));
    card.querySelector('.vocab-card__meaning')?.classList.remove('is-visible');
    card.querySelector('.vocab-card__example-wrap')?.classList.remove('is-visible');
    card.querySelectorAll('.vocab-card__chunk').forEach(c => c.classList.remove('is-highlight'));

    const mediaEl = card.querySelector('.vocab-card__media');
    VocabPlayer.safePause(mediaEl);

    updateButtons(index);
  }

  // 재생 전체 중단 + 현재 카드 초기 상태로 리셋 (모달 열기 전 공용)
  function interruptPlayback() {
    isModalOpen = true;       // autoplay 차단 — 가장 먼저
    AudioPlayer.stopAll();
    VocabPlayer.stopSequence();
    isFullscreen = false;
    window._vocabSetFullscreen?.(false);
    resetCardDisplay(currentIndex);
    if (autoplayWrap) autoplayWrap.style.visibility = 'hidden';
  }

  // 모달 닫은 뒤 현재 카드 재개 (공용)
  async function resumePlayback() {
    isModalOpen = false;
    if (autoplayWrap) autoplayWrap.style.visibility = 'visible';
    if (indicatorWrap) indicatorWrap.style.visibility = 'visible';
    await playCard(currentIndex);
  }

  function openHelp() {
    interruptPlayback();
    helpModal.hidden = false;
  }

  async function closeHelp() {
    helpModal.hidden = true;
    await resumePlayback();
  }

  // ── Day 변경 모달 ──────────────────────────────────────────
  function openDayPicker() {
    if (isModalOpen) return;
    interruptPlayback();
    if (indicatorWrap) indicatorWrap.style.visibility = 'hidden';
    DaySelect.openPicker({
      current: { grade: currentGrade, day: currentDay },
      onPick: (g, d) => {
        isModalOpen = false;
        if (autoplayWrap) autoplayWrap.style.visibility = 'visible';
        startDay(g, d);
      },
      onCancel: () => { resumePlayback(); },
    });
  }

  dayIndicator?.addEventListener('click', () => {
    if (isFullscreen) return;
    openDayPicker();
  });

  btnHelp?.addEventListener('click', openHelp);
  btnHelpClose?.addEventListener('click', closeHelp);
  helpModal?.addEventListener('click', (e) => {
    if (e.target === helpModal) closeHelp();
  });

  // vocab-player.js 가 풀스크린 상태를 알릴 수 있도록 전역 노출
  window._vocabSetFullscreen = setFullscreen;

  // Day 시작 — 선택된 학년·Day의 단어만 필터·정렬 후 재생
  function startDay(grade, day) {
    dayWords = VOCAB_WORDS
      .filter(w => w.grade === grade && w.day === day)
      .sort((a, b) => (a.seq ?? 999) - (b.seq ?? 999));
    if (!dayWords.length) return;

    currentGrade = grade;
    currentDay = day;
    if (dayIndicator) dayIndicator.textContent = `G${grade} · Day ${day} ▾`;

    buildCards(dayWords);

    startWrap.style.display = 'none';
    layout.style.visibility = 'visible';
    if (autoplayWrap) autoplayWrap.style.visibility = 'visible';
    if (indicatorWrap) indicatorWrap.style.visibility = 'visible';
    playCard(0);
  }

  // 학년·Day 선택 화면 렌더링
  DaySelect.init({
    tabsEl: document.getElementById('grade-tabs'),
    gridEl: document.getElementById('day-grid'),
    words: window.VOCAB_WORDS,
    onStart: startDay,
  });
})();
