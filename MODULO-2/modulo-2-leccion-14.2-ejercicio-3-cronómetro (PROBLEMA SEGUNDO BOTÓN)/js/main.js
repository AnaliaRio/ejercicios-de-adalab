"use strict";

// Crear un cronómetro que vaya aumentando en segundos y cuando se pulse el botón de parar deje de aumentar. Cuando pulsemos el de continuar, vuelva a empezar de nuevo.


let counter = 0;
let temp;

const time = document.querySelector('.time');
const pauseBtn = document.querySelector('.btn1');
const resumeBtn = document.querySelector('.btn2');

const chronometer = () => {
  counter++;
  time.innerHTML = counter;
};

temp = setInterval(chronometer, 1000);


function stop() {
    clearInterval(temp);
}

function restart () {
    let counter = 0;
    clearTimeout(temp);
    temp = setInterval(chronometer, 1000);
}

pauseBtn.addEventListener("click", stop);
resumeBtn.addEventListener("click", restart);