"use strict";

// const face = document.querySelector(".js-face");


// function smiley (face) {
//     const face = document.querySelector(".js-face");
//     if (face.innerHTML === ":)") {
//         face.innerHTML = ";)";
//     }
//     else {
//         face.innerHTML = ":)";
//     }
// }

// face.addEventListener("click", smiley);
function smiley () {
    const face = document.querySelector(".js-face");
    if (face.innerHTML === ":)") {
        face.innerHTML = ";)";
    }
    else {
        face.innerHTML = ":)";
    }
}

face.addEventListener("click", smiley);

