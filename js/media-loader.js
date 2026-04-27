/**
 * js/media-loader.js
 * URL 생성 + 네트워크 감지 + GIF/Video 엘리먼트 생성
 */
(function () {
  'use strict';

  const CFG = window.MEDIA_CONFIG;

  function resolveUrl(path) {
    if (!path) return '';
    if (path.startsWith('http')) return path;
    const base = CFG.bases[CFG.mode] ?? '.';
    return base === '.' ? path : `${base}/${path}`;
  }

  function detectMediaType() {
    if (!CFG.autoDetectNetwork) return CFG.mediaType;
    const conn = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
    if (conn && CFG.slowNetworkTypes.includes(conn.effectiveType)) return 'gif';
    return CFG.mediaType;
  }

  function replacePlaceholder(el, wordData) {
    const ph = document.createElement('div');
    ph.className = 'vocab-media-placeholder';
    ph.textContent = wordData.media.placeholder ?? '📖';
    el.replaceWith(ph);
  }

  function createGif(wordData) {
    const img = document.createElement('img');
    img.className = 'vocab-card__media';
    img.alt = wordData.word;
    if (CFG.gif.lazyLoad) img.loading = 'lazy';
    img.onerror = () => replacePlaceholder(img, wordData);
    img.src = resolveUrl(wordData.media.gif);
    return img;
  }

  function createVideo(wordData) {
    const video = document.createElement('video');
    const opt = CFG.video;
    video.className   = 'vocab-card__media';
    video.preload     = opt.preload;
    video.muted       = opt.muted;
    video.loop        = opt.loop;
    video.playsInline = opt.playsInline;
    video.poster      = resolveUrl(wordData.media.thumb);
    video.onerror = () => {
      const gif = createGif(wordData);
      video.replaceWith(gif);
    };
    video.src = resolveUrl(wordData.media.video);
    return video;
  }

  function createThumb(wordData) {
    const img = document.createElement('img');
    img.className = 'vocab-thumb';
    img.alt = wordData.word;
    img.onerror = () => {
      const ph = document.createElement('div');
      ph.className = 'vocab-media-placeholder';
      ph.textContent = wordData.media.placeholder ?? '📖';
      img.replaceWith(ph);
    };
    img.src = resolveUrl(wordData.media.thumb);
    return img;
  }

  window.MediaLoader = {
    create     : (wordData) => detectMediaType() === 'gif' ? createGif(wordData) : createVideo(wordData),
    createThumb: (wordData) => createThumb(wordData),
    getType    : detectMediaType,
  };
})();
