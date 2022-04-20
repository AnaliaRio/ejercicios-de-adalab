"use strict";


// Ahora que conocemos mejor el API de Star Wars vamos a hacer una sencilla web usándolo. En la web aparece una caja de texto donde escribimos el nombre de un personaje (o parte del nombre) y un botón, al hacer click, nuestra web muestra debajo un listado con los personajes que coinciden con la búsqueda indicando su nombre y género.


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

x
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