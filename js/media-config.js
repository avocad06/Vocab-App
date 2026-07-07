/**
 * js/media-config.js
 * 서빙 방식이 결정되면 mode 와 bases 만 수정하면 전체 적용됩니다.
 *
 * mode: 'local' | 's3' | 'cdn'
 */
window.MEDIA_CONFIG = {
  mode: 'local',

  bases: {
    local: '.',
    s3   : 'https://YOUR-BUCKET.s3.ap-northeast-2.amazonaws.com/vocab',
    cdn  : 'https://YOUR-CDN-DOMAIN/vocab',
  },

  mediaType: 'video',        // 'gif' | 'video'
  autoDetectNetwork: true,
  slowNetworkTypes : ['slow-2g', '2g'],

  video: {
    preload    : 'none',
    muted      : true,
    loop       : true,
    playsInline: true,
  },
  gif: {
    lazyLoad: true,
  },
  audio: {
    playbackRate  : 0.85,   // 1 = 원속도, 0.85 = 15% 느리게 (숫자 낮출수록 느려짐)
    preservesPitch: true,   // 속도 늦춰도 음정(목소리 톤) 유지
  },
};
