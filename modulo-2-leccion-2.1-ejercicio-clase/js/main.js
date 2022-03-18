"use strict";

// CONSTANTE DE ID
const subTitle = document.querySelector("#subTitle");

// CONSTANTE DE CLASE
const titleElement = document.querySelector(".js-title");
const pElement = document.querySelector(".p");

// CAMBIAR CONTENIDO HTML - .inner.HTML
titleElement.innerHTML = "Titulo 1 - Lección 1 introducción";

// CONCATENACIÓN
subTitle.innerHTML = subTitle.innerHTML + " Variables"

// CONCATENACIÓN - VARIANTE
// subTitle.innerHTML += "variable";
pElement.innerHTML += " Prom";
// El += significa que quieres qus subTitle.innerHTML sea igual a lo que ya es más lo que escribes.


// ASIGNAR CLASES DE CSS A TRAVÉS DE JS
titleElement.classList.add("red");
subTitle.classList.add("pink");
pElement.classList.add("coral");


// Sumatorio
const num1 = 50;
let num2 = 20;
num2 = 15;

// Seleccionar párrafo result
const result = document.querySelector(".result");

// Indicar su contenido
result.innerHTML = num1 + num2;





// Javascript es mucho más permisivo que HTML y CSS, pero no poner punto y coma (;) al final no es una buena práctica

// En JS es mucho más importante que en HTML tener abierta la consola del DevTools

