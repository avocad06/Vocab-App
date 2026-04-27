/**
 * js/vocab-card.js
 *
 * DOM 구조:
 *   .vocab-card                     ← 카드 루트 (viewport 크기로 확장됨)
 *     .vocab-card__bg               ← 배경 미디어 (thumb → 확대 → video/gif)
 *       img.vocab-thumb             ← 초기 스냅 이미지
 *       video or img.vocab-card__media  ← 실제 미디어 (7단계에서 등장)
 *     .vocab-card__blur             ← 블러 오버레이 (3~6단계)
 *     .vocab-card__overlay          ← 텍스트 레이어 (중앙 정렬)
 *       .vocab-card__word-wrap      ← 단어 + 품사 (3·4단계)
 *         .vocab-card__pos
 *         .vocab-card__word-row     ← 글자별 span
 *       .vocab-card__meaning-wrap   ← 뜻 (5단계)
 *       .vocab-card__example-wrap   ← 예문 어절 (6·7단계)
 *         .vocab-card__chunk        ← 어절별 span
 */
(function () {
  'use strict';

  function buildWordRow(word) {
    const row = document.createElement('div');
    row.className = 'vocab-card__word-row';
    for (const ch of word) {
      const span = document.createElement('span');
      span.className = 'vocab-card__letter';
      span.textContent = ch;
      row.appendChild(span);
    }
    return row;
  }

  function buildExampleRow(chunks) {
    const wrap = document.createElement('div');
    wrap.className = 'vocab-card__example-wrap';
    chunks.forEach(chunk => {
      const span = document.createElement('span');
      span.className = 'vocab-card__chunk';
      span.textContent = chunk;
      wrap.appendChild(span);
    });
    return wrap;
  }

  function createCard(wordData) {
    const card = document.createElement('div');
    card.className = 'vocab-card';
    card.dataset.id = wordData.id;

    /* ── 배경 레이어 ── */
    const bg = document.createElement('div');
    bg.className = 'vocab-card__bg';

    // 스냅 썸네일 (처음 보여줄 이미지)
    const thumb = MediaLoader.createThumb(wordData);
    thumb.classList.add('vocab-card__snap');

    // 실제 미디어 (7단계에서 표시)
    const mediaEl = MediaLoader.create(wordData);
    mediaEl.classList.add('vocab-card__media-hidden');

    bg.appendChild(thumb);
    bg.appendChild(mediaEl);

    /* ── 블러 오버레이 ── */
    const blur = document.createElement('div');
    blur.className = 'vocab-card__blur';

    /* ── 텍스트 오버레이 ── */
    const overlay = document.createElement('div');
    overlay.className = 'vocab-card__overlay';

    // 단어 영역
    const wordWrap = document.createElement('div');
    wordWrap.className = 'vocab-card__word-wrap';

    const pos = document.createElement('span');
    pos.className = 'vocab-card__pos';
    pos.textContent = wordData.pos;

    const wordRow = buildWordRow(wordData.word);

    wordWrap.appendChild(pos);
    wordWrap.appendChild(wordRow);

    // 뜻 영역
    const meaningWrap = document.createElement('div');
    meaningWrap.className = 'vocab-card__meaning-wrap';
    meaningWrap.textContent = wordData.meaning;

    // 예문 어절 영역
    const exampleWrap = buildExampleRow(wordData.exampleChunks);

    overlay.appendChild(wordWrap);
    overlay.appendChild(meaningWrap);
    overlay.appendChild(exampleWrap);

    card.appendChild(bg);
    card.appendChild(blur);
    card.appendChild(overlay);

    return card;
  }

  window.VocabCard = { createCard };
})();
