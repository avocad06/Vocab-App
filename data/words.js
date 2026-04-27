/**
 * data/words.js
 *
 * exampleChunks : 예문을 어절 단위로 분리 (6단계 순차 하이라이트용)
 * audio.word    : 단어 음독 mp3 (4단계에서 3회 재생)
 * audio.example : 예문 음독 mp3 (6·7단계에서 재생)
 */
window.VOCAB_WORDS = [
  {
    id: 'stay',
    word: 'stay',
    pos: 'v.',
    meaning: '머무르다',
    example: 'He stays at home.',
    exampleChunks: ['He', 'stays', 'at', ' home.'],
    media: {
      gif: 'assets/gif/stay.gif',
      video: 'assets/video/stay.mp4',
      thumb: 'assets/thumb/stay-thumb.jpg',
      placeholder: '🪢',
      audio: {
        word: 'assets/audio/stay-word.mp3',
        example: 'assets/audio/stay-example.mp3',
      },
    },
  },
  {
    id: 'curious',
    word: 'curious',
    pos: 'adj.',
    meaning: '호기심 많은',
    example: 'The curious cat explored.',
    exampleChunks: ['The', 'curious', 'cat', 'explored.'],
    media: {
      gif: 'assets/gif/curious.gif',
      video: 'assets/video/curious.mp4',
      thumb: 'assets/thumb/curious-thumb.jpg',
      placeholder: '🐱',
      audio: {
        word: 'assets/audio/curious-word.mp3',
        example: 'assets/audio/curious-example.mp3',
      },
    },
  },
];
