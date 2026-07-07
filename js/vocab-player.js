/**
 * js/vocab-player.js
 *
 * 시나리오:
 *  Phase 1  카드: 스냅 + 빈칸 (1초)
 *  Phase 2  풀스크린 확대 (영상/gif) + 2초 대기
 *  Phase 3  블러 + 영단어 등장
 *  Phase 4  영단어 음독 3회 + 하이라이트
 *  Phase 5  영단어 → 뜻 (2초)
 *  Phase 6  뜻 → 예문, 어절별 하이라이트 + 음독
 *  Phase 7  카드 복귀, 미디어 재생, 예문 3회 반복 음독
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
    REPEAT_GAP: 400,   // 예문 반복 사이 간격
    FINAL_HOLD: 2000,
    BETWEEN: 800,
  };

  // ── 취소 토큰 ────────────────────────────────────────────────
  let _token = 0;
  const stopSequence = () => { _token++; };
  const isCancelled = (t) => t !== _token;

  // ── 취소 전용 에러 ───────────────────────────────────────────
  class CancelError extends Error { }

  // ── 헬퍼 ────────────────────────────────────────────────────
  const raf2 = () => new Promise(r => requestAnimationFrame(() => requestAnimationFrame(r)));

  // 취소 가능한 wait — 취소 시 CancelError throw
  function waitOrCancel(ms, t) {
    return new Promise((resolve, reject) => {
      if (isCancelled(t)) { reject(new CancelError()); return; }
      const id = setTimeout(resolve, ms);
      const check = setInterval(() => {
        if (isCancelled(t)) {
          clearTimeout(id);
          clearInterval(check);
          reject(new CancelError());
        }
      }, 80);
      setTimeout(() => clearInterval(check), ms + 100);
    });
  }

  // 어절별 하이라이트 + 음독 (phase6, phase7 공용)
  async function readWithHighlight(chunks, src, t) {
    const n = chunks.length;
    const timings = await AudioPlayer.analyzeChunkTimings(src, n, {
      silenceThreshold: 0.015,
      minSilenceMs: 80,
    });
    if (isCancelled(t)) throw new CancelError();

    const start = performance.now();
    const audioPromise = AudioPlayer.playOnce(src, T.CHUNK_FB);

    // 재생 속도를 늦추면 실제 재생 시간이 늘어나므로 하이라이트 타이밍도 스케일
    const rate = (window.MEDIA_CONFIG && window.MEDIA_CONFIG.audio && window.MEDIA_CONFIG.audio.playbackRate) || 1;

    for (let i = 0; i < n; i++) {
      if (isCancelled(t)) break;
      const delay = Math.max(0, timings[i] / rate - (performance.now() - start));
      await waitOrCancel(delay, t);
      if (i > 0) chunks[i - 1].classList.remove('is-highlight');
      chunks[i].classList.add('is-highlight');
    }

    await audioPromise;
    chunks.forEach(c => c.classList.remove('is-highlight'));
  }

  // ── DOM refs ─────────────────────────────────────────────────
  function getRefs(card) {
    return {
      mediaWrap: card.querySelector('.vocab-card__media-wrap'),
      mediaEl: card.querySelector('.vocab-card__media'),
      snap: card.querySelector('.vocab-card__snap'),
      wordRow: card.querySelector('.vocab-card__word-row'),
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

  // ── 초기화 ───────────────────────────────────────────────────
  function reset(refs) {
    refs.snap.classList.add('is-visible');

    // wordRow를 빈칸 구조로 복원 (phase7에서 span 하나로 교체됐을 수 있음)
    if (refs.wordRow && refs._word) {
      const fresh = VocabCard.buildWordRow(refs._word);
      refs.wordRow.innerHTML = '';
      fresh.childNodes.forEach(n => refs.wordRow.appendChild(n.cloneNode(true)));
      // refs 재참조
      refs.letters = refs.wordRow.querySelectorAll('.vocab-card__letter');
      refs.blanks = refs.wordRow.querySelectorAll('.vocab-card__blank');
    }

    refs.letters.forEach(l => l.classList.remove('is-visible', 'is-highlight'));
    refs.blanks.forEach(b => b.classList.add('is-visible'));
    refs.meaning.classList.remove('is-visible');
    refs.exWrap.classList.remove('is-visible');
    refs.chunks.forEach(c => c.classList.remove('is-highlight', 'is-final'));
    refs.fs.classList.remove('is-active');
    refs.fsBlur.classList.remove('is-visible');
    refs.fsWordRow.classList.remove('is-visible');
    refs.fsMeaning.classList.remove('is-visible');
    refs.fsExWrap.classList.remove('is-visible');
    refs.fsLetters.forEach(l => l.classList.remove('is-highlight'));
    refs.fsChunks.forEach(c => c.classList.remove('is-highlight'));
    refs.fsImg.style.cssText = '';
    if (refs.mediaEl?.tagName === 'VIDEO') refs.mediaEl.pause();
    if (refs.fsImg?.tagName === 'VIDEO') refs.fsImg.pause();
  }

  // 풀스크린 강제 정리
  function cleanupFs(refs) {
    try {
      refs.fs.classList.remove('is-active');
      refs.fsImg.style.cssText = '';
      refs.fsImg.style.transition = '';
      if (refs.fsImg?.tagName === 'VIDEO') refs.fsImg.pause();
      [refs.fsBlur, refs.fsWordRow, refs.fsMeaning, refs.fsExWrap]
        .forEach(el => el.classList.remove('is-visible'));
      refs.fsLetters.forEach(l => l.classList.remove('is-highlight'));

      refs.fsChunks.forEach(c => c.classList.remove('is-highlight'));
      refs.fs.closest('.vocab-card')?.classList.remove('is-fs-open');
      window._vocabSetFullscreen?.(false);
    } catch (e) { }
  }

  // ── 메인 play ────────────────────────────────────────────────
  async function play(card, wordData) {
    const t = _token;
    const refs = getRefs(card);
    refs._word = wordData.word;   // reset() 시 wordRow 복원에 사용
    const w = (ms) => waitOrCancel(ms, t);
    const ok = () => { if (isCancelled(t)) throw new CancelError(); };

    reset(refs);

    // 오디오 미리 로드
    AudioPlayer.preload(wordData.media.audio?.word);
    AudioPlayer.preload(wordData.media.audio?.example);

    try {

      // ── Phase 1: 스냅 + 빈칸 ──────────────────────────────
      await w(T.SNAP_HOLD);

      // ── Phase 2: 풀스크린 확대 ────────────────────────────
      refs.snap.style.transition = 'none';
      refs.snap.classList.remove('is-visible');

      const r = refs.mediaWrap.getBoundingClientRect();
      const vw = window.innerWidth, vh = window.innerHeight;
      const sx = vw / r.width, sy = vh / r.height;
      const dx = vw / 2 - (r.left + r.width / 2);
      const dy = vh / 2 - (r.top + r.height / 2);

      const fsm = refs.fsImg;
      fsm.style.cssText = `
        position:fixed;
        left:${r.left}px; top:${r.top}px;
        width:${r.width}px; height:${r.height}px;
        object-fit:cover; object-position:center;
        transform-origin:50% 50%;
        transform:translate(0,0) scale(1);
      `;

      refs.fs.classList.add('is-active');
      window._vocabSetFullscreen?.(true);

      // 확대 애니메이션 동안 영상 재생
      if (fsm.tagName === 'VIDEO') {
        fsm.currentTime = 0;
        fsm.play().catch(() => { fsm.muted = true; fsm.play().catch(() => { }); });
      }

      await raf2(); ok();
      fsm.style.transition = `transform ${T.EXPAND_DUR}ms cubic-bezier(0.4,0,0.2,1)`;
      fsm.style.transform = `translate(${dx}px,${dy}px) scale(${sx},${sy})`;
      await w(T.EXPAND_DUR);
      fsm.style.transition = '';
      refs.snap.style.transition = '';

      await w(T.FS_HOLD);

      // ── Phase 3: 블러 + 영단어 ────────────────────────────
      // 블러 등장 시 영상 정지 (움직임 불필요)
      if (fsm.tagName === 'VIDEO') fsm.pause();
      refs.fsBlur.classList.add('is-visible');
      await w(T.BLUR_DUR);
      refs.fsWordRow.classList.add('is-visible');
      await w(T.WORD_DUR);

      // ── Phase 4: 음독 3회 + 하이라이트 ───────────────────
      const wordSrc = wordData.media.audio?.word;
      for (let i = 0; i < 3; i++) {
        ok();
        refs.fsLetters.forEach(l => l.classList.add('is-highlight'));
        await AudioPlayer.playOnce(wordSrc, T.AUDIO_FB);
        refs.fsLetters.forEach(l => l.classList.remove('is-highlight'));

        if (i < 2) await w(T.READ_PAUSE);
      }

      // ── Phase 5: 영단어 → 뜻 ──────────────────────────────
      refs.fsWordRow.classList.remove('is-visible');
      await w(T.FADE_DUR);
      refs.fsMeaning.classList.add('is-visible');
      await w(T.MEANING_HOLD);
      refs.fsMeaning.classList.remove('is-visible');
      await w(T.FADE_DUR);

      // ── Phase 6: 예문 어절별 하이라이트 + 음독 ───────────
      refs.fsExWrap.classList.add('is-visible');
      await w(T.FADE_DUR);
      await readWithHighlight(refs.fsChunks, wordData.media.audio?.example, t);

      // ── Phase 7: 카드 복귀 ────────────────────────────────
      [refs.fsBlur, refs.fsWordRow, refs.fsMeaning, refs.fsExWrap]
        .forEach(el => el.classList.remove('is-visible'));
      await w(T.FADE_DUR);

      // 풀스크린 축소
      ok();
      await raf2();
      fsm.style.transition = `transform ${T.COLLAPSE_DUR}ms cubic-bezier(0.4,0,0.2,1)`;
      fsm.style.transform = `translate(0,0) scale(1)`;
      await w(T.COLLAPSE_DUR);
      refs.fs.classList.remove('is-active');
      window._vocabSetFullscreen?.(false);
      if (fsm.tagName === 'VIDEO') fsm.pause();
      fsm.style.cssText = '';

      // 카드 상태 복귀
      refs.snap.classList.remove('is-visible');
      // 빈칸 → 공개: span 하나로 교체 (커서 블록 시 한 단어 선택)
      if (refs.wordRow) {
        refs.wordRow.innerHTML = '';
        const span = document.createElement('span');
        span.className = 'vocab-card__word-revealed';
        span.textContent = wordData.word;
        refs.wordRow.appendChild(span);
      }
      refs.meaning.classList.remove('is-visible');
      refs.exWrap.classList.add('is-visible');

      // 카드 미디어 재생
      if (refs.mediaEl?.tagName === 'VIDEO') {
        refs.mediaEl.currentTime = 0;
        refs.mediaEl.play().catch(() => {
          refs.mediaEl.muted = true;
          refs.mediaEl.play().catch(() => { });
        });
      }

      // 예문 반복 음독
      const exSrc = wordData.media.audio?.example;

      // 1회: 어절별 하이라이트
      ok();
      await readWithHighlight(refs.chunks, exSrc, t);
      await w(T.REPEAT_GAP);

      // 2회(마지막): 전체 굵은 하이라이트 + 음독 후 유지
      ok();
      refs.chunks.forEach(c => c.classList.add('is-final'));
      await AudioPlayer.playOnce(exSrc, T.CHUNK_FB);

      await w(T.FINAL_HOLD);

    } catch (e) {
      if (!(e instanceof CancelError)) console.warn('[VocabPlayer]', e);
    } finally {
      if (refs.fs.classList.contains('is-active')) cleanupFs(refs);
    }
  }

  async function playAll(cards, wordDataList, opts = {}) {
    for (let i = 0; i < cards.length; i++) {
      const t = _token;
      if (opts.onCard) opts.onCard(i, cards[i]);
      await play(cards[i], wordDataList[i]);
      if (isCancelled(t) || i === cards.length - 1) break;
      await waitOrCancel(T.BETWEEN, _token).catch(() => { });
    }
  }

  window.VocabPlayer = { play, playAll, stopSequence };
})();