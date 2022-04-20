"use strict";

// Para ver la diferencia del uso de callbacks y promesas (verás que con promesas el código es mucho más simple y legible), te dejo explorar el primer ejemplo que vimos usando XMLHttpRequest en este código:

let request;

function showPicture() {
  const response = JSON.parse(request.responseText).result;
  document.querySelector('.js-result').innerHTML = response;
}

function sendRequest() {
  request = new XMLHttpRequest();
  request.open(
    'GET',
    'https://api.rand.fun/games/rockpaperscissorslizardspock'
  );
  request.addEventListener('load', showPicture);
  request.send();
}

document.querySelector('.js-emoji').addEventListener('click', sendRequest);