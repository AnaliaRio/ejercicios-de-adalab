"use strict";

// Crear una página HTML con una lista ul vacía. Vamos a partir de un array con 3 elementos const numbers = [1, 2, 3]. Vamos a añadir a la lista tres elementos li, que corresponden al contenido del array. Usaremos los métodos avanzados para manipular el DOM, no innerHTML.

const numbers = [1, 2, 3];


for (const item of numbers ) {

    // Crear elemento <li>
    const newItem = document.createElement('li');

    // Crear contenido nuevo y guardar en una constante
    const newContent = document.createTextNode(item);

    // Introducir contenido (constante) en el <li> creado
    newItem.appendChild(newContent);

    // Pintar en el HTML añadiendo lo creado
    const list = document.querySelector('.list');
    list.appendChild(newItem);

}



// const numbers = [1, 2, 3];

// for (const item of numbers) {
//   const newItem = document.createElement("li");
//   const newContent = document.createTextNode(item);
//   newItem.appendChild(newContent);
//   const items = document.querySelector(".items");
//   items.appendChild(newItem);
// }
