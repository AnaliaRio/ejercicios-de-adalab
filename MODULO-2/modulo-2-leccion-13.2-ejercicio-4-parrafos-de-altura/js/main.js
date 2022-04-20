"use strict";

// Vamos a crear un div en HTML que contenga tres párrafos con un texto aleatorio. Con la ayuda de JavaScript vamos a obtener su tamaño usando la propiedad offsetHeight. Posteriormente y usando el atributo HTML style vamos a configurar que su altura será un tercio de la actual.

// Constante
const text = document.querySelectorAll(".js-text");

// Bucle
for (const item of text) {
  const fontsize = item.offsetHeight;
  console.log(fontsize);
  item.style.fontSize = `${fontsize / 3}px`;
}