/**
 * js/main.js
 *
 * 브라우저 Autoplay Policy 대응:
 * 사용자가 클릭하기 전까지 audio.play() 가 차단됨.
 * → 시작 버튼을 클릭한 후 playAll() 실행.
 */
(function () {
  'use strict';

  const root = document.getElementById('vocab-root');
  const startBtn = document.getElementById('vocab-start');

  // 카드 DOM 미리 생성 (버튼 클릭 전에 준비)
  const cards = VOCAB_WORDS.map(wordData => {
    const card = VocabCard.createCard(wordData);
    root.appendChild(card);
    return card;
  });

  function startPlay() {
    // 버튼 숨기기
    if (startBtn) startBtn.style.display = 'none';

    VocabPlayer.playAll(cards, VOCAB_WORDS, {
      onCard(index, card) {
        cards.forEach((c, i) => c.classList.toggle('is-active', i === index));
      },
    });
  }

  if (startBtn) {
    // 버튼이 있으면 클릭 후 시작 (Autoplay Policy 해결)
    startBtn.addEventListener('click', startPlay, { once: true });
  } else {
    // 버튼이 없으면 기존처럼 자동 시작 (비음성 테스트용)
    startPlay();
  }
})();