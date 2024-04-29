let currentSource = null;
let isPlaying = false;

const playAudio = async (url, pitch = 1.0) => {
  const audioContext = new AudioContext();
  
  const response = await fetch(url);
  const arrayBuffer = await response.arrayBuffer();
  const audioBuffer = await audioContext.decodeAudioData(arrayBuffer);

  const playSound = () => {
    if (!isPlaying) return;

    if (currentSource) {
      currentSource.stop();
      currentSource.disconnect();
    }

    const source = audioContext.createBufferSource();
    source.buffer = audioBuffer;
    source.playbackRate.value = pitch;
    source.connect(audioContext.destination);

    source.onended = playSound;
    currentSource = source;
    source.start();
  };

  isPlaying = true;
  playSound();
}

const stopAudio = () => {
  isPlaying = false;
  if (currentSource) {
    currentSource.stop();
    currentSource.disconnect();
    currentSource = null;
  }
};

export { playAudio, stopAudio };
