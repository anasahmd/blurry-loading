const loadText = document.querySelector('.loading-text');
const bg = document.querySelector('.bg');
const eidm = document.querySelector('.eidm');

let load = 0;

let int = setInterval(blur, 35);

function blur() {
  load++;
  if (load > 99) {
    clearInterval(int);
  }
  loadText.innerText = `${load}%`;
  loadText.style.opacity = scale(load, 0, 100, 1, 0);
  bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`;
  eidm.style.opacity = scale(load, 100, 0, 1, -2);
}

function scale(number, inMin, inMax, outMin, outMax) {
  return ((number - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
}
