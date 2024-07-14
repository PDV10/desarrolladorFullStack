"use strict"

let botones = document.querySelectorAll(".btn-box");

for (let i = 0; i < botones.length; i++) {
    let btn = botones[i];
    btn.addEventListener("click", esconder);
}

function esconder() {
    let boxLeft = document.querySelector(".left");
    let boxRight = document.querySelector(".right");

    boxLeft.classList.toggle("oculto");
    boxRight.classList.toggle("oculto");
}