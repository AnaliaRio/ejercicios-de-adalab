'use strict';

// Seleccionar elementos HTML definiendo las constantes
const saludo = document.querySelector(".js-saludo");
const despedida = document.querySelector(".js-despedida");

// Declarar/Definir función
function saludar (nombre){
return `<li> ${nombre} </li>`;
};

// Listener / Ejecución de funciones / Pintar en HTML
saludo.innerHTML += saludar("Dayana");
saludo.innerHTML += saludar("Yanelis");

// 
// 1. Guardar función en una constante tipo arrow
const paintConsole = (age) => {
    if (age >18){
        console.log("Bienevenido a mi web.")
    } else {
        console.log("Debes esperar unos añitos.");
    }
}

paintConsole(20);
paint