/**
 * js/vocab-player.js
 *
 * 7단계 시나리오
 *   Phase 1  스냅 이미지 표시 (2초)
 *   Phase 2  스냅 → viewport 전체 확대 (CSS transition)
 *   Phase 3  블러 등장 + 영단어 페이드인
 *   Phase 4  단어 음독 3회 (재생마다 하이라이트)
 *   Phase 5  영단어 → 뜻 전환 (1.5초)
 *   Phase 6  뜻 → 예문 전환, 어절별 음독 하이라이트
 *   Phase 7  블러 해제, 원래 카드로 복귀, 미디어 재생 + 예문 음독
 */
(function () {
  'use strict';

  /* ── 타이밍 상수 (ms) ─────────────────────────────────────── */
  const T = {
    SNAP_HOLD      : 2000,  // Phase 1: 스냅 정지 시간
    EXPAND_DURATION: 600,   // Phase 2: 확대 트랜지션 (CSS와 맞출 것)
    BLUR_FADE      : 400,   // Phase 3: 블러·단어 페이드인
    WORD_FADE      : 300,   // Phase 3: 단어 텍스트 페이드인
    BLINK_OFF      : 180,   // Phase 4: 깜빡임 사이 간격
    AUDIO_FALLBACK : 700,   // Phase 4·6: 오디오 없을 때 대체 대기
    MEANING_HOLD   : 1500,  // Phase 5: 뜻 표시 시간
    CHUNK_GAP      : 120,   // Phase 6: 어절 하이라이트 간격
    EXAMPLE_AUDIO_FALLBACK: 1200, // Phase 6: 예문 오디오 폴백
    PHASE7_HOLD    : 2000,  // Phase 7: 마지막 카드 유지 시간
    BETWEEN_CARDS  : 1000,  // 카드 간 쉬는 시간
  };

  const wait = ms => new Promise(r => setTimeout(r, ms));

  /* ── Phase 헬퍼 ──────────────────────────────────────────── */

  // Phase 1: 스냅 이미지 표시
  async function phase1(els) {
    // 오디오 미리 로드 (2초 여유 활용)
    AudioPlayer.preload(els.wordData.media.audio?.word);
    AudioPlayer.preload(els.wordData.media.audio?.example);
    await wait(T.SNAP_HOLD);
  }

  // Phase 2: 스냅 → viewport 전체 확대
  async function phase2(card) {
    card.classList.add('is-expanded');
    await wait(T.EXPAND_DURATION);
  }

  // Phase 3: 블러 등장 + 영단어 페이드인
  async function phase3(els) {
    els.blur.classList.add('is-visible');
    await wait(T.BLUR_FADE);
    els.wordWrap.classList.add('is-visible');
    await wait(T.WORD_FADE);
  }

  // Phase 4: 단어 음독 3회 + 하이라이트
  async function phase4(els) {
    const letters = els.wordRow.querySelectorAll('.vocab-card__letter');
    const src = els.wordData.media.audio?.word;

    for (let i = 0; i < 3; i++) {
      letters.forEach(l => l.classList.add('is-highlight'));

      await AudioPlayer.playOnce(src, T.AUDIO_FALLBACK);

      letters.forEach(l => l.classList.remove('is-highlight'));
      if (i < 2) await wait(T.BLINK_OFF);
    }
  }

  // Phase 5: 영단어 → 뜻 전환
  async function phase5(els) {
    els.wordWrap.classList.remove('is-visible');
    await wait(200);
    els.meaningWrap.classList.add('is-visible');
    await wait(T.MEANING_HOLD);
    els.meaningWrap.classList.remove('is-visible');
    await wait(200);
  }

  // Phase 6: 예문 어절별 하이라이트 + 예문 음독
  async function phase6(els) {
    const chunks = els.exampleWrap.querySelectorAll('.vocab-card__chunk');
    els.exampleWrap.classList.add('is-visible');

    const src = els.wordData.media.audio?.example;

    // 예문 오디오 재생 시작 (비동기, 기다리지 않음)
    const audioPromise = AudioPlayer.playOnce(src, T.EXAMPLE_AUDIO_FALLBACK);

    // 어절별 순차 하이라이트
    for (let i = 0; i < chunks.length; i++) {
      chunks[i].classList.add('is-highlight');
      // 어절당 표시 시간 = 전체 오디오 길이 / 어절 수 로 근사
      // 오디오 없을 때는 fallback 시간을 어절 수로 나눔
      const chunkDur = Math.round(T.EXAMPLE_AUDIO_FALLBACK / chunks.length);
      await wait(chunkDur + T.CHUNK_GAP);
      if (i < chunks.length - 1) chunks[i].classList.remove('is-highlight');
    }

    // 오디오 끝날 때까지 대기
    await audioPromise;
    chunks.forEach(c => c.classList.remove('is-highlight'));
  }

  // Phase 7: 블러 해제, 원래 카드로 복귀, 미디어 재생 + 예문 전체 하이라이트
  async function phase7(card, els) {
    // 예문은 남기고 블러·overlay 해제
    els.wordWrap.classList.remove('is-visible');
    els.meaningWrap.classList.remove('is-visible');

    // 블러 해제 + 카드 축소 복귀
    els.blur.classList.remove('is-visible');
    card.classList.remove('is-expanded');
    card.classList.add('is-returning');
    await wait(T.EXPAND_DURATION);
    card.classList.remove('is-returning');

    // 스냅 → 미디어 교체
    els.snap.classList.add('is-hidden');
    els.mediaEl.classList.remove('vocab-card__media-hidden');
    if (els.mediaEl.tagName === 'VIDEO') {
      els.mediaEl.play().catch(() => { els.mediaEl.muted = true; els.mediaEl.play(); });
    }

    // 예문 전체 하이라이트 + 예문 음독
    const chunks = els.exampleWrap.querySelectorAll('.vocab-card__chunk');
    chunks.forEach(c => c.classList.add('is-highlight'));

    const src = els.wordData.media.audio?.example;
    await AudioPlayer.playOnce(src, T.EXAMPLE_AUDIO_FALLBACK);

    chunks.forEach(c => c.classList.remove('is-highlight'));
    await wait(T.PHASE7_HOLD);
  }

  /* ── 메인 play ───────────────────────────────────────────── */
  async function play(card, wordData) {
    // DOM 참조 묶기
    const els = {
      wordData,
      snap       : card.querySelector('.vocab-card__snap'),
      mediaEl    : card.querySelector('.vocab-card__media, .vocab-card__media-hidden'),
      blur       : card.querySelector('.vocab-card__blur'),
      overlay    : card.querySelector('.vocab-card__overlay'),
      wordWrap   : card.querySelector('.vocab-card__word-wrap'),
      wordRow    : card.querySelector('.vocab-card__word-row'),
      meaningWrap: card.querySelector('.vocab-card__meaning-wrap'),
      exampleWrap: card.querySelector('.vocab-card__example-wrap'),
    };

    // 초기 상태 리셋
    [els.blur, els.wordWrap, els.meaningWrap, els.exampleWrap].forEach(el => {
      el?.classList.remove('is-visible');
    });
    card.classList.remove('is-expanded', 'is-returning');
    els.snap?.classList.remove('is-hidden');
    els.mediaEl?.classList.add('vocab-card__media-hidden');
    if (els.mediaEl?.tagName === 'VIDEO') els.mediaEl.pause();

    await phase1(els);
    await phase2(card);
    await phase3(els);
    await phase4(els);
    await phase5(els);
    await phase6(els);
    await phase7(card, els);
  }

  async function playAll(cards, wordDataList, opts = {}) {
    const pause = opts.pauseBetween ?? T.BETWEEN_CARDS;
    for (let i = 0; i < cards.length; i++) {
      if (opts.onCard) opts.onCard(i, cards[i]);
      await play(cards[i], wordDataList[i]);
      if (i < cards.length - 1) await wait(pause);
    }
  }

  window.VocabPlayer = { play, playAll };
})();
