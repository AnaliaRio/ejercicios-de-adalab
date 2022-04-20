"use strict";

// Seleccionar elemento de HTML con Query Selector y asignar constante
const list = document.querySelector(".js-list");

let age = document.querySelector(".js-age").value;
let ageValue = parseInt(age);

// Crear constantes con elementos que se quieren añadir y el precio
const item1= "cebollas"
const price1 = "1.5"
const item2 = "aguacates"
const price2 = "5";
const item3 = "champiñones";
const price3 = 2;


// OPCIÓN 1. Añadir elementos lista compra con JS - INTERPOLACIÓN y CONCATENACIÓN
list.innerHTML += `<li>${item1} <span> ${price1} </span> </li>`;
list.innerHTML += `<li>${item2} <span> ${price2} </span> </li>`;
list.innerHTML += `<li>${item3} <span> ${price3} </span> </li>`;

// Por qué el +=
// Sigfinica "lo que yo ya tengo, más lo nuevo".
// Si no se usa, el contenido se sobreescribe.


// OPCIÓN 2. Crear variable HTML donde se guarda todo el contenido

// Primero se crea una variable string vacía
let html = "";

// Luego se asignan los tres valores a html
html += ${item1};
html += ${item2};
html += ${item3};

// Luego se añaden los tres elementos juntos
list.innerHTML = html;


// SUMAR PRECIO TOTAL

const total = price1 + price2 + price3;

console.log(total);

// No funciona porque "1.5" (price1) y "5" (price2) están entre comillas y lo interpreta como un string, así que lo concatena. Usar typeof para comprobar que es un string.

// Usar parseInt para convertir a número un string
const total = parseFloat(price1) + parseInt (price2) + price3;
console.log(total);

// Calcular IVA
cont iva = total * 0.21;
console.log(iva);

list.innerHTML += `<li>Total: ${total} IVA: ${iva} Total a pagar: ${total+iva}</li>`;



// Imágenes

document.querySelector(.'js-img').src = 'urlimagen';