"use strict";

// Vamos a modificar nuestra soluciรณn del ejercicio 2. Contador de Uvas para que, en lugar de seguir ejecutando la funciรณn indefinidamente, detengamos su ejecuciรณn con clearInterval.

let counter = 0;
let temp;
const time = document.querySelector('.time');
const grapes = document.querySelector('.grapes');


const grapeCounter = () => {
  counter++;
  time.innerHTML = counter;

  if(counter >= 12){
    clearInterval(temp);
    grapes.innerHTML = '';
  }

  if(counter === 1){
    grapes.innerHTML = '๐';
  }

  if(counter === 2){
    grapes.innerHTML = '๐ ๐';
  }

  if(counter === 3){
    grapes.innerHTML = '๐ ๐ ๐';
  }

  if(counter === 4){
    grapes.innerHTML = '๐ ๐ ๐ ๐';
  }

  if(counter === 5){
    grapes.innerHTML = '๐ ๐ ๐ ๐ ๐';
  }

  if(counter === 6){
    grapes.innerHTML = '๐ ๐ ๐ ๐ ๐ ๐';
  }

  if(counter === 7){
    grapes.innerHTML = '๐ ๐ ๐ ๐ ๐ ๐ ๐';
  }

  if(counter === 8){
    grapes.innerHTML = '๐ ๐ ๐ ๐ ๐ ๐ ๐ ๐';
  }

  if(counter === 9){
    grapes.innerHTML = '๐ ๐ ๐ ๐ ๐ ๐ ๐ ๐ ๐';
  }

  if(counter === 10){
    grapes.innerHTML = '๐ ๐ ๐ ๐ ๐ ๐ ๐ ๐ ๐ ๐';
  }

  if(counter === 11){
    grapes.innerHTML = '๐ ๐ ๐ ๐ ๐ ๐ ๐ ๐ ๐ ๐ ๐';
  }

  if(counter === 12){
    grapes.innerHTML = '๐ ๐ ๐ ๐ ๐ ๐ ๐ ๐ ๐ ๐ ๐ ๐';
  }
  
}

temp = setInterval(grapeCounter, 1000);