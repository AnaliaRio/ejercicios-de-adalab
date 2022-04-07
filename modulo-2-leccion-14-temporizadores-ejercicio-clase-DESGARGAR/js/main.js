'use strict';

// SET TIMEOUT

// const modal = document.querySelector(".js_modal");

// const showModal = () => {
//     modal.classList.remove("hidden");
// };

// setTimeout(showModal, 2000);

// document.querySelector(".js_close_btn").addEventListener("click", ()=> {
//     modal.classList.add("hidden");
// });



// Otra forma  (Ver pantallazo 9:04())

const modal = document.querySelector(".js_modal");
const closeBtn = document.querySelector(".js_close_btn");

const showModal = () => {
    modal.classList.remove("hidden");
};

// setTimeout(showModal, 2000);


const closeModal = () => {
    modal.classList.add("hidden");
};

closeBtn.addEventListener("click", closeModal)


// SET INTERVAL

// const handleInterval = () => {
//     console.log("Hola, buenos días");
// };

// setInterval(handleInterval, 1000);

function renderPubli(url){
    const aside = document.querySelector(".js_ads");
    aside.innerHTML= `<img src="${url}" class="ads__image">`;
};

const showPubli = () => {
    fetch("https://dog.ceo/api/breeds/image/random")
    .then((resp) => resp.json())
    .then((info)=>{
        renderPubli(info.message);
        console.log(info);
    });

};

showPubli();

setInterval (showPubli, 5000);

// CLEAR INTERVAL

