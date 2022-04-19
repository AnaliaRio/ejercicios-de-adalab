'use strict';
// selecciono el elemento del HTML donde voy a pintar todas las paletas
const palettesContainer = document.querySelector(".js-list-palettes"); 
//variable global de las paletas y los favoritos
let palettes = [];
let favorites = [];

// filter
const filterInput = document.querySelector('.js-input');

function handleFilter(event) {
  event.preventDefault(); 
  const filterValue = filterInput.value; 
  //arrays: filter
  const listFiltered = palettes.filter(palette =>{
    return palette.name.toLowerCase().includes(filterValue.toLowerCase()); 
  }); 
  paintPalettes(listFiltered); }
//escuchamos evento sobre el input sobre el que vamos a filtrar
filterInput.addEventListener('keyup', handleFilter);

// está función comprueba si la paleta clickada está dentro de favoritos
function handlePalette(ev) {
  // obtengo el id de la paleta clickada
  const selectedPalette = ev.currentTarget.id;
  // busco la paleta clickada en el array de paletas
  const objetClicked = palettes.find((palette) => {
    return palette.id === selectedPalette;
  });
  // busco si la paleta clickada está en el array de favoritos
  const favoritesFound = favorites.findIndex((fav) => {
    return fav.id === selectedPalette;
  });
  // si la paleta no está en favoritos findIndex me ha devuelto -1
  if (favoritesFound === -1) {
    // añado al array de favoritos
    favorites.push(objetClicked);
  } else {
    // si el findIndex me ha devuelto un número mayor o igual a 0 es que sí está en el array de favoritos
    // quiero sacarlo de array de favoritos
    // para utilizar splice necesito el índice del elemento que quiero borrar
    // y quiero borrar un solo elemento por eso colocamos 1
    favorites.splice(favoritesFound, 1);
  }
  // cada vez que modifico los arrays de palettes o de favorites vuelvo a pintar y a escuchar eventos
  paintPalettes(palettes);
}
// escucho eventos sobre los elementos del array
function listenPalettes() {
  // selecciono todos los li pintados de la lista
  const listPalettes = document.querySelectorAll('.js-palette');
  // recorro el array de los LI para escuchar eventos en cada uno de ellos
  for (const paletteEl of listPalettes) {
    //escucho evento sobre cada una de las paletas
    paletteEl.addEventListener('click', handlePalette);
  }
}
function isFavorite(palette) {
  //compruebo si la paleta que recibo por parámetro está en los favoritos
  const favoriteFound = favorites.find((fav) => {
    // la dificultad de esta función interna del find es saber que tengo que comparar
    // yo consolearía console.log(fav, palette) para ver los datos que debo comparar
    return fav.id === palette.id;
  });
  //find devuelve undefined si no lo encuentra, es decir sino esta en el array de favoritos
  //retorno si está o no está en favoritos
  if (favoriteFound === undefined) {
    //retorno false cuando NO está favoritos
    return false;
  } else {
    //retorno true cuando SI está favoritos
    return true;
  }
}
// pintar las paletas
function paintPalettes(palettes) {
  let html = '';
  let favClass = '';
  for (const palette of palettes) {
  
    // obtengo lo que me ha devuelto la funcion que valida si es favorito
    const isFav = isFavorite(palette);
    //dependiendo es valor devuelto tomo la decision si le añado la clase de favorito o no
    if (isFav) {
      favClass = 'palette--favorite';
    } else {
      favClass = '';
    }
    //creo todo el código html
    //favClass --> añade la clase de favorito en caso que corresponda
    html += `<li class="palettes js-palette ${favClass}" id="${palette.id}">`;
    html += `<h2>${palette.name}</h2>`;
    html += `<div class="palette__colors">`;
    for (const palleteColor of palette.colors) {
      html += `<div class="palette__color" style="background-color:#${palleteColor}"></div>`;
    }
    html += `</div>`;
    html += `</li>`;
  }
  // añado el código html creado a la página
  palettesContainer.innerHTML = html;
  // después de modificar el html escucho de nuevo los eventos
  listenPalettes();
}

// Añadimos la informacion al local storage
function setInLocalStorage() {
  // stringify me permite transformar a string el array de palettes
  const stringPalettes = JSON.stringify(palettes);
  //añadimos  al localStorage  los datos convertidos en string previamente
  localStorage.setItem('palettes', stringPalettes);
}
//esta funcion me permite  gacer una peticion  al servidor
function getFromApi() {
  fetch(
    'https://beta.adalab.es/ejercicios-extra/js-ejercicio-de-paletas/data/palettes.json'
  )
    .then((response) => response.json())
    .then((data) => {
      palettes = data.palettes;
      // pintamos los datos que nos  da la API
      paintPalettes(palettes);
      // los datos que me ha dado la API  los guardamos en el loscalStorage
      setInLocalStorage();
    });
}

// esta función  nos permite buscar en el localStorage si hay información guardada
// para no hacer petición al servidor cada vez que cargue la página
function getLocalStorage() {
  // obtenermos lo que hay en el LS
  const localStoragePalettes = localStorage.getItem('palettes');
  // siempre que cojo datos del local storage tengo que comprobar si son válidos
  // es decir si es la primera vez que entro en la página
  if (localStoragePalettes === null) {
    // no tengo datos en el local storage, así que llamo al API
    getFromApi();
  } else {
    // sí tengo datos en el local storage, así lo parseo a un array y
    const arrayPalettes = JSON.parse(localStoragePalettes);
    // lo guardo en la variable global de palettes
    palettes = arrayPalettes;
    // cada vez que modifico los arrays de palettes o de favorites vuelvo a pintar y a escuchar eventos
    paintPalettes(palettes);
  }
}
// 1- start app -- Cuando carga la pagina
getLocalStorage();
