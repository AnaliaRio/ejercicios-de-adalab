"use strict";

// 1. Constante global
const listInput = document.querySelector(".js-input"); //Esto es un array
const btn = document.querySelector(".js-btn");
let user = {};

// 2. Función que se usa en el bucle de más adelante
const handleInput = () => {
  const idInput = event.currentTarget.id;
  user[idInput] = event.currentTarget.value;
  console.log(user);
};

//3. No puedo escuchar eventos sobre un array, entonces para escuchar el keyup, hay que hacer una ITERACIÓN o BUCLE
for(const input of listInput) {
    input.addEventListener("keyup",handleInput)
}

function handleBtn () {
  event.preventDefault();
  localStorage.setItem("datauser", JSON.stringify(user));
}

btn.addEventListener("click", handleBtn);

const dataLocal = localStorage.getItem("datauser");
if (dataLocal !== null) {
  user = JSON.parse(dataLocal);
}
console.log(user);