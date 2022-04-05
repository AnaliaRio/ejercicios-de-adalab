"use strict";


// Con method, header y body

//https://awesome-profile-cards.herokuapp.com/card/

const user {
name: "Maria",
lastname: "Ruiz",
};

fetch("https://awesome-profile-cards.herokuapp.com/card/
",{
  method:"POST",
  body: JSON.stringify(user),
  headers: {
    "content-type": "application/json",
  },
})
  .then((response)=> response.json())
  .then((cardData) => console.log(cardData));


  // Con URL

const input = document.querySelector(".character");

let listChar = [];

function handleKey() {

  const character = input.value;

  fetch(`https://swapi.dev/api/people/?search= ${character}`)
    .then((resp) => resp.json())
    .then((data) => {
      listChar = data.results.map((char) => {
        const newChar = {
          hair_color: char.hair_color,
          name: char.name,
        };
        return newChar; 
      });
      console.log(listChar);
    });
}

input.addEventListener("keyup", handleKey);
