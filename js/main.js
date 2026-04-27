/**
 * js/main.js
 */
(function () {
  'use strict';

  const root = document.getElementById('vocab-root');
  const startBtn = document.getElementById('vocab-start');
  const startWrap = document.getElementById('vocab-start-wrap');
  const layout = document.getElementById('vocab-layout');
  const btnPrev = document.getElementById('btn-prev');
  const btnNext = document.getElementById('btn-next');
  const restartWrap = document.getElementById('vocab-restart-wrap');
  const btnRestart = document.getElementById('btn-restart');

  // 카드 DOM 생성
  const cards = VOCAB_WORDS.map(wordData => {
    const card = VocabCard.createCard(wordData);
    root.appendChild(card);
    return card;
  });

  let currentIndex = 0;
  let isFullscreen = false;  // 풀스크린 중 여부 — 이때만 버튼 완전 차단

  // 풀스크린 상태 변경 (vocab-player.js 에서 호출)
  function setFullscreen(active) {
    isFullscreen = active;
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
    updateButtons(index);
  }

  // 카드 재생 — 에러가 나도 isFullscreen 반드시 해제
  async function playCard(index) {
    AudioPlayer.stopAll();       // 오디오 즉시 중단
    VocabPlayer.stopSequence();  // 시퀀스(wait/phase) 즉시 중단
    currentIndex = index;
    showCard(index);          // 카드 전환 즉시 버튼 상태 반영
    try {
      await VocabPlayer.play(cards[index], VOCAB_WORDS[index]);
    } catch (err) {
      console.warn('[main] playCard 실패:', err);
    } finally {
      isFullscreen = false;
    }
  }

  // 이전 버튼 — 풀스크린 중에만 차단
  // 첫 번째 카드에서 누르면 시작 페이지로 복귀 (새로고침)
  btnPrev.addEventListener('click', () => {
    if (isFullscreen) return;
    if (currentIndex === 0) {
      location.reload();
      return;
    }
    playCard(currentIndex - 1);
  });

  // 다음 버튼 — 풀스크린 중에만 차단
  btnNext.addEventListener('click', () => {
    if (isFullscreen || currentIndex === cards.length - 1) return;
    playCard(currentIndex + 1);
  });

  // 처음으로 버튼 — 풀스크린 중에만 차단
  btnRestart.addEventListener('click', () => {
    if (isFullscreen) return;
    playCard(0);
  });

  // vocab-player.js 가 풀스크린 상태를 알릴 수 있도록 전역 노출
  window._vocabSetFullscreen = setFullscreen;

  // 시작
  function startPlay() {
    startWrap.style.display = 'none';
    layout.style.visibility = 'visible';
    playCard(0);
  }

  if (startBtn) {
    startBtn.addEventListener('click', startPlay, { once: true });
  } else {
    startPlay();
  }
})();