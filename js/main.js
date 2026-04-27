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
  let isPlaying = false;

  // 현재 카드 표시 + 버튼 상태 업데이트
  function showCard(index) {
    cards.forEach((c, i) => c.classList.toggle('is-active', i === index));

    const isLast = index === cards.length - 1;

    // 이전 버튼: 첫 번째 카드에선 숨김
    btnPrev.style.visibility = index === 0 ? 'hidden' : 'visible';

    // 다음 버튼: 마지막 카드에선 숨김
    btnNext.style.visibility = isLast ? 'hidden' : 'visible';

    // 처음으로 버튼: 마지막 카드에서만 표시
    restartWrap.style.display = isLast ? 'flex' : 'none';
  }

  // 카드 재생
  async function playCard(index) {
    if (isPlaying) return;
    isPlaying = true;
    currentIndex = index;
    showCard(index);
    await VocabPlayer.play(cards[index], VOCAB_WORDS[index]);
    isPlaying = false;
  }

  // 이전 버튼
  btnPrev.addEventListener('click', () => {
    if (isPlaying || currentIndex === 0) return;
    playCard(currentIndex - 1);
  });

  // 다음 버튼
  btnNext.addEventListener('click', () => {
    if (isPlaying || currentIndex === cards.length - 1) return;
    playCard(currentIndex + 1);
  });

  // 처음으로 버튼
  btnRestart.addEventListener('click', () => {
    if (isPlaying) return;
    playCard(0);
  });

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