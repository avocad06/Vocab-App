/**
 * js/audio-player.js
 *
 * - 같은 파일은 캐시해서 재사용
 * - playOnce(src) : 재생 완료 시 resolve / 실패 시 fallbackMs 후 resolve
 * - preload(src)  : 미리 로드만 (재생 X)
 */
(function () {
  'use strict';

  const cache = new Map();

  function load(src) {
    if (!src) return null;
    if (cache.has(src)) return cache.get(src);
    const audio = new Audio(src);
    audio.preload = 'auto';
    cache.set(src, audio);
    return audio;
  }

  /**
   * 1회 재생 → 끝나면 resolve
   * @param {string} src
   * @param {number} fallbackMs  오류 시 대기 후 강제 resolve (기본 700ms)
   */
  function playOnce(src, fallbackMs = 700) {
    return new Promise(resolve => {
      if (!src) { setTimeout(resolve, fallbackMs); return; }

      const audio = load(src);
      audio.currentTime = 0;

      const done = () => resolve();
      audio.onended = done;
      audio.onerror = () => setTimeout(resolve, fallbackMs);

      audio.play().catch(() => setTimeout(resolve, fallbackMs));
    });
  }

  /**
   * 미리 로드 (Phase 1 동안 호출해 버퍼 채우기)
   */
  function preload(src) {
    if (src) load(src);
  }

  window.AudioPlayer = { playOnce, preload };
})();
