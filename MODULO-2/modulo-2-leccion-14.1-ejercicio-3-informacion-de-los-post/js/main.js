"use strict";


// Vamos a realizar el típico mensaje que aparece en un blog con la información de hace cuanto se escribió un post. Por ejemplo, con el texto: "escrito hace 30 segundos". Al principio escribiremos en pantalla "escrito hace 1 segundo" e iremos aumentando el número de segundos. Cuando lleve más de 59 segundos queremos que ponga "escrito hace 1 min".

let counter = 0;
const time = document.querySelector(".time");
const msg = document.querySelector(".msg");

const incrementAndShowCounter = () => {
  counter++;
  time.innerHTML = counter;

  if (counter === 1) {
    msg.innerHTML = `Mensaje escrito hace ${counter} segundo ⏱ 👀`;
  }

  else if (counter > 1 && counter < 60) {
    msg.innerHTML = `Mensaje escrito hace ${counter} segundos ⏱ 👀`;
  }

  else if (counter >= 60) {
    msg.innerHTML = "Mensaje escrito hace 1 min ⏱ 👀";
  }
  
};

setInterval(incrementAndShowCounter, 1000);
