/**
 * data/words.js
 *
 * exampleChunks : 예문을 어절 단위로 분리 (6단계 순차 하이라이트용)
 * audio.word    : 단어 음독 mp3 (4단계에서 3회 재생)
 * audio.example : 예문 음독 mp3 (6·7단계에서 재생)
 */
window.VOCAB_WORDS = [
  {
    "id": "watch",
    "grade": 1,
    "day": 1,
    "seq": 1,
    "word": "watch",
    "pos": "v.",
    "meaning": "보다",
    "example": "My sister watches TV shows.",
    "exampleChunks": [
      "My",
      "sister",
      "watches",
      "TV",
      "shows."
    ],
    "media": {
      "gif": "assets/gif/watch.gif",
      "video": "assets/video/watch.mp4",
      "thumb": "assets/thumb/watch-thumb.jpg",
      "placeholder": "📺",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G1_Day%201_001_watch_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G1_Day%201_001_watch_sentence.mp3"
      }
    }
  },
  {
    "id": "look_for",
    "grade": 1,
    "day": 1,
    "seq": 2,
    "word": "look for",
    "pos": "v.",
    "meaning": "찾다",
    "example": "He looks for a job.",
    "exampleChunks": [
      "He",
      "looks for",
      "a",
      "job."
    ],
    "media": {
      "gif": "assets/gif/look_for.gif",
      "video": "assets/video/look_for.mp4",
      "thumb": "assets/thumb/look_for-thumb.jpg",
      "placeholder": "🔍",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G1_Day%201_002_look%20for_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G1_Day%201_002_look%20for_sentence.mp3"
      }
    }
  },
  {
    "id": "make",
    "grade": 1,
    "day": 1,
    "seq": 3,
    "word": "make",
    "pos": "v.",
    "meaning": "만들다",
    "example": "Her family makes a cake.",
    "exampleChunks": [
      "Her",
      "family",
      "makes",
      "a",
      "cake."
    ],
    "media": {
      "gif": "assets/gif/make.gif",
      "video": "assets/video/make.mp4",
      "thumb": "assets/thumb/make-thumb.jpg",
      "placeholder": "🔨",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G1_Day%201_003_make_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G1_Day%201_003_make_sentence.mp3"
      }
    }
  },
  {
    "id": "have",
    "grade": 1,
    "day": 1,
    "seq": 4,
    "word": "have",
    "pos": "v.",
    "meaning": "가지다",
    "example": "I have two dogs.",
    "exampleChunks": [
      "I",
      "have",
      "two",
      "dogs."
    ],
    "media": {
      "gif": "assets/gif/have.gif",
      "video": "assets/video/have.mp4",
      "thumb": "assets/thumb/have-thumb.jpg",
      "placeholder": "🐶",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G1_Day%201_004_have_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G1_Day%201_004_have_sentence.mp3"
      }
    }
  },
  {
    "id": "do",
    "grade": 1,
    "day": 1,
    "seq": 5,
    "word": "do",
    "pos": "v.",
    "meaning": "하다",
    "example": "We do our homework together.",
    "exampleChunks": [
      "We",
      "do",
      "our",
      "homework",
      "together."
    ],
    "media": {
      "gif": "assets/gif/do.gif",
      "video": "assets/video/do.mp4",
      "thumb": "assets/thumb/do-thumb.jpg",
      "placeholder": "📝",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G1_Day%201_005_do_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G1_Day%201_005_do_sentence.mp3"
      }
    }
  },
  {
    "id": "know",
    "grade": 1,
    "day": 1,
    "seq": 6,
    "word": "know",
    "pos": "v.",
    "meaning": "알다, 이해하다",
    "example": "I know how to cook noodle.",
    "exampleChunks": [
      "I",
      "know",
      "how",
      "to",
      "cook",
      "noodle."
    ],
    "media": {
      "gif": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260624_020921_c6da759e-3898-4054-9c27-8b5c7a6d25a1.mp4",
      "video": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260624_020921_c6da759e-3898-4054-9c27-8b5c7a6d25a1.mp4",
      "thumb": "https://d2ol7oe51mr4n9.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/2d86e062-1304-445f-b129-20ce99320c7e.png",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G1_Day%201_006_know_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G1_Day%201_006_know_sentence.mp3"
      }
    }
  },
  {
    "id": "sit_on",
    "grade": 1,
    "day": 1,
    "seq": 7,
    "word": "sit on",
    "pos": "v.",
    "meaning": "앉다",
    "example": "She sits on the chair.",
    "exampleChunks": [
      "She",
      "sits",
      "on",
      "the",
      "chair."
    ],
    "media": {
      "gif": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260624_020923_3bc8ff07-a9f8-4276-928b-c978bc83322a.mp4",
      "video": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260624_020923_3bc8ff07-a9f8-4276-928b-c978bc83322a.mp4",
      "thumb": "https://d2ol7oe51mr4n9.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/98941d29-61e1-4aee-b400-a48b602227ac.png",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G1_Day%201_007_sit%20on_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G1_Day%201_007_sit%20on_sentence.mp3"
      }
    }
  },
  {
    "id": "move",
    "grade": 1,
    "day": 1,
    "seq": 8,
    "word": "move",
    "pos": "v.",
    "meaning": "움직이다",
    "example": "The snail moves really slow.",
    "exampleChunks": [
      "The",
      "snail",
      "moves",
      "really",
      "slow."
    ],
    "media": {
      "gif": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260624_020925_46585567-2abc-432d-b2dd-fa93e281138e.mp4",
      "video": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260624_020925_46585567-2abc-432d-b2dd-fa93e281138e.mp4",
      "thumb": "https://d2ol7oe51mr4n9.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/0688160c-fb7d-4ba4-94a0-654a0f260971.png",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G1_Day%201_008_move_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G1_Day%201_008_move_sentence.mp3"
      }
    }
  },
  {
    "id": "fall_down",
    "grade": 1,
    "day": 1,
    "seq": 9,
    "word": "fall down",
    "pos": "v.",
    "meaning": "떨어진다",
    "example": "The monkey falls down from the tree.",
    "exampleChunks": [
      "The",
      "monkey",
      "falls",
      "down",
      "from",
      "the",
      "tree."
    ],
    "media": {
      "gif": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260624_021239_b30ad879-c25b-4416-b90e-399656e8db76.mp4",
      "video": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260624_021239_b30ad879-c25b-4416-b90e-399656e8db76.mp4",
      "thumb": "https://d2ol7oe51mr4n9.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/10d8c8dc-d26a-4f9b-9bb5-ead87264ed86.png",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G1_Day%201_009_fall%20down_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G1_Day%201_009_fall%20down_sentence.mp3"
      }
    }
  },
  {
    "id": "see",
    "grade": 1,
    "day": 1,
    "seq": 10,
    "word": "see",
    "pos": "v.",
    "meaning": "~을 보다",
    "example": "I see you.",
    "exampleChunks": [
      "I",
      "see",
      "you."
    ],
    "media": {
      "gif": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260624_021241_5129f0f8-0005-4655-b9d0-59bd4a763720.mp4",
      "video": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260624_021241_5129f0f8-0005-4655-b9d0-59bd4a763720.mp4",
      "thumb": "https://d2ol7oe51mr4n9.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/2c3a2885-9b70-473f-8184-5901c042b4d3.png",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G1_Day%201_010_see_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G1_Day%201_010_see_sentence.mp3"
      }
    }
  },
  {
    "id": "dance",
    "grade": 1,
    "day": 1,
    "seq": 11,
    "word": "dance",
    "pos": "v.",
    "meaning": "춤을 추다",
    "example": "",
    "exampleChunks": [],
    "media": {
      "gif": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/dance.mp4",
      "video": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/dance.mp4",
      "thumb": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca%20-%20images/dance.jpeg",
      "placeholder": "📖",
      "audio": {
        "word": "",
        "example": ""
      }
    }
  },
  {
    "id": "sleep",
    "grade": 1,
    "day": 1,
    "seq": 12,
    "word": "sleep",
    "pos": "v.",
    "meaning": "자다",
    "example": "",
    "exampleChunks": [],
    "media": {
      "gif": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/sleep.mp4",
      "video": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/sleep.mp4",
      "thumb": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca%20-%20images/sleep.jpeg",
      "placeholder": "📖",
      "audio": {
        "word": "",
        "example": ""
      }
    }
  },
  {
    "id": "open",
    "grade": 1,
    "day": 1,
    "seq": 13,
    "word": "open",
    "pos": "v.",
    "meaning": "열다",
    "example": "She opens the window.",
    "exampleChunks": [
      "She",
      "opens",
      "the",
      "window."
    ],
    "media": {
      "gif": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260624_021247_a606c35e-5832-4958-8a0d-bbd418557d77.mp4",
      "video": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260624_021247_a606c35e-5832-4958-8a0d-bbd418557d77.mp4",
      "thumb": "https://d2ol7oe51mr4n9.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/f32ab09c-1aa1-4247-983c-705a8ab17740.png",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G1_Day%201_013_open_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G1_Day%201_013_open_sentence.mp3"
      }
    }
  },
  {
    "id": "wash",
    "grade": 1,
    "day": 1,
    "seq": 14,
    "word": "wash",
    "pos": "v.",
    "meaning": "씻다",
    "example": "I wash my hands.",
    "exampleChunks": [
      "I",
      "wash",
      "my",
      "hands."
    ],
    "media": {
      "gif": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260624_021417_fd3ad5c8-d362-48d4-9f2e-1f825030be79.mp4",
      "video": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260624_021417_fd3ad5c8-d362-48d4-9f2e-1f825030be79.mp4",
      "thumb": "https://d2ol7oe51mr4n9.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/3f86e989-ea1f-4d64-a57f-d448e5cd7820.png",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G1_Day%201_014_wash_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G1_Day%201_014_wash_sentence.mp3"
      }
    }
  },
  {
    "id": "wake",
    "grade": 1,
    "day": 1,
    "seq": 15,
    "word": "wake",
    "pos": "v.",
    "meaning": "잠에서 깨다",
    "example": "Mom wakes my sister.",
    "exampleChunks": [
      "Mom",
      "wakes",
      "my",
      "sister."
    ],
    "media": {
      "gif": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260624_021419_e765b7a6-34b0-45c7-ab7e-f023607f6cc7.mp4",
      "video": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260624_021419_e765b7a6-34b0-45c7-ab7e-f023607f6cc7.mp4",
      "thumb": "https://d2ol7oe51mr4n9.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/4a59257f-116f-4872-a28f-6bcfc3dfdff6.png",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G1_Day%201_015_wake_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G1_Day%201_015_wake_sentence.mp3"
      }
    }
  },
  {
    "id": "wear",
    "grade": 1,
    "day": 1,
    "seq": 16,
    "word": "wear",
    "pos": "v.",
    "meaning": "입다",
    "example": "The children wear their costumes for Halloween.",
    "exampleChunks": [
      "The",
      "children",
      "wear",
      "their",
      "costumes",
      "for",
      "Halloween."
    ],
    "media": {
      "gif": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260626_052218_fd6482f9-7b15-4933-b074-c55dbd315c44.mp4",
      "video": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260626_052218_fd6482f9-7b15-4933-b074-c55dbd315c44.mp4",
      "thumb": "https://d2ol7oe51mr4n9.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/e5d93684-2aa2-415c-bcb7-af8c63e44065.png",
      "placeholder": "📖",
      "audio": {
        "word": "https://drive.google.com/uc?export=download&id=1h3NaXHLu7DopVUUuDkHjfAMS0s_AL2PD",
        "example": "https://drive.google.com/uc?export=download&id=1RHUL22ecManjQcKvujcSfKme-5DTuHZo"
      }
    }
  },
  {
    "id": "want",
    "grade": 1,
    "day": 1,
    "seq": 17,
    "word": "want",
    "pos": "v.",
    "meaning": "원하다",
    "example": "He wants to play at the playground.",
    "exampleChunks": [
      "He",
      "wants",
      "to",
      "play",
      "at",
      "the",
      "playground."
    ],
    "media": {
      "gif": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260624_021526_02ade6cb-cc22-4f39-8532-fa3f8b611da9.mp4",
      "video": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260624_021526_02ade6cb-cc22-4f39-8532-fa3f8b611da9.mp4",
      "thumb": "https://d2ol7oe51mr4n9.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/dd4156fc-3874-4873-9b78-79ddb1e89b00.png",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G1_Day%201_017_want_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G1_Day%201_017_want_sentence.mp3"
      }
    }
  },
  {
    "id": "wait",
    "grade": 1,
    "day": 1,
    "seq": 18,
    "word": "wait",
    "pos": "v.",
    "meaning": "기다리다",
    "example": "He waits for his turn.",
    "exampleChunks": [
      "He",
      "waits",
      "for",
      "his",
      "turn."
    ],
    "media": {
      "gif": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260624_021528_898dadd5-11b4-49b5-9871-83ec8d18e819.mp4",
      "video": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260624_021528_898dadd5-11b4-49b5-9871-83ec8d18e819.mp4",
      "thumb": "https://d2ol7oe51mr4n9.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/707c702b-a3b3-4188-a88a-b1d078907c4b.png",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G1_Day%201_018_wait_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G1_Day%201_018_wait_sentence.mp3"
      }
    }
  },
  {
    "id": "say",
    "grade": 1,
    "day": 1,
    "seq": 19,
    "word": "say",
    "pos": "v.",
    "meaning": "말하다",
    "example": "She says sorry to me.",
    "exampleChunks": [
      "She",
      "says",
      "sorry",
      "to",
      "me."
    ],
    "media": {
      "gif": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260624_021530_f2db7fec-6459-48eb-a41e-eca3dcb6a5a7.mp4",
      "video": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260624_021530_f2db7fec-6459-48eb-a41e-eca3dcb6a5a7.mp4",
      "thumb": "https://d2ol7oe51mr4n9.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/b239ab83-c3b6-4fcd-9c6d-863b60e36828.png",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G1_Day%201_019_say_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G1_Day%201_019_say_sentence.mp3"
      }
    }
  },
  {
    "id": "blow",
    "grade": 1,
    "day": 1,
    "seq": 20,
    "word": "blow",
    "pos": "v.",
    "meaning": "불다",
    "example": "I blow up the balloon.",
    "exampleChunks": [
      "I",
      "blow",
      "up",
      "the",
      "balloon."
    ],
    "media": {
      "gif": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260624_021532_3ff66c45-1800-41d8-ad70-5d279a3efc38.mp4",
      "video": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260624_021532_3ff66c45-1800-41d8-ad70-5d279a3efc38.mp4",
      "thumb": "https://d2ol7oe51mr4n9.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/89984b58-b3b7-438d-abee-c5e3e2890ea9.png",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G1_Day%201_020_blow_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G1_Day%201_020_blow_sentence.mp3"
      }
    }
  },
  {
    "id": "draw",
    "grade": 1,
    "day": 2,
    "seq": 1,
    "word": "draw",
    "pos": "v.",
    "meaning": "그리다",
    "example": "He draws his dog.",
    "exampleChunks": [
      "He",
      "draws",
      "his",
      "dog."
    ],
    "media": {
      "gif": "https://d8j0ntlcm91z4.cloudfront.net/user_3BO3KyJ9rz504vburMhH4hlonmN/hf_20260508_024737_76f4c0ab-81b0-4827-a602-25de18fcf1ed.mp4",
      "video": "https://d8j0ntlcm91z4.cloudfront.net/user_3BO3KyJ9rz504vburMhH4hlonmN/hf_20260508_024737_76f4c0ab-81b0-4827-a602-25de18fcf1ed.mp4",
      "thumb": "https://d8j0ntlcm91z4.cloudfront.net/user_3BO3KyJ9rz504vburMhH4hlonmN/hf_20260508_024031_50c19301-0cb3-4dd5-b941-b0ffd2468666.png",
      "placeholder": "✏️",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G1_Day%202_001_draw_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G1_Day%202_001_draw_sentence.mp3"
      }
    }
  },
  {
    "id": "play",
    "grade": 1,
    "day": 2,
    "seq": 2,
    "word": "play",
    "pos": "v.",
    "meaning": "놀다, (경기를)하다",
    "example": "He plays the guitar.",
    "exampleChunks": [
      "He",
      "plays",
      "the",
      "guitar."
    ],
    "media": {
      "gif": "https://d8j0ntlcm91z4.cloudfront.net/user_3BO3KyJ9rz504vburMhH4hlonmN/hf_20260508_024745_1edf2b34-2dc4-4169-a92a-d6917ce7c9e7.mp4",
      "video": "https://d8j0ntlcm91z4.cloudfront.net/user_3BO3KyJ9rz504vburMhH4hlonmN/hf_20260508_024745_1edf2b34-2dc4-4169-a92a-d6917ce7c9e7.mp4",
      "thumb": "https://d8j0ntlcm91z4.cloudfront.net/user_3BO3KyJ9rz504vburMhH4hlonmN/hf_20260508_024040_aa1e3777-602b-412c-8a11-89b3258f1cdf.png",
      "placeholder": "🎸",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G1_Day%202_002_play_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G1_Day%202_002_play_sentence.mp3"
      }
    }
  },
  {
    "id": "cook",
    "grade": 1,
    "day": 2,
    "seq": 3,
    "word": "cook",
    "pos": "v.",
    "meaning": "요리하다",
    "example": "Mom cooks pizza.",
    "exampleChunks": [
      "Mom",
      "cooks",
      "pizza."
    ],
    "media": {
      "gif": "https://d8j0ntlcm91z4.cloudfront.net/user_3BO3KyJ9rz504vburMhH4hlonmN/hf_20260508_024754_baf002d2-c77b-4817-946c-b33d1871f6a0.mp4",
      "video": "https://d8j0ntlcm91z4.cloudfront.net/user_3BO3KyJ9rz504vburMhH4hlonmN/hf_20260508_024754_baf002d2-c77b-4817-946c-b33d1871f6a0.mp4",
      "thumb": "https://d8j0ntlcm91z4.cloudfront.net/user_3BO3KyJ9rz504vburMhH4hlonmN/hf_20260508_024049_d317444a-dfc6-47bd-99d9-05a2ff46b16d.png",
      "placeholder": "🍳",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G1_Day%202_003_cook_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G1_Day%202_003_cook_sentence.mp3"
      }
    }
  },
  {
    "id": "buy",
    "grade": 1,
    "day": 2,
    "seq": 4,
    "word": "buy",
    "pos": "v.",
    "meaning": "사다",
    "example": "I buy drinks for my friends.",
    "exampleChunks": [
      "I",
      "buy",
      "drinks",
      "for",
      "my",
      "friends."
    ],
    "media": {
      "gif": "https://d8j0ntlcm91z4.cloudfront.net/user_3BO3KyJ9rz504vburMhH4hlonmN/hf_20260508_024802_9b624177-b343-4adc-8743-58a40da38fa0.mp4",
      "video": "https://d8j0ntlcm91z4.cloudfront.net/user_3BO3KyJ9rz504vburMhH4hlonmN/hf_20260508_024802_9b624177-b343-4adc-8743-58a40da38fa0.mp4",
      "thumb": "https://d8j0ntlcm91z4.cloudfront.net/user_3BO3KyJ9rz504vburMhH4hlonmN/hf_20260508_024058_50d018bf-0c63-4bcd-8c27-c16143fb61d9.png",
      "placeholder": "🛒",
      "audio": {
        "word": "assets/audio/buy-word.mp3",
        "example": "assets/audio/buy-example.mp3"
      }
    }
  },
  {
    "id": "wink",
    "grade": 1,
    "day": 2,
    "seq": 5,
    "word": "wink",
    "pos": "v.",
    "meaning": "윙크하다",
    "example": "She winks at my brother.",
    "exampleChunks": [
      "She",
      "winks",
      "at",
      "my",
      "brother."
    ],
    "media": {
      "gif": "https://d8j0ntlcm91z4.cloudfront.net/user_3BO3KyJ9rz504vburMhH4hlonmN/hf_20260508_024809_35c82757-4b59-452e-a7e8-64be7b501d3b.mp4",
      "video": "https://d8j0ntlcm91z4.cloudfront.net/user_3BO3KyJ9rz504vburMhH4hlonmN/hf_20260508_024809_35c82757-4b59-452e-a7e8-64be7b501d3b.mp4",
      "thumb": "https://d8j0ntlcm91z4.cloudfront.net/user_3BO3KyJ9rz504vburMhH4hlonmN/hf_20260508_024107_22f77352-fe4a-4f69-9a09-a97ecfc4146f.png",
      "placeholder": "😉",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G1_Day%202_005_wink_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G1_Day%202_005_wink_sentence.mp3"
      }
    }
  },
  {
    "id": "read",
    "grade": 1,
    "day": 2,
    "seq": 6,
    "word": "read",
    "pos": "v.",
    "meaning": "읽다",
    "example": "Dad reads a newspaper.",
    "exampleChunks": [
      "Dad",
      "reads",
      "a",
      "newspaper."
    ],
    "media": {
      "gif": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260624_030859_4a8ef19c-5012-4e67-85bf-0c458581e710.mp4",
      "video": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260624_030859_4a8ef19c-5012-4e67-85bf-0c458581e710.mp4",
      "thumb": "https://d2ol7oe51mr4n9.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/336b09ca-42ae-40c1-9f80-121fd504b679.png",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G1_Day%202_006_read_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G1_Day%202_006_read_sentence.mp3"
      }
    }
  },
  {
    "id": "work",
    "grade": 1,
    "day": 2,
    "seq": 7,
    "word": "work",
    "pos": "v.",
    "meaning": "일하다",
    "example": "She works at the library.",
    "exampleChunks": [
      "She",
      "works",
      "at",
      "the",
      "library."
    ],
    "media": {
      "gif": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260624_030901_55d9beef-fc9a-4945-87f9-666b388418bb.mp4",
      "video": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260624_030901_55d9beef-fc9a-4945-87f9-666b388418bb.mp4",
      "thumb": "https://d2ol7oe51mr4n9.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/d85c66e9-29d1-4cf0-984e-c635b0263600.png",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G1_Day%202_007_work_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G1_Day%202_007_work_sentence.mp3"
      }
    }
  },
  {
    "id": "sing",
    "grade": 1,
    "day": 2,
    "seq": 8,
    "word": "sing",
    "pos": "v.",
    "meaning": "노래를 부르다",
    "example": "We sing a song.",
    "exampleChunks": [
      "We",
      "sing",
      "a",
      "song."
    ],
    "media": {
      "gif": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260624_030902_fef7f087-3339-41bb-8255-bb9d33262a4c.mp4",
      "video": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260624_030902_fef7f087-3339-41bb-8255-bb9d33262a4c.mp4",
      "thumb": "https://d2ol7oe51mr4n9.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/da140ee5-8b0d-4977-ac08-08118437b8ef.png",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G1_Day%202_008_sing_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G1_Day%202_008_sing_sentence.mp3"
      }
    }
  },
  {
    "id": "listen",
    "grade": 1,
    "day": 2,
    "seq": 9,
    "word": "listen",
    "pos": "v.",
    "meaning": "듣다",
    "example": "He listens to music.",
    "exampleChunks": [
      "He",
      "listens",
      "to",
      "music."
    ],
    "media": {
      "gif": "https://d8j0ntlcm91z4.cloudfront.net/user_3BO3KyJ9rz504vburMhH4hlonmN/hf_20260508_030043_7d9ef7d2-051c-41f2-bc2b-c708b5ee819b.mp4",
      "video": "https://d8j0ntlcm91z4.cloudfront.net/user_3BO3KyJ9rz504vburMhH4hlonmN/hf_20260508_030043_7d9ef7d2-051c-41f2-bc2b-c708b5ee819b.mp4",
      "thumb": "https://d8j0ntlcm91z4.cloudfront.net/user_3BO3KyJ9rz504vburMhH4hlonmN/hf_20260508_024145_012a64ca-f355-45ba-b280-75f434189ded.png",
      "placeholder": "🎧",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G1_Day%202_009_listen_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G1_Day%202_009_listen_sentence.mp3"
      }
    }
  },
  {
    "id": "talk",
    "grade": 1,
    "day": 2,
    "seq": 10,
    "word": "talk",
    "pos": "v.",
    "meaning": "말하다, 이야기하다",
    "example": "Mom talks to me.",
    "exampleChunks": [
      "Mom",
      "talks",
      "to",
      "me."
    ],
    "media": {
      "gif": "https://d8j0ntlcm91z4.cloudfront.net/user_3BO3KyJ9rz504vburMhH4hlonmN/hf_20260508_030051_72e482b5-353e-43f3-a0fb-708e3fc0dc82.mp4",
      "video": "https://d8j0ntlcm91z4.cloudfront.net/user_3BO3KyJ9rz504vburMhH4hlonmN/hf_20260508_030051_72e482b5-353e-43f3-a0fb-708e3fc0dc82.mp4",
      "thumb": "https://d8j0ntlcm91z4.cloudfront.net/user_3BO3KyJ9rz504vburMhH4hlonmN/hf_20260508_024154_97ed08df-e8aa-422a-ac6f-68a6d346064b.png",
      "placeholder": "💬",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G1_Day%202_010_talk_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G1_Day%202_010_talk_sentence.mp3"
      }
    }
  },
  {
    "id": "hide",
    "grade": 1,
    "day": 2,
    "seq": 11,
    "word": "hide",
    "pos": "v.",
    "meaning": "감추다, 숨다",
    "example": "My sister hides under the desk.",
    "exampleChunks": [
      "My",
      "sister",
      "hides",
      "under",
      "the",
      "desk."
    ],
    "media": {
      "gif": "https://d8j0ntlcm91z4.cloudfront.net/user_3BO3KyJ9rz504vburMhH4hlonmN/hf_20260508_030059_e1dbbfc5-6260-4776-9cfe-e1afca2b019b.mp4",
      "video": "https://d8j0ntlcm91z4.cloudfront.net/user_3BO3KyJ9rz504vburMhH4hlonmN/hf_20260508_030059_e1dbbfc5-6260-4776-9cfe-e1afca2b019b.mp4",
      "thumb": "https://d8j0ntlcm91z4.cloudfront.net/user_3BO3KyJ9rz504vburMhH4hlonmN/hf_20260508_024204_a98a2ad9-59c1-47a9-b891-6f9ce4b09ea9.png",
      "placeholder": "🙈",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G1_Day%202_011_hide_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G1_Day%202_011_hide_sentence.mp3"
      }
    }
  },
  {
    "id": "find",
    "grade": 1,
    "day": 2,
    "seq": 12,
    "word": "find",
    "pos": "v.",
    "meaning": "~을 찾다",
    "example": "",
    "exampleChunks": [],
    "media": {
      "gif": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/find.mp4",
      "video": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/find.mp4",
      "thumb": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca%20-%20images/find.jpeg",
      "placeholder": "📖",
      "audio": {
        "word": "",
        "example": ""
      }
    }
  },
  {
    "id": "run",
    "grade": 1,
    "day": 2,
    "seq": 13,
    "word": "run",
    "pos": "v.",
    "meaning": "달리다",
    "example": "He runs to school.",
    "exampleChunks": [
      "He",
      "runs",
      "to",
      "school."
    ],
    "media": {
      "gif": "https://d8j0ntlcm91z4.cloudfront.net/user_3BO3KyJ9rz504vburMhH4hlonmN/hf_20260508_030806_d556adcb-a003-4721-bd44-ad3885497b0b.mp4",
      "video": "https://d8j0ntlcm91z4.cloudfront.net/user_3BO3KyJ9rz504vburMhH4hlonmN/hf_20260508_030806_d556adcb-a003-4721-bd44-ad3885497b0b.mp4",
      "thumb": "https://d8j0ntlcm91z4.cloudfront.net/user_3BO3KyJ9rz504vburMhH4hlonmN/hf_20260508_024225_aa2753f7-69b8-4920-8b99-fff95c0b837b.png",
      "placeholder": "🏃",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G1_Day%202_013_run_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G1_Day%202_013_run_sentence.mp3"
      }
    }
  },
  {
    "id": "live",
    "grade": 1,
    "day": 2,
    "seq": 14,
    "word": "live",
    "pos": "v.",
    "meaning": "살다",
    "example": "I live in Korea.",
    "exampleChunks": [
      "I",
      "live",
      "in",
      "Korea."
    ],
    "media": {
      "gif": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/live.mp4",
      "video": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/live.mp4",
      "thumb": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca%20-%20images/live.jpeg",
      "placeholder": "🏠",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G1_Day%202_014_live_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G1_Day%202_014_live_sentence.mp3"
      }
    }
  },
  {
    "id": "thank",
    "grade": 1,
    "day": 2,
    "seq": 15,
    "word": "thank",
    "pos": "v.",
    "meaning": "고마워하다, 감사하다",
    "example": "I thank my parents for taking care of me.",
    "exampleChunks": [
      "I",
      "thank",
      "my",
      "parents",
      "for",
      "taking",
      "care",
      "of",
      "me."
    ],
    "media": {
      "gif": "https://d8j0ntlcm91z4.cloudfront.net/user_3BO3KyJ9rz504vburMhH4hlonmN/hf_20260508_030822_86d7b9f0-606e-40fd-b3a5-dd05b20dead1.mp4",
      "video": "https://d8j0ntlcm91z4.cloudfront.net/user_3BO3KyJ9rz504vburMhH4hlonmN/hf_20260508_030822_86d7b9f0-606e-40fd-b3a5-dd05b20dead1.mp4",
      "thumb": "https://d8j0ntlcm91z4.cloudfront.net/user_3BO3KyJ9rz504vburMhH4hlonmN/hf_20260508_024244_7db639ca-1050-452e-9be4-96c0ac0a37b6.png",
      "placeholder": "🙏",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G1_Day%202_015_thank_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G1_Day%202_015_thank_sentence.mp3"
      }
    }
  },
  {
    "id": "ride",
    "grade": 1,
    "day": 2,
    "seq": 16,
    "word": "ride",
    "pos": "v.",
    "meaning": "~을 타다",
    "example": "He rides the bus to school.",
    "exampleChunks": [
      "He",
      "rides",
      "the",
      "bus",
      "to",
      "school."
    ],
    "media": {
      "gif": "https://d8j0ntlcm91z4.cloudfront.net/user_3BO3KyJ9rz504vburMhH4hlonmN/hf_20260508_030830_2e7a2817-bfc1-4600-a783-f3b959a52397.mp4",
      "video": "https://d8j0ntlcm91z4.cloudfront.net/user_3BO3KyJ9rz504vburMhH4hlonmN/hf_20260508_030830_2e7a2817-bfc1-4600-a783-f3b959a52397.mp4",
      "thumb": "https://d8j0ntlcm91z4.cloudfront.net/user_3BO3KyJ9rz504vburMhH4hlonmN/hf_20260508_024254_1e2088b8-2973-486c-a07e-a67091c4413b.png",
      "placeholder": "🚌",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G1_Day%202_016_ride_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G1_Day%202_016_ride_sentence.mp3"
      }
    }
  },
  {
    "id": "write",
    "grade": 1,
    "day": 2,
    "seq": 17,
    "word": "write",
    "pos": "v.",
    "meaning": "쓰다",
    "example": "",
    "exampleChunks": [],
    "media": {
      "gif": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/write.mp4",
      "video": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/write.mp4",
      "thumb": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca%20-%20images/write.jpeg",
      "placeholder": "📖",
      "audio": {
        "word": "",
        "example": ""
      }
    }
  },
  {
    "id": "let",
    "grade": 1,
    "day": 2,
    "seq": 18,
    "word": "let",
    "pos": "v.",
    "meaning": "허락하다, 놓아두다",
    "example": "I let her play with my toy.",
    "exampleChunks": [
      "I",
      "let",
      "her",
      "play",
      "with",
      "my",
      "toy."
    ],
    "media": {
      "gif": "https://d8j0ntlcm91z4.cloudfront.net/user_3BO3KyJ9rz504vburMhH4hlonmN/hf_20260508_030846_ed0601fe-f6d4-4457-a6b5-4e9d0cfdbe34.mp4",
      "video": "https://d8j0ntlcm91z4.cloudfront.net/user_3BO3KyJ9rz504vburMhH4hlonmN/hf_20260508_030846_ed0601fe-f6d4-4457-a6b5-4e9d0cfdbe34.mp4",
      "thumb": "https://d8j0ntlcm91z4.cloudfront.net/user_3BO3KyJ9rz504vburMhH4hlonmN/hf_20260508_024312_a2d0a014-9472-49e2-8792-aa7b77af2c1a.png",
      "placeholder": "🤲",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G1_Day%202_018_let_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G1_Day%202_018_let_sentence.mp3"
      }
    }
  },
  {
    "id": "need",
    "grade": 1,
    "day": 2,
    "seq": 19,
    "word": "need",
    "pos": "v.",
    "meaning": "필요하다",
    "example": "She needs time.",
    "exampleChunks": [
      "She",
      "needs",
      "time."
    ],
    "media": {
      "gif": "https://d8j0ntlcm91z4.cloudfront.net/user_3BO3KyJ9rz504vburMhH4hlonmN/hf_20260508_031913_7a369fa2-44d1-4eec-9764-41c6bdf1b32d.mp4",
      "video": "https://d8j0ntlcm91z4.cloudfront.net/user_3BO3KyJ9rz504vburMhH4hlonmN/hf_20260508_031913_7a369fa2-44d1-4eec-9764-41c6bdf1b32d.mp4",
      "thumb": "https://d8j0ntlcm91z4.cloudfront.net/user_3BO3KyJ9rz504vburMhH4hlonmN/hf_20260508_024323_3b926bd3-afd3-4bda-ab3f-c3d8c6a9b376.png",
      "placeholder": "⏰",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G1_Day%202_019_need_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G1_Day%202_019_need_sentence.mp3"
      }
    }
  },
  {
    "id": "sell",
    "grade": 1,
    "day": 2,
    "seq": 20,
    "word": "sell",
    "pos": "v.",
    "meaning": "팔다",
    "example": "They sell lemonade.",
    "exampleChunks": [
      "They",
      "sell",
      "lemonade."
    ],
    "media": {
      "gif": "https://d8j0ntlcm91z4.cloudfront.net/user_3BO3KyJ9rz504vburMhH4hlonmN/hf_20260508_031921_fd850afe-6d28-4711-92b0-ac63331daea0.mp4",
      "video": "https://d8j0ntlcm91z4.cloudfront.net/user_3BO3KyJ9rz504vburMhH4hlonmN/hf_20260508_031921_fd850afe-6d28-4711-92b0-ac63331daea0.mp4",
      "thumb": "https://d8j0ntlcm91z4.cloudfront.net/user_3BO3KyJ9rz504vburMhH4hlonmN/hf_20260508_024333_ad15885b-1807-4c3c-8f10-1c2f5071de7c.png",
      "placeholder": "🍋",
      "audio": {
        "word": "",
        "example": ""
      }
    }
  },
  {
    "id": "help",
    "grade": 1,
    "day": 3,
    "seq": 1,
    "word": "help",
    "pos": "v.",
    "meaning": "도와주다, 돕다",
    "example": "She helps many people.",
    "exampleChunks": [
      "She",
      "helps",
      "many",
      "people."
    ],
    "media": {
      "gif": "https://d8j0ntlcm91z4.cloudfront.net/user_3BO3KyJ9rz504vburMhH4hlonmN/hf_20260508_031929_95f43d3c-3693-4bf6-afc7-41c4df38a970.mp4",
      "video": "https://d8j0ntlcm91z4.cloudfront.net/user_3BO3KyJ9rz504vburMhH4hlonmN/hf_20260508_031929_95f43d3c-3693-4bf6-afc7-41c4df38a970.mp4",
      "thumb": "https://d8j0ntlcm91z4.cloudfront.net/user_3BO3KyJ9rz504vburMhH4hlonmN/hf_20260508_024342_e868d38e-4433-4be9-b320-d0a67a092ee1.png",
      "placeholder": "🤝",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G1_Day%203_001_help_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G1_Day%203_001_help_sentence.mp3"
      }
    }
  },
  {
    "id": "eat",
    "grade": 1,
    "day": 3,
    "seq": 2,
    "word": "eat",
    "pos": "v.",
    "meaning": "먹다",
    "example": "She eats sandwich for lunch.",
    "exampleChunks": [
      "She",
      "eats",
      "sandwich",
      "for",
      "lunch."
    ],
    "media": {
      "gif": "https://d8j0ntlcm91z4.cloudfront.net/user_3BO3KyJ9rz504vburMhH4hlonmN/hf_20260508_031937_45afcf34-df24-46fd-a690-f1eb002c3713.mp4",
      "video": "https://d8j0ntlcm91z4.cloudfront.net/user_3BO3KyJ9rz504vburMhH4hlonmN/hf_20260508_031937_45afcf34-df24-46fd-a690-f1eb002c3713.mp4",
      "thumb": "https://d8j0ntlcm91z4.cloudfront.net/user_3BO3KyJ9rz504vburMhH4hlonmN/hf_20260508_024352_4047087b-68d4-4a56-a26c-9c2a282c3b95.png",
      "placeholder": "🥪",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G1_Day%203_002_eat_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G1_Day%203_002_eat_sentence.mp3"
      }
    }
  },
  {
    "id": "clean",
    "grade": 1,
    "day": 3,
    "seq": 3,
    "word": "clean",
    "pos": "v.",
    "meaning": "청소하다",
    "example": "I clean my room.",
    "exampleChunks": [
      "I",
      "clean",
      "my",
      "room."
    ],
    "media": {
      "gif": "https://d8j0ntlcm91z4.cloudfront.net/user_3BO3KyJ9rz504vburMhH4hlonmN/hf_20260508_031944_a4688207-1392-489e-87c9-9cc6840caa41.mp4",
      "video": "https://d8j0ntlcm91z4.cloudfront.net/user_3BO3KyJ9rz504vburMhH4hlonmN/hf_20260508_031944_a4688207-1392-489e-87c9-9cc6840caa41.mp4",
      "thumb": "https://d8j0ntlcm91z4.cloudfront.net/user_3BO3KyJ9rz504vburMhH4hlonmN/hf_20260508_024401_de2295f3-d5f4-4310-a336-9425a07dd415.png",
      "placeholder": "🧹",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G1_Day%203_003_clean_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G1_Day%203_003_clean_sentence.mp3"
      }
    }
  },
  {
    "id": "dry",
    "grade": 1,
    "day": 3,
    "seq": 4,
    "word": "dry",
    "pos": "v.",
    "meaning": "말리다",
    "example": "I dry my clothes.",
    "exampleChunks": [
      "I",
      "dry",
      "my",
      "clothes."
    ],
    "media": {
      "gif": "https://d8j0ntlcm91z4.cloudfront.net/user_3BO3KyJ9rz504vburMhH4hlonmN/hf_20260508_031952_87b08476-f70b-4f1a-88ca-6a49b78672f6.mp4",
      "video": "https://d8j0ntlcm91z4.cloudfront.net/user_3BO3KyJ9rz504vburMhH4hlonmN/hf_20260508_031952_87b08476-f70b-4f1a-88ca-6a49b78672f6.mp4",
      "thumb": "https://d8j0ntlcm91z4.cloudfront.net/user_3BO3KyJ9rz504vburMhH4hlonmN/hf_20260508_024410_568ad3fb-7923-42a2-9cd3-78e6f6cd60a5.png",
      "placeholder": "👕",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G1_Day%203_004_dry_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G1_Day%203_004_dry_sentence.mp3"
      }
    }
  },
  {
    "id": "smile",
    "grade": 1,
    "day": 3,
    "seq": 5,
    "word": "smile",
    "pos": "v.",
    "meaning": "웃다",
    "example": "She smiles at the child.",
    "exampleChunks": [
      "She",
      "smiles",
      "at",
      "the",
      "child."
    ],
    "media": {
      "gif": "https://d8j0ntlcm91z4.cloudfront.net/user_3BO3KyJ9rz504vburMhH4hlonmN/hf_20260508_034220_65a79e3e-0a07-4fde-8e49-f1168e689d1d.mp4",
      "video": "https://d8j0ntlcm91z4.cloudfront.net/user_3BO3KyJ9rz504vburMhH4hlonmN/hf_20260508_034220_65a79e3e-0a07-4fde-8e49-f1168e689d1d.mp4",
      "thumb": "https://d8j0ntlcm91z4.cloudfront.net/user_3BO3KyJ9rz504vburMhH4hlonmN/hf_20260508_024419_57541acb-7bf7-4947-8c07-269351569b14.png",
      "placeholder": "😊",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G1_Day%203_005_smile_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G1_Day%203_005_smile_sentence.mp3"
      }
    }
  },
  {
    "id": "get",
    "grade": 1,
    "day": 3,
    "seq": 6,
    "word": "get",
    "pos": "v.",
    "meaning": "받다, 얻다",
    "example": "She gets a present from her brother.",
    "exampleChunks": [
      "She",
      "gets",
      "a",
      "present",
      "from",
      "her",
      "brother."
    ],
    "media": {
      "gif": "https://d8j0ntlcm91z4.cloudfront.net/user_3BO3KyJ9rz504vburMhH4hlonmN/hf_20260508_034228_3c9f8a46-4ba8-4190-94a1-5e5a6399b2f6.mp4",
      "video": "https://d8j0ntlcm91z4.cloudfront.net/user_3BO3KyJ9rz504vburMhH4hlonmN/hf_20260508_034228_3c9f8a46-4ba8-4190-94a1-5e5a6399b2f6.mp4",
      "thumb": "https://d8j0ntlcm91z4.cloudfront.net/user_3BO3KyJ9rz504vburMhH4hlonmN/hf_20260508_024429_f938d2f1-6b76-4b63-9c7c-ff6799d1637a.png",
      "placeholder": "🎁",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G1_Day%203_006_get_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G1_Day%203_006_get_sentence.mp3"
      }
    }
  },
  {
    "id": "take",
    "grade": 1,
    "day": 3,
    "seq": 7,
    "word": "take",
    "pos": "v.",
    "meaning": "가지고 가다, 데리고 가다",
    "example": "I take my dog to the park.",
    "exampleChunks": [
      "I",
      "take",
      "my",
      "dog",
      "to",
      "the",
      "park."
    ],
    "media": {
      "gif": "https://d8j0ntlcm91z4.cloudfront.net/user_3BO3KyJ9rz504vburMhH4hlonmN/hf_20260508_034236_52a8738c-5307-461d-9938-fb603cef4653.mp4",
      "video": "https://d8j0ntlcm91z4.cloudfront.net/user_3BO3KyJ9rz504vburMhH4hlonmN/hf_20260508_034236_52a8738c-5307-461d-9938-fb603cef4653.mp4",
      "thumb": "https://d8j0ntlcm91z4.cloudfront.net/user_3BO3KyJ9rz504vburMhH4hlonmN/hf_20260508_024438_039902a9-f762-4bcf-9f7f-ea6ece584f6d.png",
      "placeholder": "🐕",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G1_Day%203_007_take_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G1_Day%203_007_take_sentence.mp3"
      }
    }
  },
  {
    "id": "click",
    "grade": 1,
    "day": 3,
    "seq": 8,
    "word": "click",
    "pos": "v.",
    "meaning": "버튼을 누르다, 찰칵 소리가 나다",
    "example": "He clicks the button.",
    "exampleChunks": [
      "He",
      "clicks",
      "the",
      "button."
    ],
    "media": {
      "gif": "https://d8j0ntlcm91z4.cloudfront.net/user_3BO3KyJ9rz504vburMhH4hlonmN/hf_20260508_034245_98540d7b-6a7c-4d8a-b5c9-d5a0e8294a19.mp4",
      "video": "https://d8j0ntlcm91z4.cloudfront.net/user_3BO3KyJ9rz504vburMhH4hlonmN/hf_20260508_034245_98540d7b-6a7c-4d8a-b5c9-d5a0e8294a19.mp4",
      "thumb": "https://d8j0ntlcm91z4.cloudfront.net/user_3BO3KyJ9rz504vburMhH4hlonmN/hf_20260508_024449_7aa2330c-48ba-46fc-93f6-71ee3e33ec72.png",
      "placeholder": "🖱️",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G1_Day%203_008_click_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G1_Day%203_008_click_sentence.mp3"
      }
    }
  },
  {
    "id": "come",
    "grade": 1,
    "day": 3,
    "seq": 9,
    "word": "come",
    "pos": "v.",
    "meaning": "오다",
    "example": "She comes to the front of the class.",
    "exampleChunks": [
      "She",
      "comes",
      "to",
      "the",
      "front",
      "of",
      "the",
      "class."
    ],
    "media": {
      "gif": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/come.mp4",
      "video": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/come.mp4",
      "thumb": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca%20-%20images/come.jpeg",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G1_Day%203_009_come_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G1_Day%203_009_come_sentence.mp3"
      }
    }
  },
  {
    "id": "love",
    "grade": 1,
    "day": 3,
    "seq": 10,
    "word": "love",
    "pos": "v.",
    "meaning": "사랑하다",
    "example": "I love my mom and dad.",
    "exampleChunks": [
      "I",
      "love",
      "my",
      "mom",
      "and",
      "dad."
    ],
    "media": {
      "gif": "https://d8j0ntlcm91z4.cloudfront.net/user_3BO3KyJ9rz504vburMhH4hlonmN/hf_20260508_034300_ebd3f2a7-4e2f-4314-b734-abc93f270674.mp4",
      "video": "https://d8j0ntlcm91z4.cloudfront.net/user_3BO3KyJ9rz504vburMhH4hlonmN/hf_20260508_034300_ebd3f2a7-4e2f-4314-b734-abc93f270674.mp4",
      "thumb": "https://d8j0ntlcm91z4.cloudfront.net/user_3BO3KyJ9rz504vburMhH4hlonmN/hf_20260508_024508_4e4214c3-286d-44f6-bd20-80297ceeb79a.png",
      "placeholder": "❤️",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G1_Day%203_010_love_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G1_Day%203_010_love_sentence.mp3"
      }
    }
  },
  {
    "id": "hold",
    "grade": 1,
    "day": 3,
    "seq": 11,
    "word": "hold",
    "pos": "v.",
    "meaning": "듣다, 잡다",
    "example": "She holds a picture of a tiger.",
    "exampleChunks": [
      "She",
      "holds",
      "a",
      "picture",
      "of",
      "a",
      "tiger."
    ],
    "media": {
      "gif": "https://d8j0ntlcm91z4.cloudfront.net/user_3BO3KyJ9rz504vburMhH4hlonmN/hf_20260624_054654_a5c9c1ad-a532-4109-8f91-c33788532580.mp4",
      "video": "https://d8j0ntlcm91z4.cloudfront.net/user_3BO3KyJ9rz504vburMhH4hlonmN/hf_20260624_054654_a5c9c1ad-a532-4109-8f91-c33788532580.mp4",
      "thumb": "https://d2ol7oe51mr4n9.cloudfront.net/user_3BO3KyJ9rz504vburMhH4hlonmN/c34150dc-f978-4b58-a993-0820518be732.png",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G1_Day%203_011_hold_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G1_Day%203_011_hold_sentence.mp3"
      }
    }
  },
  {
    "id": "fight",
    "grade": 1,
    "day": 3,
    "seq": 12,
    "word": "fight",
    "pos": "v.",
    "meaning": "싸우다, 다투다",
    "example": "My children sometimes fight one another.",
    "exampleChunks": [
      "My",
      "children",
      "sometimes",
      "fight",
      "one",
      "another."
    ],
    "media": {
      "gif": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/fight.mp4",
      "video": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/fight.mp4",
      "thumb": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca%20-%20images/fight.jpeg",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G1_Day%203_012_fight_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G1_Day%203_012_fight_sentence.mp3"
      }
    }
  },
  {
    "id": "like",
    "grade": 1,
    "day": 3,
    "seq": 13,
    "word": "like",
    "pos": "v.",
    "meaning": "좋아하다",
    "example": "He likes strawberry candy.",
    "exampleChunks": [
      "He",
      "likes",
      "strawberry",
      "candy."
    ],
    "media": {
      "gif": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/like.mp4",
      "video": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/like.mp4",
      "thumb": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca%20-%20images/like.jpeg",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G1_Day%203_013_like_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G1_Day%203_013_like_sentence.mp3"
      }
    }
  },
  {
    "id": "enjoy",
    "grade": 1,
    "day": 3,
    "seq": 14,
    "word": "enjoy",
    "pos": "v.",
    "meaning": "즐기다",
    "example": "She enjoys classic music.",
    "exampleChunks": [
      "She",
      "enjoys",
      "classic",
      "music."
    ],
    "media": {
      "gif": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/enjoy.mp4",
      "video": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/enjoy.mp4",
      "thumb": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca%20-%20images/enjoy.jpeg",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G1_Day%203_014_enjoy_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G1_Day%203_014_enjoy_sentence.mp3"
      }
    }
  },
  {
    "id": "follow",
    "grade": 1,
    "day": 3,
    "seq": 15,
    "word": "follow",
    "pos": "v.",
    "meaning": "따라가다, 따라오다",
    "example": "We follow the lines.",
    "exampleChunks": [
      "We",
      "follow",
      "the",
      "lines."
    ],
    "media": {
      "gif": "https://d8j0ntlcm91z4.cloudfront.net/user_3BO3KyJ9rz504vburMhH4hlonmN/hf_20260624_055037_2e75cba5-6983-4ff6-878a-fb08d2d62668.mp4",
      "video": "https://d8j0ntlcm91z4.cloudfront.net/user_3BO3KyJ9rz504vburMhH4hlonmN/hf_20260624_055037_2e75cba5-6983-4ff6-878a-fb08d2d62668.mp4",
      "thumb": "https://d2ol7oe51mr4n9.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/6f375fa1-2df2-44bc-a1e7-dcb0fe091a87.png",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G1_Day%203_015_follow_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G1_Day%203_015_follow_sentence.mp3"
      }
    }
  },
  {
    "id": "look_out",
    "grade": 1,
    "day": 3,
    "seq": 16,
    "word": "look out",
    "pos": "v.",
    "meaning": "주의하세요, 조심하세요",
    "example": "We need to look out while crossing the road.",
    "exampleChunks": [
      "We",
      "need",
      "to",
      "look",
      "out",
      "while",
      "crossing",
      "the",
      "road."
    ],
    "media": {
      "gif": "https://d8j0ntlcm91z4.cloudfront.net/user_3BO3KyJ9rz504vburMhH4hlonmN/hf_20260624_055045_a475f090-64ec-435a-b6c9-87a1ea101253.mp4",
      "video": "https://d8j0ntlcm91z4.cloudfront.net/user_3BO3KyJ9rz504vburMhH4hlonmN/hf_20260624_055045_a475f090-64ec-435a-b6c9-87a1ea101253.mp4",
      "thumb": "https://d2ol7oe51mr4n9.cloudfront.net/user_3BO3KyJ9rz504vburMhH4hlonmN/df28fcbe-b4ed-42a9-8348-fbf111f49e66.png",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G1_Day%203_016_look%20out_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G1_Day%203_016_look%20out_sentence.mp3"
      }
    }
  },
  {
    "id": "put",
    "grade": 1,
    "day": 3,
    "seq": 17,
    "word": "put",
    "pos": "v.",
    "meaning": "두다, 놓다",
    "example": "Dad puts his phone on the table.",
    "exampleChunks": [
      "Dad",
      "puts",
      "his",
      "phone",
      "on",
      "the",
      "table."
    ],
    "media": {
      "gif": "https://d8j0ntlcm91z4.cloudfront.net/user_3BO3KyJ9rz504vburMhH4hlonmN/hf_20260624_055052_d84590e7-fb15-400f-a707-78fbeb0b97b2.mp4",
      "video": "https://d8j0ntlcm91z4.cloudfront.net/user_3BO3KyJ9rz504vburMhH4hlonmN/hf_20260624_055052_d84590e7-fb15-400f-a707-78fbeb0b97b2.mp4",
      "thumb": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca%20-%20images/put.jpeg",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G1_Day%203_017_put_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G1_Day%203_017_put_sentence.mp3"
      }
    }
  },
  {
    "id": "turn_on",
    "grade": 1,
    "day": 3,
    "seq": 19,
    "word": "turn on",
    "pos": "v.",
    "meaning": "켜다, ~에 달려 있다",
    "example": "Mom turns on the lights.",
    "exampleChunks": [
      "Mom",
      "turns",
      "on",
      "the",
      "lights."
    ],
    "media": {
      "gif": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/turn-on.mp4",
      "video": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/turn-on.mp4",
      "thumb": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca%20-%20images/turn-on.jpeg",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G1_Day%203_019_turn%20on_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G1_Day%203_019_turn%20on_sentence.mp3"
      }
    }
  },
  {
    "id": "color",
    "grade": 1,
    "day": 3,
    "seq": 20,
    "word": "color",
    "pos": "v.",
    "meaning": "~에 색칠하다, 붉어지다",
    "example": "She colors the table brown.",
    "exampleChunks": [
      "She",
      "colors",
      "the",
      "table",
      "brown."
    ],
    "media": {
      "gif": "https://d8j0ntlcm91z4.cloudfront.net/user_3BO3KyJ9rz504vburMhH4hlonmN/hf_20260624_055113_4607c889-feff-458e-a690-65ef21af558b.mp4",
      "video": "https://d8j0ntlcm91z4.cloudfront.net/user_3BO3KyJ9rz504vburMhH4hlonmN/hf_20260624_055113_4607c889-feff-458e-a690-65ef21af558b.mp4",
      "thumb": "https://d2ol7oe51mr4n9.cloudfront.net/user_3BO3KyJ9rz504vburMhH4hlonmN/7d7874f9-712d-4017-b669-87b2dea9a524.png",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G1_Day%203_020_color_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G1_Day%203_020_color_sentence.mp3"
      }
    }
  },
  {
    "id": "hear",
    "grade": 1,
    "day": 4,
    "seq": 1,
    "word": "hear",
    "pos": "v.",
    "meaning": "듣다",
    "example": "",
    "exampleChunks": [],
    "media": {
      "gif": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/hear.mp4",
      "video": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/hear.mp4",
      "thumb": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca%20-%20images/hear.jpeg",
      "placeholder": "📖",
      "audio": {
        "word": "",
        "example": ""
      }
    }
  },
  {
    "id": "jump",
    "grade": 1,
    "day": 4,
    "seq": 2,
    "word": "jump",
    "pos": "v.",
    "meaning": "뛰다",
    "example": "He jumps into the water.",
    "exampleChunks": [
      "He",
      "jumps",
      "into",
      "the",
      "water."
    ],
    "media": {
      "gif": "https://d8j0ntlcm91z4.cloudfront.net/user_3BO3KyJ9rz504vburMhH4hlonmN/hf_20260624_064143_49e614b1-449e-4a45-8527-65b46e270952.mp4",
      "video": "https://d8j0ntlcm91z4.cloudfront.net/user_3BO3KyJ9rz504vburMhH4hlonmN/hf_20260624_064143_49e614b1-449e-4a45-8527-65b46e270952.mp4",
      "thumb": "https://d2ol7oe51mr4n9.cloudfront.net/user_3BO3KyJ9rz504vburMhH4hlonmN/ab9a4036-9c84-4dcf-9c80-33b8c9e91a67.png",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G1_Day%204_002_jump_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G1_Day%204_002_jump_sentence.mp3"
      }
    }
  },
  {
    "id": "share",
    "grade": 1,
    "day": 4,
    "seq": 3,
    "word": "share",
    "pos": "v.",
    "meaning": "나누다, 공유하다",
    "example": "I share snacks with my sister.",
    "exampleChunks": [
      "I",
      "share",
      "snacks",
      "with",
      "my",
      "sister."
    ],
    "media": {
      "gif": "https://d8j0ntlcm91z4.cloudfront.net/user_3BO3KyJ9rz504vburMhH4hlonmN/hf_20260624_064149_36466d71-079c-4b0b-ae3a-4541cdcc21c0.mp4",
      "video": "https://d8j0ntlcm91z4.cloudfront.net/user_3BO3KyJ9rz504vburMhH4hlonmN/hf_20260624_064149_36466d71-079c-4b0b-ae3a-4541cdcc21c0.mp4",
      "thumb": "https://d2ol7oe51mr4n9.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/175f5ab3-0014-47bf-8db2-0f55b6b64eea.png",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G1_Day%204_003_share_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G1_Day%204_003_share_sentence.mp3"
      }
    }
  },
  {
    "id": "show",
    "grade": 1,
    "day": 4,
    "seq": 4,
    "word": "show",
    "pos": "v.",
    "meaning": "보여주다",
    "example": "He shows me his cat.",
    "exampleChunks": [
      "He",
      "shows",
      "me",
      "his",
      "cat."
    ],
    "media": {
      "gif": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/show.mp4",
      "video": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/show.mp4",
      "thumb": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca%20-%20images/show.jpeg",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G1_Day%204_004_show_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G1_Day%204_004_show_sentence.mp3"
      }
    }
  },
  {
    "id": "stand",
    "grade": 1,
    "day": 4,
    "seq": 5,
    "word": "stand",
    "pos": "v.",
    "meaning": "서다",
    "example": "Kids usually stand in line.",
    "exampleChunks": [
      "Kids",
      "usually",
      "stand",
      "in",
      "line."
    ],
    "media": {
      "gif": "https://d8j0ntlcm91z4.cloudfront.net/user_3BO3KyJ9rz504vburMhH4hlonmN/hf_20260624_064204_c5f2c572-a57c-45d9-bf3d-a3e9ed70df15.mp4",
      "video": "https://d8j0ntlcm91z4.cloudfront.net/user_3BO3KyJ9rz504vburMhH4hlonmN/hf_20260624_064204_c5f2c572-a57c-45d9-bf3d-a3e9ed70df15.mp4",
      "thumb": "https://d2ol7oe51mr4n9.cloudfront.net/user_3BO3KyJ9rz504vburMhH4hlonmN/3e493d5d-f278-4cbe-a56c-f61f45472b5b.png",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G1_Day%204_005_stand_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G1_Day%204_005_stand_sentence.mp3"
      }
    }
  },
  {
    "id": "put_on",
    "grade": 1,
    "day": 4,
    "seq": 6,
    "word": "put on",
    "pos": "v.",
    "meaning": "~을 입다, ~을 바르다",
    "example": "Dad puts on his glasses.",
    "exampleChunks": [
      "Dad",
      "puts",
      "on",
      "his",
      "glasses."
    ],
    "media": {
      "gif": "https://d8j0ntlcm91z4.cloudfront.net/user_3BO3KyJ9rz504vburMhH4hlonmN/hf_20260624_064213_2549a8b0-2f21-46a0-929a-115ef2389e27.mp4",
      "video": "https://d8j0ntlcm91z4.cloudfront.net/user_3BO3KyJ9rz504vburMhH4hlonmN/hf_20260624_064213_2549a8b0-2f21-46a0-929a-115ef2389e27.mp4",
      "thumb": "https://d2ol7oe51mr4n9.cloudfront.net/user_3BO3KyJ9rz504vburMhH4hlonmN/62e58564-bc0e-4514-bc54-cc061a9f4660.png",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G1_Day%204_006_put%20on_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G1_Day%204_006_put%20on_sentence.mp3"
      }
    }
  },
  {
    "id": "swim",
    "grade": 1,
    "day": 4,
    "seq": 7,
    "word": "swim",
    "pos": "v.",
    "meaning": "수영하다",
    "example": "She swims in the pool.",
    "exampleChunks": [
      "She",
      "swims",
      "in",
      "the",
      "pool."
    ],
    "media": {
      "gif": "https://d8j0ntlcm91z4.cloudfront.net/user_3BO3KyJ9rz504vburMhH4hlonmN/hf_20260624_064408_542246f4-08d8-47a0-b83d-268c3e3354e5.mp4",
      "video": "https://d8j0ntlcm91z4.cloudfront.net/user_3BO3KyJ9rz504vburMhH4hlonmN/hf_20260624_064408_542246f4-08d8-47a0-b83d-268c3e3354e5.mp4",
      "thumb": "https://d2ol7oe51mr4n9.cloudfront.net/user_3BO3KyJ9rz504vburMhH4hlonmN/88ab0534-6b6f-4711-8ead-43775bc5d224.png",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G1_Day%204_007_swim_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G1_Day%204_007_swim_sentence.mp3"
      }
    }
  },
  {
    "id": "plant",
    "grade": 1,
    "day": 4,
    "seq": 8,
    "word": "plant",
    "pos": "v.",
    "meaning": "(씨앗 등을) 심다",
    "example": "Mom plants flowers in the garden.",
    "exampleChunks": [
      "Mom",
      "plants",
      "flowers",
      "in",
      "the",
      "garden."
    ],
    "media": {
      "gif": "https://d8j0ntlcm91z4.cloudfront.net/user_3BO3KyJ9rz504vburMhH4hlonmN/hf_20260624_064415_aa314f55-85cb-411f-982c-7bf62acbfa6c.mp4",
      "video": "https://d8j0ntlcm91z4.cloudfront.net/user_3BO3KyJ9rz504vburMhH4hlonmN/hf_20260624_064415_aa314f55-85cb-411f-982c-7bf62acbfa6c.mp4",
      "thumb": "https://d2ol7oe51mr4n9.cloudfront.net/user_3BO3KyJ9rz504vburMhH4hlonmN/71701714-d7af-4267-956a-d9735373306f.png",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G1_Day%204_008_plant_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G1_Day%204_008_plant_sentence.mp3"
      }
    }
  },
  {
    "id": "grow",
    "grade": 1,
    "day": 4,
    "seq": 9,
    "word": "grow",
    "pos": "v.",
    "meaning": "자라다, 기르다",
    "example": "My brother grows his hair.",
    "exampleChunks": [
      "My",
      "brother",
      "grows",
      "his",
      "hair."
    ],
    "media": {
      "gif": "https://d8j0ntlcm91z4.cloudfront.net/user_3BO3KyJ9rz504vburMhH4hlonmN/hf_20260624_064424_2384b4d8-4563-4e9d-963a-d63759cb0b90.mp4",
      "video": "https://d8j0ntlcm91z4.cloudfront.net/user_3BO3KyJ9rz504vburMhH4hlonmN/hf_20260624_064424_2384b4d8-4563-4e9d-963a-d63759cb0b90.mp4",
      "thumb": "https://d2ol7oe51mr4n9.cloudfront.net/user_3BO3KyJ9rz504vburMhH4hlonmN/9d089d13-72be-420e-8f19-dc110a5418d9.png",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G1_Day%204_009_grow_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G1_Day%204_009_grow_sentence.mp3"
      }
    }
  },
  {
    "id": "bounce",
    "grade": 1,
    "day": 4,
    "seq": 10,
    "word": "bounce",
    "pos": "v.",
    "meaning": "튀다, 튀기다",
    "example": "He bounces the ball.",
    "exampleChunks": [
      "He",
      "bounces",
      "the",
      "ball."
    ],
    "media": {
      "gif": "https://d8j0ntlcm91z4.cloudfront.net/user_3BO3KyJ9rz504vburMhH4hlonmN/hf_20260624_064430_d257a878-3e40-493a-b056-4e67315aef91.mp4",
      "video": "https://d8j0ntlcm91z4.cloudfront.net/user_3BO3KyJ9rz504vburMhH4hlonmN/hf_20260624_064430_d257a878-3e40-493a-b056-4e67315aef91.mp4",
      "thumb": "https://d2ol7oe51mr4n9.cloudfront.net/user_3BO3KyJ9rz504vburMhH4hlonmN/9185f884-8395-4c69-8699-d52f84d2a9e8.png",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G1_Day%204_010_bounce_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G1_Day%204_010_bounce_sentence.mp3"
      }
    }
  },
  {
    "id": "kick",
    "grade": 1,
    "day": 4,
    "seq": 11,
    "word": "kick",
    "pos": "v.",
    "meaning": "차다",
    "example": "She kicks a soccer ball.",
    "exampleChunks": [
      "She",
      "kicks",
      "a",
      "soccer",
      "ball."
    ],
    "media": {
      "gif": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260623_145857_55735918-58f9-430d-8cd8-d3d29cef1cc1.mp4",
      "video": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260623_145857_55735918-58f9-430d-8cd8-d3d29cef1cc1.mp4",
      "thumb": "https://d2ol7oe51mr4n9.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/56156047-ad0e-45e0-a342-1374df9f052c.png",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G1_Day%204_011_kick_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G1_Day%204_011_kick_sentence.mp3"
      }
    }
  },
  {
    "id": "feed",
    "grade": 1,
    "day": 4,
    "seq": 12,
    "word": "feed",
    "pos": "v.",
    "meaning": "먹이를 주다, 먹이다",
    "example": "He feeds his cat.",
    "exampleChunks": [
      "He",
      "feeds",
      "his",
      "cat."
    ],
    "media": {
      "gif": "https://d8j0ntlcm91z4.cloudfront.net/user_3BO3KyJ9rz504vburMhH4hlonmN/hf_20260624_064445_17e92ee9-6869-448a-bddd-eac7f2997310.mp4",
      "video": "https://d8j0ntlcm91z4.cloudfront.net/user_3BO3KyJ9rz504vburMhH4hlonmN/hf_20260624_064445_17e92ee9-6869-448a-bddd-eac7f2997310.mp4",
      "thumb": "https://d2ol7oe51mr4n9.cloudfront.net/user_3BO3KyJ9rz504vburMhH4hlonmN/b1714293-ad5e-4867-b208-e9fcdd91e4a6.png",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G1_Day%204_012_feed_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G1_Day%204_012_feed_sentence.mp3"
      }
    }
  },
  {
    "id": "use",
    "grade": 1,
    "day": 4,
    "seq": 13,
    "word": "use",
    "pos": "v.",
    "meaning": "사용하다",
    "example": "He uses his phone in the class.",
    "exampleChunks": [
      "He",
      "uses",
      "his",
      "phone",
      "in",
      "the",
      "class."
    ],
    "media": {
      "gif": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/use.mp4",
      "video": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/use.mp4",
      "thumb": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca%20-%20images/use.jpeg",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G1_Day%204_013_use_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G1_Day%204_013_use_sentence.mp3"
      }
    }
  },
  {
    "id": "guess",
    "grade": 1,
    "day": 4,
    "seq": 14,
    "word": "guess",
    "pos": "v.",
    "meaning": "추측하다",
    "example": "Can you guess the answer to the question?",
    "exampleChunks": [
      "Can",
      "you",
      "guess",
      "the",
      "answer",
      "to",
      "the",
      "question?"
    ],
    "media": {
      "gif": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/guess.mp4",
      "video": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/guess.mp4",
      "thumb": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca%20-%20images/guess.jpeg",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G1_Day%204_014_guess_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G1_Day%204_014_guess_sentence.mp3"
      }
    }
  },
  {
    "id": "paint",
    "grade": 1,
    "day": 4,
    "seq": 15,
    "word": "paint",
    "pos": "v.",
    "meaning": "(그림 물감으로)\n그리다",
    "example": "She paints a beautiful picture.",
    "exampleChunks": [
      "She",
      "paints",
      "a",
      "beautiful",
      "picture."
    ],
    "media": {
      "gif": "https://d8j0ntlcm91z4.cloudfront.net/user_3BO3KyJ9rz504vburMhH4hlonmN/hf_20260624_065008_2fb9b418-7ca4-4a0a-8e60-eb50ce473dd4.mp4",
      "video": "https://d8j0ntlcm91z4.cloudfront.net/user_3BO3KyJ9rz504vburMhH4hlonmN/hf_20260624_065008_2fb9b418-7ca4-4a0a-8e60-eb50ce473dd4.mp4",
      "thumb": "https://d2ol7oe51mr4n9.cloudfront.net/user_3BO3KyJ9rz504vburMhH4hlonmN/569991be-23db-46ee-a028-1436c95e4a6f.png",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G1_Day%204_015_paint_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G1_Day%204_015_paint_sentence.mp3"
      }
    }
  },
  {
    "id": "turn",
    "grade": 1,
    "day": 4,
    "seq": 16,
    "word": "turn",
    "pos": "v.",
    "meaning": "돌다, 돌리다",
    "example": "She turns around.",
    "exampleChunks": [
      "She",
      "turns",
      "around."
    ],
    "media": {
      "gif": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/turn.mp4",
      "video": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/turn.mp4",
      "thumb": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca%20-%20images/turn.jpeg",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G1_Day%204_016_turn_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G1_Day%204_016_turn_sentence.mp3"
      }
    }
  },
  {
    "id": "mix",
    "grade": 1,
    "day": 4,
    "seq": 17,
    "word": "mix",
    "pos": "v.",
    "meaning": "섞다, 섞이다",
    "example": "I mix red and blue color.",
    "exampleChunks": [
      "I",
      "mix",
      "red",
      "and",
      "blue",
      "color."
    ],
    "media": {
      "gif": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/mix.mp4",
      "video": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/mix.mp4",
      "thumb": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca%20-%20images/mix.jpeg",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G1_Day%204_017_mix_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G1_Day%204_017_mix_sentence.mp3"
      }
    }
  },
  {
    "id": "throw",
    "grade": 1,
    "day": 4,
    "seq": 18,
    "word": "throw",
    "pos": "v.",
    "meaning": "던지다",
    "example": "He throws a ball.",
    "exampleChunks": [
      "He",
      "throws",
      "a",
      "ball."
    ],
    "media": {
      "gif": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/throw.mp4",
      "video": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/throw.mp4",
      "thumb": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca%20-%20images/throw.jpeg",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G1_Day%204_018_throw_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G1_Day%204_018_throw_sentence.mp3"
      }
    }
  },
  {
    "id": "walk",
    "grade": 1,
    "day": 4,
    "seq": 19,
    "word": "walk",
    "pos": "v.",
    "meaning": "걷다",
    "example": "He walks with his dog.",
    "exampleChunks": [
      "He",
      "walks",
      "with",
      "his",
      "dog."
    ],
    "media": {
      "gif": "https://d8j0ntlcm91z4.cloudfront.net/user_3BO3KyJ9rz504vburMhH4hlonmN/hf_20260624_065140_a24a299e-c0d5-4d80-8f0f-e43c68520a68.mp4",
      "video": "https://d8j0ntlcm91z4.cloudfront.net/user_3BO3KyJ9rz504vburMhH4hlonmN/hf_20260624_065140_a24a299e-c0d5-4d80-8f0f-e43c68520a68.mp4",
      "thumb": "https://d2ol7oe51mr4n9.cloudfront.net/user_3BO3KyJ9rz504vburMhH4hlonmN/699ef7d9-3153-4bcb-bf28-3bc2af161a4a.png",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G1_Day%204_019_walk_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G1_Day%204_019_walk_sentence.mp3"
      }
    }
  },
  {
    "id": "taste",
    "grade": 1,
    "day": 4,
    "seq": 20,
    "word": "taste",
    "pos": "v.",
    "meaning": "맛이 나다",
    "example": "The pizza tastes good.",
    "exampleChunks": [
      "The",
      "pizza",
      "tastes",
      "good."
    ],
    "media": {
      "gif": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/taste.mp4",
      "video": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/taste.mp4",
      "thumb": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca%20-%20images/taste.jpeg",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G1_Day%204_020_taste_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G1_Day%204_020_taste_sentence.mp3"
      }
    }
  },
  {
    "id": "sit",
    "grade": 1,
    "day": 5,
    "seq": 1,
    "word": "sit",
    "pos": "v.",
    "meaning": "앉다",
    "example": "I sit next to my brother.",
    "exampleChunks": [
      "I",
      "sit",
      "next",
      "to",
      "my",
      "brother."
    ],
    "media": {
      "gif": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/sit.mp4",
      "video": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/sit.mp4",
      "thumb": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca%20-%20images/sit.jpeg",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G1_Day%205_001_sit_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G1_Day%205_001_sit_sentence.mp3"
      }
    }
  },
  {
    "id": "call",
    "grade": 1,
    "day": 5,
    "seq": 2,
    "word": "call",
    "pos": "v.",
    "meaning": "외치다[부르다], 전화하다",
    "example": "Mom calls my name.",
    "exampleChunks": [
      "Mom",
      "calls",
      "my",
      "name."
    ],
    "media": {
      "gif": "https://d8j0ntlcm91z4.cloudfront.net/user_3BO3KyJ9rz504vburMhH4hlonmN/hf_20260624_083506_a8f9d3c3-c043-4875-91d8-04b9ab0fd8d9.mp4",
      "video": "https://d8j0ntlcm91z4.cloudfront.net/user_3BO3KyJ9rz504vburMhH4hlonmN/hf_20260624_083506_a8f9d3c3-c043-4875-91d8-04b9ab0fd8d9.mp4",
      "thumb": "https://d2ol7oe51mr4n9.cloudfront.net/user_3BO3KyJ9rz504vburMhH4hlonmN/78d634f0-39a4-40e9-afbf-fc2f8d0af5d0.png",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G1_Day%205_002_call_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G1_Day%205_002_call_sentence.mp3"
      }
    }
  },
  {
    "id": "snow",
    "grade": 1,
    "day": 5,
    "seq": 3,
    "word": "snow",
    "pos": "v.",
    "meaning": "눈이 내리다",
    "example": "In winter, it snows often in Korea.",
    "exampleChunks": [
      "In",
      "winter,",
      "it",
      "snows",
      "often",
      "in",
      "Korea."
    ],
    "media": {
      "gif": "https://d8j0ntlcm91z4.cloudfront.net/user_3BO3KyJ9rz504vburMhH4hlonmN/hf_20260624_083513_51c84bd8-a50c-4e6f-9d33-b9b50fada4be.mp4",
      "video": "https://d8j0ntlcm91z4.cloudfront.net/user_3BO3KyJ9rz504vburMhH4hlonmN/hf_20260624_083513_51c84bd8-a50c-4e6f-9d33-b9b50fada4be.mp4",
      "thumb": "https://d2ol7oe51mr4n9.cloudfront.net/user_3BO3KyJ9rz504vburMhH4hlonmN/a60e9a6f-d085-49d0-9800-cce45947cf69.png",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G1_Day%205_003_snow_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G1_Day%205_003_snow_sentence.mp3"
      }
    }
  },
  {
    "id": "curl",
    "grade": 1,
    "day": 5,
    "seq": 4,
    "word": "curl",
    "pos": "v.",
    "meaning": "곱슬곱슬하게하다",
    "example": "She curls her hair with a hot iron.",
    "exampleChunks": [
      "She",
      "curls",
      "her",
      "hair",
      "with",
      "a",
      "hot",
      "iron."
    ],
    "media": {
      "gif": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/curl.mp4",
      "video": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/curl.mp4",
      "thumb": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca%20-%20images/curl.jpeg",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G1_Day%205_004_curl_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G1_Day%205_004_curl_sentence.mp3"
      }
    }
  },
  {
    "id": "sound",
    "grade": 1,
    "day": 5,
    "seq": 5,
    "word": "sound",
    "pos": "v.",
    "meaning": "~처럼 들리다",
    "example": "He sounds angry.",
    "exampleChunks": [
      "He",
      "sounds",
      "angry."
    ],
    "media": {
      "gif": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/sound.mp4",
      "video": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/sound.mp4",
      "thumb": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca%20-%20images/sound.jpeg",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G1_Day%205_005_sound_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G1_Day%205_005_sound_sentence.mp3"
      }
    }
  },
  {
    "id": "shop",
    "grade": 1,
    "day": 5,
    "seq": 6,
    "word": "shop",
    "pos": "v.",
    "meaning": "물건을 사다",
    "example": "Mom shops at the market.",
    "exampleChunks": [
      "Mom",
      "shops",
      "at",
      "the",
      "market."
    ],
    "media": {
      "gif": "https://d8j0ntlcm91z4.cloudfront.net/user_3BO3KyJ9rz504vburMhH4hlonmN/hf_20260624_083537_cbc5a74e-7310-4daa-9b2c-ae3ba4d00bb1.mp4",
      "video": "https://d8j0ntlcm91z4.cloudfront.net/user_3BO3KyJ9rz504vburMhH4hlonmN/hf_20260624_083537_cbc5a74e-7310-4daa-9b2c-ae3ba4d00bb1.mp4",
      "thumb": "https://d2ol7oe51mr4n9.cloudfront.net/user_3BO3KyJ9rz504vburMhH4hlonmN/49530848-bd31-4b21-a589-42852df58fb5.png",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G1_Day%205_006_shop_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G1_Day%205_006_shop_sentence.mp3"
      }
    }
  },
  {
    "id": "fall",
    "grade": 1,
    "day": 5,
    "seq": 7,
    "word": "fall",
    "pos": "v.",
    "meaning": "떨어지다, 내리다",
    "example": "She falls from the bed.",
    "exampleChunks": [
      "She",
      "falls",
      "from",
      "the",
      "bed."
    ],
    "media": {
      "gif": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/fall.mp4",
      "video": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/fall.mp4",
      "thumb": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca%20-%20images/fall.jpeg",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G1_Day%205_007_fall_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G1_Day%205_007_fall_sentence.mp3"
      }
    }
  },
  {
    "id": "stop",
    "grade": 1,
    "day": 5,
    "seq": 8,
    "word": "stop",
    "pos": "v.",
    "meaning": "멈추다, 막다",
    "example": "She stops the taxi.",
    "exampleChunks": [
      "She",
      "stops",
      "the",
      "taxi."
    ],
    "media": {
      "gif": "https://d8j0ntlcm91z4.cloudfront.net/user_3BO3KyJ9rz504vburMhH4hlonmN/hf_20260624_084055_bb18a3fc-7dfe-402c-b68d-c12404c2b9cb.mp4",
      "video": "https://d8j0ntlcm91z4.cloudfront.net/user_3BO3KyJ9rz504vburMhH4hlonmN/hf_20260624_084055_bb18a3fc-7dfe-402c-b68d-c12404c2b9cb.mp4",
      "thumb": "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd2ol7oe51mr4n9.cloudfront.net%2Fuser_3BO3KyJ9rz504vburMhH4hlonmN%2F6f9eee58-b3a7-48ac-9a0e-0a9c0827199a.png&w=1280&q=85",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G1_Day%205_008_stop_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G1_Day%205_008_stop_sentence.mp3"
      }
    }
  },
  {
    "id": "drink",
    "grade": 1,
    "day": 5,
    "seq": 9,
    "word": "drink",
    "pos": "v.",
    "meaning": "마시다",
    "example": "Dad drinks coffee.",
    "exampleChunks": [
      "Dad",
      "drinks",
      "coffee."
    ],
    "media": {
      "gif": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/drink.mp4",
      "video": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/drink.mp4",
      "thumb": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca%20-%20images/drink.jpeg",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G1_Day%205_009_drink_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G1_Day%205_009_drink_sentence.mp3"
      }
    }
  },
  {
    "id": "think",
    "grade": 1,
    "day": 5,
    "seq": 11,
    "word": "think",
    "pos": "v.",
    "meaning": "생각하다, 상상하다",
    "example": "I think about him everyday.",
    "exampleChunks": [
      "I",
      "think",
      "about",
      "him",
      "everyday."
    ],
    "media": {
      "gif": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260703_184313_ef7cb066-8d94-4e66-932b-70d6e20e07bc.mp4",
      "video": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260703_184313_ef7cb066-8d94-4e66-932b-70d6e20e07bc.mp4",
      "thumb": "https://d2ol7oe51mr4n9.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/49084566-b4cd-4595-9a35-ea72d6eca386.png",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G1_Day%205_011_think_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G1_Day%205_011_think_sentence.mp3"
      }
    }
  },
  {
    "id": "speak",
    "grade": 1,
    "day": 5,
    "seq": 12,
    "word": "speak",
    "pos": "v.",
    "meaning": "말하다, 이야기하다",
    "example": "She speaks English well.",
    "exampleChunks": [
      "She",
      "speaks",
      "English",
      "well."
    ],
    "media": {
      "gif": "https://d8j0ntlcm91z4.cloudfront.net/user_3BO3KyJ9rz504vburMhH4hlonmN/hf_20260624_084129_b2f4a57b-32f3-4891-8733-416821d9a911.mp4",
      "video": "https://d8j0ntlcm91z4.cloudfront.net/user_3BO3KyJ9rz504vburMhH4hlonmN/hf_20260624_084129_b2f4a57b-32f3-4891-8733-416821d9a911.mp4",
      "thumb": "https://d2ol7oe51mr4n9.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/39156664-84d7-4cd9-9d5f-d4fe13db7d0d.png",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G1_Day%205_012_speak_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G1_Day%205_012_speak_sentence.mp3"
      }
    }
  },
  {
    "id": "stay",
    "grade": 1,
    "day": 5,
    "seq": 13,
    "word": "stay",
    "pos": "v.",
    "meaning": "머물다, 지내다",
    "example": "He stays at my house.",
    "exampleChunks": [
      "He",
      "stays",
      "at",
      "my",
      "house."
    ],
    "media": {
      "gif": "https://d8j0ntlcm91z4.cloudfront.net/user_3BO3KyJ9rz504vburMhH4hlonmN/hf_20260624_084136_e388318d-af51-444b-8c7b-63970e38a506.mp4",
      "video": "https://d8j0ntlcm91z4.cloudfront.net/user_3BO3KyJ9rz504vburMhH4hlonmN/hf_20260624_084136_e388318d-af51-444b-8c7b-63970e38a506.mp4",
      "thumb": "https://d2ol7oe51mr4n9.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/26bccf86-700e-45d5-ae21-f3c806e45a6e.png",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G1_Day%205_013_stay_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G1_Day%205_013_stay_sentence.mp3"
      }
    }
  },
  {
    "id": "touch",
    "grade": 1,
    "day": 5,
    "seq": 14,
    "word": "touch",
    "pos": "v.",
    "meaning": "만지다",
    "example": "She touches the cat.",
    "exampleChunks": [
      "She",
      "touches",
      "the",
      "cat."
    ],
    "media": {
      "gif": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/touch.mp4",
      "video": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/touch.mp4",
      "thumb": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca%20-%20images/touch.jpeg",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G1_Day%205_014_touch_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G1_Day%205_014_touch_sentence.mp3"
      }
    }
  },
  {
    "id": "try",
    "grade": 1,
    "day": 5,
    "seq": 15,
    "word": "try",
    "pos": "v.",
    "meaning": "노력하다, 시도하다",
    "example": "I try my best on the math test.",
    "exampleChunks": [
      "I",
      "try",
      "my",
      "best",
      "on",
      "the",
      "math",
      "test."
    ],
    "media": {
      "gif": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/try.mp4",
      "video": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/try.mp4",
      "thumb": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca%20-%20images/try.jpeg",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G1_Day%205_015_try_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G1_Day%205_015_try_sentence.mp3"
      }
    }
  },
  {
    "id": "miss",
    "grade": 1,
    "day": 5,
    "seq": 16,
    "word": "miss",
    "pos": "v.",
    "meaning": "놓치다, 그리워하다",
    "example": "I sometimes miss school bus.",
    "exampleChunks": [
      "I",
      "sometimes",
      "miss",
      "school",
      "bus."
    ],
    "media": {
      "gif": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/miss.mp4",
      "video": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/miss.mp4",
      "thumb": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca%20-%20images/miss.jpeg",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G1_Day%205_016_miss_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G1_Day%205_016_miss_sentence.mp3"
      }
    }
  },
  {
    "id": "visit",
    "grade": 1,
    "day": 5,
    "seq": 17,
    "word": "visit",
    "pos": "v.",
    "meaning": "방문하다",
    "example": "My brother and I visit grandmother's home.",
    "exampleChunks": [
      "My",
      "brother",
      "and",
      "I",
      "visit",
      "grandmother's",
      "home."
    ],
    "media": {
      "gif": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/visit.mp4",
      "video": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/visit.mp4",
      "thumb": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca%20-%20images/visit.jpeg",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G1_Day%205_017_visit_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G1_Day%205_017_visit_sentence.mp3"
      }
    }
  },
  {
    "id": "join",
    "grade": 1,
    "day": 5,
    "seq": 18,
    "word": "join",
    "pos": "v.",
    "meaning": "참여하다, 가입하다",
    "example": "He joins the party.",
    "exampleChunks": [
      "He",
      "joins",
      "the",
      "party."
    ],
    "media": {
      "gif": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/join.mp4",
      "video": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/join.mp4",
      "thumb": "https://d2ol7oe51mr4n9.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/ed67bf0f-723a-46ab-86d6-77299f15f286.png",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G1_Day%205_018_join_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G1_Day%205_018_join_sentence.mp3"
      }
    }
  },
  {
    "id": "keep",
    "grade": 1,
    "day": 5,
    "seq": 19,
    "word": "keep",
    "pos": "v.",
    "meaning": "지키다, 유지하다",
    "example": "She keeps a snack in her backpack.",
    "exampleChunks": [
      "She",
      "keeps",
      "a",
      "snack",
      "in",
      "her",
      "backpack."
    ],
    "media": {
      "gif": "https://d8j0ntlcm91z4.cloudfront.net/user_3BO3KyJ9rz504vburMhH4hlonmN/hf_20260624_084555_549ec348-218a-43c4-b9ca-aaa84baa65f9.mp4",
      "video": "https://d8j0ntlcm91z4.cloudfront.net/user_3BO3KyJ9rz504vburMhH4hlonmN/hf_20260624_084555_549ec348-218a-43c4-b9ca-aaa84baa65f9.mp4",
      "thumb": "https://d2ol7oe51mr4n9.cloudfront.net/user_3BO3KyJ9rz504vburMhH4hlonmN/533b8a9a-f77b-46cd-90b5-4461822b5960.png",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G1_Day%205_019_keep_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G1_Day%205_019_keep_sentence.mp3"
      }
    }
  },
  {
    "id": "laugh",
    "grade": 1,
    "day": 5,
    "seq": 20,
    "word": "laugh",
    "pos": "v.",
    "meaning": "웃다",
    "example": "Mom laughs loudly.",
    "exampleChunks": [
      "Mom",
      "laughs",
      "loudly."
    ],
    "media": {
      "gif": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/laugh.mp4",
      "video": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/laugh.mp4",
      "thumb": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca%20-%20images/laugh.jpeg",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G1_Day%205_020_laugh_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G1_Day%205_020_laugh_sentence.mp3"
      }
    }
  },
  {
    "id": "learn",
    "grade": 1,
    "day": 6,
    "seq": 1,
    "word": "learn",
    "pos": "v.",
    "meaning": "배우다",
    "example": "Kids learn English at school.",
    "exampleChunks": [
      "Kids",
      "learn",
      "English",
      "at",
      "school."
    ],
    "media": {
      "gif": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260625_123541_b70487a4-6dca-43cd-9893-e454d323dcf1.mp4",
      "video": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260625_123541_b70487a4-6dca-43cd-9893-e454d323dcf1.mp4",
      "thumb": "https://d2ol7oe51mr4n9.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/b22a81f0-56ac-4d0a-ac40-6f44bb137ce6.png",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G1_Day%206_001_learn_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G1_Day%206_001_learn_sentence.mp3"
      }
    }
  },
  {
    "id": "leave",
    "grade": 1,
    "day": 6,
    "seq": 2,
    "word": "leave",
    "pos": "v.",
    "meaning": "떠나다",
    "example": "He leaves his hometown.",
    "exampleChunks": [
      "He",
      "leaves",
      "his",
      "hometown."
    ],
    "media": {
      "gif": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/leave.mp4",
      "video": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/leave.mp4",
      "thumb": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca%20-%20images/leave.jpeg",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G1_Day%206_002_leave_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G1_Day%206_002_leave_sentence.mp3"
      }
    }
  },
  {
    "id": "travel",
    "grade": 1,
    "day": 6,
    "seq": 3,
    "word": "travel",
    "pos": "v.",
    "meaning": "여행하다",
    "example": "My brother travels all over the world.",
    "exampleChunks": [
      "My",
      "brother",
      "travels",
      "all",
      "over",
      "the",
      "world."
    ],
    "media": {
      "gif": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/travel.mp4",
      "video": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/travel.mp4",
      "thumb": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca%20-%20images/travel.jpeg",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G1_Day%206_003_travel_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G1_Day%206_003_travel_sentence.mp3"
      }
    }
  },
  {
    "id": "feel",
    "grade": 1,
    "day": 6,
    "seq": 4,
    "word": "feel",
    "pos": "v.",
    "meaning": "느끼다",
    "example": "She feels happy.",
    "exampleChunks": [
      "She",
      "feels",
      "happy."
    ],
    "media": {
      "gif": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/feel.mp4",
      "video": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/feel.mp4",
      "thumb": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca%20-%20images/feel.jpeg",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G1_Day%206_004_feel_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G1_Day%206_004_feel_sentence.mp3"
      }
    }
  },
  {
    "id": "teach",
    "grade": 1,
    "day": 6,
    "seq": 5,
    "word": "teach",
    "pos": "v.",
    "meaning": "가르치다",
    "example": "My sister teaches me math.",
    "exampleChunks": [
      "My",
      "sister",
      "teaches",
      "me",
      "math."
    ],
    "media": {
      "gif": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/teach.mp4",
      "video": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/teach.mp4",
      "thumb": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca%20-%20images/teach.jpeg",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G1_Day%206_005_teach_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G1_Day%206_005_teach_sentence.mp3"
      }
    }
  },
  {
    "id": "annoy",
    "grade": 1,
    "day": 6,
    "seq": 6,
    "word": "annoy",
    "pos": "v.",
    "meaning": "짜증나게 하다",
    "example": "My little brother annoys me.",
    "exampleChunks": [
      "My",
      "little",
      "brother",
      "annoys",
      "me."
    ],
    "media": {
      "gif": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/annoy.mp4",
      "video": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/annoy.mp4",
      "thumb": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca%20-%20images/annoy.jpeg",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G1_Day%206_006_annoy_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G1_Day%206_006_annoy_sentence.mp3"
      }
    }
  },
  {
    "id": "pay_attention",
    "grade": 1,
    "day": 6,
    "seq": 7,
    "word": "pay attention",
    "pos": "v.",
    "meaning": "주의하다, 주목하다",
    "example": "Students should pay attention to teachers.",
    "exampleChunks": [
      "Students",
      "should",
      "pay",
      "attention",
      "to",
      "teachers."
    ],
    "media": {
      "gif": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/pay-attention.mp4",
      "video": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/pay-attention.mp4",
      "thumb": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca%20-%20images/pay-attention.jpeg",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G1_Day%206_007_pay%20attention_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G1_Day%206_007_pay%20attention_sentence.mp3"
      }
    }
  },
  {
    "id": "calm",
    "grade": 1,
    "day": 6,
    "seq": 8,
    "word": "calm",
    "pos": "v.",
    "meaning": "차분하다[고요하다]",
    "example": "Please calm down.",
    "exampleChunks": [
      "Please",
      "calm",
      "down."
    ],
    "media": {
      "gif": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/calm.mp4",
      "video": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/calm.mp4",
      "thumb": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca%20-%20images/calm.jpeg",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G1_Day%206_008_calm_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G1_Day%206_008_calm_sentence.mp3"
      }
    }
  },
  {
    "id": "comfort",
    "grade": 1,
    "day": 6,
    "seq": 9,
    "word": "comfort",
    "pos": "v.",
    "meaning": "편안하게 하다",
    "example": "My best friends always comfort me.",
    "exampleChunks": [
      "My",
      "best",
      "friends",
      "always",
      "comfort",
      "me."
    ],
    "media": {
      "gif": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/comfort.mp4",
      "video": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/comfort.mp4",
      "thumb": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca%20-%20images/comfort.jpeg",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G1_Day%206_009_comfort_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G1_Day%206_009_comfort_sentence.mp3"
      }
    }
  },
  {
    "id": "pack",
    "grade": 1,
    "day": 6,
    "seq": 10,
    "word": "pack",
    "pos": "v.",
    "meaning": "싸다[포장하다]",
    "example": "",
    "exampleChunks": [],
    "media": {
      "gif": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/pack.mp4",
      "video": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/pack.mp4",
      "thumb": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca%20-%20images/pack.jpeg",
      "placeholder": "📖",
      "audio": {
        "word": "",
        "example": ""
      }
    }
  },
  {
    "id": "wonder",
    "grade": 1,
    "day": 6,
    "seq": 11,
    "word": "wonder",
    "pos": "v.",
    "meaning": "궁금해 하다",
    "example": "The children wonder the strange noise.",
    "exampleChunks": [
      "The",
      "children",
      "wonder",
      "the",
      "strange",
      "noise."
    ],
    "media": {
      "gif": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260625_123556_07646ece-362d-484f-84b5-f31a037a46c8.mp4",
      "video": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260625_123556_07646ece-362d-484f-84b5-f31a037a46c8.mp4",
      "thumb": "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd2ol7oe51mr4n9.cloudfront.net%2Fuser_3Bfqnph7JZyUpQdqDvhdpHlpkN1%2F46d39975-1644-45e1-8020-7dbd27c3fe67.png&w=1920&q=85",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G1_Day%206_011_wonder_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G1_Day%206_011_wonder_sentence.mp3"
      }
    }
  },
  {
    "id": "curve",
    "grade": 1,
    "day": 6,
    "seq": 12,
    "word": "curve",
    "pos": "v.",
    "meaning": "구부리다",
    "example": "She curves the ribbon around the box.",
    "exampleChunks": [
      "She",
      "curves",
      "the",
      "ribbon",
      "around",
      "the",
      "box."
    ],
    "media": {
      "gif": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/curve.mp4",
      "video": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/curve.mp4",
      "thumb": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca%20-%20images/curve.jpeg",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G1_Day%206_012_curve_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G1_Day%206_012_curve_sentence.mp3"
      }
    }
  },
  {
    "id": "decide",
    "grade": 1,
    "day": 6,
    "seq": 13,
    "word": "decide",
    "pos": "v.",
    "meaning": "결정하다",
    "example": "He decides to drink milk.",
    "exampleChunks": [
      "He",
      "decides",
      "to",
      "drink",
      "milk."
    ],
    "media": {
      "gif": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/decide.mp4",
      "video": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/decide.mp4",
      "thumb": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca%20-%20images/decide.jpeg",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G1_Day%206_013_decide_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G1_Day%206_013_decide_sentence.mp3"
      }
    }
  },
  {
    "id": "drop",
    "grade": 1,
    "day": 6,
    "seq": 14,
    "word": "drop",
    "pos": "v.",
    "meaning": "떨어지다",
    "example": "The leaves drop from the trees.",
    "exampleChunks": [
      "The",
      "leaves",
      "drop",
      "from",
      "the",
      "trees."
    ],
    "media": {
      "gif": "https://d8j0ntlcm91z4.cloudfront.net/user_3BO3KyJ9rz504vburMhH4hlonmN/hf_20260625_042922_841d99ce-a7bf-4911-9721-b2f6f599a489.mp4",
      "video": "https://d8j0ntlcm91z4.cloudfront.net/user_3BO3KyJ9rz504vburMhH4hlonmN/hf_20260625_042922_841d99ce-a7bf-4911-9721-b2f6f599a489.mp4",
      "thumb": "https://d2ol7oe51mr4n9.cloudfront.net/user_3BO3KyJ9rz504vburMhH4hlonmN/9185f884-8395-4c69-8699-d52f84d2a9e8.png",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G1_Day%206_014_drop_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G1_Day%206_014_drop_sentence.mp3"
      }
    }
  },
  {
    "id": "discover",
    "grade": 1,
    "day": 6,
    "seq": 15,
    "word": "discover",
    "pos": "v.",
    "meaning": "발견하다, 알아차리다",
    "example": "She discovers a hidden treasure",
    "exampleChunks": [
      "She",
      "discovers",
      "a",
      "hidden",
      "treasure"
    ],
    "media": {
      "gif": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/discover.mp4",
      "video": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/discover.mp4",
      "thumb": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca%20-%20images/dicover.jpeg",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G1_Day%206_015_discover_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G1_Day%206_015_discover_sentence.mp3"
      }
    }
  },
  {
    "id": "disappoint",
    "grade": 1,
    "day": 6,
    "seq": 16,
    "word": "disappoint",
    "pos": "v.",
    "meaning": "실망시키다, 실망을 안겨 주다",
    "example": "He disappointes to his sister.",
    "exampleChunks": [
      "He",
      "disappointes",
      "to",
      "his",
      "sister."
    ],
    "media": {
      "gif": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260625_134054_aa53522c-d825-4319-b718-0fc97ece5799.mp4",
      "video": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260625_134054_aa53522c-d825-4319-b718-0fc97ece5799.mp4",
      "thumb": "https://d2ol7oe51mr4n9.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/6fb5d2bd-f706-4bbe-9af0-dd43e390e374.png",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G1_Day%206_016_disappoint_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G1_Day%206_016_disappoint_sentence.mp3"
      }
    }
  },
  {
    "id": "embarrass",
    "grade": 1,
    "day": 6,
    "seq": 17,
    "word": "embarrass",
    "pos": "v.",
    "meaning": "당황스럽게 만들다[곤란하게 만들다]",
    "example": "Mike embarrasses me.",
    "exampleChunks": [
      "Mike",
      "embarrasses",
      "me."
    ],
    "media": {
      "gif": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/embarrass.mp4",
      "video": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/embarrass.mp4",
      "thumb": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca%20-%20images/embarrass.jpeg",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G1_Day%206_017_embarrass_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G1_Day%206_017_embarrass_sentence.mp3"
      }
    }
  },
  {
    "id": "pat",
    "grade": 1,
    "day": 6,
    "seq": 18,
    "word": "pat",
    "pos": "v.",
    "meaning": "두드리다",
    "example": "Dad pats his pockets.",
    "exampleChunks": [
      "Dad",
      "pats",
      "his",
      "pockets."
    ],
    "media": {
      "gif": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/pat.mp4",
      "video": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/pat.mp4",
      "thumb": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca%20-%20images/pat.jpeg",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G1_Day%206_018_pat_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G1_Day%206_018_pat_sentence.mp3"
      }
    }
  },
  {
    "id": "exhaust",
    "grade": 1,
    "day": 6,
    "seq": 19,
    "word": "exhaust",
    "pos": "v.",
    "meaning": "기진맥진 하다",
    "example": "",
    "exampleChunks": [],
    "media": {
      "gif": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/exhaust.mp4",
      "video": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/exhaust.mp4",
      "thumb": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca%20-%20images/exhaust.jpeg",
      "placeholder": "📖",
      "audio": {
        "word": "",
        "example": ""
      }
    }
  },
  {
    "id": "explore",
    "grade": 1,
    "day": 6,
    "seq": 20,
    "word": "explore",
    "pos": "v.",
    "meaning": "탐험하다",
    "example": "",
    "exampleChunks": [],
    "media": {
      "gif": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/explore.mp4",
      "video": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/explore.mp4",
      "thumb": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca%20-%20images/explore.jpeg",
      "placeholder": "📖",
      "audio": {
        "word": "",
        "example": ""
      }
    }
  },
  {
    "id": "equal",
    "grade": 1,
    "day": 7,
    "seq": 1,
    "word": "equal",
    "pos": "v.",
    "meaning": "같다",
    "example": "Two plus two equals four.",
    "exampleChunks": [
      "Two",
      "plus",
      "two",
      "equals",
      "four."
    ],
    "media": {
      "gif": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/equal.mp4",
      "video": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/equal.mp4",
      "thumb": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca%20-%20images/equal.jpeg",
      "placeholder": "📖",
      "audio": {
        "word": "https://drive.google.com/uc?export=download&id=1_sX9ydMX_pUYyVHikyO-v2Bnn_LUCahi",
        "example": "https://drive.google.com/uc?export=download&id=1moFZAeRwRBY1FAYOrPFB6DWqzgcdiey9"
      }
    }
  },
  {
    "id": "fascinate",
    "grade": 1,
    "day": 7,
    "seq": 2,
    "word": "fascinate",
    "pos": "v.",
    "meaning": "마음을 사로잡다, 매혹하다",
    "example": "The magic show fascinates the audience.",
    "exampleChunks": [
      "The",
      "magic",
      "show",
      "fascinates",
      "the",
      "audience."
    ],
    "media": {
      "gif": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260625_143918_2e9a236e-0b57-40ce-9cd0-013e586a63d5.mp4",
      "video": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260625_143918_2e9a236e-0b57-40ce-9cd0-013e586a63d5.mp4",
      "thumb": "https://d2ol7oe51mr4n9.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/bec6a456-edc1-4901-8434-be9bdea454e9.png",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G1_Day%207_002_fascinate_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G1_Day%207_002_fascinate_sentence.mp3"
      }
    }
  },
  {
    "id": "feast",
    "grade": 1,
    "day": 7,
    "seq": 3,
    "word": "feast",
    "pos": "v.",
    "meaning": "풍성한 식사를 하다",
    "example": "My family feasts on delicious seafood.",
    "exampleChunks": [
      "My",
      "family",
      "feasts",
      "on",
      "delicious",
      "seafood."
    ],
    "media": {
      "gif": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/feast.mp4",
      "video": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/feast.mp4",
      "thumb": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca%20-%20images/feast.jpeg",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G1_Day%207_003_feast_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G1_Day%207_003_feast_sentence.mp3"
      }
    }
  },
  {
    "id": "focus",
    "grade": 1,
    "day": 7,
    "seq": 4,
    "word": "focus",
    "pos": "v.",
    "meaning": "집중하다",
    "example": "She focuses on her studies.",
    "exampleChunks": [
      "She",
      "focuses",
      "on",
      "her",
      "studies."
    ],
    "media": {
      "gif": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260625_143936_7920617b-3473-4c62-b295-b03ba482a644.mp4",
      "video": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260625_143936_7920617b-3473-4c62-b295-b03ba482a644.mp4",
      "thumb": "https://d2ol7oe51mr4n9.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/bac8e816-b799-4f53-96d3-316134517d56.png",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G1_Day%207_004_focus_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G1_Day%207_004_focus_sentence.mp3"
      }
    }
  },
  {
    "id": "frustrate",
    "grade": 1,
    "day": 7,
    "seq": 5,
    "word": "frustrate",
    "pos": "v.",
    "meaning": "좌절하다, 낙담하다",
    "example": "The test result frustrates me.",
    "exampleChunks": [
      "The",
      "test",
      "result",
      "frustrates",
      "me."
    ],
    "media": {
      "gif": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/frusrate.mp4",
      "video": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/frusrate.mp4",
      "thumb": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca%20-%20images/frusrate.jpeg",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G1_Day%207_005_frustrate_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G1_Day%207_005_frustrate_sentence.mp3"
      }
    }
  },
  {
    "id": "punish",
    "grade": 1,
    "day": 7,
    "seq": 6,
    "word": "grow",
    "pos": "v.",
    "meaning": "처벌하다, 벌을 주다",
    "example": "The plant grow over the summer.",
    "exampleChunks": [
      "The",
      "plant",
      "grow",
      "over",
      "the",
      "summer."
    ],
    "media": {
      "gif": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260625_144005_b7280cf6-b347-41d5-8385-bac9cb2882c4.mp4",
      "video": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260625_144005_b7280cf6-b347-41d5-8385-bac9cb2882c4.mp4",
      "thumb": "https://d2ol7oe51mr4n9.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/71ef9523-4e29-4e20-a2de-e5eacdb0bf41.png",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G1_Day%207_006_grow_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G1_Day%207_006_grow_sentence.mp3"
      }
    }
  },
  {
    "id": "punish_g1d7",
    "grade": 1,
    "day": 7,
    "seq": 7,
    "word": "punish",
    "pos": "v.",
    "meaning": "처벌하다[벌을 주다]",
    "example": "The teacher punishes the students.",
    "exampleChunks": [
      "The",
      "teacher",
      "punishes",
      "the",
      "students."
    ],
    "media": {
      "gif": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/punish.mp4",
      "video": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/punish.mp4",
      "thumb": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca%20-%20images/punish.jpeg",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G1_Day%207_007_punish_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G1_Day%207_007_punish_sentence.mp3"
      }
    }
  },
  {
    "id": "increase",
    "grade": 1,
    "day": 7,
    "seq": 8,
    "word": "increase",
    "pos": "v.",
    "meaning": "증가하다[커지다]",
    "example": "The library increases the numbers of books.",
    "exampleChunks": [
      "The",
      "library",
      "increases",
      "the",
      "numbers",
      "of",
      "books."
    ],
    "media": {
      "gif": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/increase.mp4",
      "video": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/increase.mp4",
      "thumb": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca%20-%20images/increase.jpeg",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G1_Day%207_008_increase_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G1_Day%207_008_increase_sentence.mp3"
      }
    }
  },
  {
    "id": "ignore",
    "grade": 1,
    "day": 7,
    "seq": 9,
    "word": "ignore",
    "pos": "v.",
    "meaning": "무시하다",
    "example": "My sister oftne ignore my words.",
    "exampleChunks": [
      "My",
      "sister",
      "oftne",
      "ignore",
      "my",
      "words."
    ],
    "media": {
      "gif": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260625_151952_c7fb5d10-34cd-4141-92c4-fd6c40654858.mp4",
      "video": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260625_151952_c7fb5d10-34cd-4141-92c4-fd6c40654858.mp4",
      "thumb": "https://d2ol7oe51mr4n9.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/c132ce51-edd4-4f2e-9759-4547efe6b0e3.png",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G1_Day%207_009_ignore_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G1_Day%207_009_ignore_sentence.mp3"
      }
    }
  },
  {
    "id": "spell",
    "grade": 1,
    "day": 7,
    "seq": 10,
    "word": "spell",
    "pos": "v.",
    "meaning": "철자를 말하다",
    "example": "Lucy spells her name correctly.",
    "exampleChunks": [
      "Lucy",
      "spells",
      "her",
      "name",
      "correctly."
    ],
    "media": {
      "gif": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/spell.mp4",
      "video": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/spell.mp4",
      "thumb": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca%20-%20images/spell.jpeg",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G1_Day%207_010_spell_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G1_Day%207_010_spell_sentence.mp3"
      }
    }
  },
  {
    "id": "investigate",
    "grade": 1,
    "day": 7,
    "seq": 11,
    "word": "investigate",
    "pos": "v.",
    "meaning": "조사하다, 수사하다",
    "example": "The police officer investigates the crime.",
    "exampleChunks": [
      "The",
      "police",
      "officer",
      "investigates",
      "the",
      "crime."
    ],
    "media": {
      "gif": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260625_151958_df356ff1-686e-40e5-a3c2-c6b4e5445b00.mp4",
      "video": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260625_151958_df356ff1-686e-40e5-a3c2-c6b4e5445b00.mp4",
      "thumb": "https://d2ol7oe51mr4n9.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/ab688495-ea67-45c7-8a98-9ea552347281.png",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G1_Day%207_011_investigate_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G1_Day%207_011_investigate_sentence.mp3"
      }
    }
  },
  {
    "id": "invite",
    "grade": 1,
    "day": 7,
    "seq": 12,
    "word": "invite",
    "pos": "v.",
    "meaning": "초대하다",
    "example": "My sister invites her friends to party.",
    "exampleChunks": [
      "My",
      "sister",
      "invites",
      "her",
      "friends",
      "to",
      "party."
    ],
    "media": {
      "gif": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/invite.mp4",
      "video": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/invite.mp4",
      "thumb": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca%20-%20images/invite.jpeg",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G1_Day%207_012_invite_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G1_Day%207_012_invite_sentence.mp3"
      }
    }
  },
  {
    "id": "matter",
    "grade": 1,
    "day": 7,
    "seq": 13,
    "word": "matter",
    "pos": "v.",
    "meaning": "중요하다",
    "example": "Your opinion matters to me.",
    "exampleChunks": [
      "Your",
      "opinion",
      "matters",
      "to",
      "me."
    ],
    "media": {
      "gif": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260625_152003_460c8992-354f-46d3-ab5b-f545b472eabe.mp4",
      "video": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260625_152003_460c8992-354f-46d3-ab5b-f545b472eabe.mp4",
      "thumb": "https://d2ol7oe51mr4n9.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/a56a0d3c-7f07-4979-a27c-73d3e6e68a67.png",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G1_Day%207_013_matter_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G1_Day%207_013_matter_sentence.mp3"
      }
    }
  },
  {
    "id": "envy",
    "grade": 1,
    "day": 7,
    "seq": 14,
    "word": "envy",
    "pos": "v.",
    "meaning": "질투하다",
    "example": "I sometimes envy my brother.",
    "exampleChunks": [
      "I",
      "sometimes",
      "envy",
      "my",
      "brother."
    ],
    "media": {
      "gif": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260625_152005_0b260ff0-c9c9-46d7-b2de-2cc8aa0a2824.mp4",
      "video": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260625_152005_0b260ff0-c9c9-46d7-b2de-2cc8aa0a2824.mp4",
      "thumb": "https://d2ol7oe51mr4n9.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/b064b1ee-65d7-4421-b4fd-4c2a8b58400c.png",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G1_Day%207_014_envy_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G1_Day%207_014_envy_sentence.mp3"
      }
    }
  },
  {
    "id": "swing",
    "grade": 1,
    "day": 7,
    "seq": 15,
    "word": "swing",
    "pos": "v.",
    "meaning": "흔들리다",
    "example": "She swings her arms.",
    "exampleChunks": [
      "She",
      "swings",
      "her",
      "arms."
    ],
    "media": {
      "gif": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260625_152008_86d23789-8747-4a84-8391-436a88cf2a3b.mp4",
      "video": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260625_152008_86d23789-8747-4a84-8391-436a88cf2a3b.mp4",
      "thumb": "https://d2ol7oe51mr4n9.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/a755835c-06ce-420b-bb55-9d2f48b85098.png",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G1_Day%207_015_swing_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G1_Day%207_015_swing_sentence.mp3"
      }
    }
  },
  {
    "id": "list",
    "grade": 1,
    "day": 7,
    "seq": 16,
    "word": "list",
    "pos": "v.",
    "meaning": "목록에 포함시키다, 나열하다",
    "example": "She lists all the items for her trip.",
    "exampleChunks": [
      "She",
      "lists",
      "all",
      "the",
      "items",
      "for",
      "her",
      "trip."
    ],
    "media": {
      "gif": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260625_152643_56b14e42-dc8c-44f1-a5ab-f72af248708c.mp4",
      "video": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260625_152643_56b14e42-dc8c-44f1-a5ab-f72af248708c.mp4",
      "thumb": "https://d2ol7oe51mr4n9.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/4a56670f-a45f-49fa-9e12-06606ee6ce01.png",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G1_Day%207_016_list_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G1_Day%207_016_list_sentence.mp3"
      }
    }
  },
  {
    "id": "measure",
    "grade": 1,
    "day": 7,
    "seq": 19,
    "word": "measure",
    "pos": "v.",
    "meaning": "측정하다, 정량하다",
    "example": "She measures the length of the table.",
    "exampleChunks": [
      "She",
      "measures",
      "the",
      "length",
      "of",
      "the",
      "table."
    ],
    "media": {
      "gif": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260625_152649_28a6518d-b11a-45c9-8580-404bd75d02ed.mp4",
      "video": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260625_152649_28a6518d-b11a-45c9-8580-404bd75d02ed.mp4",
      "thumb": "https://d2ol7oe51mr4n9.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/36ab9379-3990-4888-b569-387b71e31e07.png",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G1_Day%207_019_measure_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G1_Day%207_019_measure_sentence.mp3"
      }
    }
  },
  {
    "id": "grieve",
    "grade": 1,
    "day": 7,
    "seq": 20,
    "word": "grieve",
    "pos": "v.",
    "meaning": "슬픔에 잠기다, 비통하다",
    "example": "I grieve when I miss my grandma.",
    "exampleChunks": [
      "I",
      "grieve",
      "when",
      "I",
      "miss",
      "my",
      "grandma."
    ],
    "media": {
      "gif": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260625_152532_dea511bd-f35b-48ec-8e4e-ee28b1473b4c.mp4",
      "video": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260625_152532_dea511bd-f35b-48ec-8e4e-ee28b1473b4c.mp4",
      "thumb": "https://d2ol7oe51mr4n9.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/b91b8f03-14b7-42e7-9c49-51d25dccf02a.png",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G1_Day%207_020_grieve_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G1_Day%207_020_grieve_sentence.mp3"
      }
    }
  },
  {
    "id": "mumble",
    "grade": 1,
    "day": 8,
    "seq": 1,
    "word": "mumble",
    "pos": "v.",
    "meaning": "말을 더듬거리다",
    "example": "",
    "exampleChunks": [],
    "media": {
      "gif": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/mumble.mp4",
      "video": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/mumble.mp4",
      "thumb": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca%20-%20images/mumble.jpeg",
      "placeholder": "📖",
      "audio": {
        "word": "",
        "example": ""
      }
    }
  },
  {
    "id": "tap",
    "grade": 1,
    "day": 8,
    "seq": 2,
    "word": "tap",
    "pos": "v.",
    "meaning": "톡톡 두드리다",
    "example": "My mom taps on the door.",
    "exampleChunks": [
      "My",
      "mom",
      "taps",
      "on",
      "the",
      "door."
    ],
    "media": {
      "gif": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260625_161753_984b9f97-a35d-4c87-ab68-1067b037252a.mp4",
      "video": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260625_161753_984b9f97-a35d-4c87-ab68-1067b037252a.mp4",
      "thumb": "https://d2ol7oe51mr4n9.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/f3016b15-2588-4589-a491-ceb6cab08e8b.png",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G1_Day%208_002_tap_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G1_Day%208_002_tap_sentence.mp3"
      }
    }
  },
  {
    "id": "stress_out",
    "grade": 1,
    "day": 8,
    "seq": 3,
    "word": "stress out",
    "pos": "v.",
    "meaning": "긴장하다",
    "example": "The team stresses out before the game.",
    "exampleChunks": [
      "The",
      "team",
      "stresses",
      "out",
      "before",
      "the",
      "game."
    ],
    "media": {
      "gif": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260625_161756_89042099-a1e8-4252-b850-2b004a9cea0f.mp4",
      "video": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260625_161756_89042099-a1e8-4252-b850-2b004a9cea0f.mp4",
      "thumb": "https://d2ol7oe51mr4n9.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/f9768eaf-f89d-4848-9506-b602dc5eb86c.png",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G1_Day%208_003_stress%20out_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G1_Day%208_003_stress%20out_sentence.mp3"
      }
    }
  },
  {
    "id": "nibble",
    "grade": 1,
    "day": 8,
    "seq": 4,
    "word": "nibble",
    "pos": "v.",
    "meaning": "조금씩 먹다, 조금씩 물어먹다",
    "example": "My sister nibbles on a cookie.",
    "exampleChunks": [
      "My",
      "sister",
      "nibbles",
      "on",
      "a",
      "cookie."
    ],
    "media": {
      "gif": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260625_161758_af4e3386-5d26-40c3-9fbe-07ff5084d2eb.mp4",
      "video": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260625_161758_af4e3386-5d26-40c3-9fbe-07ff5084d2eb.mp4",
      "thumb": "https://d2ol7oe51mr4n9.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/ad298327-4302-4bcf-865b-e11678e8ecbd.png",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G1_Day%208_004_nibble_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G1_Day%208_004_nibble_sentence.mp3"
      }
    }
  },
  {
    "id": "note",
    "grade": 1,
    "day": 8,
    "seq": 5,
    "word": "note",
    "pos": "v.",
    "meaning": "기록하다, 주목하다",
    "example": "I will note the homework in my notebook.",
    "exampleChunks": [
      "I",
      "will",
      "note",
      "the",
      "homework",
      "in",
      "my",
      "notebook."
    ],
    "media": {
      "gif": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260625_161800_fb1164cb-fb26-45f3-9b91-b08fa6e5121c.mp4",
      "video": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260625_161800_fb1164cb-fb26-45f3-9b91-b08fa6e5121c.mp4",
      "thumb": "https://d2ol7oe51mr4n9.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/5d7cd16f-1eb3-489c-a870-bf4279c525f3.png",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G1_Day%208_005_note_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G1_Day%208_005_note_sentence.mp3"
      }
    }
  },
  {
    "id": "notice",
    "grade": 1,
    "day": 8,
    "seq": 6,
    "word": "notice",
    "pos": "v.",
    "meaning": "주목하다, 알아차리다",
    "example": "He notices the error in the report.",
    "exampleChunks": [
      "He",
      "notices",
      "the",
      "error",
      "in",
      "the",
      "report."
    ],
    "media": {
      "gif": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260625_161805_5ff71773-8aa8-4c3c-b5ac-1e8c3f196fe6.mp4",
      "video": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260625_161805_5ff71773-8aa8-4c3c-b5ac-1e8c3f196fe6.mp4",
      "thumb": "https://d2ol7oe51mr4n9.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/aff483d4-57e1-47f3-beab-106faee6f957.png",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G1_Day%208_006_notice_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G1_Day%208_006_notice_sentence.mp3"
      }
    }
  },
  {
    "id": "observe",
    "grade": 1,
    "day": 8,
    "seq": 7,
    "word": "observe",
    "pos": "v.",
    "meaning": "~을 보다, 관찰하다",
    "example": "She likes to observe the stars at night.",
    "exampleChunks": [
      "She",
      "likes",
      "to",
      "observe",
      "the",
      "stars",
      "at",
      "night."
    ],
    "media": {
      "gif": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260625_161808_e70c1491-79b3-40c8-a2ec-77c554807b8b.mp4",
      "video": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260625_161808_e70c1491-79b3-40c8-a2ec-77c554807b8b.mp4",
      "thumb": "https://d2ol7oe51mr4n9.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/eb5496b0-2f5c-4a29-a9c8-92464677d20f.png",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G1_Day%208_007_observe_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G1_Day%208_007_observe_sentence.mp3"
      }
    }
  },
  {
    "id": "stuff",
    "grade": 1,
    "day": 8,
    "seq": 8,
    "word": "stuff",
    "pos": "v.",
    "meaning": "채워 넣다",
    "example": "He stuffs his backpack with books.",
    "exampleChunks": [
      "He",
      "stuffs",
      "his",
      "backpack",
      "with",
      "books."
    ],
    "media": {
      "gif": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260625_161810_c99df0a1-23f5-437f-ad87-71876801b940.mp4",
      "video": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260625_161810_c99df0a1-23f5-437f-ad87-71876801b940.mp4",
      "thumb": "https://d2ol7oe51mr4n9.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/1c9265bd-fdf7-40e3-927c-66dc60cd1175.png",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G1_Day%208_008_stuff_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G1_Day%208_008_stuff_sentence.mp3"
      }
    }
  },
  {
    "id": "posit",
    "grade": 1,
    "day": 8,
    "seq": 9,
    "word": "posit",
    "pos": "v.",
    "meaning": "가정하다[제시하다]",
    "example": "The book posits that happiness is a choice.",
    "exampleChunks": [
      "The",
      "book",
      "posits",
      "that",
      "happiness",
      "is",
      "a",
      "choice."
    ],
    "media": {
      "gif": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/posit.mp4",
      "video": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/posit.mp4",
      "thumb": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca%20-%20images/posit.jpeg",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G1_Day%208_009_posit_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G1_Day%208_009_posit_sentence.mp3"
      }
    }
  },
  {
    "id": "hop",
    "grade": 1,
    "day": 8,
    "seq": 10,
    "word": "hop",
    "pos": "v.",
    "meaning": "한발로 깡충깡충 뛰다",
    "example": "The rabbit hops across the field.",
    "exampleChunks": [
      "The",
      "rabbit",
      "hops",
      "across",
      "the",
      "field."
    ],
    "media": {
      "gif": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260625_162619_282c5230-6d70-4f91-a831-75b3ea4f3327.mp4",
      "video": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260625_162619_282c5230-6d70-4f91-a831-75b3ea4f3327.mp4",
      "thumb": "https://d2ol7oe51mr4n9.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/23bb0f3d-7fb4-4241-a69e-cab977cad5c1.png",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G1_Day%208_010_hop_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G1_Day%208_010_hop_sentence.mp3"
      }
    }
  },
  {
    "id": "prefer",
    "grade": 1,
    "day": 8,
    "seq": 11,
    "word": "prefer",
    "pos": "v.",
    "meaning": "선택하다, 선호하다",
    "example": "I prefer apples over bananas.",
    "exampleChunks": [
      "I",
      "prefer",
      "apples",
      "over",
      "bananas."
    ],
    "media": {
      "gif": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260625_162621_8d5dc493-45ec-47e8-8bac-b32ac2de88f9.mp4",
      "video": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260625_162621_8d5dc493-45ec-47e8-8bac-b32ac2de88f9.mp4",
      "thumb": "https://d2ol7oe51mr4n9.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/855b258c-ad7f-4933-a9ab-55078ad1020a.png",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G1_Day%208_011_prefer_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G1_Day%208_011_prefer_sentence.mp3"
      }
    }
  },
  {
    "id": "break",
    "grade": 1,
    "day": 8,
    "seq": 12,
    "word": "break",
    "pos": "v.",
    "meaning": "깨어지다, 부서지다",
    "example": "I break the class rule.",
    "exampleChunks": [
      "I",
      "break",
      "the",
      "class",
      "rule."
    ],
    "media": {
      "gif": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260625_162623_4316beda-c518-4273-b0a1-094089c6ed6e.mp4",
      "video": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260625_162623_4316beda-c518-4273-b0a1-094089c6ed6e.mp4",
      "thumb": "https://d2ol7oe51mr4n9.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/25020e9e-4285-4a8a-a622-6c7422636faa.png",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G1_Day%208_012_break_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G1_Day%208_012_break_sentence.mp3"
      }
    }
  },
  {
    "id": "protect",
    "grade": 1,
    "day": 8,
    "seq": 13,
    "word": "protect",
    "pos": "v.",
    "meaning": "지키다, 보호하다",
    "example": "The police officer protects the citizens from danger.",
    "exampleChunks": [
      "The",
      "police",
      "officer",
      "protects",
      "the",
      "citizens",
      "from",
      "danger."
    ],
    "media": {
      "gif": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260625_162626_31a50ef3-b8cb-4314-a07a-715e0c2b2569.mp4",
      "video": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260625_162626_31a50ef3-b8cb-4314-a07a-715e0c2b2569.mp4",
      "thumb": "https://d2ol7oe51mr4n9.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/cd295316-80a9-4ab8-b757-b48ab48f3399.png",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G1_Day%208_013_protect_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G1_Day%208_013_protect_sentence.mp3"
      }
    }
  },
  {
    "id": "take_pride_in",
    "grade": 1,
    "day": 8,
    "seq": 14,
    "word": "take pride in",
    "pos": "v.",
    "meaning": "자랑스럽게 여기다",
    "example": "She takes pride in her artwork.",
    "exampleChunks": [
      "She",
      "takes",
      "pride",
      "in",
      "her",
      "artwork."
    ],
    "media": {
      "gif": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260625_162628_1210556a-2b44-4a05-8115-bb61002eaecc.mp4",
      "video": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260625_162628_1210556a-2b44-4a05-8115-bb61002eaecc.mp4",
      "thumb": "https://d2ol7oe51mr4n9.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/f497d399-ef49-43af-92d8-1b451f6dfbb3.png",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G1_Day%208_014_take%20pride%20in_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G1_Day%208_014_take%20pride%20in_sentence.mp3"
      }
    }
  },
  {
    "id": "question",
    "grade": 1,
    "day": 8,
    "seq": 15,
    "word": "question",
    "pos": "v.",
    "meaning": "의문을 제기하다, 질문하다",
    "example": "The child questions why the sky is blue.",
    "exampleChunks": [
      "The",
      "child",
      "questions",
      "why",
      "the",
      "sky",
      "is",
      "blue."
    ],
    "media": {
      "gif": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260625_162630_518e3039-9d70-4b31-a256-ad29af1bbce0.mp4",
      "video": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260625_162630_518e3039-9d70-4b31-a256-ad29af1bbce0.mp4",
      "thumb": "https://d2ol7oe51mr4n9.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/79dc156a-daff-4572-a7bf-3a9445ec54c1.png",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G1_Day%208_015_question_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G1_Day%208_015_question_sentence.mp3"
      }
    }
  },
  {
    "id": "reminds",
    "grade": 1,
    "day": 8,
    "seq": 16,
    "word": "reminds",
    "pos": "v.",
    "meaning": "기억하다, 상기시키다",
    "example": "His smile reminds me of my grandfather.",
    "exampleChunks": [
      "His",
      "smile",
      "reminds",
      "me",
      "of",
      "my",
      "grandfather."
    ],
    "media": {
      "gif": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260625_162632_bf7a03eb-ff06-452d-b4db-7b3c963d36f0.mp4",
      "video": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260625_162632_bf7a03eb-ff06-452d-b4db-7b3c963d36f0.mp4",
      "thumb": "https://d2ol7oe51mr4n9.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/724187c3-7f3f-4b08-8c4a-b83f99e1cb71.png",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G1_Day%208_016_reminds_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G1_Day%208_016_reminds_sentence.mp3"
      }
    }
  },
  {
    "id": "repeat",
    "grade": 1,
    "day": 8,
    "seq": 17,
    "word": "repeat",
    "pos": "v.",
    "meaning": "되풀이하다, 반복하다",
    "example": "She asks him to repeat his answer.",
    "exampleChunks": [
      "She",
      "asks",
      "him",
      "to",
      "repeat",
      "his",
      "answer."
    ],
    "media": {
      "gif": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260625_162943_45f2dffc-244f-465f-a11c-4c223c20acaf.mp4",
      "video": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260625_162943_45f2dffc-244f-465f-a11c-4c223c20acaf.mp4",
      "thumb": "https://d2ol7oe51mr4n9.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/00ea4464-7766-401a-b93c-b7a6add5c50d.png",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G1_Day%208_017_repeat_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G1_Day%208_017_repeat_sentence.mp3"
      }
    }
  },
  {
    "id": "report",
    "grade": 1,
    "day": 8,
    "seq": 18,
    "word": "report",
    "pos": "v.",
    "meaning": "알리다",
    "example": "My sister reports the lost wallet to the police.",
    "exampleChunks": [
      "My",
      "sister",
      "reports",
      "the",
      "lost",
      "wallet",
      "to",
      "the",
      "police."
    ],
    "media": {
      "gif": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/report.mp4",
      "video": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/report.mp4",
      "thumb": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca%20-%20images/report.jpeg",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G1_Day%208_018_report_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G1_Day%208_018_report_sentence.mp3"
      }
    }
  },
  {
    "id": "borrow",
    "grade": 1,
    "day": 8,
    "seq": 19,
    "word": "borrow",
    "pos": "v.",
    "meaning": "빌리다",
    "example": "He borrows a book from the library.",
    "exampleChunks": [
      "He",
      "borrows",
      "a",
      "book",
      "from",
      "the",
      "library."
    ],
    "media": {
      "gif": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260625_162947_9d73313a-c940-4b42-a423-f375ff5c1863.mp4",
      "video": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260625_162947_9d73313a-c940-4b42-a423-f375ff5c1863.mp4",
      "thumb": "https://d2ol7oe51mr4n9.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/12e4be52-1ed8-4041-b257-ac17c6ea7a41.png",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G1_Day%208_019_borrow_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G1_Day%208_019_borrow_sentence.mp3"
      }
    }
  },
  {
    "id": "respect",
    "grade": 1,
    "day": 8,
    "seq": 20,
    "word": "respect",
    "pos": "v.",
    "meaning": "존중하다",
    "example": "The students respect the rules of the classroom.",
    "exampleChunks": [
      "The",
      "students",
      "respect",
      "the",
      "rules",
      "of",
      "the",
      "classroom."
    ],
    "media": {
      "gif": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260625_162950_64a742f0-4049-48ce-86c9-6b81dd3feafb.mp4",
      "video": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260625_162950_64a742f0-4049-48ce-86c9-6b81dd3feafb.mp4",
      "thumb": "https://d2ol7oe51mr4n9.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/abef5b48-dad6-4c00-ac1a-009a95ca4c05.png",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G1_Day%208_020_respect_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G1_Day%208_020_respect_sentence.mp3"
      }
    }
  },
  {
    "id": "search_for",
    "grade": 1,
    "day": 9,
    "seq": 1,
    "word": "search for",
    "pos": "v.",
    "meaning": "조사하다, 찾는다",
    "example": "She searches for the information.",
    "exampleChunks": [
      "She",
      "searches",
      "for",
      "the",
      "information."
    ],
    "media": {
      "gif": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260625_171300_90bca31d-c20c-4a99-9380-bb7a964ed708.mp4",
      "video": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260625_171300_90bca31d-c20c-4a99-9380-bb7a964ed708.mp4",
      "thumb": "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd2ol7oe51mr4n9.cloudfront.net%2Fuser_3Bfqnph7JZyUpQdqDvhdpHlpkN1%2Ff5a8df66-9bf5-4e55-a31e-cda451694c7d.png&w=1920&q=85",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G1_Day%209_001_search%20for_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G1_Day%209_001_search%20for_sentence.mp3"
      }
    }
  },
  {
    "id": "check",
    "grade": 1,
    "day": 9,
    "seq": 2,
    "word": "check",
    "pos": "v.",
    "meaning": "살피다",
    "example": "The doctor checks her temperature.",
    "exampleChunks": [
      "The",
      "doctor",
      "checks",
      "her",
      "temperature."
    ],
    "media": {
      "gif": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260625_170935_06c6e334-ed7c-4577-b259-767d6177d4f0.mp4",
      "video": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260625_170935_06c6e334-ed7c-4577-b259-767d6177d4f0.mp4",
      "thumb": "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd2ol7oe51mr4n9.cloudfront.net%2Fuser_3Bfqnph7JZyUpQdqDvhdpHlpkN1%2Ff31703d6-247b-43f4-b690-ab8998292f27.png&w=1920&q=85",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G1_Day%209_002_check_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G1_Day%209_002_check_sentence.mp3"
      }
    }
  },
  {
    "id": "boost",
    "grade": 1,
    "day": 9,
    "seq": 3,
    "word": "boost",
    "pos": "v.",
    "meaning": "신장시키다",
    "example": "Exercise can boost your mood.",
    "exampleChunks": [
      "Exercise",
      "can",
      "boost",
      "your",
      "mood."
    ],
    "media": {
      "gif": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/boost.mp4",
      "video": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/boost.mp4",
      "thumb": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca%20-%20images/boost.jpeg",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G1_Day%209_003_boost_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G1_Day%209_003_boost_sentence.mp3"
      }
    }
  },
  {
    "id": "squirm",
    "grade": 1,
    "day": 9,
    "seq": 4,
    "word": "squirm",
    "pos": "v.",
    "meaning": "꿈틀 대다",
    "example": "I squirm in my seat when I'm excited.",
    "exampleChunks": [
      "I",
      "squirm",
      "in",
      "my",
      "seat",
      "when",
      "I'm",
      "excited."
    ],
    "media": {
      "gif": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260625_170957_4f694352-e8c0-492e-ad0f-7bd3c0d0ec6e.mp4",
      "video": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260625_170957_4f694352-e8c0-492e-ad0f-7bd3c0d0ec6e.mp4",
      "thumb": "https://d2ol7oe51mr4n9.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/025502a1-862c-457b-b167-e535edcb33d5.png",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G1_Day%209_004_squirm_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G1_Day%209_004_squirm_sentence.mp3"
      }
    }
  },
  {
    "id": "stomp",
    "grade": 1,
    "day": 9,
    "seq": 5,
    "word": "stomp",
    "pos": "v.",
    "meaning": "쿵쿵 거리며 걷다, 발을 구르며 춤추다",
    "example": "The man stomps out of the room.",
    "exampleChunks": [
      "The",
      "man",
      "stomps",
      "out",
      "of",
      "the",
      "room."
    ],
    "media": {
      "gif": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260625_171004_23200ee3-9770-4b70-b468-f92998e153cd.mp4",
      "video": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260625_171004_23200ee3-9770-4b70-b468-f92998e153cd.mp4",
      "thumb": "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd2ol7oe51mr4n9.cloudfront.net%2Fuser_3Bfqnph7JZyUpQdqDvhdpHlpkN1%2F71fc5b07-63b6-42f8-a715-713326f0fb83.png&w=1920&q=85",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G1_Day%209_005_stomp_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G1_Day%209_005_stomp_sentence.mp3"
      }
    }
  },
  {
    "id": "fear",
    "grade": 1,
    "day": 9,
    "seq": 6,
    "word": "fear",
    "pos": "v.",
    "meaning": "두려워하다, 무서워하다",
    "example": "She fears walking alone in the dark.",
    "exampleChunks": [
      "She",
      "fears",
      "walking",
      "alone",
      "in",
      "the",
      "dark."
    ],
    "media": {
      "gif": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260625_170938_cc2e372f-8fe4-421a-9187-13fc15c18456.mp4",
      "video": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260625_170938_cc2e372f-8fe4-421a-9187-13fc15c18456.mp4",
      "thumb": "https://d2ol7oe51mr4n9.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/5bbc4e4e-1364-45a4-8f45-76d2d1559b8e.png",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G1_Day%209_006_fear_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G1_Day%209_006_fear_sentence.mp3"
      }
    }
  },
  {
    "id": "suggest",
    "grade": 1,
    "day": 9,
    "seq": 7,
    "word": "suggest",
    "pos": "v.",
    "meaning": "제안하다, 추천하다",
    "example": "Dad suggests having a picnic at park.",
    "exampleChunks": [
      "Dad",
      "suggests",
      "having",
      "a",
      "picnic",
      "at",
      "park."
    ],
    "media": {
      "gif": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260625_171007_64e08ded-91bc-41e1-b227-22d1685feacf.mp4",
      "video": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260625_171007_64e08ded-91bc-41e1-b227-22d1685feacf.mp4",
      "thumb": "https://d2ol7oe51mr4n9.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/d77f003d-3d53-4588-869e-e959674f06c5.png",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G1_Day%209_007_suggest_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G1_Day%209_007_suggest_sentence.mp3"
      }
    }
  },
  {
    "id": "surprise",
    "grade": 1,
    "day": 9,
    "seq": 8,
    "word": "surprise",
    "pos": "v.",
    "meaning": "놀라게 하다, 기습하다",
    "example": "Students surprise their teacher with a gift.",
    "exampleChunks": [
      "Students",
      "surprise",
      "their",
      "teacher",
      "with",
      "a",
      "gift."
    ],
    "media": {
      "gif": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260625_170940_1ec3aaa7-91a4-4fbe-90ef-5fd7f37f39dd.mp4",
      "video": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260625_170940_1ec3aaa7-91a4-4fbe-90ef-5fd7f37f39dd.mp4",
      "thumb": "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd2ol7oe51mr4n9.cloudfront.net%2Fuser_3Bfqnph7JZyUpQdqDvhdpHlpkN1%2Fbf4981e8-0b8d-4180-afdb-801b16ac226e.png&w=1920&q=85",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G1_Day%209_008_surprise_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G1_Day%209_008_surprise_sentence.mp3"
      }
    }
  },
  {
    "id": "reach",
    "grade": 1,
    "day": 9,
    "seq": 9,
    "word": "reach",
    "pos": "v.",
    "meaning": "~에 이르다",
    "example": "He finally reaches his goal.",
    "exampleChunks": [
      "He",
      "finally",
      "reaches",
      "his",
      "goal."
    ],
    "media": {
      "gif": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260625_171015_c65665a5-d158-4fc3-aaaa-58a83f6fe559.mp4",
      "video": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260625_171015_c65665a5-d158-4fc3-aaaa-58a83f6fe559.mp4",
      "thumb": "https://d2ol7oe51mr4n9.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/853e49f4-c548-431c-ba50-9ba1df1f41c9.png",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G1_Day%209_009_reach_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G1_Day%209_009_reach_sentence.mp3"
      }
    }
  },
  {
    "id": "warn",
    "grade": 1,
    "day": 9,
    "seq": 10,
    "word": "warn",
    "pos": "v.",
    "meaning": "경고하다[주의를 주다]",
    "example": "The teacher warns the students.",
    "exampleChunks": [
      "The",
      "teacher",
      "warns",
      "the",
      "students."
    ],
    "media": {
      "gif": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/warn.mp4",
      "video": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/warn.mp4",
      "thumb": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca%20-%20images/warn.jpeg",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G1_Day%209_010_warn_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G1_Day%209_010_warn_sentence.mp3"
      }
    }
  },
  {
    "id": "worry",
    "grade": 1,
    "day": 9,
    "seq": 11,
    "word": "worry",
    "pos": "v.",
    "meaning": "걱정하다",
    "example": "The students worry about the exam.",
    "exampleChunks": [
      "The",
      "students",
      "worry",
      "about",
      "the",
      "exam."
    ],
    "media": {
      "gif": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260625_171355_2b27d455-d21e-4ad8-9d16-ae02fccbf3ed.mp4",
      "video": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260625_171355_2b27d455-d21e-4ad8-9d16-ae02fccbf3ed.mp4",
      "thumb": "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd2ol7oe51mr4n9.cloudfront.net%2Fuser_3Bfqnph7JZyUpQdqDvhdpHlpkN1%2Fbcaa80d7-13d5-4659-ae2e-b863c1517475.png&w=1920&q=85",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G1_Day%209_011_worry_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G1_Day%209_011_worry_sentence.mp3"
      }
    }
  },
  {
    "id": "act",
    "grade": 1,
    "day": 9,
    "seq": 14,
    "word": "act",
    "pos": "v.",
    "meaning": "행동하다",
    "example": "We must act now.",
    "exampleChunks": [
      "We",
      "must",
      "act",
      "now."
    ],
    "media": {
      "gif": "assets/gif/act.gif",
      "video": "assets/video/act.mp4",
      "thumb": "assets/thumb/act-thumb.jpg",
      "placeholder": "🏃",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G1_Day%209_014_act_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G1_Day%209_014_act_sentence.mp3"
      }
    }
  },
  {
    "id": "add",
    "grade": 1,
    "day": 9,
    "seq": 15,
    "word": "add",
    "pos": "v.",
    "meaning": "첨가하다, 덧붙이다",
    "example": "She adds some salt in her soup.",
    "exampleChunks": [
      "She",
      "adds",
      "some",
      "salt",
      "in",
      "her",
      "soup."
    ],
    "media": {
      "gif": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260623_124932_30984066-07a6-4387-92a1-0aeb8c29084b.mp4",
      "video": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260623_124932_30984066-07a6-4387-92a1-0aeb8c29084b.mp4",
      "thumb": "https://d2ol7oe51mr4n9.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/aa0e693c-72b4-478d-aeaf-8a01cadf28c0.png",
      "placeholder": "📖",
      "audio": {
        "word": "https://drive.google.com/uc?export=download&id=12mEtR82niXT841B1766gj2WxqfeLqIQ5",
        "example": "https://drive.google.com/uc?export=download&id=1sQ8M_aPAu6K31jG-kE-vWNSKM3NgTVxK"
      }
    }
  },
  {
    "id": "float",
    "grade": 1,
    "day": 9,
    "seq": 16,
    "word": "float",
    "pos": "v.",
    "meaning": "떠가다",
    "example": "The boat floats on the lake.",
    "exampleChunks": [
      "The",
      "boat",
      "floats",
      "on",
      "the",
      "lake."
    ],
    "media": {
      "gif": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/float.mp4",
      "video": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/float.mp4",
      "thumb": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca%20-%20images/float.jpeg",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G1_Day%209_016_float_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G1_Day%209_016_float_sentence.mp3"
      }
    }
  },
  {
    "id": "should",
    "grade": 1,
    "day": 9,
    "seq": 17,
    "word": "should",
    "pos": "v.",
    "meaning": "~해야 한다",
    "example": "He should apologize for his behavior.",
    "exampleChunks": [
      "He",
      "should",
      "apologize",
      "for",
      "his",
      "behavior."
    ],
    "media": {
      "gif": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260625_173430_0fdbadc4-62e8-4982-88fd-bd0f03842f20.mp4",
      "video": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260625_173430_0fdbadc4-62e8-4982-88fd-bd0f03842f20.mp4",
      "thumb": "https://d2ol7oe51mr4n9.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/b23a8893-e51e-4673-9d31-e0a9c7c45ad5.png",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G1_Day%209_017_should_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G1_Day%209_017_should_sentence.mp3"
      }
    }
  },
  {
    "id": "is_called",
    "grade": 1,
    "day": 9,
    "seq": 18,
    "word": "is called",
    "pos": "v.",
    "meaning": "~라는 이름으로 \n불리다",
    "example": "The city is called New York City.",
    "exampleChunks": [
      "The",
      "city",
      "is",
      "called",
      "New",
      "York",
      "City."
    ],
    "media": {
      "gif": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260625_183102_c57cc9de-488b-40c7-9528-0dff40a38589.mp4",
      "video": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260625_183102_c57cc9de-488b-40c7-9528-0dff40a38589.mp4",
      "thumb": "https://d2ol7oe51mr4n9.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/37ca8de8-3159-4605-ab4a-7f2b975b4f6f.png",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G1_Day%209_018_is%20called_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G1_Day%209_018_is%20called_sentence.mp3"
      }
    }
  },
  {
    "id": "catch",
    "grade": 1,
    "day": 9,
    "seq": 19,
    "word": "catch",
    "pos": "v.",
    "meaning": "잡다",
    "example": "The cat catches a mouse in the backyard.",
    "exampleChunks": [
      "The",
      "cat",
      "catches",
      "a",
      "mouse",
      "in",
      "the",
      "backyard."
    ],
    "media": {
      "gif": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260625_175832_e43df370-d92f-44fd-aaef-5419a5f1db88.mp4",
      "video": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260625_175832_e43df370-d92f-44fd-aaef-5419a5f1db88.mp4",
      "thumb": "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd2ol7oe51mr4n9.cloudfront.net%2Fuser_3Bfqnph7JZyUpQdqDvhdpHlpkN1%2F8ffaee36-1823-42c3-b81b-54b4bd639946.png&w=1920&q=85",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G1_Day%209_019_catch_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G1_Day%209_019_catch_sentence.mp3"
      }
    }
  },
  {
    "id": "celebrate",
    "grade": 1,
    "day": 9,
    "seq": 20,
    "word": "celebrate",
    "pos": "v.",
    "meaning": "기념하다, 축하하다",
    "example": "We celebrate New Year's Eve.",
    "exampleChunks": [
      "We",
      "celebrate",
      "New",
      "Year's",
      "Eve."
    ],
    "media": {
      "gif": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260625_183957_7d1d87b5-008f-4f6a-aa95-6ccc364f541f.mp4",
      "video": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260625_183957_7d1d87b5-008f-4f6a-aa95-6ccc364f541f.mp4",
      "thumb": "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd2ol7oe51mr4n9.cloudfront.net%2Fuser_3Bfqnph7JZyUpQdqDvhdpHlpkN1%2F4c38132d-fbfb-4163-b1ba-b7d598e3b0db.png&w=1920&q=85",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G1_Day%209_020_celebrate_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G1_Day%209_020_celebrate_sentence.mp3"
      }
    }
  },
  {
    "id": "close",
    "grade": 1,
    "day": 10,
    "seq": 1,
    "word": "close",
    "pos": "v.",
    "meaning": "닫다",
    "example": "My sister closes the closet door.",
    "exampleChunks": [
      "My",
      "sister",
      "closes",
      "the",
      "closet",
      "door."
    ],
    "media": {
      "gif": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260702_085238_e8a01239-0d1f-4e92-8c0f-710c094d13c9.mp4",
      "video": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260702_085238_e8a01239-0d1f-4e92-8c0f-710c094d13c9.mp4",
      "thumb": "https://d2ol7oe51mr4n9.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/873f0731-0091-4c22-9f72-429187dbb117.png",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G1_Day%2010_001_close_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G1_Day%2010_001_close_sentence.mp3"
      }
    }
  },
  {
    "id": "cry",
    "grade": 1,
    "day": 10,
    "seq": 2,
    "word": "cry",
    "pos": "v.",
    "meaning": "울다",
    "example": "My sister cries under the blanket.",
    "exampleChunks": [
      "My",
      "sister",
      "cries",
      "under",
      "the",
      "blanket."
    ],
    "media": {
      "gif": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260630_034639_3c06ce6a-8bd3-4c23-b4e8-23a3e5be1166.mp4",
      "video": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260630_034639_3c06ce6a-8bd3-4c23-b4e8-23a3e5be1166.mp4",
      "thumb": "https://d2ol7oe51mr4n9.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/bd51f347-aa87-4297-89dc-66de7be5c814.png",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G1_Day%2010_002_cry_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G1_Day%2010_002_cry_sentence.mp3"
      }
    }
  },
  {
    "id": "differ",
    "grade": 1,
    "day": 10,
    "seq": 3,
    "word": "differ",
    "pos": "v.",
    "meaning": "다르다[차이가 있다]",
    "example": "",
    "exampleChunks": [],
    "media": {
      "gif": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/differ.mp4",
      "video": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/differ.mp4",
      "thumb": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca%20-%20images/differ.jpeg",
      "placeholder": "📖",
      "audio": {
        "word": "",
        "example": ""
      }
    }
  },
  {
    "id": "get_fat",
    "grade": 1,
    "day": 10,
    "seq": 4,
    "word": "get fat",
    "pos": "v.",
    "meaning": "뚱뚱해지다",
    "example": "",
    "exampleChunks": [],
    "media": {
      "gif": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/get-fat.mp4",
      "video": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/get-fat.mp4",
      "thumb": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca%20-%20images/get-fat.jpeg",
      "placeholder": "📖",
      "audio": {
        "word": "",
        "example": ""
      }
    }
  },
  {
    "id": "get_lost",
    "grade": 1,
    "day": 10,
    "seq": 8,
    "word": "get lost",
    "pos": "v.",
    "meaning": "길을 잃다",
    "example": "",
    "exampleChunks": [],
    "media": {
      "gif": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/get-lost.mp4",
      "video": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/get-lost.mp4",
      "thumb": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca%20-%20images/get-lost.jpeg",
      "placeholder": "📖",
      "audio": {
        "word": "",
        "example": ""
      }
    }
  },
  {
    "id": "push",
    "grade": 1,
    "day": 10,
    "seq": 10,
    "word": "push",
    "pos": "v.",
    "meaning": "밀다",
    "example": "He pushes the door to enter the room.",
    "exampleChunks": [
      "He",
      "pushes",
      "the",
      "door",
      "to",
      "enter",
      "the",
      "room."
    ],
    "media": {
      "gif": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260629_204331_ed1c69d4-305a-47d0-ae25-dbb6d33b8627.mp4",
      "video": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260629_204331_ed1c69d4-305a-47d0-ae25-dbb6d33b8627.mp4",
      "thumb": "https://d2ol7oe51mr4n9.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/80b0a333-a0c5-447f-b893-a260834d7f27.png",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G1_Day%2010_010_push_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G1_Day%2010_010_push_sentence.mp3"
      }
    }
  },
  {
    "id": "rip",
    "grade": 1,
    "day": 10,
    "seq": 11,
    "word": "rip",
    "pos": "v.",
    "meaning": "찢다",
    "example": "She rips the paper in half.",
    "exampleChunks": [
      "She",
      "rips",
      "the",
      "paper",
      "in",
      "half."
    ],
    "media": {
      "gif": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260630_135555_ebd8bb3d-7b56-42d5-8078-a70eb76abf93.mp4",
      "video": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260630_135555_ebd8bb3d-7b56-42d5-8078-a70eb76abf93.mp4",
      "thumb": "https://d2ol7oe51mr4n9.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/e491bfc6-0b5d-4058-ae5f-0f759d1f711f.png",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G1_Day%2010_011_rip_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G1_Day%2010_011_rip_sentence.mp3"
      }
    }
  },
  {
    "id": "seem",
    "grade": 1,
    "day": 10,
    "seq": 13,
    "word": "seem",
    "pos": "v.",
    "meaning": "보인다",
    "example": "He seems tired after a long day at work.",
    "exampleChunks": [
      "He",
      "seems",
      "tired",
      "after",
      "a",
      "long",
      "day",
      "at",
      "work."
    ],
    "media": {
      "gif": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/seem.mp4",
      "video": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/seem.mp4",
      "thumb": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca%20-%20images/seem.jpeg",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G1_Day%2010_013_seem_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G1_Day%2010_013_seem_sentence.mp3"
      }
    }
  },
  {
    "id": "shut",
    "grade": 1,
    "day": 10,
    "seq": 14,
    "word": "shut",
    "pos": "v.",
    "meaning": "닫다[감다]",
    "example": "",
    "exampleChunks": [],
    "media": {
      "gif": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/shut.mp4",
      "video": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/shut.mp4",
      "thumb": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca%20-%20images/shut.jpeg",
      "placeholder": "📖",
      "audio": {
        "word": "",
        "example": ""
      }
    }
  },
  {
    "id": "fall_below",
    "grade": 1,
    "day": 10,
    "seq": 15,
    "word": "fall below",
    "pos": "v.",
    "meaning": "아래로 떨어지다",
    "example": "",
    "exampleChunks": [],
    "media": {
      "gif": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/fall-below.mp4",
      "video": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/fall-below.mp4",
      "thumb": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca%20-%20images/fall-below.jpeg",
      "placeholder": "📖",
      "audio": {
        "word": "",
        "example": ""
      }
    }
  },
  {
    "id": "stare",
    "grade": 1,
    "day": 10,
    "seq": 16,
    "word": "stare",
    "pos": "v.",
    "meaning": "응시하다, 빤히 쳐다보다",
    "example": "She stares at me for a long time.",
    "exampleChunks": [
      "She",
      "stares",
      "at",
      "me",
      "for",
      "a",
      "long",
      "time."
    ],
    "media": {
      "gif": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/stare.mp4",
      "video": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/stare.mp4",
      "thumb": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca%20-%20images/stare.jpeg",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G1_Day%2010_016_stare_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G1_Day%2010_016_stare_sentence.mp3"
      }
    }
  },
  {
    "id": "grin",
    "grade": 1,
    "day": 10,
    "seq": 17,
    "word": "grin",
    "pos": "v.",
    "meaning": "활짝 웃다",
    "example": "",
    "exampleChunks": [],
    "media": {
      "gif": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/grin.mp4",
      "video": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/grin.mp4",
      "thumb": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca%20-%20images/grin.jpeg",
      "placeholder": "📖",
      "audio": {
        "word": "",
        "example": ""
      }
    }
  },
  {
    "id": "empty",
    "grade": 1,
    "day": 10,
    "seq": 18,
    "word": "empty",
    "pos": "v.",
    "meaning": "비우다[비게 되다]",
    "example": "",
    "exampleChunks": [],
    "media": {
      "gif": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/empty.mp4",
      "video": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/empty.mp4",
      "thumb": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca%20-%20images/empty.jpeg",
      "placeholder": "📖",
      "audio": {
        "word": "",
        "example": ""
      }
    }
  },
  {
    "id": "gasp",
    "grade": 1,
    "day": 10,
    "seq": 19,
    "word": "gasp",
    "pos": "v.",
    "meaning": "숨이 턱 막히다, 숨을 제대로 못 쉬다",
    "example": "He gasps for breath.",
    "exampleChunks": [
      "He",
      "gasps",
      "for",
      "breath."
    ],
    "media": {
      "gif": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260623_185709_bf93e586-b890-4a7c-9242-8d8f04707587.mp4",
      "video": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260623_185709_bf93e586-b890-4a7c-9242-8d8f04707587.mp4",
      "thumb": "https://d2ol7oe51mr4n9.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/8459ceaf-6ecf-4955-86ad-22b809c579c7.png",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G1_Day%2010_019_gasp_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G1_Day%2010_019_gasp_sentence.mp3"
      }
    }
  },
  {
    "id": "scold",
    "grade": 1,
    "day": 10,
    "seq": 20,
    "word": "scold",
    "pos": "v.",
    "meaning": "야단치다[꾸짖다]",
    "example": "",
    "exampleChunks": [],
    "media": {
      "gif": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/scold.mp4",
      "video": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/scold.mp4",
      "thumb": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca%20-%20images/scold.jpeg",
      "placeholder": "📖",
      "audio": {
        "word": "",
        "example": ""
      }
    }
  },
  {
    "id": "bark",
    "grade": 2,
    "day": 1,
    "seq": 1,
    "word": "bark",
    "pos": "v.",
    "meaning": "짖는다",
    "example": "Two dogs bark at my dog.",
    "exampleChunks": [
      "Two",
      "dogs",
      "bark",
      "at",
      "my",
      "dog."
    ],
    "media": {
      "gif": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260623_160300_6823d354-1c3b-4d53-927f-6180938168a0.mp4",
      "video": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260623_160300_6823d354-1c3b-4d53-927f-6180938168a0.mp4",
      "thumb": "https://d2ol7oe51mr4n9.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/05ed256c-ec95-40d9-ad66-4804d79535da.png",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G2_Day%201_001_bark_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G2_Day%201_001_bark_sentence.mp3"
      }
    }
  },
  {
    "id": "wipe",
    "grade": 2,
    "day": 1,
    "seq": 3,
    "word": "wipe",
    "pos": "v.",
    "meaning": "(곤, 헝겊으로) 닦다",
    "example": "Mom wipes the floor.",
    "exampleChunks": [
      "Mom",
      "wipes",
      "the",
      "floor."
    ],
    "media": {
      "gif": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/wipe.mp4",
      "video": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/wipe.mp4",
      "thumb": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca%20-%20images/wipe.jpeg",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G2_Day%201_003_wipe_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G2_Day%201_003_wipe_sentence.mp3"
      }
    }
  },
  {
    "id": "spill",
    "grade": 2,
    "day": 1,
    "seq": 4,
    "word": "spill",
    "pos": "v.",
    "meaning": "흘리다, 쏟다",
    "example": "My brother spills the milk on the table.",
    "exampleChunks": [
      "My",
      "brother",
      "spills",
      "the",
      "milk",
      "on",
      "the",
      "table."
    ],
    "media": {
      "gif": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260623_155800_6acf50d3-5348-49ed-b309-a20b6377bbf0.mp4",
      "video": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260623_155800_6acf50d3-5348-49ed-b309-a20b6377bbf0.mp4",
      "thumb": "https://d2ol7oe51mr4n9.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/3892cadf-af5a-4f65-ba1f-13aeeec2797c.png",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G2_Day%201_004_spill_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G2_Day%201_004_spill_sentence.mp3"
      }
    }
  },
  {
    "id": "bring",
    "grade": 2,
    "day": 1,
    "seq": 5,
    "word": "bring",
    "pos": "v.",
    "meaning": "가져오다",
    "example": "Kids bring their lunch to school.",
    "exampleChunks": [
      "Kids",
      "bring",
      "their",
      "lunch",
      "to",
      "school."
    ],
    "media": {
      "gif": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260623_155540_95055c08-acfb-4d35-a67a-6f5e9f358042.mp4",
      "video": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260623_155540_95055c08-acfb-4d35-a67a-6f5e9f358042.mp4",
      "thumb": "https://d2ol7oe51mr4n9.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/766d9430-7ddf-4887-bb9a-527ec00cb957.png",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G2_Day%201_005_bring_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G2_Day%201_005_bring_sentence.mp3"
      }
    }
  },
  {
    "id": "scream",
    "grade": 2,
    "day": 1,
    "seq": 6,
    "word": "scream",
    "pos": "v.",
    "meaning": "비명을 지르다",
    "example": "The girl screams to her dad.",
    "exampleChunks": [
      "The",
      "girl",
      "screams",
      "to",
      "her",
      "dad."
    ],
    "media": {
      "gif": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260623_155354_8676c27c-88ce-4b34-9f55-14b3e63cde03.mp4",
      "video": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260623_155354_8676c27c-88ce-4b34-9f55-14b3e63cde03.mp4",
      "thumb": "https://d2ol7oe51mr4n9.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/af134969-17d0-4278-b612-a6275a0abd18.png",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G2_Day%201_006_scream_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G2_Day%201_006_scream_sentence.mp3"
      }
    }
  },
  {
    "id": "burp",
    "grade": 2,
    "day": 1,
    "seq": 7,
    "word": "burp",
    "pos": "v.",
    "meaning": "트림하다",
    "example": "He burps in front of me.",
    "exampleChunks": [
      "He",
      "burps",
      "in",
      "front",
      "of",
      "me."
    ],
    "media": {
      "gif": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/burp.mp4",
      "video": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/burp.mp4",
      "thumb": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca%20-%20images/burp.jpeg",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G2_Day%201_007_burp_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G2_Day%201_007_burp_sentence.mp3"
      }
    }
  },
  {
    "id": "fart",
    "grade": 2,
    "day": 1,
    "seq": 8,
    "word": "fart",
    "pos": "v.",
    "meaning": "방귀를 뀌다",
    "example": "Dad farts in the living room.",
    "exampleChunks": [
      "Dad",
      "farts",
      "in",
      "the",
      "living",
      "room."
    ],
    "media": {
      "gif": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260623_154635_7bdc42c1-4bcb-4345-ab01-259cb325540d.mp4",
      "video": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260623_154635_7bdc42c1-4bcb-4345-ab01-259cb325540d.mp4",
      "thumb": "https://d2ol7oe51mr4n9.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/26173cc4-9f84-446d-b58c-842eb8ce0291.png",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G2_Day%201_008_fart_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G2_Day%201_008_fart_sentence.mp3"
      }
    }
  },
  {
    "id": "yawn",
    "grade": 2,
    "day": 1,
    "seq": 9,
    "word": "yawn",
    "pos": "v.",
    "meaning": "하품하다",
    "example": "She yawns in English class.",
    "exampleChunks": [
      "She",
      "yawns",
      "in",
      "English",
      "class."
    ],
    "media": {
      "gif": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260623_154403_f155bc70-7abc-4457-bbf1-64fb7626b60b.mp4",
      "video": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260623_154403_f155bc70-7abc-4457-bbf1-64fb7626b60b.mp4",
      "thumb": "https://d2ol7oe51mr4n9.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/db05fda6-a533-4fa3-9395-dd4ed562fd59.png",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G2_Day%201_009_yawn_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G2_Day%201_009_yawn_sentence.mp3"
      }
    }
  },
  {
    "id": "crawl",
    "grade": 2,
    "day": 1,
    "seq": 10,
    "word": "crawl",
    "pos": "v.",
    "meaning": "(엎드려)기다, 기어가다",
    "example": "The kid crawls on the floor.",
    "exampleChunks": [
      "The",
      "kid",
      "crawls",
      "on",
      "the",
      "floor."
    ],
    "media": {
      "gif": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260623_154134_09a8163c-52e5-46c2-a529-5b6c901f532c.mp4",
      "video": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260623_154134_09a8163c-52e5-46c2-a529-5b6c901f532c.mp4",
      "thumb": "https://d2ol7oe51mr4n9.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/4bf62423-1633-4a82-8586-dab1648639c9.png",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G2_Day%201_010_crawl_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G2_Day%201_010_crawl_sentence.mp3"
      }
    }
  },
  {
    "id": "tickle",
    "grade": 2,
    "day": 1,
    "seq": 12,
    "word": "tickle",
    "pos": "v.",
    "meaning": "간지럽히다",
    "example": "My sister tickles me.",
    "exampleChunks": [
      "My",
      "sister",
      "tickles",
      "me."
    ],
    "media": {
      "gif": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/tickle.mp4",
      "video": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/tickle.mp4",
      "thumb": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca%20-%20images/tickle.jpeg",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G2_Day%201_012_tickle_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G2_Day%201_012_tickle_sentence.mp3"
      }
    }
  },
  {
    "id": "poke",
    "grade": 2,
    "day": 1,
    "seq": 13,
    "word": "poke",
    "pos": "v.",
    "meaning": "찌르다",
    "example": "He pokes my face.",
    "exampleChunks": [
      "He",
      "pokes",
      "my",
      "face."
    ],
    "media": {
      "gif": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260623_152824_76093887-1724-4ac3-bbd1-dd2f83c59853.mp4",
      "video": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260623_152824_76093887-1724-4ac3-bbd1-dd2f83c59853.mp4",
      "thumb": "https://d2ol7oe51mr4n9.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/b943ad91-e784-4189-8589-62f46ccb4437.png",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G2_Day%201_013_poke_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G2_Day%201_013_poke_sentence.mp3"
      }
    }
  },
  {
    "id": "train",
    "grade": 2,
    "day": 1,
    "seq": 15,
    "word": "train",
    "pos": "v.",
    "meaning": "훈련[교육]받다, 훈련[교육]시키다",
    "example": "He trains the dog.",
    "exampleChunks": [
      "He",
      "trains",
      "the",
      "dog."
    ],
    "media": {
      "gif": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/train.mp4",
      "video": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/train.mp4",
      "thumb": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca%20-%20images/train.jpeg",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G2_Day%201_015_train_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G2_Day%201_015_train_sentence.mp3"
      }
    }
  },
  {
    "id": "chew",
    "grade": 2,
    "day": 1,
    "seq": 16,
    "word": "chew",
    "pos": "v.",
    "meaning": "씹다",
    "example": "",
    "exampleChunks": [],
    "media": {
      "gif": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/chew.mp4",
      "video": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/chew.mp4",
      "thumb": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca%20-%20images/chew.jpeg",
      "placeholder": "📖",
      "audio": {
        "word": "",
        "example": ""
      }
    }
  },
  {
    "id": "brush",
    "grade": 2,
    "day": 1,
    "seq": 17,
    "word": "brush",
    "pos": "v.",
    "meaning": "이를 닦다, 닦다",
    "example": "He brushes his teeth.",
    "exampleChunks": [
      "He",
      "brushes",
      "his",
      "teeth."
    ],
    "media": {
      "gif": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260623_151642_cb886dbf-aa79-413d-913c-ed1b4acf9230.mp4",
      "video": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260623_151642_cb886dbf-aa79-413d-913c-ed1b4acf9230.mp4",
      "thumb": "https://d2ol7oe51mr4n9.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/a231fa89-a4c0-43d4-8c03-997911de8392.png",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G2_Day%201_017_brush_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G2_Day%201_017_brush_sentence.mp3"
      }
    }
  },
  {
    "id": "chase",
    "grade": 2,
    "day": 1,
    "seq": 18,
    "word": "chase",
    "pos": "v.",
    "meaning": "쫓다",
    "example": "Two dogs chase the ball.",
    "exampleChunks": [
      "Two",
      "dogs",
      "chase",
      "the",
      "ball."
    ],
    "media": {
      "gif": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260623_150136_7f3d8812-c609-4b9a-bab1-7e1043f9df85.mp4",
      "video": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260623_150136_7f3d8812-c609-4b9a-bab1-7e1043f9df85.mp4",
      "thumb": "https://d2ol7oe51mr4n9.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/6ccb3cb4-7dc8-45fc-a80c-26dd402ded98.png",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G2_Day%201_018_chase_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G2_Day%201_018_chase_sentence.mp3"
      }
    }
  },
  {
    "id": "hit",
    "grade": 2,
    "day": 1,
    "seq": 20,
    "word": "hit",
    "pos": "v.",
    "meaning": "때리다, 치다",
    "example": "He hits the door.",
    "exampleChunks": [
      "He",
      "hits",
      "the",
      "door."
    ],
    "media": {
      "gif": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260623_144642_209ec0a4-71b1-4b12-a8ce-2be0f8cdb50e.mp4",
      "video": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260623_144642_209ec0a4-71b1-4b12-a8ce-2be0f8cdb50e.mp4",
      "thumb": "https://d2ol7oe51mr4n9.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/6390520f-9e65-48a1-a274-5c416e9fe172.png",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G2_Day%201_020_hit_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G2_Day%201_020_hit_sentence.mp3"
      }
    }
  },
  {
    "id": "grab",
    "grade": 2,
    "day": 2,
    "seq": 1,
    "word": "grab",
    "pos": "v.",
    "meaning": "꽉 잡다, 움켜쥐다",
    "example": "Mom grabs my hands.",
    "exampleChunks": [
      "Mom",
      "grabs",
      "my",
      "hands."
    ],
    "media": {
      "gif": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/grab.mp4",
      "video": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/grab.mp4",
      "thumb": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca%20-%20images/grab.jpeg",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G2_Day%202_001_grab_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G2_Day%202_001_grab_sentence.mp3"
      }
    }
  },
  {
    "id": "win",
    "grade": 2,
    "day": 2,
    "seq": 2,
    "word": "win",
    "pos": "v.",
    "meaning": "이기다, 우승하다",
    "example": "My team wins at science contest.",
    "exampleChunks": [
      "My",
      "team",
      "wins",
      "at",
      "science",
      "contest."
    ],
    "media": {
      "gif": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260623_140437_e32d587e-d364-4ef7-b604-414a04470951.mp4",
      "video": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260623_140437_e32d587e-d364-4ef7-b604-414a04470951.mp4",
      "thumb": "https://d2ol7oe51mr4n9.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/85c5d704-b38d-4569-9590-84fc576bd4fa.png",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G2_Day%202_002_win_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G2_Day%202_002_win_sentence.mp3"
      }
    }
  },
  {
    "id": "sketch",
    "grade": 2,
    "day": 2,
    "seq": 3,
    "word": "sketch",
    "pos": "v.",
    "meaning": "스케치하다",
    "example": "I sketch a bird on my canvas.",
    "exampleChunks": [
      "I",
      "sketch",
      "a",
      "bird",
      "on",
      "my",
      "canvas."
    ],
    "media": {
      "gif": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260623_135829_71a2f2d7-16b2-4c86-8f22-aa229f2e54be.mp4",
      "video": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260623_135829_71a2f2d7-16b2-4c86-8f22-aa229f2e54be.mp4",
      "thumb": "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd2ol7oe51mr4n9.cloudfront.net%2Fuser_3Bfqnph7JZyUpQdqDvhdpHlpkN1%2F82e84ee6-ffc5-490c-bf17-9cf620a2352a.png&w=1920&q=85",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G2_Day%202_003_sketch_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G2_Day%202_003_sketch_sentence.mp3"
      }
    }
  },
  {
    "id": "lick",
    "grade": 2,
    "day": 2,
    "seq": 4,
    "word": "lick",
    "pos": "v.",
    "meaning": "햝다",
    "example": "The cat licks my hands.",
    "exampleChunks": [
      "The",
      "cat",
      "licks",
      "my",
      "hands."
    ],
    "media": {
      "gif": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260623_135006_d798bc22-ca44-4a4e-8a60-be155ea9bbaf.mp4",
      "video": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260623_135006_d798bc22-ca44-4a4e-8a60-be155ea9bbaf.mp4",
      "thumb": "https://d2ol7oe51mr4n9.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/e6d7c11f-3830-4549-ba9d-87e5c8ceb748.png",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G2_Day%202_004_lick_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G2_Day%202_004_lick_sentence.mp3"
      }
    }
  },
  {
    "id": "bite",
    "grade": 2,
    "day": 2,
    "seq": 6,
    "word": "bite",
    "pos": "v.",
    "meaning": "(이로)물다, 물어뜯다",
    "example": "The dog bites my finger.",
    "exampleChunks": [
      "The",
      "dog",
      "bites",
      "my",
      "finger."
    ],
    "media": {
      "gif": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/bite.mp4",
      "video": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/bite.mp4",
      "thumb": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca%20-%20images/bite.jpeg",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G2_Day%202_006_bite_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G2_Day%202_006_bite_sentence.mp3"
      }
    }
  },
  {
    "id": "pick_up",
    "grade": 2,
    "day": 2,
    "seq": 8,
    "word": "pick up",
    "pos": "v.",
    "meaning": "찾아오다, 태우러 가다",
    "example": "Mom picks up my sister to school.",
    "exampleChunks": [
      "Mom",
      "picks",
      "up",
      "my",
      "sister",
      "to",
      "school."
    ],
    "media": {
      "gif": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260623_174623_ce9ab4b0-9492-4601-8152-2c6b5fbac794.mp4",
      "video": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260623_174623_ce9ab4b0-9492-4601-8152-2c6b5fbac794.mp4",
      "thumb": "https://d2ol7oe51mr4n9.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/b45f57dc-861a-483d-b06e-ec22cd044d53.png",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G2_Day%202_008_pick%20up_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G2_Day%202_008_pick%20up_sentence.mp3"
      }
    }
  },
  {
    "id": "knock",
    "grade": 2,
    "day": 2,
    "seq": 9,
    "word": "knock",
    "pos": "v.",
    "meaning": "두드리다, 노크하다",
    "example": "He knocks the door.",
    "exampleChunks": [
      "He",
      "knocks",
      "the",
      "door."
    ],
    "media": {
      "gif": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260623_124102_8a3bce0c-4f25-4222-a3b2-cb4935fd6146.mp4",
      "video": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260623_124102_8a3bce0c-4f25-4222-a3b2-cb4935fd6146.mp4",
      "thumb": "https://d2ol7oe51mr4n9.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/02a8267b-5d5a-4c77-a7bb-8fe4d9f9ac2e.png",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G2_Day%202_009_knock_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G2_Day%202_009_knock_sentence.mp3"
      }
    }
  },
  {
    "id": "give",
    "grade": 2,
    "day": 2,
    "seq": 10,
    "word": "give",
    "pos": "v.",
    "meaning": "주다",
    "example": "She gives me cherry candy.",
    "exampleChunks": [
      "She",
      "gives",
      "me",
      "cherry",
      "candy."
    ],
    "media": {
      "gif": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260623_123825_7bdde9be-4708-4537-8413-bfe2a90971c0.mp4",
      "video": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260623_123825_7bdde9be-4708-4537-8413-bfe2a90971c0.mp4",
      "thumb": "https://d2ol7oe51mr4n9.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/ea3eb992-bb16-43b3-93cf-670fd3ef373d.png",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G2_Day%202_010_give_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G2_Day%202_010_give_sentence.mp3"
      }
    }
  },
  {
    "id": "shoot",
    "grade": 2,
    "day": 2,
    "seq": 11,
    "word": "shoot",
    "pos": "v.",
    "meaning": "(총 등을)쏘다",
    "example": "He shoots water guns at his brother",
    "exampleChunks": [
      "He",
      "shoots",
      "water",
      "guns",
      "at",
      "his",
      "brother"
    ],
    "media": {
      "gif": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260623_123656_84df163b-4d64-470e-a1f2-af2f834faeb5.mp4",
      "video": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260623_123656_84df163b-4d64-470e-a1f2-af2f834faeb5.mp4",
      "thumb": "https://d2ol7oe51mr4n9.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/e37c59b4-1263-4130-bc18-5190cbb1bdec.png",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G2_Day%202_011_shoot_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G2_Day%202_011_shoot_sentence.mp3"
      }
    }
  },
  {
    "id": "spray",
    "grade": 2,
    "day": 2,
    "seq": 12,
    "word": "spray",
    "pos": "v.",
    "meaning": "뿌리다",
    "example": "I spray my favorite plants with water.",
    "exampleChunks": [
      "I",
      "spray",
      "my",
      "favorite",
      "plants",
      "with",
      "water."
    ],
    "media": {
      "gif": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260623_123531_45678a59-8cc3-49a7-bf47-d4eedfe5a04a.mp4",
      "video": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260623_123531_45678a59-8cc3-49a7-bf47-d4eedfe5a04a.mp4",
      "thumb": "https://d2ol7oe51mr4n9.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/adf897e2-0fde-4bc9-9950-ccc9094b4de1.png",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G2_Day%202_012_spray_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G2_Day%202_012_spray_sentence.mp3"
      }
    }
  },
  {
    "id": "splash",
    "grade": 2,
    "day": 2,
    "seq": 13,
    "word": "splash",
    "pos": "v.",
    "meaning": "(물 등을)\n튀기다",
    "example": "She splashes coffee on me.",
    "exampleChunks": [
      "She",
      "splashes",
      "coffee",
      "on",
      "me."
    ],
    "media": {
      "gif": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260623_122945_ed977a84-fe4b-4374-b063-90fb9c1d71a9.mp4",
      "video": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260623_122945_ed977a84-fe4b-4374-b063-90fb9c1d71a9.mp4",
      "thumb": "https://d2ol7oe51mr4n9.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/59f5cac6-2f41-468b-a84e-564cd38f5cf5.png",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G2_Day%202_013_splash_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G2_Day%202_013_splash_sentence.mp3"
      }
    }
  },
  {
    "id": "erase",
    "grade": 2,
    "day": 2,
    "seq": 16,
    "word": "erase",
    "pos": "v.",
    "meaning": "지우다",
    "example": "I erase my name from the book.",
    "exampleChunks": [
      "I",
      "erase",
      "my",
      "name",
      "from",
      "the",
      "book."
    ],
    "media": {
      "gif": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/erase.mp4",
      "video": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/erase.mp4",
      "thumb": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca%20-%20images/erase.jpeg",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G2_Day%202_016_erase_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G2_Day%202_016_erase_sentence.mp3"
      }
    }
  },
  {
    "id": "shine",
    "grade": 2,
    "day": 2,
    "seq": 17,
    "word": "shine",
    "pos": "v.",
    "meaning": "빛나다",
    "example": "The sun shines brightly.",
    "exampleChunks": [
      "The",
      "sun",
      "shines",
      "brightly."
    ],
    "media": {
      "gif": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260623_114741_9ff03b4e-87c6-4c78-9ad0-8767dbb4edcc.mp4",
      "video": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260623_114741_9ff03b4e-87c6-4c78-9ad0-8767dbb4edcc.mp4",
      "thumb": "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd2ol7oe51mr4n9.cloudfront.net%2Fuser_3Bfqnph7JZyUpQdqDvhdpHlpkN1%2Fa77e2aca-9540-4a64-9af4-12986040cffa.png&w=1920&q=85",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G2_Day%202_017_shine_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G2_Day%202_017_shine_sentence.mp3"
      }
    }
  },
  {
    "id": "take_out",
    "grade": 2,
    "day": 2,
    "seq": 18,
    "word": "take out",
    "pos": "v.",
    "meaning": "가지고 나가다, 꺼내다",
    "example": "She takes out her mirror.",
    "exampleChunks": [
      "She",
      "takes",
      "out",
      "her",
      "mirror."
    ],
    "media": {
      "gif": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260623_153313_f1f50132-feb2-476e-a0b1-3e8d51691883.mp4",
      "video": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260623_153313_f1f50132-feb2-476e-a0b1-3e8d51691883.mp4",
      "thumb": "https://d2ol7oe51mr4n9.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/c3fe656e-5c81-457a-baf5-cca98cc8c09e.png",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G2_Day%202_018_take%20out_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G2_Day%202_018_take%20out_sentence.mp3"
      }
    }
  },
  {
    "id": "start",
    "grade": 2,
    "day": 2,
    "seq": 19,
    "word": "start",
    "pos": "v.",
    "meaning": "시작하다",
    "example": "The baby starts to cry.",
    "exampleChunks": [
      "The",
      "baby",
      "starts",
      "to",
      "cry."
    ],
    "media": {
      "gif": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/start.mp4",
      "video": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/start.mp4",
      "thumb": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca%20-%20images/start.jpeg",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G2_Day%202_019_start_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G2_Day%202_019_start_sentence.mp3"
      }
    }
  },
  {
    "id": "shake",
    "grade": 2,
    "day": 2,
    "seq": 20,
    "word": "shake",
    "pos": "v.",
    "meaning": "흔들(리)다",
    "example": "He shakes his head.",
    "exampleChunks": [
      "He",
      "shakes",
      "his",
      "head."
    ],
    "media": {
      "gif": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/shake.mp4",
      "video": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/shake.mp4",
      "thumb": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca%20-%20images/shake.jpeg",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G2_Day%202_020_shake_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G2_Day%202_020_shake_sentence.mp3"
      }
    }
  },
  {
    "id": "bake",
    "grade": 2,
    "day": 3,
    "seq": 2,
    "word": "bake",
    "pos": "v.",
    "meaning": "굽다",
    "example": "Dad bakes cookies for us.",
    "exampleChunks": [
      "Dad",
      "bakes",
      "cookies",
      "for",
      "us."
    ],
    "media": {
      "gif": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260623_114914_08d9afb2-1e5f-4252-96cc-1d7e9c51932e.mp4",
      "video": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260623_114914_08d9afb2-1e5f-4252-96cc-1d7e9c51932e.mp4",
      "thumb": "https://d2ol7oe51mr4n9.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/f84b8620-fc1d-418a-9425-c431fd01c0b6.png",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G2_Day%203_002_bake_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G2_Day%203_002_bake_sentence.mp3"
      }
    }
  },
  {
    "id": "stir",
    "grade": 2,
    "day": 3,
    "seq": 3,
    "word": "stir",
    "pos": "v.",
    "meaning": "젓다, (저어가며) 섞다",
    "example": "She stirs strawberry jam.",
    "exampleChunks": [
      "She",
      "stirs",
      "strawberry",
      "jam."
    ],
    "media": {
      "gif": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260623_112240_d794a7d1-e70f-4339-a8d7-25d75d1825c6.mp4",
      "video": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260623_112240_d794a7d1-e70f-4339-a8d7-25d75d1825c6.mp4",
      "thumb": "https://d2ol7oe51mr4n9.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/a573db0f-2913-4343-85bd-8373239f4c39.png",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G2_Day%203_003_stir_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G2_Day%203_003_stir_sentence.mp3"
      }
    }
  },
  {
    "id": "cool",
    "grade": 2,
    "day": 3,
    "seq": 4,
    "word": "cool",
    "pos": "v.",
    "meaning": "식히다",
    "example": "He cools his coffee.",
    "exampleChunks": [
      "He",
      "cools",
      "his",
      "coffee."
    ],
    "media": {
      "gif": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260623_112117_f8abc3c2-6b16-4b4c-b166-af8decd79a03.mp4",
      "video": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260623_112117_f8abc3c2-6b16-4b4c-b166-af8decd79a03.mp4",
      "thumb": "https://d2ol7oe51mr4n9.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/8f548e66-1da0-470a-89df-1d47c1c9fe5c.png",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G2_Day%203_004_cool_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G2_Day%203_004_cool_sentence.mp3"
      }
    }
  },
  {
    "id": "finish",
    "grade": 2,
    "day": 3,
    "seq": 5,
    "word": "finish",
    "pos": "v.",
    "meaning": "끝나다, 마치다",
    "example": "We finish our math homework.",
    "exampleChunks": [
      "We",
      "finish",
      "our",
      "math",
      "homework."
    ],
    "media": {
      "gif": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/finish.mp4",
      "video": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/finish.mp4",
      "thumb": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca%20-%20images/finish.jpeg",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G2_Day%203_005_finish_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G2_Day%203_005_finish_sentence.mp3"
      }
    }
  },
  {
    "id": "hug",
    "grade": 2,
    "day": 3,
    "seq": 6,
    "word": "hug",
    "pos": "v.",
    "meaning": "껴안다",
    "example": "The kid hugs his mom.",
    "exampleChunks": [
      "The",
      "kid",
      "hugs",
      "his",
      "mom."
    ],
    "media": {
      "gif": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260623_110920_dfa4c9f0-eef3-4be4-a5dd-ed52e8f00db7.mp4",
      "video": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260623_110920_dfa4c9f0-eef3-4be4-a5dd-ed52e8f00db7.mp4",
      "thumb": "https://d2ol7oe51mr4n9.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/864a91d5-0117-4213-b703-01964e2290b9.png",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G2_Day%203_006_hug_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G2_Day%203_006_hug_sentence.mp3"
      }
    }
  },
  {
    "id": "step",
    "grade": 2,
    "day": 3,
    "seq": 7,
    "word": "step",
    "pos": "v.",
    "meaning": "움직이다, 서다[디디다]",
    "example": "He steps into the room.",
    "exampleChunks": [
      "He",
      "steps",
      "into",
      "the",
      "room."
    ],
    "media": {
      "gif": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/step.mp4",
      "video": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/step.mp4",
      "thumb": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca%20-%20images/step.jpeg",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G2_Day%203_007_step_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G2_Day%203_007_step_sentence.mp3"
      }
    }
  },
  {
    "id": "fly",
    "grade": 2,
    "day": 3,
    "seq": 8,
    "word": "fly",
    "pos": "v.",
    "meaning": "날다",
    "example": "Birds fly high into the sky.",
    "exampleChunks": [
      "Birds",
      "fly",
      "high",
      "into",
      "the",
      "sky."
    ],
    "media": {
      "gif": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260623_110234_3314fff8-966a-4fd1-a3a6-11a29a0ca909.mp4",
      "video": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260623_110234_3314fff8-966a-4fd1-a3a6-11a29a0ca909.mp4",
      "thumb": "https://d2ol7oe51mr4n9.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/035312fa-e99b-4604-bbc3-41db86155f38.png",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G2_Day%203_008_fly_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G2_Day%203_008_fly_sentence.mp3"
      }
    }
  },
  {
    "id": "water",
    "grade": 2,
    "day": 3,
    "seq": 9,
    "word": "water",
    "pos": "v.",
    "meaning": "물을 주다",
    "example": "Dad waters the flowers in the garden.",
    "exampleChunks": [
      "Dad",
      "waters",
      "the",
      "flowers",
      "in",
      "the",
      "garden."
    ],
    "media": {
      "gif": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260623_105928_28e89b16-236c-40e7-9e07-b976a37c5b07.mp4",
      "video": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260623_105928_28e89b16-236c-40e7-9e07-b976a37c5b07.mp4",
      "thumb": "https://d2ol7oe51mr4n9.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/3d01ccdc-0d52-404f-92e1-2917eadf0475.png",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G2_Day%203_009_water_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G2_Day%203_009_water_sentence.mp3"
      }
    }
  },
  {
    "id": "growl",
    "grade": 2,
    "day": 3,
    "seq": 11,
    "word": "growl",
    "pos": "v.",
    "meaning": "으르릉거리다",
    "example": "The dog growls loudly.",
    "exampleChunks": [
      "The",
      "dog",
      "growls",
      "loudly."
    ],
    "media": {
      "gif": "assets/gif/growl.gif",
      "video": "assets/video/growl.mp4",
      "thumb": "assets/thumb/growl-thumb.jpg",
      "placeholder": "🐺",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G2_Day%203_011_growl_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G2_Day%203_011_growl_sentence.mp3"
      }
    }
  },
  {
    "id": "blink",
    "grade": 2,
    "day": 3,
    "seq": 12,
    "word": "blink",
    "pos": "v.",
    "meaning": "눈을 깜빡이다",
    "example": "The baby blinks at me.",
    "exampleChunks": [
      "The",
      "baby",
      "blinks",
      "at",
      "me."
    ],
    "media": {
      "gif": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/blink.mp4",
      "video": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/blink.mp4",
      "thumb": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca%20-%20images/blink.jpeg",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G2_Day%203_012_blink_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G2_Day%203_012_blink_sentence.mp3"
      }
    }
  },
  {
    "id": "boil",
    "grade": 2,
    "day": 3,
    "seq": 13,
    "word": "boil",
    "pos": "v.",
    "meaning": "끓다, 끓이다",
    "example": "I boil the soup.",
    "exampleChunks": [
      "I",
      "boil",
      "the",
      "soup."
    ],
    "media": {
      "gif": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260623_085817_9dfa7067-9c3d-46cb-8d20-8947bdc419cb.mp4",
      "video": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260623_085817_9dfa7067-9c3d-46cb-8d20-8947bdc419cb.mp4",
      "thumb": "https://d2ol7oe51mr4n9.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/c186e920-a548-4159-b752-e8634c0d5d6d.png",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G2_Day%203_013_boil_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G2_Day%203_013_boil_sentence.mp3"
      }
    }
  },
  {
    "id": "kill",
    "grade": 2,
    "day": 3,
    "seq": 14,
    "word": "kill",
    "pos": "v.",
    "meaning": "죽이다",
    "example": "My dad kills a bug.",
    "exampleChunks": [
      "My",
      "dad",
      "kills",
      "a",
      "bug."
    ],
    "media": {
      "gif": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260623_085614_ed95635f-dd92-4caf-bf20-931474aa28d8.mp4",
      "video": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260623_085614_ed95635f-dd92-4caf-bf20-931474aa28d8.mp4",
      "thumb": "https://d2ol7oe51mr4n9.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/1ed242c1-5aa9-4888-9f18-f6b7037a281d.png",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G2_Day%203_014_kill_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G2_Day%203_014_kill_sentence.mp3"
      }
    }
  },
  {
    "id": "heal",
    "grade": 2,
    "day": 3,
    "seq": 15,
    "word": "heal",
    "pos": "v.",
    "meaning": "치유[치료]하다[낫다[고치다]]",
    "example": "The doctor heals the sick.",
    "exampleChunks": [
      "The",
      "doctor",
      "heals",
      "the",
      "sick."
    ],
    "media": {
      "gif": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/heal.mp4",
      "video": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/heal.mp4",
      "thumb": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca%20-%20images/heal.jpeg",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G2_Day%203_015_heal_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G2_Day%203_015_heal_sentence.mp3"
      }
    }
  },
  {
    "id": "choose",
    "grade": 2,
    "day": 3,
    "seq": 17,
    "word": "choose",
    "pos": "v.",
    "meaning": "고르다, 선택하다",
    "example": "My brother chooses a blue car toy.",
    "exampleChunks": [
      "My",
      "brother",
      "chooses",
      "a",
      "blue",
      "car",
      "toy."
    ],
    "media": {
      "gif": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260623_081834_df76547a-9654-468b-8df7-a719e4a96da2.mp4",
      "video": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260623_081834_df76547a-9654-468b-8df7-a719e4a96da2.mp4",
      "thumb": "https://d2ol7oe51mr4n9.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/272c07e6-a4ea-4e85-b5e5-30262d88c567.png",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G2_Day%203_017_choose_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G2_Day%203_017_choose_sentence.mp3"
      }
    }
  },
  {
    "id": "keep_away",
    "grade": 2,
    "day": 3,
    "seq": 18,
    "word": "keep away",
    "pos": "v.",
    "meaning": "가까이 가지 않는다, 멀리하다",
    "example": "Dad keeps away from cats.",
    "exampleChunks": [
      "Dad",
      "keeps",
      "away",
      "from",
      "cats."
    ],
    "media": {
      "gif": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/keep-away.mp4",
      "video": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/keep-away.mp4",
      "thumb": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca%20-%20images/keep-awway.jpeg",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G2_Day%203_018_keep%20away_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G2_Day%203_018_keep%20away_sentence.mp3"
      }
    }
  },
  {
    "id": "dream",
    "grade": 2,
    "day": 4,
    "seq": 1,
    "word": "dream",
    "pos": "v.",
    "meaning": "꿈꾸다",
    "example": "My sister dreams of becoming a doctor.",
    "exampleChunks": [
      "My",
      "sister",
      "dreams",
      "of",
      "becoming",
      "a",
      "doctor."
    ],
    "media": {
      "gif": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260623_174917_cab33e83-3b7c-4358-9e77-20c028c99f58.mp4",
      "video": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260623_174917_cab33e83-3b7c-4358-9e77-20c028c99f58.mp4",
      "thumb": "https://d2ol7oe51mr4n9.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/00d67931-5c2c-4ade-9e0e-553ab62ce7e6.png",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G2_Day%204_001_dream_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G2_Day%204_001_dream_sentence.mp3"
      }
    }
  },
  {
    "id": "giggle",
    "grade": 2,
    "day": 4,
    "seq": 2,
    "word": "giggle",
    "pos": "v.",
    "meaning": "피식 웃다, 킥킥거리다",
    "example": "She giggles at her little brother.",
    "exampleChunks": [
      "She",
      "giggles",
      "at",
      "her",
      "little",
      "brother."
    ],
    "media": {
      "gif": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260623_175057_49bf1256-be4f-41f1-b37e-fa61e83a964c.mp4",
      "video": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260623_175057_49bf1256-be4f-41f1-b37e-fa61e83a964c.mp4",
      "thumb": "https://d2ol7oe51mr4n9.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/6830563a-74cf-4d32-b568-2dc7f7832fc3.png",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G2_Day%204_002_giggle_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G2_Day%204_002_giggle_sentence.mp3"
      }
    }
  },
  {
    "id": "order",
    "grade": 2,
    "day": 4,
    "seq": 3,
    "word": "order",
    "pos": "v.",
    "meaning": "주문하다",
    "example": "I order pizza and pasta for dinner.",
    "exampleChunks": [
      "I",
      "order",
      "pizza",
      "and",
      "pasta",
      "for",
      "dinner."
    ],
    "media": {
      "gif": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260623_175233_ed63f605-fe83-47d0-8827-3b2f10cdb81d.mp4",
      "video": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260623_175233_ed63f605-fe83-47d0-8827-3b2f10cdb81d.mp4",
      "thumb": "https://d2ol7oe51mr4n9.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/7f0e6ee4-2ff0-4b99-8d09-b1466586d690.png",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G2_Day%204_003_order_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G2_Day%204_003_order_sentence.mp3"
      }
    }
  },
  {
    "id": "cover",
    "grade": 2,
    "day": 4,
    "seq": 4,
    "word": "cover",
    "pos": "v.",
    "meaning": "덮다, 다루다",
    "example": "She covers her hands with gloves.",
    "exampleChunks": [
      "She",
      "covers",
      "her",
      "hands",
      "with",
      "gloves."
    ],
    "media": {
      "gif": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260623_175409_422908e1-bdf9-4922-876c-84f9037a63a7.mp4",
      "video": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260623_175409_422908e1-bdf9-4922-876c-84f9037a63a7.mp4",
      "thumb": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca%20-%20images/cover.jpeg",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G2_Day%204_004_cover_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G2_Day%204_004_cover_sentence.mp3"
      }
    }
  },
  {
    "id": "pet",
    "grade": 2,
    "day": 4,
    "seq": 5,
    "word": "pet",
    "pos": "v.",
    "meaning": "쓰다듬다[어루만지다]",
    "example": "",
    "exampleChunks": [],
    "media": {
      "gif": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/pet.mp4",
      "video": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/pet.mp4",
      "thumb": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca%20-%20images/pet.jpeg",
      "placeholder": "📖",
      "audio": {
        "word": "",
        "example": ""
      }
    }
  },
  {
    "id": "ring",
    "grade": 2,
    "day": 4,
    "seq": 6,
    "word": "ring",
    "pos": "v.",
    "meaning": "(소리가)울리다",
    "example": "The school bell rings loudly.",
    "exampleChunks": [
      "The",
      "school",
      "bell",
      "rings",
      "loudly."
    ],
    "media": {
      "gif": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260623_181401_f00e76eb-1ce1-4764-9bff-ac9d695b1bd1.mp4",
      "video": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260623_181401_f00e76eb-1ce1-4764-9bff-ac9d695b1bd1.mp4",
      "thumb": "https://d2ol7oe51mr4n9.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/ae54adf6-b2d9-4a90-89db-a9213bdc94c1.png",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G2_Day%204_006_ring_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G2_Day%204_006_ring_sentence.mp3"
      }
    }
  },
  {
    "id": "crash",
    "grade": 2,
    "day": 4,
    "seq": 7,
    "word": "crash",
    "pos": "v.",
    "meaning": "충돌하다, 추락하다",
    "example": "Two cars crash on the highway",
    "exampleChunks": [
      "Two",
      "cars",
      "crash",
      "on",
      "the",
      "highway"
    ],
    "media": {
      "gif": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260623_184152_2e554fdf-2fab-4dff-bb91-94fe27957bbb.mp4",
      "video": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260623_184152_2e554fdf-2fab-4dff-bb91-94fe27957bbb.mp4",
      "thumb": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca%20-%20images/crash%20(1).jpeg",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G2_Day%204_007_crash_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G2_Day%204_007_crash_sentence.mp3"
      }
    }
  },
  {
    "id": "wake_up",
    "grade": 2,
    "day": 4,
    "seq": 9,
    "word": "wake up",
    "pos": "v.",
    "meaning": "정신차리다, 일어나다",
    "example": "My brother wakes up at 7 o'clock.",
    "exampleChunks": [
      "My",
      "brother",
      "wakes",
      "up",
      "at",
      "7",
      "o'clock."
    ],
    "media": {
      "gif": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260623_184222_27e7d2e8-17df-44c6-8eac-2480563ac38c.mp4",
      "video": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260623_184222_27e7d2e8-17df-44c6-8eac-2480563ac38c.mp4",
      "thumb": "https://d2ol7oe51mr4n9.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/bbb4c14e-c813-474d-becd-fcfedc3a26eb.png",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G2_Day%204_009_wake%20up_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G2_Day%204_009_wake%20up_sentence.mp3"
      }
    }
  },
  {
    "id": "smell",
    "grade": 2,
    "day": 4,
    "seq": 10,
    "word": "smell",
    "pos": "v.",
    "meaning": "냄새(나다)",
    "example": "The flowers smell sweet.",
    "exampleChunks": [
      "The",
      "flowers",
      "smell",
      "sweet."
    ],
    "media": {
      "gif": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260623_184224_aaca8aed-59a6-4fc4-954a-558e48205444.mp4",
      "video": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260623_184224_aaca8aed-59a6-4fc4-954a-558e48205444.mp4",
      "thumb": "https://d2ol7oe51mr4n9.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/9050b67a-d58d-4840-8c29-25d3f7c81061.png",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G2_Day%204_010_smell_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G2_Day%204_010_smell_sentence.mp3"
      }
    }
  },
  {
    "id": "sweat",
    "grade": 2,
    "day": 4,
    "seq": 11,
    "word": "sweat",
    "pos": "v.",
    "meaning": "땀을 흘리다",
    "example": "He sweats a lot after running.",
    "exampleChunks": [
      "He",
      "sweats",
      "a",
      "lot",
      "after",
      "running."
    ],
    "media": {
      "gif": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/sweat.mp4",
      "video": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/sweat.mp4",
      "thumb": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca%20-%20images/sweat.jpeg",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G2_Day%204_011_sweat_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G2_Day%204_011_sweat_sentence.mp3"
      }
    }
  },
  {
    "id": "beat",
    "grade": 2,
    "day": 4,
    "seq": 12,
    "word": "beat",
    "pos": "v.",
    "meaning": "치다, 두드리다",
    "example": "The children beats the desk.",
    "exampleChunks": [
      "The",
      "children",
      "beats",
      "the",
      "desk."
    ],
    "media": {
      "gif": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260623_184229_f4d049dc-251e-4302-938b-ea338cbb9694.mp4",
      "video": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260623_184229_f4d049dc-251e-4302-938b-ea338cbb9694.mp4",
      "thumb": "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd2ol7oe51mr4n9.cloudfront.net%2Fuser_3Bfqnph7JZyUpQdqDvhdpHlpkN1%2F3616ef44-daa3-449e-813d-c2e239196cb4.png&w=1920&q=85",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G2_Day%204_012_beat_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G2_Day%204_012_beat_sentence.mp3"
      }
    }
  },
  {
    "id": "pick",
    "grade": 2,
    "day": 4,
    "seq": 13,
    "word": "pick",
    "pos": "v.",
    "meaning": "고르다, 선택하다",
    "example": "My mom picks apples at the mart.",
    "exampleChunks": [
      "My",
      "mom",
      "picks",
      "apples",
      "at",
      "the",
      "mart."
    ],
    "media": {
      "gif": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/pick.mp4",
      "video": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/pick.mp4",
      "thumb": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca%20-%20images/pick.jpeg",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G2_Day%204_013_pick_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G2_Day%204_013_pick_sentence.mp3"
      }
    }
  },
  {
    "id": "plan",
    "grade": 2,
    "day": 4,
    "seq": 14,
    "word": "plan",
    "pos": "v.",
    "meaning": "계획(하다)",
    "example": "My family plans a trip to China.",
    "exampleChunks": [
      "My",
      "family",
      "plans",
      "a",
      "trip",
      "to",
      "China."
    ],
    "media": {
      "gif": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260623_184232_a7d6d139-135c-4db1-9be3-52f877ee0747.mp4",
      "video": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260623_184232_a7d6d139-135c-4db1-9be3-52f877ee0747.mp4",
      "thumb": "https://d2ol7oe51mr4n9.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/b89eadd6-535f-43c5-a01e-de0dd2df62e8.png",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G2_Day%204_014_plan_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G2_Day%204_014_plan_sentence.mp3"
      }
    }
  },
  {
    "id": "build",
    "grade": 2,
    "day": 4,
    "seq": 15,
    "word": "build",
    "pos": "v.",
    "meaning": "건축(하다)",
    "example": "The bird builds a nest.",
    "exampleChunks": [
      "The",
      "bird",
      "builds",
      "a",
      "nest."
    ],
    "media": {
      "gif": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/build.mp4",
      "video": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/build.mp4",
      "thumb": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca%20-%20images/build.jpeg",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G2_Day%204_015_build_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G2_Day%204_015_build_sentence.mp3"
      }
    }
  },
  {
    "id": "amaze",
    "grade": 2,
    "day": 4,
    "seq": 16,
    "word": "amaze",
    "pos": "v.",
    "meaning": "놀라게 하다",
    "example": "His magic tricks amaze the audience.",
    "exampleChunks": [
      "His",
      "magic",
      "tricks",
      "amaze",
      "the",
      "audience."
    ],
    "media": {
      "gif": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/amaze.mp4",
      "video": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/amaze.mp4",
      "thumb": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca%20-%20images/amaze.jpeg",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G2_Day%204_016_amaze_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G2_Day%204_016_amaze_sentence.mp3"
      }
    }
  },
  {
    "id": "analyze",
    "grade": 2,
    "day": 4,
    "seq": 17,
    "word": "analyze",
    "pos": "v.",
    "meaning": "분석하다",
    "example": "The scientist analyzes the data.",
    "exampleChunks": [
      "The",
      "scientist",
      "analyzes",
      "the",
      "data."
    ],
    "media": {
      "gif": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260623_185029_78a4ed11-adce-4f15-93c2-4dfcc9501a58.mp4",
      "video": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260623_185029_78a4ed11-adce-4f15-93c2-4dfcc9501a58.mp4",
      "thumb": "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd2ol7oe51mr4n9.cloudfront.net%2Fuser_3BO3KyJ9rz504vburMhH4hlonmN%2F59b742d4-ffcf-4e9c-9121-94105087d9ab.png&w=1920&q=85",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G2_Day%204_017_analyze_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G2_Day%204_017_analyze_sentence.mp3"
      }
    }
  },
  {
    "id": "arrange",
    "grade": 2,
    "day": 4,
    "seq": 18,
    "word": "arrange",
    "pos": "v.",
    "meaning": "마련하다, 정리하다",
    "example": "She arranges the chairs in a circle.",
    "exampleChunks": [
      "She",
      "arranges",
      "the",
      "chairs",
      "in",
      "a",
      "circle."
    ],
    "media": {
      "gif": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/arrage.mp4",
      "video": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/arrage.mp4",
      "thumb": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca%20-%20images/arrange.jpeg",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G2_Day%204_018_arrange_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G2_Day%204_018_arrange_sentence.mp3"
      }
    }
  },
  {
    "id": "avoid",
    "grade": 2,
    "day": 4,
    "seq": 19,
    "word": "avoid",
    "pos": "v.",
    "meaning": "방지하다, 막다",
    "example": "The cat avoids the dog.",
    "exampleChunks": [
      "The",
      "cat",
      "avoids",
      "the",
      "dog."
    ],
    "media": {
      "gif": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260623_185033_132af84c-77f7-4b50-8952-b92ac4e45a64.mp4",
      "video": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260623_185033_132af84c-77f7-4b50-8952-b92ac4e45a64.mp4",
      "thumb": "https://d2ol7oe51mr4n9.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/8ba711ec-08c5-4a83-bff2-79f94b8abb71.png",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G2_Day%204_019_avoid_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G2_Day%204_019_avoid_sentence.mp3"
      }
    }
  },
  {
    "id": "cause",
    "grade": 2,
    "day": 4,
    "seq": 20,
    "word": "cause",
    "pos": "v.",
    "meaning": "~을 야기하다",
    "example": "Stress can cause health problems.",
    "exampleChunks": [
      "Stress",
      "can",
      "cause",
      "health",
      "problems."
    ],
    "media": {
      "gif": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260623_185035_42384e9c-d92e-4edb-8a16-7159d45f819a.mp4",
      "video": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260623_185035_42384e9c-d92e-4edb-8a16-7159d45f819a.mp4",
      "thumb": "https://d2ol7oe51mr4n9.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/0862947e-7c54-4050-8521-a41a73ccc0f8.png",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G2_Day%204_020_cause_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G2_Day%204_020_cause_sentence.mp3"
      }
    }
  },
  {
    "id": "classify",
    "grade": 2,
    "day": 5,
    "seq": 1,
    "word": "classify",
    "pos": "v.",
    "meaning": "분류하다, 구분하다",
    "example": "We classify animals into groups at school.",
    "exampleChunks": [
      "We",
      "classify",
      "animals",
      "into",
      "groups",
      "at",
      "school."
    ],
    "media": {
      "gif": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260623_185037_6521c1d9-d093-4510-9b8d-df4b48b69698.mp4",
      "video": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260623_185037_6521c1d9-d093-4510-9b8d-df4b48b69698.mp4",
      "thumb": "https://d2ol7oe51mr4n9.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/5545cecd-cfd6-4aa9-8174-7a2e5b4d2a1b.png",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G2_Day%205_001_classify_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G2_Day%205_001_classify_sentence.mp3"
      }
    }
  },
  {
    "id": "conclude",
    "grade": 2,
    "day": 5,
    "seq": 2,
    "word": "conclude",
    "pos": "v.",
    "meaning": "결론을 내리다, 판단을 내리다",
    "example": "I conclude my story with a happy ending.",
    "exampleChunks": [
      "I",
      "conclude",
      "my",
      "story",
      "with",
      "a",
      "happy",
      "ending."
    ],
    "media": {
      "gif": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/conclude.mp4",
      "video": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/conclude.mp4",
      "thumb": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca%20-%20images/conclude.jpeg",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G2_Day%205_002_conclude_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G2_Day%205_002_conclude_sentence.mp3"
      }
    }
  },
  {
    "id": "continue",
    "grade": 2,
    "day": 5,
    "seq": 3,
    "word": "continue",
    "pos": "v.",
    "meaning": "계속되다, 계속하다",
    "example": "She continues to study for her exams.",
    "exampleChunks": [
      "She",
      "continues",
      "to",
      "study",
      "for",
      "her",
      "exams."
    ],
    "media": {
      "gif": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260623_185341_6fc3dcb3-5b8e-40d8-bdcb-b987fdf2d708.mp4",
      "video": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260623_185341_6fc3dcb3-5b8e-40d8-bdcb-b987fdf2d708.mp4",
      "thumb": "https://d2ol7oe51mr4n9.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/4ba0d618-8330-492b-b98f-8121fa722328.png",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G2_Day%205_003_continue_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G2_Day%205_003_continue_sentence.mp3"
      }
    }
  },
  {
    "id": "cooperate",
    "grade": 2,
    "day": 5,
    "seq": 4,
    "word": "cooperate",
    "pos": "v.",
    "meaning": "협조하다, 합동하다",
    "example": "The students cooperate with each other.",
    "exampleChunks": [
      "The",
      "students",
      "cooperate",
      "with",
      "each",
      "other."
    ],
    "media": {
      "gif": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/cooperate.mp4",
      "video": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/cooperate.mp4",
      "thumb": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca%20-%20images/cooperate.jpeg",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G2_Day%205_004_cooperate_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G2_Day%205_004_cooperate_sentence.mp3"
      }
    }
  },
  {
    "id": "cycle",
    "grade": 2,
    "day": 5,
    "seq": 5,
    "word": "cycle",
    "pos": "v.",
    "meaning": "순환하다, 주기를 이루다",
    "example": "Water cycles between the land and oceans.",
    "exampleChunks": [
      "Water",
      "cycles",
      "between",
      "the",
      "land",
      "and",
      "oceans."
    ],
    "media": {
      "gif": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/cycle.mp4",
      "video": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/cycle.mp4",
      "thumb": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca%20-%20images/cycle.jpeg",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G2_Day%205_005_cycle_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G2_Day%205_005_cycle_sentence.mp3"
      }
    }
  },
  {
    "id": "describe",
    "grade": 2,
    "day": 5,
    "seq": 6,
    "word": "describe",
    "pos": "v.",
    "meaning": "말하다, 묘사하다",
    "example": "He describes the taste of the food.",
    "exampleChunks": [
      "He",
      "describes",
      "the",
      "taste",
      "of",
      "the",
      "food."
    ],
    "media": {
      "gif": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260623_185349_ea0c846f-63ee-43cb-9a1d-d3c722c63316.mp4",
      "video": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260623_185349_ea0c846f-63ee-43cb-9a1d-d3c722c63316.mp4",
      "thumb": "https://d2ol7oe51mr4n9.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/506edaa9-359b-4e30-a4b4-26b47cb7ac61.png",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G2_Day%205_006_describe_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G2_Day%205_006_describe_sentence.mp3"
      }
    }
  },
  {
    "id": "detail",
    "grade": 2,
    "day": 5,
    "seq": 7,
    "word": "detail",
    "pos": "v.",
    "meaning": "상세히 알리다",
    "example": "She details her plans.",
    "exampleChunks": [
      "She",
      "details",
      "her",
      "plans."
    ],
    "media": {
      "gif": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/detail.mp4",
      "video": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/detail.mp4",
      "thumb": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca%20-%20images/detail.jpeg",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G2_Day%205_007_detail_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G2_Day%205_007_detail_sentence.mp3"
      }
    }
  },
  {
    "id": "edit",
    "grade": 2,
    "day": 5,
    "seq": 8,
    "word": "edit",
    "pos": "v.",
    "meaning": "수정하다, 편집하다",
    "example": "The film director edits the scenes.",
    "exampleChunks": [
      "The",
      "film",
      "director",
      "edits",
      "the",
      "scenes."
    ],
    "media": {
      "gif": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/edit.mp4",
      "video": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/edit.mp4",
      "thumb": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca%20-%20images/edit.jpeg",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G2_Day%205_008_edit_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G2_Day%205_008_edit_sentence.mp3"
      }
    }
  },
  {
    "id": "guide",
    "grade": 2,
    "day": 5,
    "seq": 9,
    "word": "guide",
    "pos": "v.",
    "meaning": "안내하다",
    "example": "He guides the team to victory.",
    "exampleChunks": [
      "He",
      "guides",
      "the",
      "team",
      "to",
      "victory."
    ],
    "media": {
      "gif": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/guide.mp4",
      "video": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/guide.mp4",
      "thumb": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca%20-%20images/guide.jpeg",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G2_Day%205_009_guide_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G2_Day%205_009_guide_sentence.mp3"
      }
    }
  },
  {
    "id": "escape",
    "grade": 2,
    "day": 5,
    "seq": 10,
    "word": "escape",
    "pos": "v.",
    "meaning": "달아나다, 탈출하다",
    "example": "The thief escapes from the police.",
    "exampleChunks": [
      "The",
      "thief",
      "escapes",
      "from",
      "the",
      "police."
    ],
    "media": {
      "gif": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/escape.mp4",
      "video": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/escape.mp4",
      "thumb": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca%20-%20images/escape.jpeg",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G2_Day%205_010_escape_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G2_Day%205_010_escape_sentence.mp3"
      }
    }
  },
  {
    "id": "estimate",
    "grade": 2,
    "day": 5,
    "seq": 11,
    "word": "estimate",
    "pos": "v.",
    "meaning": "추정하다",
    "example": "I estimate how many jellybeans are in the jar.",
    "exampleChunks": [
      "I",
      "estimate",
      "how",
      "many",
      "jellybeans",
      "are",
      "in",
      "the",
      "jar."
    ],
    "media": {
      "gif": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/estimate.mp4",
      "video": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/estimate.mp4",
      "thumb": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca%20-%20images/estimate.jpeg",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G2_Day%205_011_estimate_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G2_Day%205_011_estimate_sentence.mp3"
      }
    }
  },
  {
    "id": "exercise",
    "grade": 2,
    "day": 5,
    "seq": 12,
    "word": "exercise",
    "pos": "v.",
    "meaning": "운동하다",
    "example": "I exercise every morning to stay healthy.",
    "exampleChunks": [
      "I",
      "exercise",
      "every",
      "morning",
      "to",
      "stay",
      "healthy."
    ],
    "media": {
      "gif": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/exercise.mp4",
      "video": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/exercise.mp4",
      "thumb": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca%20-%20images/exercise.jpeg",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G2_Day%205_012_exercise_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G2_Day%205_012_exercise_sentence.mp3"
      }
    }
  },
  {
    "id": "expect",
    "grade": 2,
    "day": 5,
    "seq": 13,
    "word": "expect",
    "pos": "v.",
    "meaning": "예상하다, 기대하다",
    "example": "He expects her to be there on time.",
    "exampleChunks": [
      "He",
      "expects",
      "her",
      "to",
      "be",
      "there",
      "on",
      "time."
    ],
    "media": {
      "gif": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/expect.mp4",
      "video": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/expect.mp4",
      "thumb": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca%20-%20images/expect.jpeg",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G2_Day%205_013_expect_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G2_Day%205_013_expect_sentence.mp3"
      }
    }
  },
  {
    "id": "flock",
    "grade": 2,
    "day": 5,
    "seq": 14,
    "word": "flock",
    "pos": "v.",
    "meaning": "모이다, 떼 지어 가다",
    "example": "Students flock to the library.",
    "exampleChunks": [
      "Students",
      "flock",
      "to",
      "the",
      "library."
    ],
    "media": {
      "gif": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/flock.mp4",
      "video": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/flock.mp4",
      "thumb": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca%20-%20images/flock.jpeg",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G2_Day%205_014_flock_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G2_Day%205_014_flock_sentence.mp3"
      }
    }
  },
  {
    "id": "frighten",
    "grade": 2,
    "day": 5,
    "seq": 15,
    "word": "frighten",
    "pos": "v.",
    "meaning": "겁먹게 만들다, 놀라게 만들다",
    "example": "The loud noise frightenes the cat.",
    "exampleChunks": [
      "The",
      "loud",
      "noise",
      "frightenes",
      "the",
      "cat."
    ],
    "media": {
      "gif": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260623_185648_a67967ec-8044-4329-a0e5-8f6e0e45c50d.mp4",
      "video": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260623_185648_a67967ec-8044-4329-a0e5-8f6e0e45c50d.mp4",
      "thumb": "https://d2ol7oe51mr4n9.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/0458ecb5-531d-417b-bef2-46b586350016.png",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G2_Day%205_015_frighten_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G2_Day%205_015_frighten_sentence.mp3"
      }
    }
  },
  {
    "id": "frown",
    "grade": 2,
    "day": 5,
    "seq": 16,
    "word": "frown",
    "pos": "v.",
    "meaning": "얼굴을 찌푸리다, 찡그리다",
    "example": "I frown when I don't understand the question.",
    "exampleChunks": [
      "I",
      "frown",
      "when",
      "I",
      "don't",
      "understand",
      "the",
      "question."
    ],
    "media": {
      "gif": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/frown.mp4",
      "video": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/frown.mp4",
      "thumb": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca%20-%20images/frown.jpeg",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G2_Day%205_016_frown_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G2_Day%205_016_frown_sentence.mp3"
      }
    }
  },
  {
    "id": "gather",
    "grade": 2,
    "day": 5,
    "seq": 18,
    "word": "gather",
    "pos": "v.",
    "meaning": "(사람들이)모이다",
    "example": "Students gather in the park after school.",
    "exampleChunks": [
      "Students",
      "gather",
      "in",
      "the",
      "park",
      "after",
      "school."
    ],
    "media": {
      "gif": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/gather.mp4",
      "video": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/gather.mp4",
      "thumb": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca%20-%20images/gather.jpeg",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G2_Day%205_018_gather_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G2_Day%205_018_gather_sentence.mp3"
      }
    }
  },
  {
    "id": "gust",
    "grade": 2,
    "day": 5,
    "seq": 19,
    "word": "gust",
    "pos": "v.",
    "meaning": "(갑자기)몰아치다",
    "example": "The storm gusts through the city.",
    "exampleChunks": [
      "The",
      "storm",
      "gusts",
      "through",
      "the",
      "city."
    ],
    "media": {
      "gif": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/gust.mp4",
      "video": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/gust.mp4",
      "thumb": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca%20-%20images/gust.jpeg",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G2_Day%205_019_gust_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G2_Day%205_019_gust_sentence.mp3"
      }
    }
  },
  {
    "id": "include",
    "grade": 2,
    "day": 5,
    "seq": 20,
    "word": "include",
    "pos": "v.",
    "meaning": "포함하다",
    "example": "We include everyone in our game.",
    "exampleChunks": [
      "We",
      "include",
      "everyone",
      "in",
      "our",
      "game."
    ],
    "media": {
      "gif": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/include.mp4",
      "video": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/include.mp4",
      "thumb": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca%20-%20images/include.jpeg",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G2_Day%205_020_include_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G2_Day%205_020_include_sentence.mp3"
      }
    }
  },
  {
    "id": "insist",
    "grade": 2,
    "day": 6,
    "seq": 1,
    "word": "insist",
    "pos": "v.",
    "meaning": "고집하다, 주장하다",
    "example": "I insist that you finish the project.",
    "exampleChunks": [
      "I",
      "insist",
      "that",
      "you",
      "finish",
      "the",
      "project."
    ],
    "media": {
      "gif": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260625_192853_fa1d48d4-6f83-47db-92ee-81fd64a95f1a.mp4",
      "video": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260625_192853_fa1d48d4-6f83-47db-92ee-81fd64a95f1a.mp4",
      "thumb": "https://d2ol7oe51mr4n9.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/38613cdb-fd75-4267-92e4-804027782718.png",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G2_Day%206_001_insist_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G2_Day%206_001_insist_sentence.mp3"
      }
    }
  },
  {
    "id": "label",
    "grade": 2,
    "day": 6,
    "seq": 3,
    "word": "label",
    "pos": "v.",
    "meaning": "(라벨)붙이다, (상표를)붙이다",
    "example": "She labels each box with its contents.",
    "exampleChunks": [
      "She",
      "labels",
      "each",
      "box",
      "with",
      "its",
      "contents."
    ],
    "media": {
      "gif": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/label.mp4",
      "video": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/label.mp4",
      "thumb": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca%20-%20images/label.jpeg",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G2_Day%206_003_label_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G2_Day%206_003_label_sentence.mp3"
      }
    }
  },
  {
    "id": "lean",
    "grade": 2,
    "day": 6,
    "seq": 4,
    "word": "lean",
    "pos": "v.",
    "meaning": "기울다, ~에 기대다",
    "example": "The child leans against the door.",
    "exampleChunks": [
      "The",
      "child",
      "leans",
      "against",
      "the",
      "door."
    ],
    "media": {
      "gif": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260625_195749_03cbf404-27fb-4e87-a553-f6cbbf4f8dab.mp4",
      "video": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260625_195749_03cbf404-27fb-4e87-a553-f6cbbf4f8dab.mp4",
      "thumb": "https://d2ol7oe51mr4n9.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/85498402-819e-4e68-9914-208108ecf484.png",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G2_Day%206_004_lean_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G2_Day%206_004_lean_sentence.mp3"
      }
    }
  },
  {
    "id": "march",
    "grade": 2,
    "day": 6,
    "seq": 5,
    "word": "march",
    "pos": "v.",
    "meaning": "행진하다, 행군하듯 걷다",
    "example": "The soldiers march in a straight line.",
    "exampleChunks": [
      "The",
      "soldiers",
      "march",
      "in",
      "a",
      "straight",
      "line."
    ],
    "media": {
      "gif": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260625_201212_079ef3c4-b525-4eca-ad12-3305ae0586f9.mp4",
      "video": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260625_201212_079ef3c4-b525-4eca-ad12-3305ae0586f9.mp4",
      "thumb": "https://d2ol7oe51mr4n9.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/3bb3ebf9-3826-4f30-8914-57f9aa18fc3c.png",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G2_Day%206_005_march_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G2_Day%206_005_march_sentence.mp3"
      }
    }
  },
  {
    "id": "peek",
    "grade": 2,
    "day": 6,
    "seq": 9,
    "word": "peek",
    "pos": "v.",
    "meaning": "(재빨리)훔쳐보다",
    "example": "He peeks through the window.",
    "exampleChunks": [
      "He",
      "peeks",
      "through",
      "the",
      "window."
    ],
    "media": {
      "gif": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/peek.mp4",
      "video": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/peek.mp4",
      "thumb": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca%20-%20images/peek.jpeg",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G2_Day%206_009_peek_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G2_Day%206_009_peek_sentence.mp3"
      }
    }
  },
  {
    "id": "predict",
    "grade": 2,
    "day": 6,
    "seq": 12,
    "word": "predict",
    "pos": "v.",
    "meaning": "예측하다, 예견하다",
    "example": "She predicts a win for her team.",
    "exampleChunks": [
      "She",
      "predicts",
      "a",
      "win",
      "for",
      "her",
      "team."
    ],
    "media": {
      "gif": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260625_220000_ef7391a6-3a6c-4677-ae7c-fa1f3fcf6d97.mp4",
      "video": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260625_220000_ef7391a6-3a6c-4677-ae7c-fa1f3fcf6d97.mp4",
      "thumb": "https://d2ol7oe51mr4n9.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/27a0d67f-1f7f-45b1-bde4-a80c36569060.png",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G2_Day%206_012_predict_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G2_Day%206_012_predict_sentence.mp3"
      }
    }
  },
  {
    "id": "process",
    "grade": 2,
    "day": 6,
    "seq": 14,
    "word": "process",
    "pos": "v.",
    "meaning": "가공하다, 처리하다",
    "example": "The chef processes fresh ingredients.",
    "exampleChunks": [
      "The",
      "chef",
      "processes",
      "fresh",
      "ingredients."
    ],
    "media": {
      "gif": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/process.mp4",
      "video": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/process.mp4",
      "thumb": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca%20-%20images/process.jpeg",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G2_Day%206_014_process_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G2_Day%206_014_process_sentence.mp3"
      }
    }
  },
  {
    "id": "publish",
    "grade": 2,
    "day": 6,
    "seq": 15,
    "word": "publish",
    "pos": "v.",
    "meaning": "출판하다, 발행하다",
    "example": "The author publishes her first novel last year.",
    "exampleChunks": [
      "The",
      "author",
      "publishes",
      "her",
      "first",
      "novel",
      "last",
      "year."
    ],
    "media": {
      "gif": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260625_235137_9374de04-f926-4ca3-8f3a-7d1e1fe074a2.mp4",
      "video": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260625_235137_9374de04-f926-4ca3-8f3a-7d1e1fe074a2.mp4",
      "thumb": "https://d2ol7oe51mr4n9.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/046e2d22-9ff2-45f4-a0e6-07f6a3e4569f.png",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G2_Day%206_015_publish_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G2_Day%206_015_publish_sentence.mp3"
      }
    }
  },
  {
    "id": "record",
    "grade": 2,
    "day": 6,
    "seq": 16,
    "word": "record",
    "pos": "v.",
    "meaning": "기록하다, 녹화하다",
    "example": "The musician records a new song in the studio.",
    "exampleChunks": [
      "The",
      "musician",
      "records",
      "a",
      "new",
      "song",
      "in",
      "the",
      "studio."
    ],
    "media": {
      "gif": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260626_001212_d9fc1fc1-b59c-484b-9981-474222e2d093.mp4",
      "video": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260626_001212_d9fc1fc1-b59c-484b-9981-474222e2d093.mp4",
      "thumb": "https://d2ol7oe51mr4n9.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/42d1c0d2-8325-4d97-9077-1493db6eb5c7.png",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G2_Day%206_016_record_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G2_Day%206_016_record_sentence.mp3"
      }
    }
  },
  {
    "id": "revise",
    "grade": 2,
    "day": 6,
    "seq": 17,
    "word": "revise",
    "pos": "v.",
    "meaning": "변경하다, 수정하다",
    "example": "The teacher revises the lesson plan.",
    "exampleChunks": [
      "The",
      "teacher",
      "revises",
      "the",
      "lesson",
      "plan."
    ],
    "media": {
      "gif": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/revise.mp4",
      "video": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/revise.mp4",
      "thumb": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca%20-%20images/revise.jpeg",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G2_Day%206_017_revise_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G2_Day%206_017_revise_sentence.mp3"
      }
    }
  },
  {
    "id": "separate",
    "grade": 2,
    "day": 6,
    "seq": 18,
    "word": "separate",
    "pos": "v.",
    "meaning": "갈라지다, 분리되다",
    "example": "The river separates the two towns.",
    "exampleChunks": [
      "The",
      "river",
      "separates",
      "the",
      "two",
      "towns."
    ],
    "media": {
      "gif": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260626_005255_5864c30d-7a9d-4d8f-b4ec-df27106dfa19.mp4",
      "video": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260626_005255_5864c30d-7a9d-4d8f-b4ec-df27106dfa19.mp4",
      "thumb": "https://d2ol7oe51mr4n9.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/7baa473c-b807-4891-8241-834deb7a3173.png",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G2_Day%206_018_separate_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G2_Day%206_018_separate_sentence.mp3"
      }
    }
  },
  {
    "id": "steam",
    "grade": 2,
    "day": 6,
    "seq": 19,
    "word": "steam",
    "pos": "v.",
    "meaning": "(김을) 내뿜다",
    "example": "He steams up a hot cup of tea.",
    "exampleChunks": [
      "He",
      "steams",
      "up",
      "a",
      "hot",
      "cup",
      "of",
      "tea."
    ],
    "media": {
      "gif": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/steam.mp4",
      "video": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/steam.mp4",
      "thumb": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca%20-%20images/steam.jpeg",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G2_Day%206_019_steam_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G2_Day%206_019_steam_sentence.mp3"
      }
    }
  },
  {
    "id": "shiver",
    "grade": 2,
    "day": 6,
    "seq": 20,
    "word": "shiver",
    "pos": "v.",
    "meaning": "(몸을)떨다",
    "example": "She shivers in the cold wind.",
    "exampleChunks": [
      "She",
      "shivers",
      "in",
      "the",
      "cold",
      "wind."
    ],
    "media": {
      "gif": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260626_013225_38c5e259-2ea8-4474-a0c1-e952b4c0b97a.mp4",
      "video": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260626_013225_38c5e259-2ea8-4474-a0c1-e952b4c0b97a.mp4",
      "thumb": "https://d2ol7oe51mr4n9.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/39b53bf0-291a-4f54-8dd9-11f9aa82630d.png",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G2_Day%206_020_shiver_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G2_Day%206_020_shiver_sentence.mp3"
      }
    }
  },
  {
    "id": "suppose",
    "grade": 2,
    "day": 7,
    "seq": 1,
    "word": "suppose",
    "pos": "v.",
    "meaning": "생각하다, 추정하다",
    "example": "I suppose it will snow tomorrow.",
    "exampleChunks": [
      "I",
      "suppose",
      "it",
      "will",
      "snow",
      "tomorrow."
    ],
    "media": {
      "gif": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/suppose.mp4",
      "video": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/suppose.mp4",
      "thumb": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca%20-%20images/suppose.jpeg",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G2_Day%207_001_suppose_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G2_Day%207_001_suppose_sentence.mp3"
      }
    }
  },
  {
    "id": "sway",
    "grade": 2,
    "day": 7,
    "seq": 2,
    "word": "sway",
    "pos": "v.",
    "meaning": "흔들리다",
    "example": "The trees sway in the wind.",
    "exampleChunks": [
      "The",
      "trees",
      "sway",
      "in",
      "the",
      "wind."
    ],
    "media": {
      "gif": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260626_032205_17d7544b-5693-4da0-a52f-6fd24f0ff34e.mp4",
      "video": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260626_032205_17d7544b-5693-4da0-a52f-6fd24f0ff34e.mp4",
      "thumb": "https://d2ol7oe51mr4n9.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/a7dc4d8f-7b64-470a-913f-449b20b6f25e.png",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G2_Day%207_002_sway_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G2_Day%207_002_sway_sentence.mp3"
      }
    }
  },
  {
    "id": "swoop",
    "grade": 2,
    "day": 7,
    "seq": 3,
    "word": "swoop",
    "pos": "v.",
    "meaning": "급습하다, 기습하다",
    "example": "The superhero swoops in to save the day.",
    "exampleChunks": [
      "The",
      "superhero",
      "swoops",
      "in",
      "to",
      "save",
      "the",
      "day."
    ],
    "media": {
      "gif": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/swoop.mp4",
      "video": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/swoop.mp4",
      "thumb": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca%20-%20images/swoop.jpeg",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G2_Day%207_003_swoop_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G2_Day%207_003_swoop_sentence.mp3"
      }
    }
  },
  {
    "id": "treasure",
    "grade": 2,
    "day": 7,
    "seq": 4,
    "word": "treasure",
    "pos": "v.",
    "meaning": "소중히 여기다",
    "example": "I treasure my childhood pictures.",
    "exampleChunks": [
      "I",
      "treasure",
      "my",
      "childhood",
      "pictures."
    ],
    "media": {
      "gif": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260626_042351_09521df8-7f84-4d07-97b2-342669318431.mp4",
      "video": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260626_042351_09521df8-7f84-4d07-97b2-342669318431.mp4",
      "thumb": "https://d2ol7oe51mr4n9.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/f788e225-f5cf-4006-a1d4-d427d0bc826d.png",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G2_Day%207_004_treasure_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G2_Day%207_004_treasure_sentence.mp3"
      }
    }
  },
  {
    "id": "vanish",
    "grade": 2,
    "day": 7,
    "seq": 5,
    "word": "vanish",
    "pos": "v.",
    "meaning": "사라지다, 없어지다",
    "example": "The balloon will vanish in the sky.",
    "exampleChunks": [
      "The",
      "balloon",
      "will",
      "vanish",
      "in",
      "the",
      "sky."
    ],
    "media": {
      "gif": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/vanish.mp4",
      "video": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/vanish.mp4",
      "thumb": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca%20-%20images/vanish.jpeg",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G2_Day%207_005_vanish_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G2_Day%207_005_vanish_sentence.mp3"
      }
    }
  },
  {
    "id": "volunteer",
    "grade": 2,
    "day": 7,
    "seq": 6,
    "word": "volunteer",
    "pos": "v.",
    "meaning": "자원하다, 자진해서 말하다",
    "example": "He volunteers his help.",
    "exampleChunks": [
      "He",
      "volunteers",
      "his",
      "help."
    ],
    "media": {
      "gif": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/volunteer.mp4",
      "video": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/volunteer.mp4",
      "thumb": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca%20-%20images/volunteer.jpeg",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G2_Day%207_006_volunteer_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G2_Day%207_006_volunteer_sentence.mp3"
      }
    }
  },
  {
    "id": "express",
    "grade": 2,
    "day": 7,
    "seq": 9,
    "word": "express",
    "pos": "v.",
    "meaning": "표현하다, 나타내다",
    "example": "She expresses her disappointment with a sigh.",
    "exampleChunks": [
      "She",
      "expresses",
      "her",
      "disappointment",
      "with",
      "a",
      "sigh."
    ],
    "media": {
      "gif": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260626_061154_06a9943c-6f4e-4cc9-8df6-aeda051640f0.mp4",
      "video": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260626_061154_06a9943c-6f4e-4cc9-8df6-aeda051640f0.mp4",
      "thumb": "https://d2ol7oe51mr4n9.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/2d2346bd-9438-4e6b-8626-91ef6b406b54.png",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G2_Day%207_009_express_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G2_Day%207_009_express_sentence.mp3"
      }
    }
  },
  {
    "id": "camp",
    "grade": 2,
    "day": 7,
    "seq": 15,
    "word": "camp",
    "pos": "v.",
    "meaning": "야영하다",
    "example": "They camp in the mountains.",
    "exampleChunks": [
      "They",
      "camp",
      "in",
      "the",
      "mountains."
    ],
    "media": {
      "gif": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/camp.mp4",
      "video": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/camp.mp4",
      "thumb": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca%20-%20images/camp.jpeg",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G2_Day%207_015_camp_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G2_Day%207_015_camp_sentence.mp3"
      }
    }
  },
  {
    "id": "marry",
    "grade": 2,
    "day": 7,
    "seq": 16,
    "word": "marry",
    "pos": "v.",
    "meaning": "~와 결혼하다",
    "example": "",
    "exampleChunks": [],
    "media": {
      "gif": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/marry.mp4",
      "video": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/marry.mp4",
      "thumb": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca%20-%20images/marry.jpeg",
      "placeholder": "📖",
      "audio": {
        "word": "",
        "example": ""
      }
    }
  },
  {
    "id": "stretch",
    "grade": 2,
    "day": 7,
    "seq": 17,
    "word": "stretch",
    "pos": "v.",
    "meaning": "늘이다, 펴다[뻗다]",
    "example": "She stretches her arms above her head.",
    "exampleChunks": [
      "She",
      "stretches",
      "her",
      "arms",
      "above",
      "her",
      "head."
    ],
    "media": {
      "gif": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260626_103155_9759e112-5eaf-4075-8073-6c3a7d09d74b.mp4",
      "video": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260626_103155_9759e112-5eaf-4075-8073-6c3a7d09d74b.mp4",
      "thumb": "https://d2ol7oe51mr4n9.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/ed54724d-7c20-446d-87fd-6e0117a25fd5.png",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G2_Day%207_017_stretch_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G2_Day%207_017_stretch_sentence.mp3"
      }
    }
  },
  {
    "id": "heat",
    "grade": 2,
    "day": 7,
    "seq": 18,
    "word": "heat",
    "pos": "v.",
    "meaning": "가열하다",
    "example": "Mom heats the water on the stove to make tea.",
    "exampleChunks": [
      "Mom",
      "heats",
      "the",
      "water",
      "on",
      "the",
      "stove",
      "to",
      "make",
      "tea."
    ],
    "media": {
      "gif": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/heat.mp4",
      "video": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/heat.mp4",
      "thumb": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca%20-%20images/heat.jpeg",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G2_Day%207_018_heat_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G2_Day%207_018_heat_sentence.mp3"
      }
    }
  },
  {
    "id": "end",
    "grade": 2,
    "day": 7,
    "seq": 19,
    "word": "end",
    "pos": "v.",
    "meaning": "끝나다",
    "example": "The school day ends at three o'clock.",
    "exampleChunks": [
      "The",
      "school",
      "day",
      "ends",
      "at",
      "three",
      "o'clock."
    ],
    "media": {
      "gif": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/end.mp4",
      "video": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/end.mp4",
      "thumb": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca%20-%20images/end.jpeg",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G2_Day%207_019_end_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G2_Day%207_019_end_sentence.mp3"
      }
    }
  },
  {
    "id": "shout",
    "grade": 2,
    "day": 7,
    "seq": 20,
    "word": "shout",
    "pos": "v.",
    "meaning": "외치다",
    "example": "The teacher shouts to get the students' attention.",
    "exampleChunks": [
      "The",
      "teacher",
      "shouts",
      "to",
      "get",
      "the",
      "students'",
      "attention."
    ],
    "media": {
      "gif": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260626_120202_1bb06c05-2974-4ab8-9d5c-16f00507d769.mp4",
      "video": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260626_120202_1bb06c05-2974-4ab8-9d5c-16f00507d769.mp4",
      "thumb": "https://d2ol7oe51mr4n9.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/e366a75d-4c22-4d83-b804-b880bb90ed36.png",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G2_Day%207_020_shout_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G2_Day%207_020_shout_sentence.mp3"
      }
    }
  },
  {
    "id": "welcome",
    "grade": 2,
    "day": 8,
    "seq": 1,
    "word": "welcome",
    "pos": "v.",
    "meaning": "환영하다",
    "example": "They welcome the new neighbors.",
    "exampleChunks": [
      "They",
      "welcome",
      "the",
      "new",
      "neighbors."
    ],
    "media": {
      "gif": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260628_025447_5aa8fa65-da64-400f-99c8-4fbe9f8b2fa4.mp4",
      "video": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260628_025447_5aa8fa65-da64-400f-99c8-4fbe9f8b2fa4.mp4",
      "thumb": "https://d2ol7oe51mr4n9.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/d77e0986-376e-4878-9d6d-6c54e888cca8.png",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G2_Day%208_001_welcome_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G2_Day%208_001_welcome_sentence.mp3"
      }
    }
  },
  {
    "id": "bloom",
    "grade": 2,
    "day": 8,
    "seq": 2,
    "word": "bloom",
    "pos": "v.",
    "meaning": "꽃이 피다",
    "example": "Her favorite flowers bloom in the garden.",
    "exampleChunks": [
      "Her",
      "favorite",
      "flowers",
      "bloom",
      "in",
      "the",
      "garden."
    ],
    "media": {
      "gif": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260628_031457_91a6ff62-ec29-4c56-ac67-f68ee81156c3.mp4",
      "video": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260628_031457_91a6ff62-ec29-4c56-ac67-f68ee81156c3.mp4",
      "thumb": "https://d2ol7oe51mr4n9.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/12d79076-5fca-4522-8f47-6f83ff4993c4.png",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G2_Day%208_002_bloom_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G2_Day%208_002_bloom_sentence.mp3"
      }
    }
  },
  {
    "id": "wrap",
    "grade": 2,
    "day": 8,
    "seq": 4,
    "word": "wrap",
    "pos": "v.",
    "meaning": "싸다, 포장하다",
    "example": "He wraps a scarf around his neck.",
    "exampleChunks": [
      "He",
      "wraps",
      "a",
      "scarf",
      "around",
      "his",
      "neck."
    ],
    "media": {
      "gif": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260628_035616_825a9a8a-ec84-4604-a1d2-349e6be63586.mp4",
      "video": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260628_035616_825a9a8a-ec84-4604-a1d2-349e6be63586.mp4",
      "thumb": "https://d2ol7oe51mr4n9.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/b63c22e2-b8c0-474d-9584-e0b305078249.png",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G2_Day%208_004_wrap_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G2_Day%208_004_wrap_sentence.mp3"
      }
    }
  },
  {
    "id": "snore",
    "grade": 2,
    "day": 8,
    "seq": 6,
    "word": "snore",
    "pos": "v.",
    "meaning": "코를 골다",
    "example": "The old man snores peacefully.",
    "exampleChunks": [
      "The",
      "old",
      "man",
      "snores",
      "peacefully."
    ],
    "media": {
      "gif": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/snore.mp4",
      "video": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/snore.mp4",
      "thumb": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca%20-%20images/snore.jpeg",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G2_Day%208_006_snore_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G2_Day%208_006_snore_sentence.mp3"
      }
    }
  },
  {
    "id": "press",
    "grade": 2,
    "day": 8,
    "seq": 7,
    "word": "press",
    "pos": "v.",
    "meaning": "누르다",
    "example": "Mom presses the button to call the elevator.",
    "exampleChunks": [
      "Mom",
      "presses",
      "the",
      "button",
      "to",
      "call",
      "the",
      "elevator."
    ],
    "media": {
      "gif": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260628_045619_e5592b76-8b88-41dd-a1f9-a29badc6803f.mp4",
      "video": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260628_045619_e5592b76-8b88-41dd-a1f9-a29badc6803f.mp4",
      "thumb": "https://d2ol7oe51mr4n9.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/de5f97cc-2de2-40a3-97b4-4fbc11082513.png",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G2_Day%208_007_press_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G2_Day%208_007_press_sentence.mp3"
      }
    }
  },
  {
    "id": "practice",
    "grade": 2,
    "day": 8,
    "seq": 8,
    "word": "practice",
    "pos": "v.",
    "meaning": "연습하다",
    "example": "He practices the piano for hours.",
    "exampleChunks": [
      "He",
      "practices",
      "the",
      "piano",
      "for",
      "hours."
    ],
    "media": {
      "gif": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/practice.mp4",
      "video": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/practice.mp4",
      "thumb": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca%20-%20images/practice.jpeg",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G2_Day%208_008_practice_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G2_Day%208_008_practice_sentence.mp3"
      }
    }
  },
  {
    "id": "peel",
    "grade": 2,
    "day": 8,
    "seq": 10,
    "word": "peel",
    "pos": "v.",
    "meaning": "껍질을 벗기다",
    "example": "She peels an orange to enjoy as a snack.",
    "exampleChunks": [
      "She",
      "peels",
      "an",
      "orange",
      "to",
      "enjoy",
      "as",
      "a",
      "snack."
    ],
    "media": {
      "gif": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/peel.mp4",
      "video": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/peel.mp4",
      "thumb": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca%20-%20images/peel.jpeg",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G2_Day%208_010_peel_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G2_Day%208_010_peel_sentence.mp3"
      }
    }
  },
  {
    "id": "guess_g2d8",
    "grade": 2,
    "day": 8,
    "seq": 11,
    "word": "guess",
    "pos": "v.",
    "meaning": "추측하다",
    "example": "I guess the answer to the riddle correctly.",
    "exampleChunks": [
      "I",
      "guess",
      "the",
      "answer",
      "to",
      "the",
      "riddle",
      "correctly."
    ],
    "media": {
      "gif": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/guess.mp4",
      "video": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/guess.mp4",
      "thumb": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca%20-%20images/guess.jpeg",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G2_Day%208_011_guess_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G2_Day%208_011_guess_sentence.mp3"
      }
    }
  },
  {
    "id": "honk",
    "grade": 2,
    "day": 8,
    "seq": 12,
    "word": "honk",
    "pos": "v.",
    "meaning": "빵빵거리다",
    "example": "The car honks loudly.",
    "exampleChunks": [
      "The",
      "car",
      "honks",
      "loudly."
    ],
    "media": {
      "gif": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260628_063231_23abcf2a-3bd1-4204-b981-434a3c8a69e3.mp4",
      "video": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260628_063231_23abcf2a-3bd1-4204-b981-434a3c8a69e3.mp4",
      "thumb": "https://d2ol7oe51mr4n9.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/0f8f6c2b-c0aa-4e40-8f93-f30112b7a545.png",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G2_Day%208_012_honk_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G2_Day%208_012_honk_sentence.mp3"
      }
    }
  },
  {
    "id": "mean",
    "grade": 2,
    "day": 8,
    "seq": 14,
    "word": "mean",
    "pos": "v.",
    "meaning": "의미하다",
    "example": "His words mean a lot to me.",
    "exampleChunks": [
      "His",
      "words",
      "mean",
      "a",
      "lot",
      "to",
      "me."
    ],
    "media": {
      "gif": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/mean.mp4",
      "video": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/mean.mp4",
      "thumb": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca%20-%20images/mean.jpeg",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G2_Day%208_014_mean_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G2_Day%208_014_mean_sentence.mp3"
      }
    }
  },
  {
    "id": "lie",
    "grade": 2,
    "day": 8,
    "seq": 15,
    "word": "lie",
    "pos": "v.",
    "meaning": "거짓말하다, 눕다",
    "example": "The child lies about eating the cookies.",
    "exampleChunks": [
      "The",
      "child",
      "lies",
      "about",
      "eating",
      "the",
      "cookies."
    ],
    "media": {
      "gif": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260628_073121_e4bae262-db22-47e0-8c2a-451c3eef634c.mp4",
      "video": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260628_073121_e4bae262-db22-47e0-8c2a-451c3eef634c.mp4",
      "thumb": "https://d2ol7oe51mr4n9.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/6e40ded9-b60b-40ae-89a2-7a752b2c2670.png",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G2_Day%208_015_lie_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G2_Day%208_015_lie_sentence.mp3"
      }
    }
  },
  {
    "id": "hang",
    "grade": 2,
    "day": 8,
    "seq": 16,
    "word": "hang",
    "pos": "v.",
    "meaning": "걸다, 매달다",
    "example": "The teacher normally hangs the students' artwork.",
    "exampleChunks": [
      "The",
      "teacher",
      "normally",
      "hangs",
      "the",
      "students'",
      "artwork."
    ],
    "media": {
      "gif": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260701_213233_8c998f32-82a2-4b9e-8b01-798c4df72b23.mp4",
      "video": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260701_213233_8c998f32-82a2-4b9e-8b01-798c4df72b23.mp4",
      "thumb": "https://d2ol7oe51mr4n9.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/6730b439-3e9c-4fba-818d-7966970716e1.png",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G2_Day%208_016_hang_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G2_Day%208_016_hang_sentence.mp3"
      }
    }
  },
  {
    "id": "reply",
    "grade": 2,
    "day": 8,
    "seq": 17,
    "word": "reply",
    "pos": "v.",
    "meaning": "대답하다",
    "example": "Students reply to the questions in class.",
    "exampleChunks": [
      "Students",
      "reply",
      "to",
      "the",
      "questions",
      "in",
      "class."
    ],
    "media": {
      "gif": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/reply.mp4",
      "video": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/reply.mp4",
      "thumb": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca%20-%20images/reply.jpeg",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G2_Day%208_017_reply_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G2_Day%208_017_reply_sentence.mp3"
      }
    }
  },
  {
    "id": "collect",
    "grade": 2,
    "day": 8,
    "seq": 19,
    "word": "collect",
    "pos": "v.",
    "meaning": "모으다 수집하다",
    "example": "She collects stamps as a hobby.",
    "exampleChunks": [
      "She",
      "collects",
      "stamps",
      "as",
      "a",
      "hobby."
    ],
    "media": {
      "gif": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/collect.mp4",
      "video": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/collect.mp4",
      "thumb": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca%20-%20images/collect.jpeg",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G2_Day%208_019_collect_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G2_Day%208_019_collect_sentence.mp3"
      }
    }
  },
  {
    "id": "cough",
    "grade": 2,
    "day": 8,
    "seq": 20,
    "word": "cough",
    "pos": "v.",
    "meaning": "기침하다",
    "example": "He coughs loudly to clear his throat.",
    "exampleChunks": [
      "He",
      "coughs",
      "loudly",
      "to",
      "clear",
      "his",
      "throat."
    ],
    "media": {
      "gif": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/cough.mp4",
      "video": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/cough.mp4",
      "thumb": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca%20-%20images/cough.jpeg",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G2_Day%208_020_cough_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G2_Day%208_020_cough_sentence.mp3"
      }
    }
  },
  {
    "id": "point",
    "grade": 2,
    "day": 9,
    "seq": 1,
    "word": "point",
    "pos": "v.",
    "meaning": "가르키다",
    "example": "She points at the bird flying overhead.",
    "exampleChunks": [
      "She",
      "points",
      "at",
      "the",
      "bird",
      "flying",
      "overhead."
    ],
    "media": {
      "gif": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260628_095145_465d26c9-d328-4817-8338-c013f79dd7b3.mp4",
      "video": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260628_095145_465d26c9-d328-4817-8338-c013f79dd7b3.mp4",
      "thumb": "https://d2ol7oe51mr4n9.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/18053488-db17-4e83-827d-2fd10aa2ce45.png",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G2_Day%209_001_point_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G2_Day%209_001_point_sentence.mp3"
      }
    }
  },
  {
    "id": "return",
    "grade": 2,
    "day": 9,
    "seq": 2,
    "word": "return",
    "pos": "v.",
    "meaning": "돌아오다, 돌아가다",
    "example": "The students return to school.",
    "exampleChunks": [
      "The",
      "students",
      "return",
      "to",
      "school."
    ],
    "media": {
      "gif": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/return.mp4",
      "video": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/return.mp4",
      "thumb": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca%20-%20images/return.jpeg",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G2_Day%209_002_return_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G2_Day%209_002_return_sentence.mp3"
      }
    }
  },
  {
    "id": "create",
    "grade": 2,
    "day": 9,
    "seq": 3,
    "word": "create",
    "pos": "v.",
    "meaning": "창조하다, 만들다",
    "example": "We create art in class every Friday.",
    "exampleChunks": [
      "We",
      "create",
      "art",
      "in",
      "class",
      "every",
      "Friday."
    ],
    "media": {
      "gif": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260628_121241_54e3d17b-92f0-46a7-aa3f-a0da659d36f7.mp4",
      "video": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260628_121241_54e3d17b-92f0-46a7-aa3f-a0da659d36f7.mp4",
      "thumb": "https://d2ol7oe51mr4n9.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/9b1c5dc3-40fb-412f-84a0-4be2ee2c8396.png",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G2_Day%209_003_create_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G2_Day%209_003_create_sentence.mp3"
      }
    }
  },
  {
    "id": "forget",
    "grade": 2,
    "day": 9,
    "seq": 4,
    "word": "forget",
    "pos": "v.",
    "meaning": "잊다",
    "example": "She forgets to water the plants.",
    "exampleChunks": [
      "She",
      "forgets",
      "to",
      "water",
      "the",
      "plants."
    ],
    "media": {
      "gif": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260628_130059_77d7763f-48f3-4fde-8797-87dff2bdd208.mp4",
      "video": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260628_130059_77d7763f-48f3-4fde-8797-87dff2bdd208.mp4",
      "thumb": "https://d2ol7oe51mr4n9.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/df517e02-bae9-4246-a644-b2845bfe0a3a.png",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G2_Day%209_004_forget_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G2_Day%209_004_forget_sentence.mp3"
      }
    }
  },
  {
    "id": "lay",
    "grade": 2,
    "day": 9,
    "seq": 5,
    "word": "lay",
    "pos": "v.",
    "meaning": "(알을) 낳다, 놓다[두다]",
    "example": "I lay my books on the table.",
    "exampleChunks": [
      "I",
      "lay",
      "my",
      "books",
      "on",
      "the",
      "table."
    ],
    "media": {
      "gif": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/lay.mp4",
      "video": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/lay.mp4",
      "thumb": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca%20-%20images/lay.jpeg",
      "placeholder": "📖",
      "audio": {
        "word": "https://drive.google.com/uc?export=download&id=1skG1Yr4_PaUr7P56LoqXnwH6e0w4z4rq",
        "example": "https://drive.google.com/uc?export=download&id=1tq0nCNVmSGMg3y5m9-bDYNoZOth_xsdQ"
      }
    }
  },
  {
    "id": "fog",
    "grade": 2,
    "day": 9,
    "seq": 6,
    "word": "fog",
    "pos": "v.",
    "meaning": "수증기가 서리다 헷갈리게 만들다",
    "example": "",
    "exampleChunks": [],
    "media": {
      "gif": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/fog.mp4",
      "video": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/fog.mp4",
      "thumb": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca%20-%20images/fog.jpeg",
      "placeholder": "📖",
      "audio": {
        "word": "",
        "example": ""
      }
    }
  },
  {
    "id": "gulp",
    "grade": 2,
    "day": 9,
    "seq": 7,
    "word": "gulp",
    "pos": "v.",
    "meaning": "꿀꺽 삼키다 벌컥 마시다",
    "example": "He gulps down his drink",
    "exampleChunks": [
      "He",
      "gulps",
      "down",
      "his",
      "drink"
    ],
    "media": {
      "gif": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/gulp.mp4",
      "video": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/gulp.mp4",
      "thumb": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca%20-%20images/gulp.jpeg",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G2_Day%209_007_gulp_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G2_Day%209_007_gulp_sentence.mp3"
      }
    }
  },
  {
    "id": "weary_of",
    "grade": 2,
    "day": 9,
    "seq": 8,
    "word": "weary of",
    "pos": "v.",
    "meaning": "지치게 하다, ~에 싫증나다",
    "example": "I weary of the endless meetings.",
    "exampleChunks": [
      "I",
      "weary",
      "of",
      "the",
      "endless",
      "meetings."
    ],
    "media": {
      "gif": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/weary-of.mp4",
      "video": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/weary-of.mp4",
      "thumb": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca%20-%20images/weary-of.jpeg",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G2_Day%209_008_weary%20of_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G2_Day%209_008_weary%20of_sentence.mp3"
      }
    }
  },
  {
    "id": "upset",
    "grade": 2,
    "day": 9,
    "seq": 9,
    "word": "upset",
    "pos": "v.",
    "meaning": "속상하게 만들다",
    "example": "The news about the accident upsets her deeply.",
    "exampleChunks": [
      "The",
      "news",
      "about",
      "the",
      "accident",
      "upsets",
      "her",
      "deeply."
    ],
    "media": {
      "gif": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/upset.mp4",
      "video": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/upset.mp4",
      "thumb": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca%20-%20images/upset.jpeg",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G2_Day%209_009_upset_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G2_Day%209_009_upset_sentence.mp3"
      }
    }
  },
  {
    "id": "market",
    "grade": 2,
    "day": 9,
    "seq": 10,
    "word": "market",
    "pos": "v.",
    "meaning": "(상품을)내놓다",
    "example": "She markets her art on social media.",
    "exampleChunks": [
      "She",
      "markets",
      "her",
      "art",
      "on",
      "social",
      "media."
    ],
    "media": {
      "gif": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/market.mp4",
      "video": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/market.mp4",
      "thumb": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca%20-%20images/market.jpeg",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G2_Day%209_010_market_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G2_Day%209_010_market_sentence.mp3"
      }
    }
  },
  {
    "id": "price",
    "grade": 2,
    "day": 9,
    "seq": 11,
    "word": "price",
    "pos": "v.",
    "meaning": "값[가격]을 매기다, 가격을 정하다",
    "example": "He prices the items for sale.",
    "exampleChunks": [
      "He",
      "prices",
      "the",
      "items",
      "for",
      "sale."
    ],
    "media": {
      "gif": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/price.mp4",
      "video": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/price.mp4",
      "thumb": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca%20-%20images/price.jpeg",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G2_Day%209_011_price_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G2_Day%209_011_price_sentence.mp3"
      }
    }
  },
  {
    "id": "surround",
    "grade": 2,
    "day": 9,
    "seq": 12,
    "word": "surround",
    "pos": "v.",
    "meaning": "둘러싸다 포위하다",
    "example": "",
    "exampleChunks": [],
    "media": {
      "gif": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/surround.mp4",
      "video": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/surround.mp4",
      "thumb": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca%20-%20images/surround.jpeg",
      "placeholder": "📖",
      "audio": {
        "word": "",
        "example": ""
      }
    }
  },
  {
    "id": "complain",
    "grade": 2,
    "day": 9,
    "seq": 13,
    "word": "complain",
    "pos": "v.",
    "meaning": "불평하다, 항의하다",
    "example": "He complains about the noise.",
    "exampleChunks": [
      "He",
      "complains",
      "about",
      "the",
      "noise."
    ],
    "media": {
      "gif": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260628_150657_85853392-f116-4936-bf27-742442d91378.mp4",
      "video": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260628_150657_85853392-f116-4936-bf27-742442d91378.mp4",
      "thumb": "https://d2ol7oe51mr4n9.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/95a9fe17-734a-4750-93bc-d86927de10a9.png",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G2_Day%209_013_complain_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G2_Day%209_013_complain_sentence.mp3"
      }
    }
  },
  {
    "id": "yank",
    "grade": 2,
    "day": 9,
    "seq": 14,
    "word": "yank",
    "pos": "v.",
    "meaning": "확 잡아당기다",
    "example": "He yanks the door open.",
    "exampleChunks": [
      "He",
      "yanks",
      "the",
      "door",
      "open."
    ],
    "media": {
      "gif": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260628_155711_0aaa747e-d0cf-4058-92c1-1c98a1ddcb7a.mp4",
      "video": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260628_155711_0aaa747e-d0cf-4058-92c1-1c98a1ddcb7a.mp4",
      "thumb": "https://d2ol7oe51mr4n9.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/5c44a6e9-d113-4ea9-b5cf-c5a42e548b59.png",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G2_Day%209_014_yank_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G2_Day%209_014_yank_sentence.mp3"
      }
    }
  },
  {
    "id": "hunt",
    "grade": 2,
    "day": 9,
    "seq": 17,
    "word": "hunt",
    "pos": "v.",
    "meaning": "사냥하다, 찾다[뒤지다]",
    "example": "The lioness hunts for food.",
    "exampleChunks": [
      "The",
      "lioness",
      "hunts",
      "for",
      "food."
    ],
    "media": {
      "gif": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/hunt.mp4",
      "video": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/hunt.mp4",
      "thumb": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca%20-%20images/hunt.jpeg",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G2_Day%209_017_hunt_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G2_Day%209_017_hunt_sentence.mp3"
      }
    }
  },
  {
    "id": "huddle",
    "grade": 2,
    "day": 9,
    "seq": 18,
    "word": "huddle",
    "pos": "v.",
    "meaning": "옹송거리며 모이다 옹송그리다",
    "example": "Penguins huddle closely to keep warm.",
    "exampleChunks": [
      "Penguins",
      "huddle",
      "closely",
      "to",
      "keep",
      "warm."
    ],
    "media": {
      "gif": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/huddle.mp4",
      "video": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/huddle.mp4",
      "thumb": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca%20-%20images/huddle.jpeg",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G2_Day%209_018_huddle_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G2_Day%209_018_huddle_sentence.mp3"
      }
    }
  },
  {
    "id": "howl",
    "grade": 2,
    "day": 9,
    "seq": 19,
    "word": "howl",
    "pos": "v.",
    "meaning": "(길게)울다[울부짖다], 울부짖다",
    "example": "The wolf howls at the moon in the night.",
    "exampleChunks": [
      "The",
      "wolf",
      "howls",
      "at",
      "the",
      "moon",
      "in",
      "the",
      "night."
    ],
    "media": {
      "gif": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260629_110228_805fba4d-e981-4c7a-8a4c-8426febaabbe.mp4",
      "video": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260629_110228_805fba4d-e981-4c7a-8a4c-8426febaabbe.mp4",
      "thumb": "https://d2ol7oe51mr4n9.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/269c0107-66bc-4c0e-b66f-aa46c6d93773.png",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G2_Day%209_019_howl_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G2_Day%209_019_howl_sentence.mp3"
      }
    }
  },
  {
    "id": "hatch",
    "grade": 2,
    "day": 9,
    "seq": 20,
    "word": "hatch",
    "pos": "v.",
    "meaning": "부화하다 부화되다",
    "example": "",
    "exampleChunks": [],
    "media": {
      "gif": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/hatch.mp4",
      "video": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/hatch.mp4",
      "thumb": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca%20-%20images/hatch.jpeg",
      "placeholder": "📖",
      "audio": {
        "word": "",
        "example": ""
      }
    }
  },
  {
    "id": "slide",
    "grade": 2,
    "day": 10,
    "seq": 1,
    "word": "slide",
    "pos": "v.",
    "meaning": "미끄러지다, 미끄러뜨리다",
    "example": "I slide down the slide.",
    "exampleChunks": [
      "I",
      "slide",
      "down",
      "the",
      "slide."
    ],
    "media": {
      "gif": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/slide.mp4",
      "video": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/slide.mp4",
      "thumb": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca%20-%20images/slide.jpeg",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G2_Day%2010_001_slide_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G2_Day%2010_001_slide_sentence.mp3"
      }
    }
  },
  {
    "id": "chatter",
    "grade": 2,
    "day": 10,
    "seq": 2,
    "word": "chatter",
    "pos": "v.",
    "meaning": "수다를 떨다 딱딱 맞부딪치다",
    "example": "",
    "exampleChunks": [],
    "media": {
      "gif": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/chat.mp4",
      "video": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/chat.mp4",
      "thumb": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca%20-%20images/chat.jpeg",
      "placeholder": "📖",
      "audio": {
        "word": "",
        "example": ""
      }
    }
  },
  {
    "id": "stumble",
    "grade": 2,
    "day": 10,
    "seq": 3,
    "word": "stumble",
    "pos": "v.",
    "meaning": "발이 걸리다 발을 헛디디다",
    "example": "",
    "exampleChunks": [],
    "media": {
      "gif": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/stumble.mp4",
      "video": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/stumble.mp4",
      "thumb": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca%20-%20images/stumble.jpeg",
      "placeholder": "📖",
      "audio": {
        "word": "",
        "example": ""
      }
    }
  },
  {
    "id": "blush",
    "grade": 2,
    "day": 10,
    "seq": 4,
    "word": "blush",
    "pos": "v.",
    "meaning": "얼굴을 붉히다 ~에 부끄러워하다",
    "example": "",
    "exampleChunks": [],
    "media": {
      "gif": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/blush.mp4",
      "video": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/blush.mp4",
      "thumb": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca%20-%20images/blush.jpeg",
      "placeholder": "📖",
      "audio": {
        "word": "",
        "example": ""
      }
    }
  },
  {
    "id": "startle",
    "grade": 2,
    "day": 10,
    "seq": 5,
    "word": "startle",
    "pos": "v.",
    "meaning": "깜짝 놀라게 하다",
    "example": "The owl’s hoot startles me every night.",
    "exampleChunks": [
      "The",
      "owl’s",
      "hoot",
      "startles",
      "me",
      "every",
      "night."
    ],
    "media": {
      "gif": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260703_134217_ca79664e-0cbc-4797-8573-a4b94a1bdfcf.mp4",
      "video": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260703_134217_ca79664e-0cbc-4797-8573-a4b94a1bdfcf.mp4",
      "thumb": "https://d2ol7oe51mr4n9.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/fd956376-e457-45c3-9864-9ec3551bc831.png",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G2_Day%2010_005_startle_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G2_Day%2010_005_startle_sentence.mp3"
      }
    }
  },
  {
    "id": "drench",
    "grade": 2,
    "day": 10,
    "seq": 6,
    "word": "drench",
    "pos": "v.",
    "meaning": "흠뻑 적시다",
    "example": "",
    "exampleChunks": [],
    "media": {
      "gif": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/drench.mp4",
      "video": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/drench.mp4",
      "thumb": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca%20-%20images/drench.jpeg",
      "placeholder": "📖",
      "audio": {
        "word": "",
        "example": ""
      }
    }
  },
  {
    "id": "doze",
    "grade": 2,
    "day": 10,
    "seq": 7,
    "word": "doze",
    "pos": "v.",
    "meaning": "깜빡 잠이 들다 졸다",
    "example": "",
    "exampleChunks": [],
    "media": {
      "gif": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/doze.mp4",
      "video": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/doze.mp4",
      "thumb": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca%20-%20images/doze.jpeg",
      "placeholder": "📖",
      "audio": {
        "word": "",
        "example": ""
      }
    }
  },
  {
    "id": "burst",
    "grade": 2,
    "day": 10,
    "seq": 9,
    "word": "burst",
    "pos": "v.",
    "meaning": "터지다[파열하다] 불쑥 가다",
    "example": "The balloon bursts with a loud pop.",
    "exampleChunks": [
      "The",
      "balloon",
      "bursts",
      "with",
      "a",
      "loud",
      "pop."
    ],
    "media": {
      "gif": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/burst.mp4",
      "video": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/burst.mp4",
      "thumb": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca%20-%20images/burst.jpeg",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G2_Day%2010_009_burst_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G2_Day%2010_009_burst_sentence.mp3"
      }
    }
  },
  {
    "id": "tangle",
    "grade": 2,
    "day": 10,
    "seq": 10,
    "word": "tangle",
    "pos": "v.",
    "meaning": "헝클이다 헝클어지다",
    "example": "",
    "exampleChunks": [],
    "media": {
      "gif": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/tangle.mp4",
      "video": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/tangle.mp4",
      "thumb": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca%20-%20images/tangle.jpeg",
      "placeholder": "📖",
      "audio": {
        "word": "",
        "example": ""
      }
    }
  },
  {
    "id": "examine",
    "grade": 2,
    "day": 10,
    "seq": 11,
    "word": "examine",
    "pos": "v.",
    "meaning": "조사하다 검사하다",
    "example": "",
    "exampleChunks": [],
    "media": {
      "gif": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/examine.mp4",
      "video": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/examine.mp4",
      "thumb": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca%20-%20images/examine.jpeg",
      "placeholder": "📖",
      "audio": {
        "word": "",
        "example": ""
      }
    }
  },
  {
    "id": "judge",
    "grade": 2,
    "day": 10,
    "seq": 12,
    "word": "judge",
    "pos": "v.",
    "meaning": "판단하다 짐작하다",
    "example": "",
    "exampleChunks": [],
    "media": {
      "gif": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/judge.mp4",
      "video": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/judge.mp4",
      "thumb": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca%20-%20images/judge.jpeg",
      "placeholder": "📖",
      "audio": {
        "word": "",
        "example": ""
      }
    }
  },
  {
    "id": "space",
    "grade": 2,
    "day": 10,
    "seq": 13,
    "word": "space",
    "pos": "v.",
    "meaning": "간격을 두다",
    "example": "",
    "exampleChunks": [],
    "media": {
      "gif": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/space.mp4",
      "video": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/space.mp4",
      "thumb": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca%20-%20images/space.jpeg",
      "placeholder": "📖",
      "audio": {
        "word": "",
        "example": ""
      }
    }
  },
  {
    "id": "fasten",
    "grade": 2,
    "day": 10,
    "seq": 14,
    "word": "fasten",
    "pos": "v.",
    "meaning": "(단단히)잠그다 고정시키다",
    "example": "",
    "exampleChunks": [],
    "media": {
      "gif": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/fasten.mp4",
      "video": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/fasten.mp4",
      "thumb": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca%20-%20images/fasten.jpeg",
      "placeholder": "📖",
      "audio": {
        "word": "",
        "example": ""
      }
    }
  },
  {
    "id": "shock",
    "grade": 2,
    "day": 10,
    "seq": 15,
    "word": "shock",
    "pos": "v.",
    "meaning": "충격을 주다 깜짝 놀라다",
    "example": "",
    "exampleChunks": [],
    "media": {
      "gif": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/shock.mp4",
      "video": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/shock.mp4",
      "thumb": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca%20-%20images/shock.jpeg",
      "placeholder": "📖",
      "audio": {
        "word": "",
        "example": ""
      }
    }
  },
  {
    "id": "spread",
    "grade": 2,
    "day": 10,
    "seq": 16,
    "word": "spread",
    "pos": "v.",
    "meaning": "펼치다 펼치다/펴다",
    "example": "",
    "exampleChunks": [],
    "media": {
      "gif": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/spread.mp4",
      "video": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/spread.mp4",
      "thumb": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca%20-%20images/spread.jpeg",
      "placeholder": "📖",
      "audio": {
        "word": "",
        "example": ""
      }
    }
  },
  {
    "id": "perform",
    "grade": 2,
    "day": 10,
    "seq": 17,
    "word": "perform",
    "pos": "v.",
    "meaning": "수행하다[행하다] 공연하다",
    "example": "",
    "exampleChunks": [],
    "media": {
      "gif": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/perform.mp4",
      "video": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/perform.mp4",
      "thumb": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca%20-%20images/perform.jpeg",
      "placeholder": "📖",
      "audio": {
        "word": "",
        "example": ""
      }
    }
  },
  {
    "id": "whirl",
    "grade": 2,
    "day": 10,
    "seq": 18,
    "word": "whirl",
    "pos": "v.",
    "meaning": "빙그르르[빙빙]돌다 혼란스럽다",
    "example": "",
    "exampleChunks": [],
    "media": {
      "gif": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/whirl.mp4",
      "video": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/whirl.mp4",
      "thumb": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca%20-%20images/whirl.jpeg",
      "placeholder": "📖",
      "audio": {
        "word": "",
        "example": ""
      }
    }
  },
  {
    "id": "shriek",
    "grade": 2,
    "day": 10,
    "seq": 19,
    "word": "shriek",
    "pos": "v.",
    "meaning": "소리[비명]를 지르다 악을 쓰며 말하다",
    "example": "",
    "exampleChunks": [],
    "media": {
      "gif": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/shriek.mp4",
      "video": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/shriek.mp4",
      "thumb": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca%20-%20images/shriek.jpeg",
      "placeholder": "📖",
      "audio": {
        "word": "",
        "example": ""
      }
    }
  },
  {
    "id": "stun",
    "grade": 2,
    "day": 10,
    "seq": 20,
    "word": "stun",
    "pos": "v.",
    "meaning": "기절[실신]시키다 망연자실하게 만들다",
    "example": "",
    "exampleChunks": [],
    "media": {
      "gif": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/stun.mp4",
      "video": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/stun.mp4",
      "thumb": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca%20-%20images/stun.jpeg",
      "placeholder": "📖",
      "audio": {
        "word": "",
        "example": ""
      }
    }
  },
  {
    "id": "dip",
    "grade": 3,
    "day": 1,
    "seq": 1,
    "word": "dip",
    "pos": "v.",
    "meaning": "살짝 담그다, 적시다",
    "example": "I dip the bread in hot chocolate.",
    "exampleChunks": [
      "I",
      "dip",
      "the",
      "bread",
      "in",
      "hot",
      "chocolate."
    ],
    "media": {
      "gif": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260628_201734_6d74ac5f-c1d1-4dee-b3d7-db7ed3c592b8.mp4",
      "video": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260628_201734_6d74ac5f-c1d1-4dee-b3d7-db7ed3c592b8.mp4",
      "thumb": "https://d2ol7oe51mr4n9.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/17202ef3-f043-41c5-98a2-a245161504e6.png",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G3_Day%201_001_dip_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G3_Day%201_001_dip_sentence.mp3"
      }
    }
  },
  {
    "id": "cut",
    "grade": 3,
    "day": 1,
    "seq": 2,
    "word": "cut",
    "pos": "v.",
    "meaning": "자르다",
    "example": "My mom cuts the carrot.",
    "exampleChunks": [
      "My",
      "mom",
      "cuts",
      "the",
      "carrot."
    ],
    "media": {
      "gif": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260628_203504_01a2e2b3-1bfc-4095-9407-cee3ee788f7a.mp4",
      "video": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260628_203504_01a2e2b3-1bfc-4095-9407-cee3ee788f7a.mp4",
      "thumb": "https://d2ol7oe51mr4n9.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/ba13ffb2-aa8f-4008-b981-7506255ba031.png",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G3_Day%201_002_cut_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G3_Day%201_002_cut_sentence.mp3"
      }
    }
  },
  {
    "id": "roar",
    "grade": 3,
    "day": 1,
    "seq": 3,
    "word": "roar",
    "pos": "v.",
    "meaning": "으르렁거리다, 고함치다",
    "example": "Two dogs roar at each other.",
    "exampleChunks": [
      "Two",
      "dogs",
      "roar",
      "at",
      "each",
      "other."
    ],
    "media": {
      "gif": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260628_211128_33cc9896-45f9-4f06-adfe-38768c8b1f94.mp4",
      "video": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260628_211128_33cc9896-45f9-4f06-adfe-38768c8b1f94.mp4",
      "thumb": "https://d2ol7oe51mr4n9.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/3e825992-f361-4d83-8f3e-84fbe05b52f2.png",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G3_Day%201_003_roar_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G3_Day%201_003_roar_sentence.mp3"
      }
    }
  },
  {
    "id": "cross",
    "grade": 3,
    "day": 1,
    "seq": 4,
    "word": "cross",
    "pos": "v.",
    "meaning": "건너다, 가로지르다",
    "example": "He crosses the traffic light.",
    "exampleChunks": [
      "He",
      "crosses",
      "the",
      "traffic",
      "light."
    ],
    "media": {
      "gif": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260628_213357_3b8fcca1-b736-44eb-8b26-1439a1a021c4.mp4",
      "video": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260628_213357_3b8fcca1-b736-44eb-8b26-1439a1a021c4.mp4",
      "thumb": "https://d2ol7oe51mr4n9.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/8e2009b8-4a45-47f0-b423-136014e7673b.png",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G3_Day%201_004_cross_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G3_Day%201_004_cross_sentence.mp3"
      }
    }
  },
  {
    "id": "dig",
    "grade": 3,
    "day": 1,
    "seq": 6,
    "word": "dig",
    "pos": "v.",
    "meaning": "파다",
    "example": "The dog digs the ground in the yard.",
    "exampleChunks": [
      "The",
      "dog",
      "digs",
      "the",
      "ground",
      "in",
      "the",
      "yard."
    ],
    "media": {
      "gif": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/dig.mp4",
      "video": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/dig.mp4",
      "thumb": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca%20-%20images/dig.jpeg",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G3_Day%201_006_dig_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G3_Day%201_006_dig_sentence.mp3"
      }
    }
  },
  {
    "id": "whisper",
    "grade": 3,
    "day": 1,
    "seq": 7,
    "word": "whisper",
    "pos": "v.",
    "meaning": "속삭이다, 귓속말을 하다",
    "example": "He whispers in my ear.",
    "exampleChunks": [
      "He",
      "whispers",
      "in",
      "my",
      "ear."
    ],
    "media": {
      "gif": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260629_024410_c0e61b43-086b-4ba3-b81f-d323d69484ee.mp4",
      "video": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260629_024410_c0e61b43-086b-4ba3-b81f-d323d69484ee.mp4",
      "thumb": "https://d2ol7oe51mr4n9.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/c3a06e9f-e9c5-44a0-9308-fea4e5b086fe.png",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G3_Day%201_007_whisper_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G3_Day%201_007_whisper_sentence.mp3"
      }
    }
  },
  {
    "id": "yell",
    "grade": 3,
    "day": 1,
    "seq": 8,
    "word": "yell",
    "pos": "v.",
    "meaning": "외치다 소리 지르다",
    "example": "He yells at my sister.",
    "exampleChunks": [
      "He",
      "yells",
      "at",
      "my",
      "sister."
    ],
    "media": {
      "gif": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/yell.mp4",
      "video": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/yell.mp4",
      "thumb": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca%20-%20images/yell.jpeg",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G3_Day%201_008_yell_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G3_Day%201_008_yell_sentence.mp3"
      }
    }
  },
  {
    "id": "cheer",
    "grade": 3,
    "day": 1,
    "seq": 9,
    "word": "cheer",
    "pos": "v.",
    "meaning": "환호하다",
    "example": "",
    "exampleChunks": [],
    "media": {
      "gif": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/cheer.mp4",
      "video": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/cheer.mp4",
      "thumb": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca%20-%20images/cheer.jpeg",
      "placeholder": "📖",
      "audio": {
        "word": "",
        "example": ""
      }
    }
  },
  {
    "id": "happen",
    "grade": 3,
    "day": 1,
    "seq": 11,
    "word": "happen",
    "pos": "v.",
    "meaning": "일어나다, 발생하다",
    "example": "Something exciting will happen at the party.",
    "exampleChunks": [
      "Something",
      "exciting",
      "will",
      "happen",
      "at",
      "the",
      "party."
    ],
    "media": {
      "gif": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/happen.mp4",
      "video": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/happen.mp4",
      "thumb": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca%20-%20images/happen.jpeg",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G3_Day%201_011_happen_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G3_Day%201_011_happen_sentence.mp3"
      }
    }
  },
  {
    "id": "bump",
    "grade": 3,
    "day": 1,
    "seq": 12,
    "word": "bump",
    "pos": "v.",
    "meaning": "부딫히다, 충돌하다",
    "example": "I bump into a man on the street.",
    "exampleChunks": [
      "I",
      "bump",
      "into",
      "a",
      "man",
      "on",
      "the",
      "street."
    ],
    "media": {
      "gif": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260629_054514_370ba2a4-80f0-44a6-9938-6f06d1a216a5.mp4",
      "video": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260629_054514_370ba2a4-80f0-44a6-9938-6f06d1a216a5.mp4",
      "thumb": "https://d2ol7oe51mr4n9.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/f26379c0-bcf4-4e0b-ba14-2b7bbc89edc9.png",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G3_Day%201_012_bump_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G3_Day%201_012_bump_sentence.mp3"
      }
    }
  },
  {
    "id": "pin",
    "grade": 3,
    "day": 1,
    "seq": 13,
    "word": "pin",
    "pos": "v.",
    "meaning": "꽂다, 고정시키다",
    "example": "My dad pins the picture to the wall.",
    "exampleChunks": [
      "My",
      "dad",
      "pins",
      "the",
      "picture",
      "to",
      "the",
      "wall."
    ],
    "media": {
      "gif": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260629_062133_ff9672e7-d5a6-4a4d-9046-9fbf7f9669a2.mp4",
      "video": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260629_062133_ff9672e7-d5a6-4a4d-9046-9fbf7f9669a2.mp4",
      "thumb": "https://d2ol7oe51mr4n9.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/780b25c0-3eca-4304-ae2d-f48a1ec487e0.png",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G3_Day%201_013_pin_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G3_Day%201_013_pin_sentence.mp3"
      }
    }
  },
  {
    "id": "ask",
    "grade": 3,
    "day": 1,
    "seq": 15,
    "word": "ask",
    "pos": "v.",
    "meaning": "묻다, 질문하다",
    "example": "He asks me about my hobby.",
    "exampleChunks": [
      "He",
      "asks",
      "me",
      "about",
      "my",
      "hobby."
    ],
    "media": {
      "gif": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260629_070543_792778e7-691d-4267-a3c7-bf8dd3df18f3.mp4",
      "video": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260629_070543_792778e7-691d-4267-a3c7-bf8dd3df18f3.mp4",
      "thumb": "https://d2ol7oe51mr4n9.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/61ca64b8-9a29-4ac8-a52d-aa5d3fa0c630.png",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G3_Day%201_015_ask_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G3_Day%201_015_ask_sentence.mp3"
      }
    }
  },
  {
    "id": "study",
    "grade": 3,
    "day": 1,
    "seq": 16,
    "word": "study",
    "pos": "v.",
    "meaning": "공부하다, 연구하다",
    "example": "He studies about the universe.",
    "exampleChunks": [
      "He",
      "studies",
      "about",
      "the",
      "universe."
    ],
    "media": {
      "gif": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260629_090345_a76c2ae5-b4ea-4b88-a132-9dd7d2b2089f.mp4",
      "video": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260629_090345_a76c2ae5-b4ea-4b88-a132-9dd7d2b2089f.mp4",
      "thumb": "https://d2ol7oe51mr4n9.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/641c5775-72f2-44eb-80b4-dad3531e62d7.png",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G3_Day%201_016_study_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G3_Day%201_016_study_sentence.mp3"
      }
    }
  },
  {
    "id": "arrive",
    "grade": 3,
    "day": 1,
    "seq": 18,
    "word": "arrive",
    "pos": "v.",
    "meaning": "도착하다",
    "example": "I usually arrive school on time.",
    "exampleChunks": [
      "I",
      "usually",
      "arrive",
      "school",
      "on",
      "time."
    ],
    "media": {
      "gif": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/arrive.mp4",
      "video": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/arrive.mp4",
      "thumb": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca%20-%20images/arrive.jpeg",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G3_Day%201_018_arrive_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G3_Day%201_018_arrive_sentence.mp3"
      }
    }
  },
  {
    "id": "count",
    "grade": 3,
    "day": 1,
    "seq": 19,
    "word": "count",
    "pos": "v.",
    "meaning": "세다, 계산하다",
    "example": "He counts the money.",
    "exampleChunks": [
      "He",
      "counts",
      "the",
      "money."
    ],
    "media": {
      "gif": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260629_115149_8ba5ca21-87f1-4be9-9af4-21d0a49a2efa.mp4",
      "video": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260629_115149_8ba5ca21-87f1-4be9-9af4-21d0a49a2efa.mp4",
      "thumb": "https://d2ol7oe51mr4n9.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/91e413df-57e3-4e52-9593-6df51bf6da39.png",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G3_Day%201_019_count_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G3_Day%201_019_count_sentence.mp3"
      }
    }
  },
  {
    "id": "clap",
    "grade": 3,
    "day": 2,
    "seq": 1,
    "word": "clap",
    "pos": "v.",
    "meaning": "박수치다",
    "example": "The children clap for each other.",
    "exampleChunks": [
      "The",
      "children",
      "clap",
      "for",
      "each",
      "other."
    ],
    "media": {
      "gif": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260629_140550_3c803a2a-3474-4ed4-84d6-f16891a515dd.mp4",
      "video": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260629_140550_3c803a2a-3474-4ed4-84d6-f16891a515dd.mp4",
      "thumb": "https://d2ol7oe51mr4n9.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/a1fd215d-be05-4785-b1e5-beb8d3428959.png",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G3_Day%202_001_clap_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G3_Day%202_001_clap_sentence.mp3"
      }
    }
  },
  {
    "id": "cost",
    "grade": 3,
    "day": 2,
    "seq": 2,
    "word": "cost",
    "pos": "v.",
    "meaning": "(값, 비용이)들다",
    "example": "An art set costs 2 dollars.",
    "exampleChunks": [
      "An",
      "art",
      "set",
      "costs",
      "2",
      "dollars."
    ],
    "media": {
      "gif": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/cost.mp4",
      "video": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/cost.mp4",
      "thumb": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca%20-%20images/cost.jpeg",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G3_Day%202_002_cost_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G3_Day%202_002_cost_sentence.mp3"
      }
    }
  },
  {
    "id": "subtract",
    "grade": 3,
    "day": 2,
    "seq": 3,
    "word": "subtract",
    "pos": "v.",
    "meaning": "빼다",
    "example": "He subtracts three from five.",
    "exampleChunks": [
      "He",
      "subtracts",
      "three",
      "from",
      "five."
    ],
    "media": {
      "gif": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/subtract.mp4",
      "video": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/subtract.mp4",
      "thumb": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca%20-%20images/subtract.jpeg",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G3_Day%202_003_subtract_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G3_Day%202_003_subtract_sentence.mp3"
      }
    }
  },
  {
    "id": "meet",
    "grade": 3,
    "day": 2,
    "seq": 6,
    "word": "meet",
    "pos": "v.",
    "meaning": "만나다",
    "example": "I meet her at the bus station.",
    "exampleChunks": [
      "I",
      "meet",
      "her",
      "at",
      "the",
      "bus",
      "station."
    ],
    "media": {
      "gif": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260629_161125_cab681e1-f6a1-4ec2-8fab-2bd4b1fc2dab.mp4",
      "video": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260629_161125_cab681e1-f6a1-4ec2-8fab-2bd4b1fc2dab.mp4",
      "thumb": "https://d2ol7oe51mr4n9.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/3ec9165a-b6fc-46ed-aa83-34441d27c30d.png",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G3_Day%202_006_meet_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G3_Day%202_006_meet_sentence.mp3"
      }
    }
  },
  {
    "id": "zoom",
    "grade": 3,
    "day": 2,
    "seq": 7,
    "word": "zoom",
    "pos": "v.",
    "meaning": "(빠르게)가다, 질주하다",
    "example": "The car zooms down the highway.",
    "exampleChunks": [
      "The",
      "car",
      "zooms",
      "down",
      "the",
      "highway."
    ],
    "media": {
      "gif": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/zoom.mp4",
      "video": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/zoom.mp4",
      "thumb": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca%20-%20images/zoom.jpeg",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G3_Day%202_007_zoom_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G3_Day%202_007_zoom_sentence.mp3"
      }
    }
  },
  {
    "id": "fish",
    "grade": 3,
    "day": 2,
    "seq": 8,
    "word": "fish",
    "pos": "v.",
    "meaning": "낚시하다",
    "example": "We usually fish on weekends.",
    "exampleChunks": [
      "We",
      "usually",
      "fish",
      "on",
      "weekends."
    ],
    "media": {
      "gif": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260629_171251_79bc9d5a-66fa-4f37-a479-ef552feb21d9.mp4",
      "video": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260629_171251_79bc9d5a-66fa-4f37-a479-ef552feb21d9.mp4",
      "thumb": "https://d2ol7oe51mr4n9.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/cca81e3b-91ea-4e92-80ed-c9539c755f82.png",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G3_Day%202_008_fish_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G3_Day%202_008_fish_sentence.mp3"
      }
    }
  },
  {
    "id": "paddle",
    "grade": 3,
    "day": 2,
    "seq": 9,
    "word": "paddle",
    "pos": "v.",
    "meaning": "첨벙거리며 다니다, 물장난하다",
    "example": "The children paddle the boat in the pond.",
    "exampleChunks": [
      "The",
      "children",
      "paddle",
      "the",
      "boat",
      "in",
      "the",
      "pond."
    ],
    "media": {
      "gif": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/paddle.mp4",
      "video": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/paddle.mp4",
      "thumb": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca%20-%20images/paddle.jpeg",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G3_Day%202_009_paddle_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G3_Day%202_009_paddle_sentence.mp3"
      }
    }
  },
  {
    "id": "spin",
    "grade": 3,
    "day": 2,
    "seq": 10,
    "word": "spin",
    "pos": "v.",
    "meaning": "돌다, 회전하다",
    "example": "The girl spins three times.",
    "exampleChunks": [
      "The",
      "girl",
      "spins",
      "three",
      "times."
    ],
    "media": {
      "gif": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/spin.mp4",
      "video": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/spin.mp4",
      "thumb": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca%20-%20images/spin.jpeg",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G3_Day%202_010_spin_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G3_Day%202_010_spin_sentence.mp3"
      }
    }
  },
  {
    "id": "wave",
    "grade": 3,
    "day": 2,
    "seq": 12,
    "word": "wave",
    "pos": "v.",
    "meaning": "흔들다, 손짓하다",
    "example": "My mom waves her hand at me.",
    "exampleChunks": [
      "My",
      "mom",
      "waves",
      "her",
      "hand",
      "at",
      "me."
    ],
    "media": {
      "gif": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260629_210226_0bff5dad-7e22-4736-84b5-dc1830a9d338.mp4",
      "video": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260629_210226_0bff5dad-7e22-4736-84b5-dc1830a9d338.mp4",
      "thumb": "https://d2ol7oe51mr4n9.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/2fb0ec91-6335-48df-855d-bc485b44836f.png",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G3_Day%202_012_wave_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G3_Day%202_012_wave_sentence.mp3"
      }
    }
  },
  {
    "id": "tell",
    "grade": 3,
    "day": 2,
    "seq": 15,
    "word": "tell",
    "pos": "v.",
    "meaning": "말하다",
    "example": "She tells me her secret.",
    "exampleChunks": [
      "She",
      "tells",
      "me",
      "her",
      "secret."
    ],
    "media": {
      "gif": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/tell.mp4",
      "video": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/tell.mp4",
      "thumb": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca%20-%20images/tell.jpeg",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G3_Day%202_015_tell_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G3_Day%202_015_tell_sentence.mp3"
      }
    }
  },
  {
    "id": "connect",
    "grade": 3,
    "day": 2,
    "seq": 17,
    "word": "connect",
    "pos": "v.",
    "meaning": "연결하다, 접속하다",
    "example": "She connects the computer to the internet.",
    "exampleChunks": [
      "She",
      "connects",
      "the",
      "computer",
      "to",
      "the",
      "internet."
    ],
    "media": {
      "gif": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/connect.mp4",
      "video": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/connect.mp4",
      "thumb": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca%20-%20images/connect.jpeg",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G3_Day%202_017_connect_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G3_Day%202_017_connect_sentence.mp3"
      }
    }
  },
  {
    "id": "explain",
    "grade": 3,
    "day": 2,
    "seq": 18,
    "word": "explain",
    "pos": "v.",
    "meaning": "설명하다",
    "example": "She will explain the answer to the class.",
    "exampleChunks": [
      "She",
      "will",
      "explain",
      "the",
      "answer",
      "to",
      "the",
      "class."
    ],
    "media": {
      "gif": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260629_231332_4de21a33-f1d2-4deb-bcc8-40638d28c0c6.mp4",
      "video": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260629_231332_4de21a33-f1d2-4deb-bcc8-40638d28c0c6.mp4",
      "thumb": "https://d2ol7oe51mr4n9.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/dcf8ffbc-b9cc-4b63-95ff-a54636bbbb48.png",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G3_Day%202_018_explain_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G3_Day%202_018_explain_sentence.mp3"
      }
    }
  },
  {
    "id": "pour",
    "grade": 3,
    "day": 2,
    "seq": 19,
    "word": "pour",
    "pos": "v.",
    "meaning": "붓다 따르다",
    "example": "",
    "exampleChunks": [],
    "media": {
      "gif": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/pour.mp4",
      "video": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/pour.mp4",
      "thumb": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca%20-%20images/pour.jpeg",
      "placeholder": "📖",
      "audio": {
        "word": "",
        "example": ""
      }
    }
  },
  {
    "id": "change",
    "grade": 3,
    "day": 2,
    "seq": 20,
    "word": "change",
    "pos": "v.",
    "meaning": "변화시키다, 변하다",
    "example": "He changes his mind.",
    "exampleChunks": [
      "He",
      "changes",
      "his",
      "mind."
    ],
    "media": {
      "gif": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/change.mp4",
      "video": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/change.mp4",
      "thumb": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca%20-%20images/change.jpeg",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G3_Day%202_020_change_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G3_Day%202_020_change_sentence.mp3"
      }
    }
  },
  {
    "id": "tape",
    "grade": 3,
    "day": 3,
    "seq": 1,
    "word": "tape",
    "pos": "v.",
    "meaning": "테이프[끈]로 묶다, 녹음[녹화]하다",
    "example": "I sometimes tape my picture to the wall.",
    "exampleChunks": [
      "I",
      "sometimes",
      "tape",
      "my",
      "picture",
      "to",
      "the",
      "wall."
    ],
    "media": {
      "gif": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260630_005328_6754cb3e-2027-4b33-91b8-35221eb4ece8.mp4",
      "video": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260630_005328_6754cb3e-2027-4b33-91b8-35221eb4ece8.mp4",
      "thumb": "https://d2ol7oe51mr4n9.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/395f1356-692d-4ee2-83c2-3bd02dc43187.png",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G3_Day%203_001_tape_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G3_Day%203_001_tape_sentence.mp3"
      }
    }
  },
  {
    "id": "flip",
    "grade": 3,
    "day": 3,
    "seq": 2,
    "word": "flip",
    "pos": "v.",
    "meaning": "홱 뒤집(히)다",
    "example": "My dad flips the egg and bacon.",
    "exampleChunks": [
      "My",
      "dad",
      "flips",
      "the",
      "egg",
      "and",
      "bacon."
    ],
    "media": {
      "gif": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260630_011253_bfc58bbf-25f1-42d2-ba31-429b0a68884e.mp4",
      "video": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260630_011253_bfc58bbf-25f1-42d2-ba31-429b0a68884e.mp4",
      "thumb": "https://d2ol7oe51mr4n9.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/b43d71b9-120f-4ce2-8dcd-0563a5e4f32f.png",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G3_Day%203_002_flip_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G3_Day%203_002_flip_sentence.mp3"
      }
    }
  },
  {
    "id": "mop",
    "grade": 3,
    "day": 3,
    "seq": 3,
    "word": "mop",
    "pos": "v.",
    "meaning": "대걸레로 닦다",
    "example": "",
    "exampleChunks": [],
    "media": {
      "gif": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/mop.mp4",
      "video": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/mop.mp4",
      "thumb": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca%20-%20images/mop.jpeg",
      "placeholder": "📖",
      "audio": {
        "word": "",
        "example": ""
      }
    }
  },
  {
    "id": "place",
    "grade": 3,
    "day": 3,
    "seq": 7,
    "word": "place",
    "pos": "v.",
    "meaning": "~에 두다, 놓다",
    "example": "He places the vase on the table.",
    "exampleChunks": [
      "He",
      "places",
      "the",
      "vase",
      "on",
      "the",
      "table."
    ],
    "media": {
      "gif": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260630_045204_dfae91eb-32ab-4657-90cd-1b330e569f17.mp4",
      "video": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260630_045204_dfae91eb-32ab-4657-90cd-1b330e569f17.mp4",
      "thumb": "https://d2ol7oe51mr4n9.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/28e9eeea-1b36-4f16-865d-7210bd5ddc7e.png",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G3_Day%203_007_place_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G3_Day%203_007_place_sentence.mp3"
      }
    }
  },
  {
    "id": "flick",
    "grade": 3,
    "day": 3,
    "seq": 8,
    "word": "flick",
    "pos": "v.",
    "meaning": "(손가락으로)튀기다, 잽싸게 움직이다",
    "example": "She flicks the right switch.",
    "exampleChunks": [
      "She",
      "flicks",
      "the",
      "right",
      "switch."
    ],
    "media": {
      "gif": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260630_054324_143a265a-fdf2-424f-9f48-28075cfd4f63.mp4",
      "video": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260630_054324_143a265a-fdf2-424f-9f48-28075cfd4f63.mp4",
      "thumb": "https://d2ol7oe51mr4n9.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/5f5303ab-af5f-4d5a-b923-360788fbcc03.png",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G3_Day%203_008_flick_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G3_Day%203_008_flick_sentence.mp3"
      }
    }
  },
  {
    "id": "sew",
    "grade": 3,
    "day": 3,
    "seq": 9,
    "word": "sew",
    "pos": "v.",
    "meaning": "바느질 하다 꿰매다",
    "example": "",
    "exampleChunks": [],
    "media": {
      "gif": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/sew.mp4",
      "video": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/sew.mp4",
      "thumb": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca%20-%20images/sew.jpeg",
      "placeholder": "📖",
      "audio": {
        "word": "",
        "example": ""
      }
    }
  },
  {
    "id": "swallow",
    "grade": 3,
    "day": 3,
    "seq": 10,
    "word": "swallow",
    "pos": "v.",
    "meaning": "삼키다",
    "example": "He swallows the candy.",
    "exampleChunks": [
      "He",
      "swallows",
      "the",
      "candy."
    ],
    "media": {
      "gif": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/swallow.mp4",
      "video": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/swallow.mp4",
      "thumb": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca%20-%20images/swallow.jpeg",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G3_Day%203_010_swallow_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G3_Day%203_010_swallow_sentence.mp3"
      }
    }
  },
  {
    "id": "remember",
    "grade": 3,
    "day": 3,
    "seq": 11,
    "word": "remember",
    "pos": "v.",
    "meaning": "기억하다",
    "example": "She remembers her friend's birthday.",
    "exampleChunks": [
      "She",
      "remembers",
      "her",
      "friend's",
      "birthday."
    ],
    "media": {
      "gif": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/remember.mp4",
      "video": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/remember.mp4",
      "thumb": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca%20-%20images/remember.jpeg",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G3_Day%203_011_remember_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G3_Day%203_011_remember_sentence.mp3"
      }
    }
  },
  {
    "id": "scrub",
    "grade": 3,
    "day": 3,
    "seq": 13,
    "word": "scrub",
    "pos": "v.",
    "meaning": "문질러 씻다, 청소하다",
    "example": "I scrub the dishes after dinner.",
    "exampleChunks": [
      "I",
      "scrub",
      "the",
      "dishes",
      "after",
      "dinner."
    ],
    "media": {
      "gif": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260630_075137_33d20431-65ae-48df-ab25-632919b60a19.mp4",
      "video": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260630_075137_33d20431-65ae-48df-ab25-632919b60a19.mp4",
      "thumb": "https://d2ol7oe51mr4n9.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/eae37d3e-a549-4b97-9f99-c32a938e2809.png",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G3_Day%203_013_scrub_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G3_Day%203_013_scrub_sentence.mp3"
      }
    }
  },
  {
    "id": "rinse",
    "grade": 3,
    "day": 3,
    "seq": 14,
    "word": "rinse",
    "pos": "v.",
    "meaning": "헹구다, 씻다",
    "example": "I rinse my hands before eating.",
    "exampleChunks": [
      "I",
      "rinse",
      "my",
      "hands",
      "before",
      "eating."
    ],
    "media": {
      "gif": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/rinse.mp4",
      "video": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/rinse.mp4",
      "thumb": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca%20-%20images/rinse.jpeg",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G3_Day%203_014_rinse_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G3_Day%203_014_rinse_sentence.mp3"
      }
    }
  },
  {
    "id": "hate",
    "grade": 3,
    "day": 3,
    "seq": 16,
    "word": "hate",
    "pos": "v.",
    "meaning": "싫어하다",
    "example": "She hates rainy days.",
    "exampleChunks": [
      "She",
      "hates",
      "rainy",
      "days."
    ],
    "media": {
      "gif": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260630_125414_70e3b22a-77b0-429b-88d6-b62f6fc84a7b.mp4",
      "video": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260630_125414_70e3b22a-77b0-429b-88d6-b62f6fc84a7b.mp4",
      "thumb": "https://d2ol7oe51mr4n9.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/3cea164a-e7e6-4dcf-830a-5153ff4446e6.png",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G3_Day%203_016_hate_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G3_Day%203_016_hate_sentence.mp3"
      }
    }
  },
  {
    "id": "pass",
    "grade": 3,
    "day": 3,
    "seq": 17,
    "word": "pass",
    "pos": "v.",
    "meaning": "지나가다[통과하다], 합격하다",
    "example": "I pass the ball to my friend.",
    "exampleChunks": [
      "I",
      "pass",
      "the",
      "ball",
      "to",
      "my",
      "friend."
    ],
    "media": {
      "gif": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260630_131801_dcced609-059d-4553-b353-70770dd643a5.mp4",
      "video": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260630_131801_dcced609-059d-4553-b353-70770dd643a5.mp4",
      "thumb": "https://d2ol7oe51mr4n9.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/39cc4abf-a665-4859-a564-2c7baf33e2f7.png",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G3_Day%203_017_pass_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G3_Day%203_017_pass_sentence.mp3"
      }
    }
  },
  {
    "id": "pull",
    "grade": 3,
    "day": 3,
    "seq": 19,
    "word": "pull",
    "pos": "v.",
    "meaning": "당기다, 끌다",
    "example": "I pull the door open.",
    "exampleChunks": [
      "I",
      "pull",
      "the",
      "door",
      "open."
    ],
    "media": {
      "gif": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/pull.mp4",
      "video": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/pull.mp4",
      "thumb": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca%20-%20images/pull.jpeg",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G3_Day%203_019_pull_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G3_Day%203_019_pull_sentence.mp3"
      }
    }
  },
  {
    "id": "glow",
    "grade": 3,
    "day": 3,
    "seq": 20,
    "word": "glow",
    "pos": "v.",
    "meaning": "빛나다, 타다",
    "example": "The stars glow brightly at night.",
    "exampleChunks": [
      "The",
      "stars",
      "glow",
      "brightly",
      "at",
      "night."
    ],
    "media": {
      "gif": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260630_151424_40547fa5-d7c2-484c-ad14-d1a6a88a3cf6.mp4",
      "video": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260630_151424_40547fa5-d7c2-484c-ad14-d1a6a88a3cf6.mp4",
      "thumb": "https://d2ol7oe51mr4n9.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/c411d528-b7be-4bfe-99d1-9e940c02eee7.png",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G3_Day%203_020_glow_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G3_Day%203_020_glow_sentence.mp3"
      }
    }
  },
  {
    "id": "dive",
    "grade": 3,
    "day": 4,
    "seq": 1,
    "word": "dive",
    "pos": "v.",
    "meaning": "(물속으로)뛰어들다, 다이빙하다",
    "example": "He dives into the pool.",
    "exampleChunks": [
      "He",
      "dives",
      "into",
      "the",
      "pool."
    ],
    "media": {
      "gif": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260701_050207_803cffac-e4d4-43a4-baa9-9d8e99d7d24f.mp4",
      "video": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260701_050207_803cffac-e4d4-43a4-baa9-9d8e99d7d24f.mp4",
      "thumb": "https://d2ol7oe51mr4n9.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/6269b71f-2a35-4f45-bd2b-f4320839c667.png",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G3_Day%204_001_dive_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G3_Day%204_001_dive_sentence.mp3"
      }
    }
  },
  {
    "id": "sneeze",
    "grade": 3,
    "day": 4,
    "seq": 3,
    "word": "sneeze",
    "pos": "v.",
    "meaning": "재채기하다",
    "example": "I sneeze when I have a cold.",
    "exampleChunks": [
      "I",
      "sneeze",
      "when",
      "I",
      "have",
      "a",
      "cold."
    ],
    "media": {
      "gif": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/sneeze.mp4",
      "video": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/sneeze.mp4",
      "thumb": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca%20-%20images/sneeze.jpeg",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G3_Day%204_003_sneeze_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G3_Day%204_003_sneeze_sentence.mp3"
      }
    }
  },
  {
    "id": "wag",
    "grade": 3,
    "day": 4,
    "seq": 5,
    "word": "wag",
    "pos": "v.",
    "meaning": "흔들다, 흔들리다",
    "example": "Two dogs wag their tails.",
    "exampleChunks": [
      "Two",
      "dogs",
      "wag",
      "their",
      "tails."
    ],
    "media": {
      "gif": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260701_063344_38d87e7f-7cdc-4964-a3c0-dfdf426c1104.mp4",
      "video": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260701_063344_38d87e7f-7cdc-4964-a3c0-dfdf426c1104.mp4",
      "thumb": "https://d2ol7oe51mr4n9.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/5c551b04-ed3f-493c-a1b6-aa55c463dae9.png",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G3_Day%204_005_wag_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G3_Day%204_005_wag_sentence.mp3"
      }
    }
  },
  {
    "id": "comb",
    "grade": 3,
    "day": 4,
    "seq": 6,
    "word": "comb",
    "pos": "v.",
    "meaning": "빗질하다 빗다",
    "example": "",
    "exampleChunks": [],
    "media": {
      "gif": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/comb.mp4",
      "video": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/comb.mp4",
      "thumb": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca%20-%20images/comb.jpeg",
      "placeholder": "📖",
      "audio": {
        "word": "",
        "example": ""
      }
    }
  },
  {
    "id": "climb",
    "grade": 3,
    "day": 4,
    "seq": 8,
    "word": "climb",
    "pos": "v.",
    "meaning": "오르다, 등반하다",
    "example": "The monkey climbs the tree.",
    "exampleChunks": [
      "The",
      "monkey",
      "climbs",
      "the",
      "tree."
    ],
    "media": {
      "gif": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260701_093355_b71efcb5-5bba-48e4-8e2b-efee9f3ee001.mp4",
      "video": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260701_093355_b71efcb5-5bba-48e4-8e2b-efee9f3ee001.mp4",
      "thumb": "https://d2ol7oe51mr4n9.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/204b5647-16b2-43e4-a34f-799b1533fc5e.png",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G3_Day%204_008_climb_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G3_Day%204_008_climb_sentence.mp3"
      }
    }
  },
  {
    "id": "decorate",
    "grade": 3,
    "day": 4,
    "seq": 9,
    "word": "decorate",
    "pos": "v.",
    "meaning": "장식하다",
    "example": "She decorates the room with flowers.",
    "exampleChunks": [
      "She",
      "decorates",
      "the",
      "room",
      "with",
      "flowers."
    ],
    "media": {
      "gif": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/decorate.mp4",
      "video": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/decorate.mp4",
      "thumb": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca%20-%20images/decorate.jpeg",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G3_Day%204_009_decorate_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G3_Day%204_009_decorate_sentence.mp3"
      }
    }
  },
  {
    "id": "glue",
    "grade": 3,
    "day": 4,
    "seq": 10,
    "word": "glue",
    "pos": "v.",
    "meaning": "붙이다",
    "example": "I glue the paper together for my project.",
    "exampleChunks": [
      "I",
      "glue",
      "the",
      "paper",
      "together",
      "for",
      "my",
      "project."
    ],
    "media": {
      "gif": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260701_105657_3e54a299-ea55-4a6c-99a6-ea038e77fb22.mp4",
      "video": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260701_105657_3e54a299-ea55-4a6c-99a6-ea038e77fb22.mp4",
      "thumb": "https://d2ol7oe51mr4n9.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/242d569a-1111-422f-8f07-86f0b8e79d75.png",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G3_Day%204_010_glue_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G3_Day%204_010_glue_sentence.mp3"
      }
    }
  },
  {
    "id": "tie",
    "grade": 3,
    "day": 4,
    "seq": 11,
    "word": "tie",
    "pos": "v.",
    "meaning": "묶다 매다",
    "example": "My mom ties my hair.",
    "exampleChunks": [
      "My",
      "mom",
      "ties",
      "my",
      "hair."
    ],
    "media": {
      "gif": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/tie.mp4",
      "video": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/tie.mp4",
      "thumb": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca%20-%20images/tie.jpeg",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G3_Day%204_011_tie_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G3_Day%204_011_tie_sentence.mp3"
      }
    }
  },
  {
    "id": "reuse",
    "grade": 3,
    "day": 4,
    "seq": 12,
    "word": "reuse",
    "pos": "v.",
    "meaning": "재사용하다",
    "example": "He reuses plastic bags.",
    "exampleChunks": [
      "He",
      "reuses",
      "plastic",
      "bags."
    ],
    "media": {
      "gif": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/reuse.mp4",
      "video": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/reuse.mp4",
      "thumb": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca%20-%20images/reuse.jpeg",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G3_Day%204_012_reuse_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G3_Day%204_012_reuse_sentence.mp3"
      }
    }
  },
  {
    "id": "pull_out",
    "grade": 3,
    "day": 4,
    "seq": 13,
    "word": "pull out",
    "pos": "v.",
    "meaning": "옆으로 빠져나가다, 떠나다",
    "example": "I pull out the books from the shelf.",
    "exampleChunks": [
      "I",
      "pull",
      "out",
      "the",
      "books",
      "from",
      "the",
      "shelf."
    ],
    "media": {
      "gif": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/pull-out.mp4",
      "video": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/pull-out.mp4",
      "thumb": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca%20-%20images/pull-out.jpeg",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G3_Day%204_013_pull%20out_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G3_Day%204_013_pull%20out_sentence.mp3"
      }
    }
  },
  {
    "id": "get_out",
    "grade": 3,
    "day": 4,
    "seq": 15,
    "word": "get out",
    "pos": "v.",
    "meaning": "알려지다, 나가다",
    "example": "Please get out of the car.",
    "exampleChunks": [
      "Please",
      "get",
      "out",
      "of",
      "the",
      "car."
    ],
    "media": {
      "gif": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260701_152244_bdad85cc-a0e0-40e5-9039-e9b61925a3b0.mp4",
      "video": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260701_152244_bdad85cc-a0e0-40e5-9039-e9b61925a3b0.mp4",
      "thumb": "https://d2ol7oe51mr4n9.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/240c75b4-6da4-4fa2-97fe-480f34591747.png",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G3_Day%204_015_get%20out_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G3_Day%204_015_get%20out_sentence.mp3"
      }
    }
  },
  {
    "id": "whistle",
    "grade": 3,
    "day": 4,
    "seq": 16,
    "word": "whistle",
    "pos": "v.",
    "meaning": "휘파람을 불다",
    "example": "He whistles at his dog.",
    "exampleChunks": [
      "He",
      "whistles",
      "at",
      "his",
      "dog."
    ],
    "media": {
      "gif": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260701_154251_ee1ca3de-565e-4cba-8c98-063e622b4cca.mp4",
      "video": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260701_154251_ee1ca3de-565e-4cba-8c98-063e622b4cca.mp4",
      "thumb": "https://d2ol7oe51mr4n9.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/5e008481-4bbb-4ecb-88ac-0563936cc876.png",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G3_Day%204_016_whistle_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G3_Day%204_016_whistle_sentence.mp3"
      }
    }
  },
  {
    "id": "snap",
    "grade": 3,
    "day": 4,
    "seq": 17,
    "word": "snap",
    "pos": "v.",
    "meaning": "부러뜨리다, 부러지다",
    "example": "The branch snaps when I step on it.",
    "exampleChunks": [
      "The",
      "branch",
      "snaps",
      "when",
      "I",
      "step",
      "on",
      "it."
    ],
    "media": {
      "gif": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260701_160232_13c494ca-37dd-4666-85a2-9bd1e99f48d8.mp4",
      "video": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260701_160232_13c494ca-37dd-4666-85a2-9bd1e99f48d8.mp4",
      "thumb": "https://d2ol7oe51mr4n9.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/9ff6d2a8-25a4-453f-b2ea-bdff1f0f8776.png",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G3_Day%204_017_snap_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G3_Day%204_017_snap_sentence.mp3"
      }
    }
  },
  {
    "id": "peel_g3d5",
    "grade": 3,
    "day": 5,
    "seq": 1,
    "word": "peel",
    "pos": "v.",
    "meaning": "껍질을 벗기다",
    "example": "I feel the banana before I eat it.",
    "exampleChunks": [
      "I",
      "feel",
      "the",
      "banana",
      "before",
      "I",
      "eat",
      "it."
    ],
    "media": {
      "gif": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/peel.mp4",
      "video": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/peel.mp4",
      "thumb": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca%20-%20images/peel.jpeg",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G3_Day%205_001_peel_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G3_Day%205_001_peel_sentence.mp3"
      }
    }
  },
  {
    "id": "slice",
    "grade": 3,
    "day": 5,
    "seq": 2,
    "word": "slice",
    "pos": "v.",
    "meaning": "(얇게)썰다",
    "example": "He slices pizza into three pieces.",
    "exampleChunks": [
      "He",
      "slices",
      "pizza",
      "into",
      "three",
      "pieces."
    ],
    "media": {
      "gif": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260701_194310_9ff75d40-7515-4439-88ef-2b7ff0d0b34a.mp4",
      "video": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260701_194310_9ff75d40-7515-4439-88ef-2b7ff0d0b34a.mp4",
      "thumb": "https://d2ol7oe51mr4n9.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/591ae774-3c4d-4b44-a3ce-2724b3ebb68d.png",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G3_Day%205_002_slice_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G3_Day%205_002_slice_sentence.mp3"
      }
    }
  },
  {
    "id": "rub",
    "grade": 3,
    "day": 5,
    "seq": 4,
    "word": "rub",
    "pos": "v.",
    "meaning": "비비다, 문지르다",
    "example": "The dog rubs its head on my hand.",
    "exampleChunks": [
      "The",
      "dog",
      "rubs",
      "its",
      "head",
      "on",
      "my",
      "hand."
    ],
    "media": {
      "gif": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/rub.mp4",
      "video": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/rub.mp4",
      "thumb": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca%20-%20images/rub.jpeg",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G3_Day%205_004_rub_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G3_Day%205_004_rub_sentence.mp3"
      }
    }
  },
  {
    "id": "stick",
    "grade": 3,
    "day": 5,
    "seq": 5,
    "word": "stick",
    "pos": "v.",
    "meaning": "붙이다, 붙다",
    "example": "I stick the paper on the wall.",
    "exampleChunks": [
      "I",
      "stick",
      "the",
      "paper",
      "on",
      "the",
      "wall."
    ],
    "media": {
      "gif": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260701_202322_ce4b31fa-380b-4f7e-9fa9-d6df0dcf88e9.mp4",
      "video": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260701_202322_ce4b31fa-380b-4f7e-9fa9-d6df0dcf88e9.mp4",
      "thumb": "https://d2ol7oe51mr4n9.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/22dc2ce7-17c5-401e-bb39-5478757f6aa7.png",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G3_Day%205_005_stick_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G3_Day%205_005_stick_sentence.mp3"
      }
    }
  },
  {
    "id": "roll",
    "grade": 3,
    "day": 5,
    "seq": 6,
    "word": "roll",
    "pos": "v.",
    "meaning": "구르다, 굴리다",
    "example": "Three little monkeys roll over the bed.",
    "exampleChunks": [
      "Three",
      "little",
      "monkeys",
      "roll",
      "over",
      "the",
      "bed."
    ],
    "media": {
      "gif": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/roll.mp4",
      "video": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/roll.mp4",
      "thumb": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca%20-%20images/roll.jpeg",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G3_Day%205_006_roll_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G3_Day%205_006_roll_sentence.mp3"
      }
    }
  },
  {
    "id": "drive",
    "grade": 3,
    "day": 5,
    "seq": 7,
    "word": "drive",
    "pos": "v.",
    "meaning": "운전하다",
    "example": "He drives to school.",
    "exampleChunks": [
      "He",
      "drives",
      "to",
      "school."
    ],
    "media": {
      "gif": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/drive.mp4",
      "video": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/drive.mp4",
      "thumb": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca%20-%20images/drive.jpeg",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G3_Day%205_007_drive_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G3_Day%205_007_drive_sentence.mp3"
      }
    }
  },
  {
    "id": "duck",
    "grade": 3,
    "day": 5,
    "seq": 8,
    "word": "duck",
    "pos": "v.",
    "meaning": "휙[쑥]수그리다[숨기다], 피하다",
    "example": "My brother ducks his body under the desk.",
    "exampleChunks": [
      "My",
      "brother",
      "ducks",
      "his",
      "body",
      "under",
      "the",
      "desk."
    ],
    "media": {
      "gif": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260701_211302_75a70664-9a7c-44a2-baf1-8efe7dcab8f9.mp4",
      "video": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260701_211302_75a70664-9a7c-44a2-baf1-8efe7dcab8f9.mp4",
      "thumb": "https://d2ol7oe51mr4n9.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/904f175e-3e5c-4174-96b1-3f3aa6b5ff67.png",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G3_Day%205_008_duck_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G3_Day%205_008_duck_sentence.mp3"
      }
    }
  },
  {
    "id": "flip_g3d5",
    "grade": 3,
    "day": 5,
    "seq": 10,
    "word": "flip",
    "pos": "v.",
    "meaning": "뒤집(히)다",
    "example": "The teacher flips the pages.",
    "exampleChunks": [
      "The",
      "teacher",
      "flips",
      "the",
      "pages."
    ],
    "media": {
      "gif": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/flip.mp4",
      "video": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/flip.mp4",
      "thumb": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca%20-%20images/flip.jpeg",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G3_Day%205_010_flip_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G3_Day%205_010_flip_sentence.mp3"
      }
    }
  },
  {
    "id": "vacuum",
    "grade": 3,
    "day": 5,
    "seq": 11,
    "word": "vacuum",
    "pos": "v.",
    "meaning": "진공청소기로  청소하다",
    "example": "He vacuums the living room.",
    "exampleChunks": [
      "He",
      "vacuums",
      "the",
      "living",
      "room."
    ],
    "media": {
      "gif": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/vacuum.mp4",
      "video": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/vacuum.mp4",
      "thumb": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca%20-%20images/vacuum.jpeg",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G3_Day%205_011_vacuum_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G3_Day%205_011_vacuum_sentence.mp3"
      }
    }
  },
  {
    "id": "stick_up_for",
    "grade": 3,
    "day": 5,
    "seq": 12,
    "word": "stick up for",
    "pos": "v.",
    "meaning": "옹호하다, 변호하다",
    "example": "He always sticks up for his little sister.",
    "exampleChunks": [
      "He",
      "always",
      "sticks",
      "up",
      "for",
      "his",
      "little",
      "sister."
    ],
    "media": {
      "gif": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260701_223148_2277944e-a0b1-46db-a356-4a1ff59c4ec0.mp4",
      "video": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260701_223148_2277944e-a0b1-46db-a356-4a1ff59c4ec0.mp4",
      "thumb": "https://d2ol7oe51mr4n9.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/27e9daff-318d-4f30-bb8f-9c01b8148c37.png",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G3_Day%205_012_stick%20up%20for_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G3_Day%205_012_stick%20up%20for_sentence.mp3"
      }
    }
  },
  {
    "id": "slip",
    "grade": 3,
    "day": 5,
    "seq": 13,
    "word": "slip",
    "pos": "v.",
    "meaning": "미끄러지다",
    "example": "My brother slips in the bathroom.",
    "exampleChunks": [
      "My",
      "brother",
      "slips",
      "in",
      "the",
      "bathroom."
    ],
    "media": {
      "gif": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/slip.mp4",
      "video": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/slip.mp4",
      "thumb": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca%20-%20images/slip.jpeg",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G3_Day%205_013_slip_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G3_Day%205_013_slip_sentence.mp3"
      }
    }
  },
  {
    "id": "stand_up",
    "grade": 3,
    "day": 5,
    "seq": 15,
    "word": "stand up",
    "pos": "v.",
    "meaning": "서있다",
    "example": "I stand up when the bell rings.",
    "exampleChunks": [
      "I",
      "stand",
      "up",
      "when",
      "the",
      "bell",
      "rings."
    ],
    "media": {
      "gif": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/stand-up.mp4",
      "video": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/stand-up.mp4",
      "thumb": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca%20-%20images/stand-up.jpeg",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G3_Day%205_015_stand%20up_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G3_Day%205_015_stand%20up_sentence.mp3"
      }
    }
  },
  {
    "id": "wobble",
    "grade": 3,
    "day": 5,
    "seq": 16,
    "word": "wobble",
    "pos": "v.",
    "meaning": "흔들리다[흔들다], 떨다",
    "example": "The table wobbles when I touch it.",
    "exampleChunks": [
      "The",
      "table",
      "wobbles",
      "when",
      "I",
      "touch",
      "it."
    ],
    "media": {
      "gif": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/wobble.mp4",
      "video": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/wobble.mp4",
      "thumb": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca%20-%20images/wobble.jpeg",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G3_Day%205_016_wobble_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G3_Day%205_016_wobble_sentence.mp3"
      }
    }
  },
  {
    "id": "babysit",
    "grade": 3,
    "day": 5,
    "seq": 17,
    "word": "babysit",
    "pos": "v.",
    "meaning": "아이를 봐주다",
    "example": "She babysits my younger sister.",
    "exampleChunks": [
      "She",
      "babysits",
      "my",
      "younger",
      "sister."
    ],
    "media": {
      "gif": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/babisit.mp4",
      "video": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/babisit.mp4",
      "thumb": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca%20-%20images/babysit.jpeg",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G3_Day%205_017_babysit_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G3_Day%205_017_babysit_sentence.mp3"
      }
    }
  },
  {
    "id": "squirt",
    "grade": 3,
    "day": 5,
    "seq": 18,
    "word": "squirt",
    "pos": "v.",
    "meaning": "찍 짜다, 쏘다",
    "example": "She squirts ketchup on her fries.",
    "exampleChunks": [
      "She",
      "squirts",
      "ketchup",
      "on",
      "her",
      "fries."
    ],
    "media": {
      "gif": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/squirt.mp4",
      "video": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/squirt.mp4",
      "thumb": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca%20-%20images/squirt.jpeg",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G3_Day%205_018_squirt_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G3_Day%205_018_squirt_sentence.mp3"
      }
    }
  },
  {
    "id": "burn",
    "grade": 3,
    "day": 5,
    "seq": 19,
    "word": "burn",
    "pos": "v.",
    "meaning": "(불에)타다 태우다",
    "example": "I burn my hand on the hot stove.",
    "exampleChunks": [
      "I",
      "burn",
      "my",
      "hand",
      "on",
      "the",
      "hot",
      "stove."
    ],
    "media": {
      "gif": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/burn.mp4",
      "video": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/burn.mp4",
      "thumb": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca%20-%20images/burn.jpeg",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G3_Day%205_019_burn_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G3_Day%205_019_burn_sentence.mp3"
      }
    }
  },
  {
    "id": "lay_down",
    "grade": 3,
    "day": 5,
    "seq": 20,
    "word": "lay down",
    "pos": "v.",
    "meaning": "눕다",
    "example": "She lays down on the bed.",
    "exampleChunks": [
      "She",
      "lays",
      "down",
      "on",
      "the",
      "bed."
    ],
    "media": {
      "gif": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260702_024037_d01c2dce-145d-4bc1-ab6e-53d848cfef64.mp4",
      "video": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260702_024037_d01c2dce-145d-4bc1-ab6e-53d848cfef64.mp4",
      "thumb": "https://d2ol7oe51mr4n9.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/32dec159-ad3d-49a9-abb1-78e472552f0e.png",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G3_Day%205_020_lay%20down_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G3_Day%205_020_lay%20down_sentence.mp3"
      }
    }
  },
  {
    "id": "clear",
    "grade": 3,
    "day": 6,
    "seq": 1,
    "word": "clear",
    "pos": "v.",
    "meaning": "치우다, 내보내다",
    "example": "I clear my desk before I leave school.",
    "exampleChunks": [
      "I",
      "clear",
      "my",
      "desk",
      "before",
      "I",
      "leave",
      "school."
    ],
    "media": {
      "gif": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260630_170136_8105f5b6-9ea2-4eb1-bb82-be04569f329d.mp4",
      "video": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260630_170136_8105f5b6-9ea2-4eb1-bb82-be04569f329d.mp4",
      "thumb": "https://d2ol7oe51mr4n9.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/d6068763-f675-4f5b-8704-d4a7c3888cb2.png",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G3_Day%206_001_clear_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G3_Day%206_001_clear_sentence.mp3"
      }
    }
  },
  {
    "id": "rake",
    "grade": 3,
    "day": 6,
    "seq": 2,
    "word": "rake",
    "pos": "v.",
    "meaning": "갈퀴질을 하다, 갈퀴로 모으다",
    "example": "He rakes the fallen leaves.",
    "exampleChunks": [
      "He",
      "rakes",
      "the",
      "fallen",
      "leaves."
    ],
    "media": {
      "gif": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260630_172224_5a4713c0-a9d8-44a6-bc28-46c37439c7e8.mp4",
      "video": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260630_172224_5a4713c0-a9d8-44a6-bc28-46c37439c7e8.mp4",
      "thumb": "https://d2ol7oe51mr4n9.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/a2e2f0e5-c9e8-44ea-82d3-6c648b008845.png",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G3_Day%206_002_rake_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G3_Day%206_002_rake_sentence.mp3"
      }
    }
  },
  {
    "id": "tour",
    "grade": 3,
    "day": 6,
    "seq": 3,
    "word": "tour",
    "pos": "v.",
    "meaning": "관광하다",
    "example": "My family tours in England.",
    "exampleChunks": [
      "My",
      "family",
      "tours",
      "in",
      "England."
    ],
    "media": {
      "gif": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260630_175308_630766ba-e0ad-4670-b219-e04949ab0afc.mp4",
      "video": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260630_175308_630766ba-e0ad-4670-b219-e04949ab0afc.mp4",
      "thumb": "https://d2ol7oe51mr4n9.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/0464c250-490d-4478-a007-159c8c106f2e.png",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G3_Day%206_003_tour_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G3_Day%206_003_tour_sentence.mp3"
      }
    }
  },
  {
    "id": "spend",
    "grade": 3,
    "day": 6,
    "seq": 4,
    "word": "spend",
    "pos": "v.",
    "meaning": "(돈을)쓰다, 소비하다",
    "example": "I spend time with my family.",
    "exampleChunks": [
      "I",
      "spend",
      "time",
      "with",
      "my",
      "family."
    ],
    "media": {
      "gif": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/spend.mp4",
      "video": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/spend.mp4",
      "thumb": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca%20-%20images/spend.jpeg",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G3_Day%206_004_spend_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G3_Day%206_004_spend_sentence.mp3"
      }
    }
  },
  {
    "id": "weigh",
    "grade": 3,
    "day": 6,
    "seq": 5,
    "word": "weigh",
    "pos": "v.",
    "meaning": "무게가~이다 무게를 재다",
    "example": "",
    "exampleChunks": [],
    "media": {
      "gif": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/weigh.mp4",
      "video": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/weigh.mp4",
      "thumb": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca%20-%20images/weigh.jpeg",
      "placeholder": "📖",
      "audio": {
        "word": "",
        "example": ""
      }
    }
  },
  {
    "id": "fix",
    "grade": 3,
    "day": 6,
    "seq": 6,
    "word": "fix",
    "pos": "v.",
    "meaning": "고정시키다, 정하다",
    "example": "I fix my toy when it breaks.",
    "exampleChunks": [
      "I",
      "fix",
      "my",
      "toy",
      "when",
      "it",
      "breaks."
    ],
    "media": {
      "gif": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260630_190228_954e84aa-8428-4ec1-8d3b-b2509fd3f55b.mp4",
      "video": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260630_190228_954e84aa-8428-4ec1-8d3b-b2509fd3f55b.mp4",
      "thumb": "https://d2ol7oe51mr4n9.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/e0cfa470-45c4-4548-87c8-e44a6cde3a5b.png",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G3_Day%206_006_fix_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G3_Day%206_006_fix_sentence.mp3"
      }
    }
  },
  {
    "id": "tighten",
    "grade": 3,
    "day": 6,
    "seq": 7,
    "word": "tighten",
    "pos": "v.",
    "meaning": "팽팽해지다, 더 엄격하게\n하다",
    "example": "I tighten my shoes before running.",
    "exampleChunks": [
      "I",
      "tighten",
      "my",
      "shoes",
      "before",
      "running."
    ],
    "media": {
      "gif": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260630_192420_bf62a53b-a789-4480-be4c-d1623cef44e2.mp4",
      "video": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260630_192420_bf62a53b-a789-4480-be4c-d1623cef44e2.mp4",
      "thumb": "https://d2ol7oe51mr4n9.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/35ebabe3-d8e7-4931-be11-9cd89b3f74ac.png",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G3_Day%206_007_tighten_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G3_Day%206_007_tighten_sentence.mp3"
      }
    }
  },
  {
    "id": "surf",
    "grade": 3,
    "day": 6,
    "seq": 8,
    "word": "surf",
    "pos": "v.",
    "meaning": "서핑을 하다, 인터넷을\n검색하다",
    "example": "They surf at the beach.",
    "exampleChunks": [
      "They",
      "surf",
      "at",
      "the",
      "beach."
    ],
    "media": {
      "gif": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260630_195706_5c59a473-d757-4072-8cf5-fecea8a23f2e.mp4",
      "video": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260630_195706_5c59a473-d757-4072-8cf5-fecea8a23f2e.mp4",
      "thumb": "https://d2ol7oe51mr4n9.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/0d870a02-b7eb-49cb-9932-d82cc11677b8.png",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G3_Day%206_008_surf_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G3_Day%206_008_surf_sentence.mp3"
      }
    }
  },
  {
    "id": "collect_g3d6",
    "grade": 3,
    "day": 6,
    "seq": 10,
    "word": "collect",
    "pos": "v.",
    "meaning": "모으다[수집하다]",
    "example": "He collects animal stickers.",
    "exampleChunks": [
      "He",
      "collects",
      "animal",
      "stickers."
    ],
    "media": {
      "gif": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/collect.mp4",
      "video": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/collect.mp4",
      "thumb": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca%20-%20images/collect.jpeg",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G3_Day%206_010_collect_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G3_Day%206_010_collect_sentence.mp3"
      }
    }
  },
  {
    "id": "serve",
    "grade": 3,
    "day": 6,
    "seq": 11,
    "word": "serve",
    "pos": "v.",
    "meaning": "(음식을)제공하다, 차려주다",
    "example": "I serve vegetable soup.",
    "exampleChunks": [
      "I",
      "serve",
      "vegetable",
      "soup."
    ],
    "media": {
      "gif": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/serve.mp4",
      "video": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/serve.mp4",
      "thumb": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca%20-%20images/serve.jpeg",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G3_Day%206_011_serve_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G3_Day%206_011_serve_sentence.mp3"
      }
    }
  },
  {
    "id": "munch",
    "grade": 3,
    "day": 6,
    "seq": 13,
    "word": "munch",
    "pos": "v.",
    "meaning": "우적우적 먹다",
    "example": "He munches on carrots.",
    "exampleChunks": [
      "He",
      "munches",
      "on",
      "carrots."
    ],
    "media": {
      "gif": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260630_233402_9c47dbf7-fcfc-4ecb-b78b-e6f4b901576f.mp4",
      "video": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260630_233402_9c47dbf7-fcfc-4ecb-b78b-e6f4b901576f.mp4",
      "thumb": "https://d2ol7oe51mr4n9.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/e29ce5d6-20dd-4ba6-bfdb-dd4d0cdb331a.png",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G3_Day%206_013_munch_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G3_Day%206_013_munch_sentence.mp3"
      }
    }
  },
  {
    "id": "warm_up",
    "grade": 3,
    "day": 6,
    "seq": 14,
    "word": "warm up",
    "pos": "v.",
    "meaning": "몸을 천천히 풀다, 적당히 열을 \n오르다",
    "example": "The players warm up before the game.",
    "exampleChunks": [
      "The",
      "players",
      "warm",
      "up",
      "before",
      "the",
      "game."
    ],
    "media": {
      "gif": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/warm-up.mp4",
      "video": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/warm-up.mp4",
      "thumb": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca%20-%20images/warm-up.jpeg",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G3_Day%206_014_warm%20up_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G3_Day%206_014_warm%20up_sentence.mp3"
      }
    }
  },
  {
    "id": "stretch_g3d6",
    "grade": 3,
    "day": 6,
    "seq": 15,
    "word": "stretch",
    "pos": "v.",
    "meaning": "늘이다[뻗다·펴다]",
    "example": "The cat stretches its body.",
    "exampleChunks": [
      "The",
      "cat",
      "stretches",
      "its",
      "body."
    ],
    "media": {
      "gif": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/stretch.mp4",
      "video": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/stretch.mp4",
      "thumb": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca%20-%20images/stretch.jpeg",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G3_Day%206_015_stretch_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G3_Day%206_015_stretch_sentence.mp3"
      }
    }
  },
  {
    "id": "tilt",
    "grade": 3,
    "day": 6,
    "seq": 16,
    "word": "tilt",
    "pos": "v.",
    "meaning": "기울다, 젖혀지다",
    "example": "She tilts her head to the side.",
    "exampleChunks": [
      "She",
      "tilts",
      "her",
      "head",
      "to",
      "the",
      "side."
    ],
    "media": {
      "gif": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/tilt.mp4",
      "video": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/tilt.mp4",
      "thumb": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca%20-%20images/tilt.jpeg",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G3_Day%206_016_tilt_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G3_Day%206_016_tilt_sentence.mp3"
      }
    }
  },
  {
    "id": "lift",
    "grade": 3,
    "day": 6,
    "seq": 18,
    "word": "lift",
    "pos": "v.",
    "meaning": "들어 올리다",
    "example": "Dad lifts two boxes with one hand.",
    "exampleChunks": [
      "Dad",
      "lifts",
      "two",
      "boxes",
      "with",
      "one",
      "hand."
    ],
    "media": {
      "gif": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260701_014139_69295696-417b-4e8b-9cb9-011e70e7ed5a.mp4",
      "video": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260701_014139_69295696-417b-4e8b-9cb9-011e70e7ed5a.mp4",
      "thumb": "https://d2ol7oe51mr4n9.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/99af76a1-13c2-4508-a163-23e5a6605da4.png",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G3_Day%206_018_lift_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G3_Day%206_018_lift_sentence.mp3"
      }
    }
  },
  {
    "id": "sigh",
    "grade": 3,
    "day": 6,
    "seq": 20,
    "word": "sigh",
    "pos": "v.",
    "meaning": "한숨을 내쉬다",
    "example": "",
    "exampleChunks": [],
    "media": {
      "gif": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/sigh.mp4",
      "video": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/sigh.mp4",
      "thumb": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca%20-%20images/sigh.jpeg",
      "placeholder": "📖",
      "audio": {
        "word": "",
        "example": ""
      }
    }
  },
  {
    "id": "pack_g3d7",
    "grade": 3,
    "day": 7,
    "seq": 1,
    "word": "pack",
    "pos": "v.",
    "meaning": "싸다[포장하다]",
    "example": "We pack our clothes for the trip to the beach.",
    "exampleChunks": [
      "We",
      "pack",
      "our",
      "clothes",
      "for",
      "the",
      "trip",
      "to",
      "the",
      "beach."
    ],
    "media": {
      "gif": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/pack.mp4",
      "video": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/pack.mp4",
      "thumb": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca%20-%20images/pack.jpeg",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G3_Day%207_001_pack_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G3_Day%207_001_pack_sentence.mp3"
      }
    }
  },
  {
    "id": "raise",
    "grade": 3,
    "day": 7,
    "seq": 2,
    "word": "raise",
    "pos": "v.",
    "meaning": "올리다[들다], 키우다",
    "example": "He raises two black cats in his house.",
    "exampleChunks": [
      "He",
      "raises",
      "two",
      "black",
      "cats",
      "in",
      "his",
      "house."
    ],
    "media": {
      "gif": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260702_050807_9658e836-17d6-4053-bd1f-67e4438aa90e.mp4",
      "video": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260702_050807_9658e836-17d6-4053-bd1f-67e4438aa90e.mp4",
      "thumb": "https://d2ol7oe51mr4n9.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/27f79122-2130-4a1e-8b6a-f351a8be1a65.png",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G3_Day%207_002_raise_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G3_Day%207_002_raise_sentence.mp3"
      }
    }
  },
  {
    "id": "stick_out",
    "grade": 3,
    "day": 7,
    "seq": 3,
    "word": "stick out",
    "pos": "v.",
    "meaning": "눈에 띄다, 잘 보이다",
    "example": "His ears stick out a little.",
    "exampleChunks": [
      "His",
      "ears",
      "stick",
      "out",
      "a",
      "little."
    ],
    "media": {
      "gif": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260702_053245_b1bc30fc-a87a-411f-9e3f-d3172be8924b.mp4",
      "video": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260702_053245_b1bc30fc-a87a-411f-9e3f-d3172be8924b.mp4",
      "thumb": "https://d2ol7oe51mr4n9.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/fa8e3d34-6a58-4ef5-8f12-9f13da0acbfa.png",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G3_Day%207_003_stick%20out_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G3_Day%207_003_stick%20out_sentence.mp3"
      }
    }
  },
  {
    "id": "ski",
    "grade": 3,
    "day": 7,
    "seq": 4,
    "word": "ski",
    "pos": "v.",
    "meaning": "스키를 타다",
    "example": "I ski down the hill when it snows.",
    "exampleChunks": [
      "I",
      "ski",
      "down",
      "the",
      "hill",
      "when",
      "it",
      "snows."
    ],
    "media": {
      "gif": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/ski.mp4",
      "video": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/ski.mp4",
      "thumb": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca%20-%20images/ski.jpeg",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G3_Day%207_004_ski_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G3_Day%207_004_ski_sentence.mp3"
      }
    }
  },
  {
    "id": "give_up",
    "grade": 3,
    "day": 7,
    "seq": 6,
    "word": "give up",
    "pos": "v.",
    "meaning": "포기하다",
    "example": "He tries to win the game, but he gives up in the end.",
    "exampleChunks": [
      "He",
      "tries",
      "to",
      "win",
      "the",
      "game,",
      "but",
      "he",
      "gives",
      "up",
      "in",
      "the",
      "end."
    ],
    "media": {
      "gif": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/give-up.mp4",
      "video": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/give-up.mp4",
      "thumb": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca%20-%20images/give-up.jpeg",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G3_Day%207_006_give%20up_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G3_Day%207_006_give%20up_sentence.mp3"
      }
    }
  },
  {
    "id": "fill",
    "grade": 3,
    "day": 7,
    "seq": 7,
    "word": "fill",
    "pos": "v.",
    "meaning": "채우다",
    "example": "Mom fills the jar with some cherry jam.",
    "exampleChunks": [
      "Mom",
      "fills",
      "the",
      "jar",
      "with",
      "some",
      "cherry",
      "jam."
    ],
    "media": {
      "gif": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/fill.mp4",
      "video": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/fill.mp4",
      "thumb": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca%20-%20images/fill.jpeg",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G3_Day%207_007_fill_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G3_Day%207_007_fill_sentence.mp3"
      }
    }
  },
  {
    "id": "lock",
    "grade": 3,
    "day": 7,
    "seq": 8,
    "word": "lock",
    "pos": "v.",
    "meaning": "잠그다, 잠가 두다",
    "example": "He locks the door and the window.",
    "exampleChunks": [
      "He",
      "locks",
      "the",
      "door",
      "and",
      "the",
      "window."
    ],
    "media": {
      "gif": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/lock.mp4",
      "video": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/lock.mp4",
      "thumb": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca%20-%20images/lock.jpeg",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G3_Day%207_008_lock_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G3_Day%207_008_lock_sentence.mp3"
      }
    }
  },
  {
    "id": "steal",
    "grade": 3,
    "day": 7,
    "seq": 10,
    "word": "steal",
    "pos": "v.",
    "meaning": "훔치다 도둑질하다",
    "example": "",
    "exampleChunks": [],
    "media": {
      "gif": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/steal.mp4",
      "video": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/steal.mp4",
      "thumb": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca%20-%20images/steal.jpeg",
      "placeholder": "📖",
      "audio": {
        "word": "",
        "example": ""
      }
    }
  },
  {
    "id": "scare",
    "grade": 3,
    "day": 7,
    "seq": 11,
    "word": "scare",
    "pos": "v.",
    "meaning": "무섭게하다, 겁주다[겁나게 하다]",
    "example": "Loud noises scare the baby.",
    "exampleChunks": [
      "Loud",
      "noises",
      "scare",
      "the",
      "baby."
    ],
    "media": {
      "gif": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260702_094314_e705407a-da8f-4d83-9732-800cf07fa6d1.mp4",
      "video": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260702_094314_e705407a-da8f-4d83-9732-800cf07fa6d1.mp4",
      "thumb": "https://d2ol7oe51mr4n9.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/7c5602c7-8ae7-4ce9-9812-6a16ed420682.png",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G3_Day%207_011_scare_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G3_Day%207_011_scare_sentence.mp3"
      }
    }
  },
  {
    "id": "go_away",
    "grade": 3,
    "day": 7,
    "seq": 12,
    "word": "go away",
    "pos": "v.",
    "meaning": "(떠나) 가다, 집을 떠나다",
    "example": "The dog will go away when it hears a loud sound.",
    "exampleChunks": [
      "The",
      "dog",
      "will",
      "go",
      "away",
      "when",
      "it",
      "hears",
      "a",
      "loud",
      "sound."
    ],
    "media": {
      "gif": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/go-away.mp4",
      "video": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/go-away.mp4",
      "thumb": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca%20-%20images/go-away.jpeg",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G3_Day%207_012_go%20away_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G3_Day%207_012_go%20away_sentence.mp3"
      }
    }
  },
  {
    "id": "sand",
    "grade": 3,
    "day": 7,
    "seq": 13,
    "word": "sand",
    "pos": "v.",
    "meaning": "사포로 닦다, 모래로 닦다",
    "example": "The workers sand the wooden surface.",
    "exampleChunks": [
      "The",
      "workers",
      "sand",
      "the",
      "wooden",
      "surface."
    ],
    "media": {
      "gif": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260702_103336_e277a053-e6fb-40ed-892e-272e4a10fe5a.mp4",
      "video": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260702_103336_e277a053-e6fb-40ed-892e-272e4a10fe5a.mp4",
      "thumb": "https://d2ol7oe51mr4n9.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/f2ff4d23-972d-4b3f-aa57-7481a1228775.png",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G3_Day%207_013_sand_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G3_Day%207_013_sand_sentence.mp3"
      }
    }
  },
  {
    "id": "kiss",
    "grade": 3,
    "day": 7,
    "seq": 14,
    "word": "kiss",
    "pos": "v.",
    "meaning": "입 맞추다, 키스하다",
    "example": "She kisses her grandma on the cheek.",
    "exampleChunks": [
      "She",
      "kisses",
      "her",
      "grandma",
      "on",
      "the",
      "cheek."
    ],
    "media": {
      "gif": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260702_105524_c6598919-6c56-4428-ad02-064f730aa0f1.mp4",
      "video": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260702_105524_c6598919-6c56-4428-ad02-064f730aa0f1.mp4",
      "thumb": "https://d2ol7oe51mr4n9.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/c2ff2751-119e-4a39-8ef1-253d6e8fb372.png",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G3_Day%207_014_kiss_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G3_Day%207_014_kiss_sentence.mp3"
      }
    }
  },
  {
    "id": "bow",
    "grade": 3,
    "day": 7,
    "seq": 15,
    "word": "bow",
    "pos": "v.",
    "meaning": "절하다, 숙이다",
    "example": "He bows before the job interview.",
    "exampleChunks": [
      "He",
      "bows",
      "before",
      "the",
      "job",
      "interview."
    ],
    "media": {
      "gif": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260702_112242_0eb8a29e-7ae4-45e4-bd44-24e2d7bab020.mp4",
      "video": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260702_112242_0eb8a29e-7ae4-45e4-bd44-24e2d7bab020.mp4",
      "thumb": "https://d2ol7oe51mr4n9.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/ab9cc7cc-82a9-49d9-b38c-0bcca39b6f8d.png",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G3_Day%207_015_bow_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G3_Day%207_015_bow_sentence.mp3"
      }
    }
  },
  {
    "id": "improve",
    "grade": 3,
    "day": 7,
    "seq": 16,
    "word": "improve",
    "pos": "v.",
    "meaning": "나아지다",
    "example": "She improves her spelling every day.",
    "exampleChunks": [
      "She",
      "improves",
      "her",
      "spelling",
      "every",
      "day."
    ],
    "media": {
      "gif": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/improve.mp4",
      "video": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/improve.mp4",
      "thumb": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca%20-%20images/improve.jpeg",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G3_Day%207_016_improve_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G3_Day%207_016_improve_sentence.mp3"
      }
    }
  },
  {
    "id": "climb_up",
    "grade": 3,
    "day": 7,
    "seq": 17,
    "word": "climb up",
    "pos": "v.",
    "meaning": "~에 오르다",
    "example": "Two cats climb up the tree.",
    "exampleChunks": [
      "Two",
      "cats",
      "climb",
      "up",
      "the",
      "tree."
    ],
    "media": {
      "gif": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260703_021218_798b12a5-8a0f-47a8-9e24-b0253b7cd95b.mp4",
      "video": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260703_021218_798b12a5-8a0f-47a8-9e24-b0253b7cd95b.mp4",
      "thumb": "https://d2ol7oe51mr4n9.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/7d91efbe-c90a-40e1-8f74-5899eff3e0f7.png",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G3_Day%207_017_climb%20up_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G3_Day%207_017_climb%20up_sentence.mp3"
      }
    }
  },
  {
    "id": "take_a_picture",
    "grade": 3,
    "day": 7,
    "seq": 18,
    "word": "take a picture",
    "pos": "v.",
    "meaning": "사진을 찍다",
    "example": "My family takes a picture at the zoo.",
    "exampleChunks": [
      "My",
      "family",
      "takes",
      "a",
      "picture",
      "at",
      "the",
      "zoo."
    ],
    "media": {
      "gif": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260703_023329_31ef83cb-a0ff-43f7-8fc6-7da71181828e.mp4",
      "video": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260703_023329_31ef83cb-a0ff-43f7-8fc6-7da71181828e.mp4",
      "thumb": "https://d2ol7oe51mr4n9.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/6fc25a30-c3da-4b2b-927f-95f38fafb42e.png",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G3_Day%207_018_take%20a%20picture_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G3_Day%207_018_take%20a%20picture_sentence.mp3"
      }
    }
  },
  {
    "id": "pose",
    "grade": 3,
    "day": 7,
    "seq": 19,
    "word": "pose",
    "pos": "v.",
    "meaning": "포즈를 취하다 질문을 하다",
    "example": "The kids pose for the picture.",
    "exampleChunks": [
      "The",
      "kids",
      "pose",
      "for",
      "the",
      "picture."
    ],
    "media": {
      "gif": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/pose.mp4",
      "video": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/pose.mp4",
      "thumb": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca%20-%20images/pose.jpeg",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G3_Day%207_019_pose_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G3_Day%207_019_pose_sentence.mp3"
      }
    }
  },
  {
    "id": "care",
    "grade": 3,
    "day": 8,
    "seq": 1,
    "word": "care",
    "pos": "v.",
    "meaning": "관심을 가지다, 상관하다\n[배려하다]",
    "example": "She cares deeply for her plants.",
    "exampleChunks": [
      "She",
      "cares",
      "deeply",
      "for",
      "her",
      "plants."
    ],
    "media": {
      "gif": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260703_041100_6415dc39-858e-4dfc-b21d-5d6f5d426125.mp4",
      "video": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260703_041100_6415dc39-858e-4dfc-b21d-5d6f5d426125.mp4",
      "thumb": "https://d2ol7oe51mr4n9.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/1ee4ab87-f5ad-4716-afaa-b6b084d2b895.png",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G3_Day%208_001_care_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G3_Day%208_001_care_sentence.mp3"
      }
    }
  },
  {
    "id": "accept",
    "grade": 3,
    "day": 8,
    "seq": 7,
    "word": "accept",
    "pos": "v.",
    "meaning": "받아들이다, 인정하다",
    "example": "She accepts the company's offering.",
    "exampleChunks": [
      "She",
      "accepts",
      "the",
      "company's",
      "offering."
    ],
    "media": {
      "gif": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/accept.mp4",
      "video": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/accept.mp4",
      "thumb": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca%20-%20images/accept.jpeg",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G3_Day%208_007_accept_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G3_Day%208_007_accept_sentence.mp3"
      }
    }
  },
  {
    "id": "appear",
    "grade": 3,
    "day": 8,
    "seq": 8,
    "word": "appear",
    "pos": "v.",
    "meaning": "나타나다",
    "example": "The sun will appear in the sky soon.",
    "exampleChunks": [
      "The",
      "sun",
      "will",
      "appear",
      "in",
      "the",
      "sky",
      "soon."
    ],
    "media": {
      "gif": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/emerge.mp4",
      "video": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/emerge.mp4",
      "thumb": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca%20-%20images/emerge.jpeg",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G3_Day%208_008_appear_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G3_Day%208_008_appear_sentence.mp3"
      }
    }
  },
  {
    "id": "begin",
    "grade": 3,
    "day": 8,
    "seq": 10,
    "word": "begin",
    "pos": "v.",
    "meaning": "시작하다",
    "example": "She begins to read the book.",
    "exampleChunks": [
      "She",
      "begins",
      "to",
      "read",
      "the",
      "book."
    ],
    "media": {
      "gif": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260703_141225_b706f2fe-cc59-4ef8-8290-e70992d249fa.mp4",
      "video": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260703_141225_b706f2fe-cc59-4ef8-8290-e70992d249fa.mp4",
      "thumb": "https://d2ol7oe51mr4n9.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/82c04b53-c6cb-44fb-8f73-a7a50385c8b9.png",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G3_Day%208_010_begin_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G3_Day%208_010_begin_sentence.mp3"
      }
    }
  },
  {
    "id": "land",
    "grade": 3,
    "day": 8,
    "seq": 11,
    "word": "land",
    "pos": "v.",
    "meaning": "착륙하다",
    "example": "The airplane will land at the airport.",
    "exampleChunks": [
      "The",
      "airplane",
      "will",
      "land",
      "at",
      "the",
      "airport."
    ],
    "media": {
      "gif": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260703_144234_82085f9d-40e6-49fd-8940-189289c05db7.mp4",
      "video": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260703_144234_82085f9d-40e6-49fd-8940-189289c05db7.mp4",
      "thumb": "https://d2ol7oe51mr4n9.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/c8046ca7-418d-4a15-98cf-5df3316d491f.png",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G3_Day%208_011_land_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G3_Day%208_011_land_sentence.mp3"
      }
    }
  },
  {
    "id": "save",
    "grade": 3,
    "day": 8,
    "seq": 12,
    "word": "save",
    "pos": "v.",
    "meaning": "구하다, 저축(절약)하다",
    "example": "Dad saves the kitten.",
    "exampleChunks": [
      "Dad",
      "saves",
      "the",
      "kitten."
    ],
    "media": {
      "gif": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260703_151234_c26c7da2-ed86-4676-8efd-788a7052d313.mp4",
      "video": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260703_151234_c26c7da2-ed86-4676-8efd-788a7052d313.mp4",
      "thumb": "https://d2ol7oe51mr4n9.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/1de83f33-3079-4da8-a3d1-85fb6249b5a4.png",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G3_Day%208_012_save_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G3_Day%208_012_save_sentence.mp3"
      }
    }
  },
  {
    "id": "invent",
    "grade": 3,
    "day": 8,
    "seq": 14,
    "word": "invent",
    "pos": "v.",
    "meaning": "발명하다, 지어내다",
    "example": "He will invent a robot.",
    "exampleChunks": [
      "He",
      "will",
      "invent",
      "a",
      "robot."
    ],
    "media": {
      "gif": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/invent.mp4",
      "video": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/invent.mp4",
      "thumb": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca%20-%20images/invent.jpeg",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G3_Day%208_014_invent_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G3_Day%208_014_invent_sentence.mp3"
      }
    }
  },
  {
    "id": "produce",
    "grade": 3,
    "day": 8,
    "seq": 15,
    "word": "produce",
    "pos": "v.",
    "meaning": "생산하다",
    "example": "The farmer produces fresh vegetables.",
    "exampleChunks": [
      "The",
      "farmer",
      "produces",
      "fresh",
      "vegetables."
    ],
    "media": {
      "gif": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260703_164037_b5ef00b6-b696-4ac1-b1c2-16b63e39dd5a.mp4",
      "video": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260703_164037_b5ef00b6-b696-4ac1-b1c2-16b63e39dd5a.mp4",
      "thumb": "https://d2ol7oe51mr4n9.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/d6bf02c8-7bb2-43fd-b64a-11ec1b4038da.png",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G3_Day%208_015_produce_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G3_Day%208_015_produce_sentence.mp3"
      }
    }
  },
  {
    "id": "send",
    "grade": 3,
    "day": 8,
    "seq": 16,
    "word": "send",
    "pos": "v.",
    "meaning": "보내다, 발송하다",
    "example": "The company sends a new copy of contract.",
    "exampleChunks": [
      "The",
      "company",
      "sends",
      "a",
      "new",
      "copy",
      "of",
      "contract."
    ],
    "media": {
      "gif": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/send.mp4",
      "video": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/send.mp4",
      "thumb": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca%20-%20images/send.jpeg",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G3_Day%208_016_send_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G3_Day%208_016_send_sentence.mp3"
      }
    }
  },
  {
    "id": "answer",
    "grade": 3,
    "day": 8,
    "seq": 18,
    "word": "answer",
    "pos": "v.",
    "meaning": "대답하다",
    "example": "I will answer the question in class.",
    "exampleChunks": [
      "I",
      "will",
      "answer",
      "the",
      "question",
      "in",
      "class."
    ],
    "media": {
      "gif": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/answer.mp4",
      "video": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/answer.mp4",
      "thumb": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca%20-%20images/answer.jpeg",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G3_Day%208_018_answer_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G3_Day%208_018_answer_sentence.mp3"
      }
    }
  },
  {
    "id": "carry",
    "grade": 3,
    "day": 8,
    "seq": 20,
    "word": "carry",
    "pos": "v.",
    "meaning": "나르다, 싣다",
    "example": "The ants carry food to their nest.",
    "exampleChunks": [
      "The",
      "ants",
      "carry",
      "food",
      "to",
      "their",
      "nest."
    ],
    "media": {
      "gif": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260703_220148_5e14e14b-e1be-4bec-be13-042cf07cdb08.mp4",
      "video": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260703_220148_5e14e14b-e1be-4bec-be13-042cf07cdb08.mp4",
      "thumb": "https://d2ol7oe51mr4n9.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/c3c06aca-41cd-4687-b441-46d210e54035.png",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G3_Day%208_020_carry_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G3_Day%208_020_carry_sentence.mp3"
      }
    }
  },
  {
    "id": "run_away",
    "grade": 3,
    "day": 9,
    "seq": 2,
    "word": "run away",
    "pos": "v.",
    "meaning": "도망치다[탈주하다], 가출하다",
    "example": "The rabbit runs away from its cage.",
    "exampleChunks": [
      "The",
      "rabbit",
      "runs",
      "away",
      "from",
      "its",
      "cage."
    ],
    "media": {
      "gif": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260704_033134_3c6841ab-eaa6-4dc9-98e0-e5d2bd4761e6.mp4",
      "video": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260704_033134_3c6841ab-eaa6-4dc9-98e0-e5d2bd4761e6.mp4",
      "thumb": "https://d2ol7oe51mr4n9.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/9085ef54-9c0b-4874-8994-92235601b518.png",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G3_Day%209_002_run%20away_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G3_Day%209_002_run%20away_sentence.mp3"
      }
    }
  },
  {
    "id": "mail",
    "grade": 3,
    "day": 9,
    "seq": 4,
    "word": "mail",
    "pos": "v.",
    "meaning": "(우편으로)보내다 부치다",
    "example": "He mails the letter to his friend.",
    "exampleChunks": [
      "He",
      "mails",
      "the",
      "letter",
      "to",
      "his",
      "friend."
    ],
    "media": {
      "gif": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/mail.mp4",
      "video": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/mail.mp4",
      "thumb": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca%20-%20images/mail.jpeg",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G3_Day%209_004_mail_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G3_Day%209_004_mail_sentence.mp3"
      }
    }
  },
  {
    "id": "hurt",
    "grade": 3,
    "day": 9,
    "seq": 5,
    "word": "hurt",
    "pos": "v.",
    "meaning": "다치게 하다, 아프다",
    "example": "He hurts his leg while playing.",
    "exampleChunks": [
      "He",
      "hurts",
      "his",
      "leg",
      "while",
      "playing."
    ],
    "media": {
      "gif": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260704_045132_3de3538a-c6ac-4b86-b382-72d5122b46a7.mp4",
      "video": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260704_045132_3de3538a-c6ac-4b86-b382-72d5122b46a7.mp4",
      "thumb": "https://d2ol7oe51mr4n9.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/e53bb46d-bdfc-4818-944a-68a6731faf23.png",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G3_Day%209_005_hurt_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G3_Day%209_005_hurt_sentence.mp3"
      }
    }
  },
  {
    "id": "lose",
    "grade": 3,
    "day": 9,
    "seq": 9,
    "word": "lose",
    "pos": "v.",
    "meaning": "지다, 잃어버리다\n[잃다]",
    "example": "I lose my pencil every day.",
    "exampleChunks": [
      "I",
      "lose",
      "my",
      "pencil",
      "every",
      "day."
    ],
    "media": {
      "gif": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/lose.mp4",
      "video": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/lose.mp4",
      "thumb": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca%20-%20images/lose.jpeg",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G3_Day%209_009_lose_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G3_Day%209_009_lose_sentence.mp3"
      }
    }
  },
  {
    "id": "breathe",
    "grade": 3,
    "day": 9,
    "seq": 10,
    "word": "breathe",
    "pos": "v.",
    "meaning": "호흡하다",
    "example": "I breathe in the fresh air.",
    "exampleChunks": [
      "I",
      "breathe",
      "in",
      "the",
      "fresh",
      "air."
    ],
    "media": {
      "gif": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/breathe.mp4",
      "video": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/breathe.mp4",
      "thumb": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca%20-%20images/breathe.jpeg",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G3_Day%209_010_breathe_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G3_Day%209_010_breathe_sentence.mp3"
      }
    }
  },
  {
    "id": "fold",
    "grade": 3,
    "day": 9,
    "seq": 11,
    "word": "fold",
    "pos": "v.",
    "meaning": "접다",
    "example": "He folds the paper into half.",
    "exampleChunks": [
      "He",
      "folds",
      "the",
      "paper",
      "into",
      "half."
    ],
    "media": {
      "gif": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260704_080158_03ea82a9-b05c-4d4f-a1bd-94b9ca05b075.mp4",
      "video": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260704_080158_03ea82a9-b05c-4d4f-a1bd-94b9ca05b075.mp4",
      "thumb": "https://d2ol7oe51mr4n9.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/d7bfdfde-d609-461a-a9b7-789a7767bb5f.png",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G3_Day%209_011_fold_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G3_Day%209_011_fold_sentence.mp3"
      }
    }
  },
  {
    "id": "take_care_of",
    "grade": 3,
    "day": 9,
    "seq": 13,
    "word": "take care of",
    "pos": "v.",
    "meaning": "돌보다",
    "example": "He takes care of his brother after school.",
    "exampleChunks": [
      "He",
      "takes",
      "care",
      "of",
      "his",
      "brother",
      "after",
      "school."
    ],
    "media": {
      "gif": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/take-care-of.mp4",
      "video": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/take-care-of.mp4",
      "thumb": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca%20-%20images/take-care-of.jpeg",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G3_Day%209_013_take%20care%20of_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G3_Day%209_013_take%20care%20of_sentence.mp3"
      }
    }
  },
  {
    "id": "solve",
    "grade": 3,
    "day": 9,
    "seq": 14,
    "word": "solve",
    "pos": "v.",
    "meaning": "해결하다, 풀다",
    "example": "Dad always sloves the problems at home.",
    "exampleChunks": [
      "Dad",
      "always",
      "sloves",
      "the",
      "problems",
      "at",
      "home."
    ],
    "media": {
      "gif": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260704_093216_eba98106-b095-4020-aa27-920614e60200.mp4",
      "video": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260704_093216_eba98106-b095-4020-aa27-920614e60200.mp4",
      "thumb": "https://d2ol7oe51mr4n9.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/569cc9ae-0cbd-44dd-926b-81188125ff07.png",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G3_Day%209_014_solve_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G3_Day%209_014_solve_sentence.mp3"
      }
    }
  },
  {
    "id": "become",
    "grade": 3,
    "day": 9,
    "seq": 15,
    "word": "become",
    "pos": "v.",
    "meaning": "~이 되다",
    "example": "He will become a good player with practice.",
    "exampleChunks": [
      "He",
      "will",
      "become",
      "a",
      "good",
      "player",
      "with",
      "practice."
    ],
    "media": {
      "gif": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/become.mp4",
      "video": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/become.mp4",
      "thumb": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca%20-%20images/become.jpeg",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G3_Day%209_015_become_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G3_Day%209_015_become_sentence.mp3"
      }
    }
  },
  {
    "id": "groan",
    "grade": 3,
    "day": 9,
    "seq": 16,
    "word": "groan",
    "pos": "v.",
    "meaning": "(고통으로) 신음소리를 내다 낮게 탄성을  지르다",
    "example": "",
    "exampleChunks": [],
    "media": {
      "gif": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/groan.mp4",
      "video": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/groan.mp4",
      "thumb": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca%20-%20images/groan.jpeg",
      "placeholder": "📖",
      "audio": {
        "word": "",
        "example": ""
      }
    }
  },
  {
    "id": "sprinkle",
    "grade": 3,
    "day": 9,
    "seq": 17,
    "word": "sprinkle",
    "pos": "v.",
    "meaning": "뿌리다, 간간이 섞다",
    "example": "I sprinkle sugar on my cereal.",
    "exampleChunks": [
      "I",
      "sprinkle",
      "sugar",
      "on",
      "my",
      "cereal."
    ],
    "media": {
      "gif": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/sprinkle.mp4",
      "video": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/sprinkle.mp4",
      "thumb": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca%20-%20images/sprinkle.jpeg",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G3_Day%209_017_sprinkle_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G3_Day%209_017_sprinkle_sentence.mp3"
      }
    }
  },
  {
    "id": "roam",
    "grade": 3,
    "day": 9,
    "seq": 18,
    "word": "roam",
    "pos": "v.",
    "meaning": "(이리저리)돌아다니다 배회[방랑]하다",
    "example": "The deer roams in the forest.",
    "exampleChunks": [
      "The",
      "deer",
      "roams",
      "in",
      "the",
      "forest."
    ],
    "media": {
      "gif": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/roam.mp4",
      "video": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/roam.mp4",
      "thumb": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca%20-%20images/roam.jpeg",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G3_Day%209_018_roam_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G3_Day%209_018_roam_sentence.mp3"
      }
    }
  },
  {
    "id": "complete",
    "grade": 3,
    "day": 9,
    "seq": 20,
    "word": "complete",
    "pos": "v.",
    "meaning": "완성하다, 작성하다",
    "example": "She completes her puzzle quickly.",
    "exampleChunks": [
      "She",
      "completes",
      "her",
      "puzzle",
      "quickly."
    ],
    "media": {
      "gif": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/complete.mp4",
      "video": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/complete.mp4",
      "thumb": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca%20-%20images/complete.jpeg",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G3_Day%209_020_complete_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G3_Day%209_020_complete_sentence.mp3"
      }
    }
  },
  {
    "id": "edge",
    "grade": 3,
    "day": 10,
    "seq": 1,
    "word": "edge",
    "pos": "v.",
    "meaning": "조금씩[살살]움직이다, 이동시키다",
    "example": "I edge closer to the door.",
    "exampleChunks": [
      "I",
      "edge",
      "closer",
      "to",
      "the",
      "door."
    ],
    "media": {
      "gif": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260704_132214_ad1de837-fafc-406e-83e2-20a4fbbf2564.mp4",
      "video": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260704_132214_ad1de837-fafc-406e-83e2-20a4fbbf2564.mp4",
      "thumb": "https://d2ol7oe51mr4n9.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/24006c36-01ed-4922-99c6-aeb7755e91a5.png",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G3_Day%2010_001_edge_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G3_Day%2010_001_edge_sentence.mp3"
      }
    }
  },
  {
    "id": "attach",
    "grade": 3,
    "day": 10,
    "seq": 2,
    "word": "attach",
    "pos": "v.",
    "meaning": "붙이다, 첨부하다",
    "example": "She attaches the photo to the scrapbook.",
    "exampleChunks": [
      "She",
      "attaches",
      "the",
      "photo",
      "to",
      "the",
      "scrapbook."
    ],
    "media": {
      "gif": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260704_163705_a5b47256-d21b-4e25-a763-bb57521c0ee5.mp4",
      "video": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260704_163705_a5b47256-d21b-4e25-a763-bb57521c0ee5.mp4",
      "thumb": "https://d2ol7oe51mr4n9.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/274b3b3c-b545-4b63-917c-9b1b62c81643.png",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G3_Day%2010_002_attach_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G3_Day%2010_002_attach_sentence.mp3"
      }
    }
  },
  {
    "id": "damage",
    "grade": 3,
    "day": 10,
    "seq": 3,
    "word": "damage",
    "pos": "v.",
    "meaning": "손상을 주다, 피해를 입히다",
    "example": "The rain can damage the plants.",
    "exampleChunks": [
      "The",
      "rain",
      "can",
      "damage",
      "the",
      "plants."
    ],
    "media": {
      "gif": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260704_170240_8771942c-9bd7-4c07-9edf-92635ead6bd9.mp4",
      "video": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260704_170240_8771942c-9bd7-4c07-9edf-92635ead6bd9.mp4",
      "thumb": "https://d2ol7oe51mr4n9.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/521c54ab-4001-4b10-ae01-e8dc41a06c7a.png",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G3_Day%2010_003_damage_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G3_Day%2010_003_damage_sentence.mp3"
      }
    }
  },
  {
    "id": "creak",
    "grade": 3,
    "day": 10,
    "seq": 4,
    "word": "creak",
    "pos": "v.",
    "meaning": "삐걱거리다",
    "example": "",
    "exampleChunks": [],
    "media": {
      "gif": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/creak.mp4",
      "video": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/creak.mp4",
      "thumb": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca%20-%20images/creak.jpeg",
      "placeholder": "📖",
      "audio": {
        "word": "",
        "example": ""
      }
    }
  },
  {
    "id": "whimper",
    "grade": 3,
    "day": 10,
    "seq": 5,
    "word": "whimper",
    "pos": "v.",
    "meaning": "훌쩍거리다, 훌쩍이며 말하다",
    "example": "The dog whimpers at the door.",
    "exampleChunks": [
      "The",
      "dog",
      "whimpers",
      "at",
      "the",
      "door."
    ],
    "media": {
      "gif": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260704_182239_6b61ef8b-0015-4382-b7bc-7be29370128c.mp4",
      "video": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260704_182239_6b61ef8b-0015-4382-b7bc-7be29370128c.mp4",
      "thumb": "https://d2ol7oe51mr4n9.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/f09debcd-5b83-4dbc-a461-1dde0c50be60.png",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G3_Day%2010_005_whimper_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G3_Day%2010_005_whimper_sentence.mp3"
      }
    }
  },
  {
    "id": "plead",
    "grade": 3,
    "day": 10,
    "seq": 6,
    "word": "plead",
    "pos": "v.",
    "meaning": "애원하다, 답변하다",
    "example": "She pleads with her parents.",
    "exampleChunks": [
      "She",
      "pleads",
      "with",
      "her",
      "parents."
    ],
    "media": {
      "gif": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260704_185319_b636b4d0-6239-4e3b-8533-1b94c2226ad4.mp4",
      "video": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260704_185319_b636b4d0-6239-4e3b-8533-1b94c2226ad4.mp4",
      "thumb": "https://d2ol7oe51mr4n9.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/90a591ba-93af-4f96-9278-770e55cfc17c.png",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G3_Day%2010_006_plead_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G3_Day%2010_006_plead_sentence.mp3"
      }
    }
  },
  {
    "id": "limp",
    "grade": 3,
    "day": 10,
    "seq": 7,
    "word": "limp",
    "pos": "v.",
    "meaning": "다리를 절다[절뚝거리다], 느릿느릿 나아가다",
    "example": "The hiker limps down the trail.",
    "exampleChunks": [
      "The",
      "hiker",
      "limps",
      "down",
      "the",
      "trail."
    ],
    "media": {
      "gif": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/limp.mp4",
      "video": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/limp.mp4",
      "thumb": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca%20-%20images/limp.jpeg",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G3_Day%2010_007_limp_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G3_Day%2010_007_limp_sentence.mp3"
      }
    }
  },
  {
    "id": "trust",
    "grade": 3,
    "day": 10,
    "seq": 8,
    "word": "trust",
    "pos": "v.",
    "meaning": "(사람을)신뢰하다, 믿다",
    "example": "I trust my friend to be kind.",
    "exampleChunks": [
      "I",
      "trust",
      "my",
      "friend",
      "to",
      "be",
      "kind."
    ],
    "media": {
      "gif": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260704_194415_9e59deb9-cb87-4e07-a599-90fcca953007.mp4",
      "video": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260704_194415_9e59deb9-cb87-4e07-a599-90fcca953007.mp4",
      "thumb": "https://d2ol7oe51mr4n9.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/f194773e-1d89-4037-8485-ac7698e3cb4d.png",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G3_Day%2010_008_trust_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G3_Day%2010_008_trust_sentence.mp3"
      }
    }
  },
  {
    "id": "exchange",
    "grade": 3,
    "day": 10,
    "seq": 9,
    "word": "exchange",
    "pos": "v.",
    "meaning": "교환하다, 주고받다",
    "example": "We exchange gifts on Christmas.",
    "exampleChunks": [
      "We",
      "exchange",
      "gifts",
      "on",
      "Christmas."
    ],
    "media": {
      "gif": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/exchange.mp4",
      "video": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/exchange.mp4",
      "thumb": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca%20-%20images/exchange.jpeg",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G3_Day%2010_009_exchange_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G3_Day%2010_009_exchange_sentence.mp3"
      }
    }
  },
  {
    "id": "tidy",
    "grade": 3,
    "day": 10,
    "seq": 10,
    "word": "tidy",
    "pos": "v.",
    "meaning": "정돈[정리]하다",
    "example": "She tidies up her desk.",
    "exampleChunks": [
      "She",
      "tidies",
      "up",
      "her",
      "desk."
    ],
    "media": {
      "gif": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/tidy.mp4",
      "video": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/tidy.mp4",
      "thumb": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca%20-%20images/tidy.jpeg",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G3_Day%2010_010_tidy_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G3_Day%2010_010_tidy_sentence.mp3"
      }
    }
  },
  {
    "id": "polish",
    "grade": 3,
    "day": 10,
    "seq": 11,
    "word": "polish",
    "pos": "v.",
    "meaning": "닦다, (좋아지도록)다듬다",
    "example": "She polishes her shoes.",
    "exampleChunks": [
      "She",
      "polishes",
      "her",
      "shoes."
    ],
    "media": {
      "gif": "https://d8j0ntlcm91z4.cloudfront.net/user_3BO3KyJ9rz504vburMhH4hlonmN/hf_20260902_001305_de878b06-539f-4e53-9a12-924b1609c675.mp4",
      "video": "https://d8j0ntlcm91z4.cloudfront.net/user_3BO3KyJ9rz504vburMhH4hlonmN/hf_20260902_001305_de878b06-539f-4e53-9a12-924b1609c675.mp4",
      "thumb": "https://d2ol7oe51mr4n9.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/fcded2f3-2089-4c80-81cd-7bd566681335.png",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G3_Day%2010_011_polish_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G3_Day%2010_011_polish_sentence.mp3"
      }
    }
  },
  {
    "id": "destroy",
    "grade": 3,
    "day": 10,
    "seq": 12,
    "word": "destroy",
    "pos": "v.",
    "meaning": "파괴하다, 말살하다",
    "example": "The fire destroys the old building.",
    "exampleChunks": [
      "The",
      "fire",
      "destroys",
      "the",
      "old",
      "building."
    ],
    "media": {
      "gif": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260704_214325_58487ec8-30c6-4d3e-a2e6-346b05195dce.mp4",
      "video": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260704_214325_58487ec8-30c6-4d3e-a2e6-346b05195dce.mp4",
      "thumb": "https://d2ol7oe51mr4n9.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/e74ffe1d-ec7f-40bc-86f5-01feb0c7bcec.png",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G3_Day%2010_012_destroy_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G3_Day%2010_012_destroy_sentence.mp3"
      }
    }
  },
  {
    "id": "rescue",
    "grade": 3,
    "day": 10,
    "seq": 13,
    "word": "rescue",
    "pos": "v.",
    "meaning": "(위험에서)구하다, 구조[구출]하다",
    "example": "The firefighters rescue the family.",
    "exampleChunks": [
      "The",
      "firefighters",
      "rescue",
      "the",
      "family."
    ],
    "media": {
      "gif": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260704_221200_7fa64235-1b9f-447c-856e-d9357384b987.mp4",
      "video": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260704_221200_7fa64235-1b9f-447c-856e-d9357384b987.mp4",
      "thumb": "https://d2ol7oe51mr4n9.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/749d3e1f-cf5e-4f71-b488-9c66e1099052.png",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G3_Day%2010_013_rescue_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G3_Day%2010_013_rescue_sentence.mp3"
      }
    }
  },
  {
    "id": "seek",
    "grade": 3,
    "day": 10,
    "seq": 15,
    "word": "seek",
    "pos": "v.",
    "meaning": "찾다, 구하다",
    "example": "He seeks adventure in his travels.",
    "exampleChunks": [
      "He",
      "seeks",
      "adventure",
      "in",
      "his",
      "travels."
    ],
    "media": {
      "gif": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/seek.mp4",
      "video": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/seek.mp4",
      "thumb": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca%20-%20images/seek%20(1).jpeg",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G3_Day%2010_015_seek_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G3_Day%2010_015_seek_sentence.mp3"
      }
    }
  },
  {
    "id": "argue",
    "grade": 3,
    "day": 10,
    "seq": 17,
    "word": "argue",
    "pos": "v.",
    "meaning": "언쟁을 하다, 다투다",
    "example": "My sister and I argue over the TV remote.",
    "exampleChunks": [
      "My",
      "sister",
      "and",
      "I",
      "argue",
      "over",
      "the",
      "TV",
      "remote."
    ],
    "media": {
      "gif": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260705_000201_90dc6da7-47b5-4465-8502-ba3b2de8af23.mp4",
      "video": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260705_000201_90dc6da7-47b5-4465-8502-ba3b2de8af23.mp4",
      "thumb": "https://d2ol7oe51mr4n9.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/953afe80-6539-4256-a32e-368d74fd9c8a.png",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G3_Day%2010_017_argue_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G3_Day%2010_017_argue_sentence.mp3"
      }
    }
  },
  {
    "id": "journey",
    "grade": 3,
    "day": 10,
    "seq": 18,
    "word": "journey",
    "pos": "v.",
    "meaning": "여행하다, 이동하다",
    "example": "He journeys through the mountains.",
    "exampleChunks": [
      "He",
      "journeys",
      "through",
      "the",
      "mountains."
    ],
    "media": {
      "gif": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260705_003157_c6084754-90af-4f32-b75c-f938f2e8dac1.mp4",
      "video": "https://d8j0ntlcm91z4.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/hf_20260705_003157_c6084754-90af-4f32-b75c-f938f2e8dac1.mp4",
      "thumb": "https://d2ol7oe51mr4n9.cloudfront.net/user_3Bfqnph7JZyUpQdqDvhdpHlpkN1/eb9e26d2-4e1f-49d3-b54f-f58655c8be3f.png",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G3_Day%2010_018_journey_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G3_Day%2010_018_journey_sentence.mp3"
      }
    }
  },
  {
    "id": "remove",
    "grade": 3,
    "day": 10,
    "seq": 19,
    "word": "remove",
    "pos": "v.",
    "meaning": "치우다[내보내다], 벗다",
    "example": "Please remove the books from the table.",
    "exampleChunks": [
      "Please",
      "remove",
      "the",
      "books",
      "from",
      "the",
      "table."
    ],
    "media": {
      "gif": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/remove.mp4",
      "video": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/remove.mp4",
      "thumb": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca%20-%20images/remove%20(1).jpeg",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G3_Day%2010_019_remove_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G3_Day%2010_019_remove_sentence.mp3"
      }
    }
  },
  {
    "id": "clutch",
    "grade": 3,
    "day": 10,
    "seq": 20,
    "word": "clutch",
    "pos": "v.",
    "meaning": "(꽉)움켜잡다, 와락 움켜잡다",
    "example": "I clutch my teddy bear when I sleep.",
    "exampleChunks": [
      "I",
      "clutch",
      "my",
      "teddy",
      "bear",
      "when",
      "I",
      "sleep."
    ],
    "media": {
      "gif": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/clutch.mp4",
      "video": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca-videos/clutch.mp4",
      "thumb": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/voca%20-%20images/clutch.jpeg",
      "placeholder": "📖",
      "audio": {
        "word": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G3_Day%2010_020_clutch_word.mp3",
        "example": "https://dovmtkxpjupbdkifrlss.supabase.co/storage/v1/object/public/Voca%20-%20TTS/G3_Day%2010_020_clutch_sentence.mp3"
      }
    }
  }
];

window.VOCAB_WORDS.sort((a, b) =>
  a.grade - b.grade || a.day - b.day || a.seq - b.seq
);
