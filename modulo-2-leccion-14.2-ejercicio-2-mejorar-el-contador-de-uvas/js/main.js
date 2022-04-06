"use strict";

// Vamos a modificar nuestra solución del ejercicio 2. Contador de Uvas para que, en lugar de seguir ejecutando la función indefinidamente, detengamos su ejecución con clearInterval.

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
    grapes.innerHTML = '🍇';
  }

  if(counter === 2){
    grapes.innerHTML = '🍇 🍇';
  }

  if(counter === 3){
    grapes.innerHTML = '🍇 🍇 🍇';
  }

  if(counter === 4){
    grapes.innerHTML = '🍇 🍇 🍇 🍇';
  }

  if(counter === 5){
    grapes.innerHTML = '🍇 🍇 🍇 🍇 🍇';
  }

  if(counter === 6){
    grapes.innerHTML = '🍇 🍇 🍇 🍇 🍇 🍇';
  }

  if(counter === 7){
    grapes.innerHTML = '🍇 🍇 🍇 🍇 🍇 🍇 🍇';
  }

  if(counter === 8){
    grapes.innerHTML = '🍇 🍇 🍇 🍇 🍇 🍇 🍇 🍇';
  }

  if(counter === 9){
    grapes.innerHTML = '🍇 🍇 🍇 🍇 🍇 🍇 🍇 🍇 🍇';
  }

  if(counter === 10){
    grapes.innerHTML = '🍇 🍇 🍇 🍇 🍇 🍇 🍇 🍇 🍇 🍇';
  }

  if(counter === 11){
    grapes.innerHTML = '🍇 🍇 🍇 🍇 🍇 🍇 🍇 🍇 🍇 🍇 🍇';
  }

  if(counter === 12){
    grapes.innerHTML = '🍇 🍇 🍇 🍇 🍇 🍇 🍇 🍇 🍇 🍇 🍇 🍇';
  }
  
}

temp = setInterval(grapeCounter, 1000);