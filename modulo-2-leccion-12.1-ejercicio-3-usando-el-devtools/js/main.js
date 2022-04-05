"use strict";

// En la página de SWAPI o en la que habéis creado en el ejercicio 2 inspecciona las peticiones que has hecho al servidor. Al abrir la pestaña Network aparece vacía así que comienza a hacer peticiones con la pestaña abierta. Con la información que obtienes de esta pestaña averigua:
// dónde está el método de petición
// el código de la respuesta (recuerda que 200 es OK)
// en las cabeceras de la petición busca una llamada user-agent, ¿qué puedes decir de su contenido?
// la respuesta del servidor en JSON
// al recargar la página aparecen un montón de peticiones en la pestaña Network, ¿sabrías filtrar solo las que son de AJAX? Pista: antes de fetch las peticiones se hacían con el objeto XMLHttpRequest (XHR)

function getPeople() {
  // const input = document.querySelector('.js-input');
  fetch(`https://swapi.py4e.com/api/people/${input.value}`)
    .then((response) => response.json())
    .then((data) => {

      const name = document.querySelector('.js-name');
      const birthYear = document.querySelector('.js-birth');
      const films = document.querySelector('.js-films');

      name.innerHTML = data.name;
      birthYear.innerHTML = data.birth_year;
      films.innerHTML = data.films;


  });
}

function getFilm() {
  // const input = document.querySelector('.js-input');
  fetch(`https://swapi.py4e.com/api/films/${input.value}`)
    .then((response) => response.json())
    .then((data) => {

      const name = document.querySelector('.js-name');
   
      name.innerHTML = data.name;
     
  });
}


const btn = document.querySelector('.js-search');
const input = document.querySelector ('.js-input');
btn.addEventListener('click', getPeople);




// Example response:

// HTTP/1.0 200 OK
// Content-Type: application/json
// {
//     "films": "https://swapi.py4e.com/api/films/",
//     "people": "https://swapi.py4e.com/api/people/",
//     "planets": "https://swapi.py4e.com/api/planets/",
//     "species": "https://swapi.py4e.com/api/species/",
//     "starships": "https://swapi.py4e.com/api/starships/",
//     "vehicles": "https://swapi.py4e.com/api/vehicles/"
// }