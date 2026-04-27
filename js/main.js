/**
 * js/main.js
 */
(function () {
  'use strict';

  const root = document.getElementById('vocab-root');

  const cards = VOCAB_WORDS.map(wordData => {
    const card = VocabCard.createCard(wordData);
    root.appendChild(card);
    return card;
  });

  VocabPlayer.playAll(cards, VOCAB_WORDS, {
    onCard(index, card) {
      cards.forEach((c, i) => c.classList.toggle('is-active', i === index));
    },
  });
})();
