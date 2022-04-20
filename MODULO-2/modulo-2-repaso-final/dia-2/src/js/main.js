'use strict';

//obtener los datos HTML-DOM (ul, input)
const listPalettes = document.querySelector(".js-list-palettes"); 
const urlServer = "https://beta.adalab.es/ejercicios-extra/js-ejercicio-de-paletas/data/palettes.json"; 

// info array palettes
let palettes = []; 


// escucho eventos sobre los elementos del array
function listenersPalletes(){
  // selecciono todos los li pintados de la lista
   const liPalettes= document.querySelectorAll(".js-palette"); 
  // recorro el array de los LI para escuchar eventos en cada uno de ellos
 for (const item of liPalettes) {
    //escucho evento sobre cada una de las paletas
     item.addEventListener("click", handleClicPalette); 
 }
}

function paintPalettes(palettes){
    //Paint/renderizar HTML
    let html = ''; 

    for (const paletteItem of palettes) {
      let classFavorite = "";
      
      const favoriteFoundIndex = favorites.findIndex(fav=>{
        return fav.id === paletteItem.id; 
      }); 

      /*const favoriteFound = favorites.find(fav=>{
        return fav.id === paletteItem.id; 
      }); 

      console.log(favoriteFoundIndex); 
      console.log(favoriteFound);*/

      //dependiendo es valor devuelto tomo la decision si le añado la clase de favorito o no
      if(favoriteFoundIndex !== -1){
        classFavorite = "palette--favorite";
      }
      else{
        classFavorite = "";
      }
    //creo todo el código html
    //classFavorite --> añade la clase de favorito en caso que corresponda
        html+= `<li class ="palettes js-palette ${classFavorite} js-${paletteItem.id} " id=${paletteItem.id}>`;
        html+=`<h2>${paletteItem.name}</h2>`; 
        html+=`<div class="palette__colors">`;
         for (const palleteColor of paletteItem.colors) {
             html+=`<div class="palette__color" style="background-color:#${palleteColor}"></div>`;
         }
         html+=`</div>`;
         html+=`</li>`;
    }
    // añado el código html creado a la página
    listPalettes.innerHTML = html;
    // después de modificar el html escucho de nuevo los eventos
    listenersPalletes(); 
}

/**1. crear el listado de los favoritos
2. Escuchar cuando le clic a paleta
3. Obtener a que paleta le doy clic
4. existe en el listado de favoritos
5. Si existe la elimino de ese listado
6- y Sino existe la agrego al listdo
7- cambiar las clases de cada paleta */
let favorites =[]; 

function handleClicPalette(event){
  console.log(event.currentTarget.id); 
  const idPaletteSelected = event.currentTarget.id; //Obtener a que paleta le doy clic

  //existe en el listado de favoritos: (map, push, filter, find, findIndex, splice)
  //find: buscar el elemento en el listado, devuelto el elemento
  //findIndex: buscar la posición en el listado, devuelve la posición donde está, pero si me devuelve -1
  //splice: elimina un elemento de un listado dado el posición de donde esta , segundo parametro cuantos quiere eliminar


  const paletteFound = palettes.find(fav=>{
    return fav.id === idPaletteSelected; 
  });

  //compruebo si la paleta que recibo por parámetro está en los favoritos
  const favoriteFoundIndex = favorites.findIndex(fav=>{
    // la dificultad de esta función interna del findIdex es saber que tengo que comparar
    // yo consolearía console.log(fav, palette) para ver los datos que debo comparar
    return fav.id === idPaletteSelected; 
  }); 
  
  //Otra versión: para pintar los favoritos cada vez doy clic
  //const paletteLi = document.querySelector(`.js-${idPaletteSelected}`);


  if(favoriteFoundIndex === -1){ //No lo encontró
    favorites.push(paletteFound);  
    
    //paletteLi.classList.add("palette--favorite"); // //Otra versión: para pintar los favoritos cada vez doy clic

  }else{
    //eliminar de la lista de favoritos
    favorites.splice(favoriteFoundIndex,1); 

    //paletteLi.classList.remove("palette--favorite"); // //Otra versión: para pintar los favoritos cada vez doy clic
  }
  paintPalettes(palettes);
  //console.log(favorites); 
}


//Filtrar
const input = document.querySelector(".js-input"); 
function handleInput(event){
  event.preventDefault(); 
  const filterValue = input.value; 
  //arrays: filter
  const listFiltered = palettes.filter(palette =>{
    return palette.name.toLowerCase().includes(filterValue.toLowerCase()); 
  }); 
  paintPalettes(listFiltered); 
}
input.addEventListener("keyup", handleInput); 



// obtenermos lo que hay en el LS
const listPalettesStorage = JSON.parse(localStorage.getItem("listPalettes"));

// siempre que cojo datos del local storage tengo que comprobar si son válidos
// es decir si es la primera vez que entro en la página
if(listPalettesStorage !== null){
  palettes= listPalettesStorage; 
  paintPalettes(palettes);
}
else{
//no tengo datos en el local storage
//fetch palettes form server
fetch(urlServer)
.then(response => response.json())
.then(data => {
    //Save palettes info
    //lo guardo en la variable global de palettes
    palettes = data.palettes; 
    // sí tengo datos en el local storage, así lo parseo a un array 
    localStorage.setItem("listPalettes", JSON.stringify(palettes));
    //Paint/renderizar HTML
    // cada vez que modifico los arrays de palettes o de favorites vuelvo pintar y a escuchar eventos
    paintPalettes(palettes); 
});
}






