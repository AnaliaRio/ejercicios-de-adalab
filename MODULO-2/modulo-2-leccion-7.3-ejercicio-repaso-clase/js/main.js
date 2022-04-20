"use strict";

const userData = {
  email: "info@email.com",
  password: "mi-contraseña-super-secreta",
};

// 1. Get elements from HTML
// 2. Render info

// FORMA 1

// const email = document.querySelector(".js-email");
// const password = document.querySelector(".js-password");

// Asignar valor llamando al objeto y al atributo
// email.value = userData.email;
// password.value = userData.password;


// FORMA 2

for (const item in userData) {
 const inputElement = document.querySelector(`.js-${item}`);
 inputElement.value = userData.password;
}