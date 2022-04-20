"use strict";

// Vamos a crear nuestro propio autocompletado de formularios. Para ello vamos a crear un formulario con tres campos:

// Nombre
// Apellidos
// Teléfono

// Por otro lado, en JavaScript tendremos un array de 3 objetos con esa estructura. Es decir, un listado 3 objetos, cada uno con nombre apellidos y teléfono. Pediremos a la usuaria que elija uno de esos 3 con un select con el nombre. Al seleccionarlo se rellenará el formulario automáticamente.

// Constantes y variables
const selectName = document.querySelector(".js-select");
const form = document.querySelector(".js-form");
let inputName = document.querySelector(".js-inputName");
let inputSurname = document.querySelector(".js-inputSurname");
let inputTelephone = document.querySelector(".js-inputTelephone");

// Array
const usersList = [
  {
    name: "Analía",
    surname: "Río",
    telephone: "627 846 284",
  },
  {
    name: "Laura",
    surname: "Laseiras",
    telephone: "692 760 389",
  },
  {
    name: "Paula",
    surname: "Mascarín",
    telephone: "639 583 096",
  },
];

// Crear los nombres en "select" a partir del array
for (const item of usersList) {
  const newItem = document.createElement("option");
  const newContent = document.createTextNode(item.name);
  newItem.appendChild(newContent);
  selectName.appendChild(newItem);
}

// Hacer que aparezcan los datos
function handleChange(event) {
  for (const item of usersList) {
    const elementSelected = event.target;
    if (elementSelected.value === item.name) {
      inputName.value = item.name;
      inputSurname.value = item.surname;
      inputTelephone.value = item.telephone;
    }
  }
}

// Escuchar formulario
selectName.addEventListener("change", handleChange);
