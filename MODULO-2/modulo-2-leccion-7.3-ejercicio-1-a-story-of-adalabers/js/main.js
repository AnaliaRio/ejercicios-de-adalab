"use strict";

// Estamos en una clase de Adalab, y queremos conocer algunas estadísticas sobre las adalabers de esa clase. Estos son sus datos:

// María, 29 años, diseñadora
// Lucía, 31 años, ingeniera química
// Susana, 34 años, periodista
// Rocío, 25 años, actriz
// Inmaculada, 21 años, diseñadora

// En primer lugar, vamos a crear una estructura de datos en JavaScript para manejar estos datos. Usaremos arrays y objetos para crearla.
const adalaber = [
    {
      name: "María",
      age: 29,
      job: "Diseñadora",
    },
    {
      name: "Lucía",
      age: 31,
      job: "Ingeniera química",
    },
    {
      name: "Susana",
      age: 34,
      job: "Periodista",
    },
    {
      name: "Rocío",
      age: 25,
      job: "Actriz",
    },
    {
      name: "Inmaculada",
      age: 21,
      job: "Diseñadora",
    },
];

// Después, vamos a crear varias funciones en JavaScript que nos permitan calcular de forma automática estadísticas sobre las adalabers. Todas ellas toman como parámetro un listado de adalabers similar a nuestra estructura de datos anterior.
// Una función countAdalabers que devuelve el número de adalabers en el listado.
const adalaberLength = adalaber.length;

function countAdalabers () {
    return adalaberLength;
    console.log(adalaber.length);
  }

// Una función averageAge que devuelve la media de edad de listado.
function averageAge() {
  let suma = 0;
  for (const item of adalaber) {
    suma+= item.age;
  }
  return suma/adalaber.length;
}


// Una función theYoungest que devuelve el nombre de la adalaber más joven.
// function theYoungest

// Una función countDesigners que devuelve el número de adalabers que son diseñadoras.
// Contador
function countDesigners() {
  let count = 0;
  for (const item of adalaber) {
    if(item.job === "Diseñadora") {
      // count = count+1;
      // count +=1;
      count ++;
    }
  }
  // return count++;
}

// Según vayáis creando las funciones, debéis ir probando que funcionan invocándolas con nuestra estrucutra de datos como argumento. Al final, modificad la estructura de datos para añadir, modificar o quitar adalabers. Y probad que las funciones siguen devolviendo el valor correcto.



  
