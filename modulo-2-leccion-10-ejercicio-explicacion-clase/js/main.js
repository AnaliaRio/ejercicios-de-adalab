"use strict";

const adalabers = [

    {
      name: 'julia',
      city: 'madrid',
      address: {country: 'España', zp: 2080,},
    },

    {
      name: 'marina',
      city: 'murcia',
      address: {country: 'EEUU', zp: 1000,},
    },

    {
      name: 'marcela',
      city: 'barcelona',
      address: {country: 'Italia', zp: 4500,},
    },

];
  
//   MAP - Crear array nuevo que contenga solo nombre y ciudad

// Crear nueva variable
  const newAdalabers = adalabers.map( i => {
    const newAda = {  // Crear objeto nuevo
        name: i.name,
        city: i.city,
        // country: ada.address.country,
    };
    return newAda; // Retornar ese objeto
});
  
// Cuando se tienen las llaves dentro de la función, hay que poner un return
console.log(newAdalabers);
  
  
// MAP - Sumar IVA

const number = [1,2,3,4,5];
const newNumber = number.map (n => n*1.21);
console.log(newNumber);
// No se ponen llaves en la función porque el cuerpo solo tiene una línea de código. Cuando no pones llaves, NO pones return
  
// FILTER - Devolver solo objetos del array (adalbers) que vivan en Barcelona y se llamen de tal forma

const inputCity = "Barcelona";
// Usar to lower case para que valgan con inicial mayúscula y minúscula
const nameInput = "marcela";

const filteredData = adalabers
.filter((i) => i.city.toLowerCase() === inputCity.toLowerCase())
.filter((i) => i.name === nameInput)
;

console.log(filteredData);

// Funcionamiento de FILTER

// Recorre el array con un FOR

const filteredDataFor = [];

for (const i of adalabers) {
if (i.city.toLowerCase() === inputCity.toLowerCase()) {
        filteredDataFor.push(i);
    }
}

console.log(filteredDataFor);

// FIND INDEX - Busca posicionamiento (index) de un elemento

const personIndex = adalabers.findIndex(i => i.name === "julia".toLowerCase);

console.log(personIndex);

// FIND - Devuelve CONTENIDO de TODO el elemento del array que cumpla con esa condición
 
const findAdalaber = adalabers.find(i => i.address.zp === 1000);

console.log(findAdalaber);


// FILTRAR en vivo y en directo. A medida que escribes se reduce la lista.

// Quiero saber si cada vez que pulso una tecla, hay adalabers cuyo nombre empieze por esa letra. Tareas:

// 1. Seleccionamos el input del HTML
const inputElement = document.querySelector(".js-name");
const ulElement = document.querySelector(".js-list");

// 2. Definir funciones

// Función para pintar listado en HTML.
// Esta función la vamos a ejecutar dentro de la función handleInput
function paintList () {
    for(const li of list) {
        ulElement += `<li>${li.name}</li>`
    }
}

function handleInput() {

    // Variable local - inputValue
    const inputValue = inputElement.value;

    // Variable global - adalabers (array que filtramos)
    const filteredList = adalabers.filter(i =>
        i.name.toLocaleLowerCase().includes(inputValue)
    );

    paintList(filteredList);

};

// 3. Escuchar la acción de la usuaria al escribir
inputElement.addEventListener("keyup", handleInput);

// 4. Recoger los datos que me ha dado la usuaria
// Como hay que recogerlos cuando ocurra el evento de escribir dentro del input, este paso se hace DENTRO de la función handleInput (paso 2):
    // const inputValue = elementInput.value;

    // Es una variable LOCAL

// 5. Comparar con la lista (filter)

// 6. Pintar la respuesta en el HTML



// Variable local - Solo existe dentro de función
// Variable global - Existe dentro y fuera de función (para todo el mundo)