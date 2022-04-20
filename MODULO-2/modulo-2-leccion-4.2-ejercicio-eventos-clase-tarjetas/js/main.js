"use strict";

// Al escribir nombre y rellenar apellido y haga click en botón de rellenar se va a rellenar la tarjetita.

// Traer elementos del HTML
const inputName = document.querySelector(".js-name");
const inputLastName = document.querySelector(".js-lastName");
const button = document.querySelector(".js-button");
const result = document.querySelector(".js-result");

// Escuchar al botón con add event listener

// Add event recibe siempre dos valores
// 1. Evento que quiero escuchar ENTRE COMILLAS
// 2. Función callback - Bloque de código que ejecuta cuando ocurra el evento. Se escribe ()=>{}

button.addEventListener("click", ()=>{
  const name = inputName.value;
  const lastName = inputName.value;
  result.innerHTML = name + lastName;
  // result.innerHTML= inputName.value + inputLastName.value; - otra forma sin const
})

// Variables para recoger valor del input NO van fuera del add event listener. No se recoge fuera porque se guarda cuando se carga la página y no cuando sucede le evento

// Escuchar cuando suelta la tecla (keyup)

const title = document.querySelector(".js-title");

inputName.addEventListener("keyup", ()=> {
// document.querySelector(".js-title").innerHTML = inputName.value;
title.innerHTML = inputName.value;
})
// La línea comentada dentro del evento es otra forma de hacerlo sin crear cons title

inputLastName.addEventListener("keyup", ()=> {
  document.querySelector(".js-last").innerHTML = inputName.value;
  })