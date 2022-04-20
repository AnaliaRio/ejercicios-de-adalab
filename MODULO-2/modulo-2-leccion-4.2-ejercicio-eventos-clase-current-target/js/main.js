"use strict";

// En este ejercicio usamos función de evitar cosas por defecto con event.preventDefault();

// Traer elementos del HTML
const form = document.querySelector(".js-form")

// Escuchar con add event listener y sus dos parámetros (evento + función):
// 1. Evento entre comillas
// 2. Función ()=>{}
form.addEventListener("change", (event)=>{
  console.log(event.currentTarget);
  console.log(event.target);
event.preventDefault();
})

// Otra forma con const button en lugar de con const form
const button = document.querySelector(".js-submit");

button.addEventListener("click", (event)=>{
  event.preventDefault();
})