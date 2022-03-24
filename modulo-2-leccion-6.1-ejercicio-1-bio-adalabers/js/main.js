"use strict";

// Crea un nuevo objeto en JavaScript adalaber1 que nos sirva para representar (modelar) a una Adalaber. Tenemos estos datos:

// Susana, 34 años, periodista

// Luego muestra en la web una frase como esta, accediendo a los datos del objeto:
// 'Mi nombre es Susana, tengo 34 años y soy periodista'
// Ahora hacemos lo mismo (crear el objeto adalaber2 y mostrar una frase descriptiva) con una nueva Adalaber con estos datos:
// Rocío, 25 años, actriz

const adalaber1 = {
    name: "Susana",
    age: "34",
    job: "periodista",
  };

  const adalaber2 = {
    name: "Rocío",
    age: "25",
    job: "actriz",
  };

  adalaber1.speak = (phrase) => `Mi nombre es ${name}, tengo ${age} años y soy ${job}`;

  console.log(adalaber2.speak(`Mi nombre es ${name}, tengo ${age} años y soy ${job}`));

  // Sale error age is not defined