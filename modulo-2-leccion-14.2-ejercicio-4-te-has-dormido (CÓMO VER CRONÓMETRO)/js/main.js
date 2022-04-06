"use strict";

// Crear una página con un botón que transcurridos 10 segundos te pregunte: "¿te has dormido?". Si pulsas en el botón la cuenta volverá a cero y otra vez, si transcurren 10 segundos sin pulsar volverá a preguntar de nuevo "¿te has dormido?"

let timer;
const time = document.querySelector(".time");
const msg = document.querySelector(".msg");
const btn = document.querySelector(".js-btn");

function handleClick() {
  msg.innerHTML = "";
  clearTimeout(timer);
  setTimeout(message, 10000);
}

const message = () => {
  msg.innerHTML = "¿Te has dormido? 🤔";
};

btn.addEventListener("click", handleClick);

timer = setTimeout(message, 10000);
