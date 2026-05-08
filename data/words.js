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
  {
    id: 'watch',
    word: 'watch',
    pos: 'v.',
    meaning: '보다 (시청하다)',
    example: 'I watch TV every evening.',
    exampleChunks: ['I', 'watch', 'TV', 'every', 'evening.'],
    media: {
      gif: 'assets/gif/watch.gif',
      video: 'assets/video/watch.mp4',
      thumb: 'assets/thumb/watch-thumb.jpg',
      placeholder: '📺',
      audio: {
        word: 'assets/audio/watch-word.mp3',
        example: 'assets/audio/watch-example.mp3',
      },
    },
  },
  {
    id: 'look_for',
    word: 'look for',
    pos: 'v.',
    meaning: '찾다',
    example: 'I am looking for my keys.',
    exampleChunks: ['I', 'am', 'looking', 'for', 'my', 'keys.'],
    media: {
      gif: 'assets/gif/look_for.gif',
      video: 'assets/video/look_for.mp4',
      thumb: 'assets/thumb/look_for-thumb.jpg',
      placeholder: '🔍',
      audio: {
        word: 'assets/audio/look_for-word.mp3',
        example: 'assets/audio/look_for-example.mp3',
      },
    },
  },
  {
    id: 'make',
    word: 'make',
    pos: 'v.',
    meaning: '만들다',
    example: 'She makes a birdhouse.',
    exampleChunks: ['She', 'makes', 'a', 'birdhouse.'],
    media: {
      gif: 'assets/gif/make.gif',
      video: 'assets/video/make.mp4',
      thumb: 'assets/thumb/make-thumb.jpg',
      placeholder: '🔨',
      audio: {
        word: 'assets/audio/make-word.mp3',
        example: 'assets/audio/make-example.mp3',
      },
    },
  },
  {
    id: 'have',
    word: 'have',
    pos: 'v.',
    meaning: '가지다',
    example: 'I have two dogs.',
    exampleChunks: ['I', 'have', 'two', 'dogs.'],
    media: {
      gif: 'assets/gif/have.gif',
      video: 'assets/video/have.mp4',
      thumb: 'assets/thumb/have-thumb.jpg',
      placeholder: '🐶',
      audio: {
        word: 'assets/audio/have-word.mp3',
        example: 'assets/audio/have-example.mp3',
      },
    },
  },
  {
    id: 'do',
    word: 'do',
    pos: 'v.',
    meaning: '하다',
    example: 'We do our homework together.',
    exampleChunks: ['We', 'do', 'our', 'homework', 'together.'],
    media: {
      gif: 'assets/gif/do.gif',
      video: 'assets/video/do.mp4',
      thumb: 'assets/thumb/do-thumb.jpg',
      placeholder: '📝',
      audio: {
        word: 'assets/audio/do-word.mp3',
        example: 'assets/audio/do-example.mp3',
      },
    },
  },
];
