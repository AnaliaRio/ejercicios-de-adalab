"use strict";

const list = document.querySelector(".js-list");

function paintHTML(data) {
  for (const item of data) {
    const li = `<li>Nombre: ${data.name}</li>`
    list.innerHTML += li;
  }

}


fetch("https://swapi.py4e.com/api/people/") // Petición
  .then(response => response.json()) //Convertir petición en JSON
  .then(data=>{ //Guardar petición en una variable
    console.log(data.results);
    paintHTML(data.results);

  });







// Parámetros FETCH - URL y .then