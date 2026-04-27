/**
 * js/vocab-player.js
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

  // ── 취소 토큰 ─────────────────────────────────────────────────
  // stopSequence() 호출 시 _token 값이 바뀜
  // 각 async 작업은 자신이 시작할 때 받은 token과 현재 token을 비교해
  // 다르면 즉시 중단
  let _token = 0;

  function stopSequence() {
    _token++;  // 토큰 변경 → 이전 시퀀스의 모든 isCancelled() = true
  }

  function isCancelled(token) {
    return token !== _token;
  }

  // 취소 가능한 wait
  function wait(ms, token) {
    return new Promise(resolve => {
      if (isCancelled(token)) { resolve(); return; }
      const id = setTimeout(resolve, ms);
      // 취소 감지를 위한 폴링 (100ms 간격)
      const check = setInterval(() => {
        if (isCancelled(token)) { clearTimeout(id); clearInterval(check); resolve(); }
      }, 100);
      setTimeout(() => clearInterval(check), ms + 200);
    });
  }

  const raf2 = () => new Promise(r => requestAnimationFrame(() => requestAnimationFrame(r)));

  // ── DOM refs ──────────────────────────────────────────────────
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

  // ── 초기화 ────────────────────────────────────────────────────
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

  // 풀스크린 강제 정리 (중단 시 호출)
  function cleanupFs(refs) {
    try {
      refs.fs.classList.remove('is-active');
      refs.fsImg.style.cssText = '';
      refs.fsImg.style.transition = '';
      refs.fsBlur.classList.remove('is-visible');
      refs.fsWordRow.classList.remove('is-visible');
      refs.fsMeaning.classList.remove('is-visible');
      refs.fsExWrap.classList.remove('is-visible');
      refs.fsLetters.forEach(l => l.classList.remove('is-highlight'));
      refs.fsChunks.forEach(c => c.classList.remove('is-highlight'));
      refs.fs.closest('.vocab-card')?.classList.remove('is-fs-open');
      window._vocabSetFullscreen?.(false);
    } catch (e) { /* 무시 */ }
  }

  // ── 풀스크린 확대/축소 ─────────────────────────────────────────
  function getFsScale(r) {
    const vw = window.innerWidth, vh = window.innerHeight;
    return {
      sx: vw / r.width,
      sy: vh / r.height,
      dx: vw / 2 - (r.left + r.width / 2),
      dy: vh / 2 - (r.top + r.height / 2),
    };
  }

  async function expandFsImg(refs, token) {
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
    window._vocabSetFullscreen?.(true);
    await raf2();
    if (isCancelled(token)) return;

    s.style.transition = `transform ${T.EXPAND_DUR}ms cubic-bezier(0.4,0,0.2,1)`;
    s.style.transform = `translate(${dx}px,${dy}px) scale(${sx},${sy})`;
    await wait(T.EXPAND_DUR, token);
    s.style.transition = '';
  }

  async function collapseFsImg(refs, token) {
    const s = refs.fsImg;
    s.style.transition = '';
    await raf2();
    if (isCancelled(token)) return;

    s.style.transition = `transform ${T.COLLAPSE_DUR}ms cubic-bezier(0.4,0,0.2,1)`;
    s.style.transform = `translate(0,0) scale(1)`;
    await wait(T.COLLAPSE_DUR, token);

    refs.fs.classList.remove('is-active');
    window._vocabSetFullscreen?.(false);
    s.style.cssText = '';
  }

  // ── Phase 함수들 ───────────────────────────────────────────────
  async function phase1(refs, wordData, token) {
    AudioPlayer.preload(wordData.media.audio?.word);
    AudioPlayer.preload(wordData.media.audio?.example);
    await wait(T.SNAP_HOLD, token);
  }

  async function phase2(refs, token) {
    refs.snap.style.transition = 'none';
    refs.snap.classList.remove('is-visible');
    await expandFsImg(refs, token);
    if (isCancelled(token)) return;
    await wait(T.FS_HOLD, token);
    refs.snap.style.transition = '';
  }

  async function phase3(refs, token) {
    refs.fsBlur.classList.add('is-visible');
    await wait(T.BLUR_DUR, token);
    if (isCancelled(token)) return;
    refs.fsWordRow.classList.add('is-visible');
    await wait(T.WORD_DUR, token);
  }

  async function phase4(refs, wordData, token) {
    const src = wordData.media.audio?.word;
    for (let i = 0; i < 3; i++) {
      if (isCancelled(token)) return;
      refs.fsLetters.forEach(l => l.classList.add('is-highlight'));
      await AudioPlayer.playOnce(src, T.AUDIO_FB);
      refs.fsLetters.forEach(l => l.classList.remove('is-highlight'));
      if (i < 2) await wait(T.READ_PAUSE, token);
    }
  }

  async function phase5(refs, token) {
    refs.fsWordRow.classList.remove('is-visible');
    await wait(T.FADE_DUR, token);
    if (isCancelled(token)) return;
    refs.fsMeaning.classList.add('is-visible');
    await wait(T.MEANING_HOLD, token);
    if (isCancelled(token)) return;
    refs.fsMeaning.classList.remove('is-visible');
    await wait(T.FADE_DUR, token);
  }

  async function phase6(refs, wordData, token) {
    refs.fsExWrap.classList.add('is-visible');
    await wait(T.FADE_DUR, token);
    if (isCancelled(token)) return;

    const src = wordData.media.audio?.example;
    const chunks = refs.fsChunks;
    const n = chunks.length;

    const timings = await AudioPlayer.analyzeChunkTimings(src, n, {
      silenceThreshold: 0.015,
      minSilenceMs: 80,
    });
    if (isCancelled(token)) return;

    const startTime = performance.now();
    const audioPromise = AudioPlayer.playOnce(src, T.CHUNK_FB);

    for (let i = 0; i < n; i++) {
      if (isCancelled(token)) break;
      const elapsed = performance.now() - startTime;
      const delay = Math.max(0, timings[i] - elapsed);
      await wait(delay, token);
      if (isCancelled(token)) break;
      if (i > 0) chunks[i - 1].classList.remove('is-highlight');
      chunks[i].classList.add('is-highlight');
    }

    await audioPromise;
    chunks.forEach(c => c.classList.remove('is-highlight'));
  }

  async function phase7(refs, wordData, token) {
    refs.fsBlur.classList.remove('is-visible');
    refs.fsWordRow.classList.remove('is-visible');
    refs.fsMeaning.classList.remove('is-visible');
    refs.fsExWrap.classList.remove('is-visible');
    await wait(T.FADE_DUR, token);
    if (isCancelled(token)) return;

    await collapseFsImg(refs, token);
    if (isCancelled(token)) return;

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

    if (isCancelled(token)) return;
    refs.chunks.forEach(c => c.classList.add('is-highlight'));
    const src = wordData.media.audio?.example;
    await AudioPlayer.playOnce(src, T.CHUNK_FB);
    refs.chunks.forEach(c => c.classList.remove('is-highlight'));

    await wait(T.FINAL_HOLD, token);
  }

  // ── 메인 play ─────────────────────────────────────────────────
  async function play(card, wordData) {
    const token = _token;  // 이 시퀀스의 토큰 확보
    const refs = getRefs(card);

    try { reset(refs); } catch (e) { }

    const phases = [
      () => phase1(refs, wordData, token),
      () => phase2(refs, token),
      () => phase3(refs, token),
      () => phase4(refs, wordData, token),
      () => phase5(refs, token),
      () => phase6(refs, wordData, token),
      () => phase7(refs, wordData, token),
    ];

    for (const [i, phaseFn] of phases.entries()) {
      if (isCancelled(token)) break;
      try {
        await phaseFn();
      } catch (err) {
        console.warn(`[VocabPlayer] phase${i + 1} 실패:`, err);
      }
    }

    // 취소됐거나 에러로 풀스크린이 남아있으면 강제 정리
    if (isCancelled(token) || refs.fs?.classList.contains('is-active')) {
      cleanupFs(refs);
    }
  }

  async function playAll(cards, wordDataList, opts = {}) {
    for (let i = 0; i < cards.length; i++) {
      const token = _token;
      if (opts.onCard) opts.onCard(i, cards[i]);
      try {
        await play(cards[i], wordDataList[i]);
      } catch (err) {
        console.warn(`[VocabPlayer] 카드 ${i} 실패:`, err);
      }
      if (isCancelled(token)) break;
      if (i < cards.length - 1) await wait(T.BETWEEN, token);
    }
  }

  window.VocabPlayer = { play, playAll, stopSequence };
})();