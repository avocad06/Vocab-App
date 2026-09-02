/**
 * js/audio-player.js
 */
(function () {
  'use strict';

  const cache = new Map();
  const timingsCache = new Map(); // ★ 타이밍 분석 결과 캐시 (같은 파일 재분석 방지)

  function load(src) {
    if (!src) return null;
    if (cache.has(src)) return cache.get(src);
    const audio = new Audio(src);
    audio.preload = 'auto';
    const acfg = (window.MEDIA_CONFIG && window.MEDIA_CONFIG.audio) || {};
    if (acfg.playbackRate) audio.playbackRate = acfg.playbackRate;
    const pp = acfg.preservesPitch !== false;
    audio.preservesPitch = pp;
    audio.mozPreservesPitch = pp;
    audio.webkitPreservesPitch = pp;
    cache.set(src, audio);
    return audio;
  }

  function preload(src) {
    if (src) load(src);
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
    // ★ 캐시 키: src + numChunks + threshold + minSilence 조합
    const {
      silenceThreshold = 0.015,
      minSilenceMs = 80,
      frameSizeMs = 10,
    } = opts;

    const cacheKey = `${src}|${numChunks}|${silenceThreshold}|${minSilenceMs}`;
    if (timingsCache.has(cacheKey)) return timingsCache.get(cacheKey);

    // ★ speechStartMs: 실제 발화 시작 시점부터 균등 분할 (앞쪽 무음 제거)
    const fallbackEqual = (speechStartMs, speechEndMs) =>
      Array.from({ length: numChunks }, (_, i) =>
        Math.round(speechStartMs + i * (speechEndMs - speechStartMs) / numChunks));

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
      // ★ timestamps[0]을 항상 0으로 고정하지 않고, 실제 첫 발화 시점으로 설정
      //   TTS 파일 앞에 무음이 있으면 0으로 고정할 경우 첫 단어 하이라이트가 너무 빠름
      const timestamps = [];
      let silLen = 0, inSil = false;
      let soundStarted = false;
      let speechStartMs = 0;  // 실제 발화 시작 시각
      let lastSoundFrame = 0;

      for (let f = 0; f < frameCount; f++) {
        if (rms[f] < silenceThreshold) {
          if (soundStarted) {
            silLen++;
            if (silLen === minFrames) inSil = true;
          }
        } else {
          if (!soundStarted) {
            // 첫 소리 감지 → 발화 시작 시점 기록
            soundStarted = true;
            speechStartMs = Math.round(f * frameSizeMs);
            timestamps.push(speechStartMs); // chunk 0: 실제 첫 발화 시각
          }
          lastSoundFrame = f;
          if (inSil) timestamps.push(Math.round(f * frameSizeMs));
          silLen = 0;
          inSil = false;
        }
      }

      // ★ 뒤쪽 무음 제거
      const speechEndMs = soundStarted
        ? Math.round((lastSoundFrame + 1) * frameSizeMs)
        : totalMs;

      if (timestamps.length !== numChunks) {
        console.warn(
          `[AudioPlayer] analyzeChunkTimings: 검출 ${timestamps.length}개 ≠ 예상 ${numChunks}개 → 균등 분할 (발화 ${speechStartMs}ms~${speechEndMs}ms / 전체 ${totalMs}ms)`
        );
        const result = fallbackEqual(speechStartMs, speechEndMs);
        timingsCache.set(cacheKey, result);
        return result;
      }

      timingsCache.set(cacheKey, timestamps);
      return timestamps;

    } catch (err) {
      console.warn('[AudioPlayer] analyzeChunkTimings 실패:', err);
      const totalMs = await getDuration(src, 1200);
      // ★ fetch 실패(CORS·네트워크) 시: TTS 뒤쪽 무음을 15% 제거 추정하여 균등 분할
      //   speechEndMs를 구할 수 없으므로 totalMs * 0.85 를 근사치로 사용
      // fetch 실패 시 앞 무음 5%, 뒤 무음 10% 추정
      const estimatedStartMs = Math.round(totalMs * 0.05);
      const estimatedEndMs = Math.round(totalMs * 0.90);
      const result = fallbackEqual(estimatedStartMs, estimatedEndMs);
      timingsCache.set(cacheKey, result);
      return result;
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
    // ★ Fix 2: 실제 재생 시작 시각을 외부에 노출 (하이라이트 싱크용)
    let resolveStart;
    const startedAt = new Promise(r => { resolveStart = r; });

    const mainPromise = new Promise(resolve => {
      // 중단 신호 등록
      _stopResolvers.add(resolve);

      const done = () => {
        _stopResolvers.delete(resolve);
        _currentAudio = null;
        resolve();
      };

      if (!src) {
        resolveStart(performance.now());
        setTimeout(done, fallbackMs);
        return;
      }

      const audio = load(src);
      _currentAudio = audio;

      // ★ Fix 1: 매 재생마다 playbackRate 재적용 (캐시된 오디오 속도 일관성 보장)
      const acfg = (window.MEDIA_CONFIG && window.MEDIA_CONFIG.audio) || {};
      if (acfg.playbackRate) audio.playbackRate = acfg.playbackRate;

      audio.currentTime = 0;
      audio.onended = done;
      audio.onerror = () => {
        resolveStart(performance.now());
        setTimeout(done, fallbackMs);
      };

      // ★ Fix 2: 'playing' 이벤트 발생 시각을 기준으로 싱크 타이머 시작
      const onPlaying = () => {
        audio.removeEventListener('playing', onPlaying);
        resolveStart(performance.now());
      };
      audio.addEventListener('playing', onPlaying);

      audio.play().catch(() => {
        audio.removeEventListener('playing', onPlaying);
        resolveStart(performance.now());
        setTimeout(done, fallbackMs);
      });
    });

    // startedAt을 Promise 속성으로 첨부하여 readWithHighlight에서 참조 가능하게 함
    mainPromise.startedAt = startedAt;
    return mainPromise;
  }

  window.AudioPlayer = { preload, playOnce, getDuration, analyzeChunkTimings, stopAll };
})();