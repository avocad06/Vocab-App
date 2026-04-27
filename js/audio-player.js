/**
 * js/audio-player.js
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

  function preload(src) {
    if (src) load(src);
  }

  function playOnce(src, fallbackMs = 700) {
    return new Promise(resolve => {
      if (!src) { setTimeout(resolve, fallbackMs); return; }
      const audio = load(src);
      audio.currentTime = 0;
      audio.onended = () => resolve();
      audio.onerror = () => setTimeout(resolve, fallbackMs);
      audio.play().catch(() => setTimeout(resolve, fallbackMs));
    });
  }

  function getDuration(src, fallbackMs = 700) {
    return new Promise(resolve => {
      if (!src) { resolve(fallbackMs); return; }
      const audio = load(src);
      if (audio.readyState >= 1 && isFinite(audio.duration)) {
        resolve(Math.round(audio.duration * 1000));
        return;
      }
      const onMeta = () => {
        audio.removeEventListener('loadedmetadata', onMeta);
        resolve(isFinite(audio.duration)
          ? Math.round(audio.duration * 1000)
          : fallbackMs);
      };
      audio.addEventListener('loadedmetadata', onMeta);
      setTimeout(() => {
        audio.removeEventListener('loadedmetadata', onMeta);
        resolve(fallbackMs);
      }, 2000);
    });
  }

  async function analyzeChunkTimings(src, numChunks, opts = {}) {
    const {
      silenceThreshold = 0.015,
      minSilenceMs = 80,
      frameSizeMs = 10,
    } = opts;

    const fallbackEqual = totalMs =>
      Array.from({ length: numChunks }, (_, i) =>
        Math.round(i * totalMs / numChunks));

    try {
      const res = await fetch(src);
      const buf = await res.arrayBuffer();
      const actx = new (window.AudioContext || window.webkitAudioContext)();
      const decoded = await actx.decodeAudioData(buf);
      actx.close();

      const sampleRate = decoded.sampleRate;
      const channels = decoded.numberOfChannels;
      const length = decoded.length;
      const totalMs = Math.round(decoded.duration * 1000);

      const mixed = new Float32Array(length);
      for (let c = 0; c < channels; c++) {
        const ch = decoded.getChannelData(c);
        for (let i = 0; i < length; i++) mixed[i] += ch[i] / channels;
      }

      const frameSize = Math.round(sampleRate * frameSizeMs / 1000);
      const frameCount = Math.ceil(length / frameSize);
      const rms = new Float32Array(frameCount);
      for (let f = 0; f < frameCount; f++) {
        const s = f * frameSize;
        const e = Math.min(s + frameSize, length);
        let sum = 0;
        for (let i = s; i < e; i++) sum += mixed[i] * mixed[i];
        rms[f] = Math.sqrt(sum / (e - s));
      }

      const minFrames = Math.ceil(minSilenceMs / frameSizeMs);
      const timestamps = [0];
      let silLen = 0, inSil = false;
      let soundStarted = false;

      for (let f = 0; f < frameCount; f++) {
        if (rms[f] < silenceThreshold) {
          if (soundStarted) {
            silLen++;
            if (silLen === minFrames) inSil = true;
          }
        } else {
          soundStarted = true;
          if (inSil) timestamps.push(Math.round(f * frameSizeMs));
          silLen = 0;
          inSil = false;
        }
      }

      if (timestamps.length !== numChunks) {
        console.warn(
          `[AudioPlayer] analyzeChunkTimings: 검출 ${timestamps.length}개 ≠ 예상 ${numChunks}개 → 균등 분할`
        );
        return fallbackEqual(totalMs);
      }

      return timestamps;

    } catch (err) {
      console.warn('[AudioPlayer] analyzeChunkTimings 실패:', err);
      const totalMs = await getDuration(src, 1200);
      return fallbackEqual(totalMs);
    }
  }

  // 중단 신호 — stopAll() 호출 시 모든 playOnce Promise 즉시 resolve
  let _stopResolvers = new Set();
  let _currentAudio = null;

  function stopAll() {
    // 재생 중인 오디오 즉시 정지
    if (_currentAudio) {
      _currentAudio.pause();
      _currentAudio.currentTime = 0;
      _currentAudio = null;
    }
    // 대기 중인 모든 playOnce Promise 강제 resolve → await 풀림
    _stopResolvers.forEach(resolve => resolve());
    _stopResolvers.clear();
  }

  function playOnce(src, fallbackMs = 700) {
    return new Promise(resolve => {
      // 중단 신호 등록
      _stopResolvers.add(resolve);

      const done = () => {
        _stopResolvers.delete(resolve);
        _currentAudio = null;
        resolve();
      };

      if (!src) { setTimeout(done, fallbackMs); return; }

      const audio = load(src);
      _currentAudio = audio;
      audio.currentTime = 0;
      audio.onended = done;
      audio.onerror = () => setTimeout(done, fallbackMs);
      audio.play().catch(() => setTimeout(done, fallbackMs));
    });
  }

  window.AudioPlayer = { preload, playOnce, getDuration, analyzeChunkTimings, stopAll };
})();