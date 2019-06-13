window.addEventListener('keydown', playing);

function playing(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`[data-key="${e.keyCode}"]`);
  const sound_span = document.querySelector(`[data-key="${e.keyCode}"] .sound`);

  if (!audio) return;

  audio.currentTime = 0;
  audio.play();

  key.classList.add('playing');
  sound_span.classList.add('sound-playing');
}

function removeTransition(className) {
  const curKey = this;
  curKey.classList.remove(className);
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition.bind(key, 'playing')));
