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

  // 현재 카드 표시 + 버튼 상태 업데이트
  function showCard(index) {
    cards.forEach((c, i) => c.classList.toggle('is-active', i === index));

    const isLast = index === cards.length - 1;

    // 이전 버튼: 항상 표시 (첫 번째 카드에서 누르면 시작 페이지로)
    btnPrev.style.visibility = 'visible';

    // 다음 버튼: 마지막 카드에선 숨김
    btnNext.style.visibility = isLast ? 'hidden' : 'visible';

    // 처음으로 버튼: 마지막 카드에서만 표시
    restartWrap.style.display = isLast ? 'flex' : 'none';
  }

  // 카드 재생 — 에러가 나도 isFullscreen 반드시 해제
  async function playCard(index) {
    currentIndex = index;
    showCard(index);
    try {
      await VocabPlayer.play(cards[index], VOCAB_WORDS[index]);
    } catch (err) {
      console.warn('[main] playCard 실패:', err);
    } finally {
      isFullscreen = false;  // 에러로 풀스크린이 남아있어도 강제 해제
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