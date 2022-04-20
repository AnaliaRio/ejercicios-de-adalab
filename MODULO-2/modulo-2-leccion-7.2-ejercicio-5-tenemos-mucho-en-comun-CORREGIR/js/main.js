"use strict";

// Usando for...of vamos a hacer un pequeño programa que le pregunte a la usuaria cuáles son sus dos películas o libros favoritos mediante un formulario. Cuando pulse el botón enviar guardaremos la información en un array, lo recorreremos y mostraremos este mensaje por cada obra: "¡A mí también me encantó "OBRA"! Tenemos mucho en común, humana.", donde OBRA será el nombre de la obra.

// 1. Traer elementos del HTML declarando constantes
const button = document.querySelector(".js-button");
const inputList = document.querySelectorAll(".js-input");
const message = document.querySelector(".js_message");

// 2. Declarar funciones
function handleClick(event) {
    event.preventDefault();
    console.log(inputList.value);

    // Bucle for of para recorrer el listado
    for (const inputItem of inputList) {
        console.log(inputItem.value);
    }
    message.innerHTML += `¡A mí también me encantó ${inputItem.value}! Tenemos mucho en común, humana.`;
}

// 3. Escuchar al botón
button.addEventListener("click", handleClick);






// querySelectorAll SIEMPRE devuelve un array

