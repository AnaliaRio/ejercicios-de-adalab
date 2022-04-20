"use strict";

console.log('holaa');
let info = {};

fetch('https://dog.ceo/api/breeds/image/random')
  .then((response)=> response.json())
  .then((dogData) => console.log(dogData));



// *************************** //

// Otra forma de realizar el mismo procedimiento

function jsonFormatter(response) {
  return response.json();
}

function paintHTML() {
  const img = document.querySelector(".js-dog");
  img.src = info.message;
}

fetch("https://dog.ceo/api/breeds/image/random")
  .then((jsonFormatter)
  .then((dogData) => {
    console.log(dogData);
    info = dogData;
    paintHTML();
    console.log("El servidor me ha dado respuesta");
  });


console.log(info);
console.log("última línea de código");