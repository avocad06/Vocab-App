/**
 * js/main.js
 */
(function () {
  'use strict';

  const root = document.getElementById('vocab-root');
  const startBtn = document.getElementById('vocab-start');

  const cards = VOCAB_WORDS.map(wordData => {
    const card = VocabCard.createCard(wordData);
    root.appendChild(card);
    return card;
  });

  function startPlay() {
    if (startBtn) startBtn.style.display = 'none';
    VocabPlayer.playAll(cards, VOCAB_WORDS, {
      onCard(index, card) {
        cards.forEach((c, i) => c.classList.toggle('is-active', i === index));
      },
    });
  }

  if (startBtn) {
    startBtn.addEventListener('click', startPlay, { once: true });
  } else {
    startPlay();
  }
})();