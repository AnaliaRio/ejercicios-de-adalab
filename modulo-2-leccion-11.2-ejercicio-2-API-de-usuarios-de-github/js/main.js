"use strict";

// Ahora vamos a explorar un nuevo API: el API de usuarios de GitHub. La URL de este API es https://api.github.com/users/{username}, donde {username} es el nombre del usuario en GitHub. Por ejemplo, aquí tenéis la URL para obtener información del usuario de Isra https://api.github.com/users/gootyfer. Si ponéis esta URL en una nueva pestaña del navegador podréis observar qué datos nos devuelve el API.
// Vamos a crear una página en la que haya un input de texto y un botón de buscar. El usuario escribirá en el input un nombre de usuario de GitHub. Prepararemos una función que se ejecute cuando se pulse el botón buscar y que contenga una petición al API para obtener información de ese usuario y así mostrarla en nuestra página:
// nombre
// número de repositorios
// avatar (imagen)

function getGithubInfo() {
  // const input = document.querySelector('.js-input');
  fetch(`https://api.github.com/users/${input.value}`)
    .then((response) => response.json())
    .then((data) => {

      const name = document.querySelector('.js-name');
      const repoNo = document.querySelector('.js-repono');
      const img = document.querySelector('.js-img');

      name.innerHTML = data.login;
      repoNo.innerHTML = data.public_repos;
      img.src = data.avatar_url;
      img.alt = 'GitHub User'
  });
}

const btn = document.querySelector('.js-search');
const input = document.querySelector ('.js-input');
btn.addEventListener('click', getGithubInfo);
