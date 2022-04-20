"use strict";

// Crear una página con un input de texto y un párrafo vacío. Cada vez que la usuaria escriba una letra tenemos que recoger el valor del input al que le pusimos el listener y escribirlo en el párrafo.

// Nota: el objetivo es hacerlo utilizando event.currentTarget.

const input = document.querySelector(".input");
const p = document.querySelector(".p");

input.addEventListener("click", ()=>{
  console.log(event.currentTarget); //Función
}));