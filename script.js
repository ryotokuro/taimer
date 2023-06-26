'use strict';

const time = document.querySelector("#time");
const startButton = document.querySelector("#start");

function countdown() {
  let duration = Math.round(time.innerHTML)*60;

  setInterval(
    (function (self) {
      return function () { tick.call(self); };
    })(this), 1000
  );

  function tick() {
    if (duration >= 0) {
      let minutes = Math.floor(duration / 60);
      let seconds = duration - (minutes * 60);
      duration -= 1;
      time.innerHTML = minutes + 'm ' + seconds + 's';
    }
  }

  // First tick.
  tick.call(this);
};

startButton.addEventListener("click", countdown);