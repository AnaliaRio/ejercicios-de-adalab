"use strict";


// 1 - MANIPULAR EL DOM - .parentElement

const item1 = document.querySelector(".item--1");
console.log(item1); // Devuelve una representación del elemento como HTML
console.dir(item1); // Devuelve una representación del elemento como objeto

const mother = item1.parentElement;

console.log(
  `La madre de nuestro elemento es un <${mother.nodeName.toLowerCase()}> y tiene la clase .${mother.className}.`
);
// Devuelve "La madre de nuestro elemento es un <ul> y tiene la clase .items"


// 2 - CREAR ELEMENTOS

// Creamos un elemento nuevo, un <li>
const newItem = document.createElement("li");
console.log(newItem); // Devuelve "<li></li>"

// Ahora creamos algo de contenido
const newContent = document.createTextNode("Item nuevo");

// Y se lo añadimos a nuestro <li>
newItem.appendChild(newContent);
console.log(newItem); // Devuelve "<li>Item nuevo</li>"


// 3 - AÑADIR ELEMENTOS AL DOM

// const newItem = document.createElement("li");
// const newContent = document.createTextNode("Item nuevo");
newItem.appendChild(newContent);

const items = document.querySelector(".items");
items.appendChild(newItem);


// 4 - BORRAR ELEMENTOS

const itemList = document.querySelector(".items");
const item2 = itemList.querySelector(".item--2");
itemList.removeChild(item2);
// Elimina el elemento con clase .item--2 que es descendiente de .items