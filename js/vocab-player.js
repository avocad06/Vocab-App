/**
 * js/vocab-player.js
 *
 * Phase 1  카드: 스냅 이미지 + 빈칸  (1초)
 * Phase 2  fsImg: 카드 미디어 크기에서 viewport 전체로 확대 + 2초 대기
 * Phase 3  블러 등장 + 영단어 페이드인
 * Phase 4  영단어 음독 3회 (매 회 하이라이트)
 * Phase 5  영단어 → 뜻  (2초)
 * Phase 6  뜻 → 예문, 어절별 하이라이트 + 음독
 * Phase 7  풀스크린 축소 → 카드 복귀, 미디어 재생, 예문 전체 하이라이트 + 음독
 */
(function () {
  'use strict';

  const T = {
    SNAP_HOLD: 1000,
    EXPAND_DUR: 600,
    FS_HOLD: 2000,
    BLUR_DUR: 400,
    WORD_DUR: 200,
    READ_PAUSE: 200,
    AUDIO_FB: 800,
    MEANING_HOLD: 2000,
    FADE_DUR: 200,
    CHUNK_FB: 1200,
    COLLAPSE_DUR: 500,
    FINAL_HOLD: 2000,
    BETWEEN: 800,
  };

  const wait = ms => new Promise(r => setTimeout(r, ms));
  const raf2 = () => new Promise(r => requestAnimationFrame(() => requestAnimationFrame(r)));

  function getRefs(card) {
    return {
      mediaWrap: card.querySelector('.vocab-card__media-wrap'),
      mediaEl: card.querySelector('.vocab-card__media'),
      snap: card.querySelector('.vocab-card__snap'),
      letters: card.querySelectorAll('.vocab-card__letter'),
      blanks: card.querySelectorAll('.vocab-card__blank'),
      meaning: card.querySelector('.vocab-card__meaning'),
      exWrap: card.querySelector('.vocab-card__example-wrap'),
      chunks: card.querySelectorAll('.vocab-card__chunk'),
      fs: card.querySelector('.vocab-fs'),
      fsImg: card.querySelector('.vocab-fs__img'),
      fsBlur: card.querySelector('.vocab-fs__blur'),
      fsWordRow: card.querySelector('.vocab-fs__word-row'),
      fsLetters: card.querySelectorAll('.vocab-fs__letter'),
      fsMeaning: card.querySelector('.vocab-fs__meaning'),
      fsExWrap: card.querySelector('.vocab-fs__example-wrap'),
      fsChunks: card.querySelectorAll('.vocab-fs__chunk'),
    };
  }

  function reset(refs) {
    refs.snap.classList.add('is-visible');
    refs.letters.forEach(l => l.classList.remove('is-visible', 'is-highlight'));
    refs.blanks.forEach(b => b.classList.add('is-visible'));
    refs.meaning.classList.remove('is-visible');
    refs.exWrap.classList.remove('is-visible');
    refs.chunks.forEach(c => c.classList.remove('is-highlight'));
    refs.fs.classList.remove('is-active');
    refs.fsBlur.classList.remove('is-visible');
    refs.fsWordRow.classList.remove('is-visible');
    refs.fsMeaning.classList.remove('is-visible');
    refs.fsExWrap.classList.remove('is-visible');
    refs.fsLetters.forEach(l => l.classList.remove('is-highlight'));
    refs.fsChunks.forEach(c => c.classList.remove('is-highlight'));
    refs.fsImg.style.cssText = '';
    if (refs.mediaEl?.tagName === 'VIDEO') refs.mediaEl.pause();
  }

  function getFsScale(r) {
    const vw = window.innerWidth;
    const vh = window.innerHeight;
    return {
      sx: vw / r.width,
      sy: vh / r.height,
      dx: vw / 2 - (r.left + r.width / 2),
      dy: vh / 2 - (r.top + r.height / 2),
    };
  }

  async function expandFsImg(refs) {
    const r = refs.mediaWrap.getBoundingClientRect();
    const { sx, sy, dx, dy } = getFsScale(r);
    const s = refs.fsImg;

    s.style.cssText = `
      position:fixed;
      left:${r.left}px; top:${r.top}px;
      width:${r.width}px; height:${r.height}px;
      object-fit:cover;
      transform-origin:50% 50%;
      transform:translate(0,0) scale(1);
    `;

    refs.fs.classList.add('is-active');
    window._vocabSetFullscreen?.(true);   // 풀스크린 진입 → 버튼 차단
    await raf2();

    s.style.transition = `transform ${T.EXPAND_DUR}ms cubic-bezier(0.4,0,0.2,1)`;
    s.style.transform = `translate(${dx}px,${dy}px) scale(${sx},${sy})`;
    await wait(T.EXPAND_DUR);
    s.style.transition = '';
  }

  async function collapseFsImg(refs) {
    const r = refs.mediaWrap.getBoundingClientRect();
    const { sx, sy, dx, dy } = getFsScale(r);
    const s = refs.fsImg;

    s.style.transition = '';
    await raf2();

    s.style.transition = `transform ${T.COLLAPSE_DUR}ms cubic-bezier(0.4,0,0.2,1)`;
    s.style.transform = `translate(0,0) scale(1)`;
    await wait(T.COLLAPSE_DUR);

    refs.fs.classList.remove('is-active');
    window._vocabSetFullscreen?.(false);  // 풀스크린 해제 → 버튼 허용
    s.style.cssText = '';
  }

  async function phase1(refs, wordData) {
    AudioPlayer.preload(wordData.media.audio?.word);
    AudioPlayer.preload(wordData.media.audio?.example);
    await wait(T.SNAP_HOLD);
  }

  async function phase2(refs) {
    refs.snap.style.transition = 'none';
    refs.snap.classList.remove('is-visible');
    await expandFsImg(refs);
    await wait(T.FS_HOLD);
    refs.snap.style.transition = '';
  }

  async function phase3(refs) {
    refs.fsBlur.classList.add('is-visible');
    await wait(T.BLUR_DUR);
    refs.fsWordRow.classList.add('is-visible');
    await wait(T.WORD_DUR);
  }

  async function phase4(refs, wordData) {
    const src = wordData.media.audio?.word;
    for (let i = 0; i < 3; i++) {
      refs.fsLetters.forEach(l => l.classList.add('is-highlight'));
      await AudioPlayer.playOnce(src, T.AUDIO_FB);
      refs.fsLetters.forEach(l => l.classList.remove('is-highlight'));
      if (i < 2) await wait(T.READ_PAUSE);
    }
  }

  async function phase5(refs) {
    refs.fsWordRow.classList.remove('is-visible');
    await wait(T.FADE_DUR);
    refs.fsMeaning.classList.add('is-visible');
    await wait(T.MEANING_HOLD);
    refs.fsMeaning.classList.remove('is-visible');
    await wait(T.FADE_DUR);
  }

  async function phase6(refs, wordData) {
    refs.fsExWrap.classList.add('is-visible');
    await wait(T.FADE_DUR);

    const src = wordData.media.audio?.example;
    const chunks = refs.fsChunks;
    const n = chunks.length;

    const timings = await AudioPlayer.analyzeChunkTimings(src, n, {
      silenceThreshold: 0.015,
      minSilenceMs: 80,
    });

    const startTime = performance.now();
    const audioPromise = AudioPlayer.playOnce(src, T.CHUNK_FB);

    for (let i = 0; i < n; i++) {
      const elapsed = performance.now() - startTime;
      const delay = Math.max(0, timings[i] - elapsed);
      await wait(delay);
      if (i > 0) chunks[i - 1].classList.remove('is-highlight');
      chunks[i].classList.add('is-highlight');
    }

    await audioPromise;
    chunks.forEach(c => c.classList.remove('is-highlight'));
  }

  async function phase7(refs, wordData) {
    refs.fsBlur.classList.remove('is-visible');
    refs.fsWordRow.classList.remove('is-visible');
    refs.fsMeaning.classList.remove('is-visible');
    refs.fsExWrap.classList.remove('is-visible');
    await wait(T.FADE_DUR);

    await collapseFsImg(refs);

    refs.snap.classList.remove('is-visible');
    refs.blanks.forEach(b => b.classList.remove('is-visible'));
    refs.letters.forEach(l => l.classList.add('is-visible'));
    refs.meaning.classList.remove('is-visible');
    refs.exWrap.classList.add('is-visible');

    if (refs.mediaEl?.tagName === 'VIDEO') {
      refs.mediaEl.currentTime = 0;
      refs.mediaEl.play().catch(() => {
        refs.mediaEl.muted = true;
        refs.mediaEl.play().catch(console.warn);
      });
    }

    refs.chunks.forEach(c => c.classList.add('is-highlight'));
    const src = wordData.media.audio?.example;
    await AudioPlayer.playOnce(src, T.CHUNK_FB);
    refs.chunks.forEach(c => c.classList.remove('is-highlight'));

    await wait(T.FINAL_HOLD);
  }

  // 각 phase를 안전하게 실행 — 실패해도 시퀀스 계속 진행
  async function safeRun(label, fn) {
    try {
      await fn();
    } catch (err) {
      console.warn(`[VocabPlayer] ${label} 실패, 건너뜀:`, err);
    }
  }

  async function play(card, wordData) {
    const refs = getRefs(card);

    try {
      reset(refs);
    } catch (err) {
      console.warn('[VocabPlayer] reset 실패:', err);
    }

    await safeRun('phase1', () => phase1(refs, wordData));
    await safeRun('phase2', () => phase2(refs));
    await safeRun('phase3', () => phase3(refs));
    await safeRun('phase4', () => phase4(refs, wordData));
    await safeRun('phase5', () => phase5(refs));
    await safeRun('phase6', () => phase6(refs, wordData));
    await safeRun('phase7', () => phase7(refs, wordData));

    // 에러로 인해 풀스크린이 열린 채 끝났을 경우 강제 정리
    try {
      if (refs.fs?.classList.contains('is-active')) {
        refs.fs.classList.remove('is-active');
        refs.fsImg.style.cssText = '';
        refs.fsBlur.classList.remove('is-visible');
        refs.fsWordRow.classList.remove('is-visible');
        refs.fsMeaning.classList.remove('is-visible');
        refs.fsExWrap.classList.remove('is-visible');
        refs.fs.closest('.vocab-card')?.classList.remove('is-fs-open');
        window._vocabSetFullscreen?.(false);  // 버튼 차단 해제
      }
    } catch (e) { /* 무시 */ }
  }

  async function playAll(cards, wordDataList, opts = {}) {
    for (let i = 0; i < cards.length; i++) {
      if (opts.onCard) opts.onCard(i, cards[i]);
      try {
        await play(cards[i], wordDataList[i]);
      } catch (err) {
        console.warn(`[VocabPlayer] 카드 ${i} 전체 실패, 다음으로:`, err);
      }
      if (i < cards.length - 1) await wait(T.BETWEEN);
    }
  }

  window.VocabPlayer = { play, playAll };
})();