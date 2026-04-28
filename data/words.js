/**
 * data/words.js
 *
 * exampleChunks : 예문을 어절 단위로 분리 (6단계 순차 하이라이트용)
 * audio.word    : 단어 음독 mp3 (4단계에서 3회 재생)
 * audio.example : 예문 음독 mp3 (6·7단계에서 재생)
 */
window.VOCAB_WORDS = [
  {
    id: 'growl',
    word: 'growl',
    pos: 'v.',
    meaning: '으르렁거리다',
    example: 'The dog growls loudly.',
    exampleChunks: ['The', 'dog', 'growls', 'loudly.'],
    media: {
      gif: 'assets/gif/growl.gif',
      video: 'assets/video/growl.mp4',
      thumb: 'assets/thumb/growl-thumb.jpg',
      placeholder: '🐺',
      audio: {
        word: 'assets/audio/growl-word.mp3',
        example: 'assets/audio/growl-example.mp3',
      },
    },
  },
  {
    id: 'act',
    word: 'act',
    pos: 'v.',
    meaning: '행동하다',
    example: 'We must act now.',
    exampleChunks: ['We', 'must', 'act', 'now.'],
    media: {
      gif: 'assets/gif/act.gif',
      video: 'assets/video/act.mp4',
      thumb: 'assets/thumb/act-thumb.jpg',
      placeholder: '🏃',
      audio: {
        word: 'assets/audio/act-word.mp3',
        example: 'assets/audio/act-example.mp3',
      },
    },
  },
];
