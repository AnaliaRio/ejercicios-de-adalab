"use strict";

// Vamos a explorar un API abierto de información sobre el mundo Star Wars. En esta página tenemos la documentación completa del API y un formulario que nos permite hacer peticiones a la URL que indiquemos. Identifica la siguiente información sobre SWAPI:

// la URL base del API
// si necesita autenticación
// método HTTP que deben usar las peticiones a este API
// URL para acceder a la info del personaje "Luke Skywalker"
// URL para acceder a la info de la película "A New Hope"
// a qué otros recursos puedo acceder desde el API además de personajes y pelis
// URL para acceder al listado de personajes, ¿está paginada?
// cómo puedo buscar personajes mediante la URL
// cómo puedo hacer que el JSON de una petición se me devuelva traducido a Wookiee

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