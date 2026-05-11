/**
 * js/vocab-card.js
 */
(function () {
  'use strict';

  function buildCardWordRow(word) {
    const row = document.createElement('div');
    row.className = 'vocab-card__word-row';
    for (const ch of word) {
      if (ch === ' ') {
        const sp = document.createElement('span');
        sp.className = 'vocab-card__word-space';
        row.appendChild(sp);
        continue;
      }
      const wrap = document.createElement('span');
      wrap.className = 'vocab-card__word-char';
      const letter = document.createElement('span');
      letter.className = 'vocab-card__letter';
      letter.textContent = ch;
      const blank = document.createElement('span');
      blank.className = 'vocab-card__blank';
      wrap.appendChild(letter);
      wrap.appendChild(blank);
      row.appendChild(wrap);
    }
    return row;
  }

  function createCard(wordData) {
    const card = document.createElement('div');
    card.className = 'vocab-card';
    card.dataset.id = wordData.id;

    /* ── 미디어 영역 ── */
    const mediaWrap = document.createElement('div');
    mediaWrap.className = 'vocab-card__media-wrap';

    const mediaEl = MediaLoader.create(wordData);

    const snap = document.createElement('div');
    snap.className = 'vocab-card__snap';
    snap.appendChild(MediaLoader.createThumb(wordData));

    mediaWrap.appendChild(mediaEl);
    mediaWrap.appendChild(snap);

    /* ── 텍스트 영역 ── */
    const info = document.createElement('div');
    info.className = 'vocab-card__info';

    const pos = document.createElement('span');
    pos.className = 'vocab-card__pos';
    pos.textContent = wordData.pos;

    const wordRow = buildCardWordRow(wordData.word);

    const meaning = document.createElement('p');
    meaning.className = 'vocab-card__meaning';
    meaning.textContent = wordData.meaning;

    const exWrap = document.createElement('div');
    exWrap.className = 'vocab-card__example-wrap';
    (wordData.exampleChunks || []).forEach(chunk => {
      const span = document.createElement('span');
      span.className = 'vocab-card__chunk';
      span.textContent = chunk;
      exWrap.appendChild(span);
    });

    info.appendChild(pos);
    info.appendChild(wordRow);
    info.appendChild(meaning);
    info.appendChild(exWrap);

    card.appendChild(mediaWrap);
    card.appendChild(info);

    /* ── 풀스크린 레이어 ── */
    const fs = document.createElement('div');
    fs.className = 'vocab-fs';

    // 풀스크린 확대 시 실제 미디어(video/gif) 사용
    const fsImg = MediaLoader.create(wordData);
    fsImg.className = 'vocab-fs__img';
    if (fsImg.tagName === 'VIDEO') {
      fsImg.muted = true;
      fsImg.loop = true;
      fsImg.playsInline = true;
      fsImg.autoplay = false;
    }

    const fsBlur = document.createElement('div');
    fsBlur.className = 'vocab-fs__blur';

    const fsText = document.createElement('div');
    fsText.className = 'vocab-fs__text';

    const fsPos = document.createElement('span');
    fsPos.className = 'vocab-fs__pos';
    fsPos.textContent = wordData.pos;

    const fsWordRow = document.createElement('div');
    fsWordRow.className = 'vocab-fs__word-row';
    for (const ch of wordData.word) {
      if (ch === ' ') {
        const sp = document.createElement('span');
        sp.className = 'vocab-fs__word-space';
        fsWordRow.appendChild(sp);
        continue;
      }
      const span = document.createElement('span');
      span.className = 'vocab-fs__letter';
      span.textContent = ch;
      fsWordRow.appendChild(span);
    }

    const fsMeaning = document.createElement('p');
    fsMeaning.className = 'vocab-fs__meaning';
    fsMeaning.textContent = wordData.meaning;

    const fsExWrap = document.createElement('div');
    fsExWrap.className = 'vocab-fs__example-wrap';
    (wordData.exampleChunks || []).forEach(chunk => {
      const span = document.createElement('span');
      span.className = 'vocab-fs__chunk';
      span.textContent = chunk;
      fsExWrap.appendChild(span);
    });

    fsText.appendChild(fsPos);
    fsText.appendChild(fsWordRow);
    fsText.appendChild(fsMeaning);
    fsText.appendChild(fsExWrap);

    fs.appendChild(fsImg);
    fs.appendChild(fsBlur);
    fs.appendChild(fsText);

    card.appendChild(fs);

    return card;
  }

  window.VocabCard = { createCard };
})();