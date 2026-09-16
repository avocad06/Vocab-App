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
    FINAL_HOLD: 300,
    BETWEEN: 800,
    PLAY_WAIT: 2500, // 풀스크린 영상 재생 시작 최대 대기
  };

  // ── 취소 토큰 ────────────────────────────────────────────────
  let _token = 0;
  const stopSequence = () => { _token++; };
  const isCancelled = (t) => t !== _token;

  // ── 취소 전용 에러 ───────────────────────────────────────────
  class CancelError extends Error { }

  // ── 헬퍼 ────────────────────────────────────────────────────
  const raf2 = () => new Promise(r => requestAnimationFrame(() => requestAnimationFrame(r)));

  // ── 영상 재생/정지 (레이스 방지) ─────────────────────────────
  // play()가 pending(로딩 중)인 상태에서 pause()가 호출되면
  // play()의 catch 재시도가 정지 이후에 영상을 되살릴 수 있다.
  // '재생 의도' 플래그로 pause 이후의 재시도를 차단한다.
  function safePlay(v) {
    if (!v || v.tagName !== 'VIDEO') return;
    v._wantPlay = true;
    v.play().catch(() => {
      if (!v._wantPlay) return;   // 이미 pause됨 — 재시도 금지
      v.muted = true;
      v.play().catch(() => { });
    });
  }
  function safePause(v) {
    if (!v || v.tagName !== 'VIDEO') return;
    v._wantPlay = false;
    v.pause();
  }

  // 영상 미리 로딩 시작 (스냅 단계에서 호출 → 확대 시점엔 준비 완료)
  function warmVideo(v) {
    if (!v || v.tagName !== 'VIDEO' || v.readyState >= 2) return;
    try {
      v.preload = 'auto';
      v.load();
    } catch (e) { }
  }

  // 실제 재생이 시작될 때까지 대기 (최대 maxMs)
  // - 이미 재생 중이거나 영상이 아니면 즉시 통과
  // - 로드 에러(영상 없음)면 즉시 통과 → 대기 시간 낭비 없음
  function waitVideoPlaying(v, t, maxMs) {
    if (!v || v.tagName !== 'VIDEO') return Promise.resolve();
    if (v.error || (!v.paused && v.readyState >= 2)) return Promise.resolve();
    return new Promise(resolve => {
      let done = false;
      const finish = () => {
        if (done) return;
        done = true;
        v.removeEventListener('playing', finish);
        v.removeEventListener('error', finish);
        clearInterval(iv);
        clearTimeout(to);
        resolve();
      };
      const iv = setInterval(() => { if (isCancelled(t)) finish(); }, 100);
      const to = setTimeout(finish, maxMs);
      v.addEventListener('playing', finish);
      v.addEventListener('error', finish);
    });
  }

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
      silenceThreshold: 0.030,  // ★ d·b 등 폐쇄음 클로저 구간도 무음으로 인식
      minSilenceMs: 10,         // ★ 10ms(1프레임) — 짧은 자음 폐쇄도 경계로 감지
    });
    if (isCancelled(t)) throw new CancelError();

    // 재생 속도를 늦추면 실제 재생 시간이 늘어나므로 하이라이트 타이밍도 스케일
    const rate = (window.MEDIA_CONFIG && window.MEDIA_CONFIG.audio && window.MEDIA_CONFIG.audio.playbackRate) || 1;

    // ★ Fix: playOnce가 반환하는 startedAt Promise를 기준점으로 사용
    //   'playing' 이벤트 발생 시각을 측정하므로 시스템마다 다른 버퍼 딜레이를
    //   자동으로 보정함 (LEAD_MS 고정값 방식보다 정확)
    const audioPromise = AudioPlayer.playOnce(src, T.CHUNK_FB);
    const playStart = await audioPromise.startedAt;  // 실제 재생 시작 시각 (performance.now() 기준)

    // ★ 스피커 출력 버퍼 지연(20~100ms) 보정: 하이라이트를 검출 타이밍보다 약간 앞당김
    // ★ 단어별 WORD_PRE 테이블로 개별 튜닝, 미등록 단어는 PRE_MAX→PRE_MIN 선형 보간
    const PRE_MAX = 160, PRE_MIN = 0;

    // ★ 단어별 per-chunk pre-advance (ms) 테이블
    //   양수: 하이라이트를 검출 시점보다 앞당김 (빠르게)
    //   음수: 검출 시점보다 늦춤 (느리게)
    //   src URL의 키워드로 매칭
    const WORD_PRE = {
      // decide: [He=160, decides=120, to=-120, drink=40, milk=0]
      'decide_sentence':     [160, 120, -120, 40, 0],
      // investigate: [The=160, police=260, officer=300, investigates=80, the=-360, crime=-100]
      'investigate_sentence': [160, 260, 300, 80, -360, -100],
      // invite: [My=160, sister=133, invites=-80, her=-100, friends=-220, to=-200, party=60]
      'invite_sentence':     [160, 133, -80, -100, -220, -200, 60],
      // prefer: [I=160, prefer=120, apples=60, over=100, bananas=-80]
      'prefer_sentence':     [160, 120, 60, 20, 100],
      // should: [He=160, should=280, apologize=-80, for=-100, his=60, behavior=60]
      'should_sentence':     [160, 280, 240, -100, 60, 120],
      // rip: [She=160, rips=200, the=-80, paper=-100, in=32, half=0]
      'rip_sentence':        [160, 200, -80, 20, -80, 0],
      // call: [Mom=160, calls=-80, my=-80, name=-80]
      'call_sentence':       [160, -80, -160, 0],
      // touch: [She=160, touches=107, the=-80, cat=80]
      'touch_sentence':      [160, 107, -80, 80],
      // have: [I=160, have=107, two=53, dogs=80]
      'have_sentence':       [160, 107, 53, 140],
      // know: [I=160, know=128, how=-80, to=-100, cook=32, noodle=0]
      'know_sentence':       [160, 128, -80, -100, 32, 0],
      // teach: [My=160, sister=120, teaches=-80, me=100, math=80]
      'teach_sentence':      [160, 120, -80, -80, 80],
    };

    // src URL에서 단어 키워드 추출하여 매칭
    const wordKey = src && Object.keys(WORD_PRE).find(k => src.includes(k));
    const wordPre = wordKey ? WORD_PRE[wordKey] : null;

    for (let i = 0; i < n; i++) {
      if (isCancelled(t)) break;
      const preMs = (wordPre && wordPre[i] !== undefined)
        ? wordPre[i]
        : (n > 1 ? Math.round(PRE_MAX - (PRE_MAX - PRE_MIN) * i / (n - 1)) : PRE_MAX);
      const targetMs = Math.max(0, timings[i] - preMs);
      const delay = Math.max(0, targetMs / rate - (performance.now() - playStart));
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
    safePause(refs.mediaEl);
    safePause(refs.fsImg);
  }

  // 풀스크린 강제 정리
  function cleanupFs(refs) {
    try {
      refs.fs.classList.remove('is-active');
      refs.fsImg.style.cssText = '';
      refs.fsImg.style.transition = '';
      safePause(refs.fsImg);
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
      // 스냅을 보여주는 동안 풀스크린 영상을 '숨겨진 채로' 미리 재생 시작
      // → 확대가 시작되는 첫 순간부터 이미 움직이고 있게 한다
      warmVideo(refs.fsImg);
      warmVideo(refs.mediaEl);
      if (refs.fsImg?.tagName === 'VIDEO') {
        try { if (refs.fsImg.readyState >= 1) refs.fsImg.currentTime = 0; } catch (e) { }
        safePlay(refs.fsImg);
      }
      await Promise.all([
        w(T.SNAP_HOLD),
        waitVideoPlaying(refs.fsImg, t, T.PLAY_WAIT),
      ]);
      ok();

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

      await raf2(); ok();
      fsm.style.transition = `transform ${T.EXPAND_DUR}ms cubic-bezier(0.4,0,0.2,1)`;
      fsm.style.transform = `translate(${dx}px,${dy}px) scale(${sx},${sy})`;
      await w(T.EXPAND_DUR);
      fsm.style.transition = '';
      refs.snap.style.transition = '';

      await w(T.FS_HOLD);

      // ── Phase 3: 블러 + 영단어 ────────────────────────────
      // 블러 등장 시 영상 정지 (움직임 불필요)
      safePause(fsm);
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
      safePause(fsm);
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
      refs.meaning.classList.add('is-visible');
      refs.exWrap.classList.add('is-visible');

      // 카드 미디어 재생
      if (refs.mediaEl?.tagName === 'VIDEO') {
        refs.mediaEl.currentTime = 0;
        safePlay(refs.mediaEl);
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

  window.VocabPlayer = { play, playAll, stopSequence, safePause };
})();
