"use strict";

/*

Crea una página que contenga tres imágenes, usando un select de formulario pregúntale a la usuaria qué ciudad quiere visitar.

Si la usuaria elige Madrid, haz que en cada imagen se muestre una foto de Madrid.

Haz lo mismo para París y Nueva York.

Nota: Usa imágenes que encuentres por Internet.

*/


const select = document.querySelector(".js-select");
const option = document.querySelector(".js-option");
const image = document.querySelectorAll(".js-img");


function showPic (event) {
    const elementSelected = event.target;
    if (elementSelected.value === "value1") {
      console.log("He elegido madrid");
      for (const item of image) {
        item.src =
          "https://ep01.epimg.net/elpais/imagenes/2022/02/17/paco_nadal/1645081988_020619_1645083193_noticia_normal.jpg";
      }
    } else if (elementSelected.value === "value2") {
      console.log("He elegido París");
      for (const item of image) {
        item.src =
          "https://media.tacdn.com/media/attractions-splice-spp-674x446/07/03/1c/9c.jpg";
      }
    } else if (elementSelected.value === "value3") {
      console.log("He elegido Nueva York");
      for (const item of image) {
        item.src =
          "https://mindfultravelbysara.com/wp-content/uploads/2015/05/nueva-york-imprescindibl.jpg";
      }
    }
}

select.addEventListener("change", showPic);


