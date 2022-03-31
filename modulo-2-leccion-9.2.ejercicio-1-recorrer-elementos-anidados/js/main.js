"use strict";

// Imaginemos que tenemos un horario de clase declarados en arrays anidados y queremos pintar en consola cada una de las clases que tenemos a lo largo de la semana:

const schedule = [
  ["Kahoot", "Pair programming"],
  ["Kahoot", "Project"],
  ["Pair programming", "Kahoot"],
  ["Agile", "Interviews"],
  ["Project", "Beers"],
];

for (let day = 0; day < schedule.length; day += 1) {
  for (let hour = 0; hour < schedule[day].length; hour += 1) {
    console.log(`On day ${day} at hour ${hour} we have ${schedule[day][hour]}`);
  }
}

// Ejecuta este código en la consola de Chrome y explica cómo funciona.