"use strict"

let btnCargar = document.getElementById("btn-cargar")
btnCargar.addEventListener("click", cargar);
let contenedor = document.getElementById("contenedor-cards")
const URL = "https://rickandmortyapi.com/api/character"

async function cargar(){
    btnCargar.classList.add("esconder");
    try {
        let response = await fetch(URL)
        if (response.ok) {
            let data = await response.json();
            data.results.forEach(personaje => {
                let card = crearCard(personaje);
                contenedor.appendChild(card)
            });
        }
    } catch (error) {
        console.log(error);
        
    }
}

function crearCard (personaje){
    const card = document.createElement('div');
    card.className = 'card';
    card.style.width = '18rem';
    
    // Crear la imagen
    const img = document.createElement('img');
    img.src = personaje.image; 
    img.className = 'card-img-top';
    img.alt = '...';
    
    // Crear el cuerpo de la tarjeta
    const cardBody = document.createElement('div');
    cardBody.className = 'card-body';
    
    // Crear el título h5
    const title = document.createElement('h5');
    title.className = 'card-title';
    title.textContent = personaje.name;
    
    // Crear el subtítulo de género
    const genero = document.createElement('h6');
    genero.textContent = `Genero: ${personaje.gender}`;
    
    // Crear el subtítulo de especie
    const especie = document.createElement('h6');
    especie.textContent = `Especie: ${personaje.species}`;
    
    // Crear el enlace
    const link = document.createElement('a');
    link.href = '#';
    link.className = 'btn btn-primary d-flex justify-content-center';
    link.textContent = 'Ver mas';
    
    // Añadir los elementos al cardBody
    cardBody.appendChild(title);
    cardBody.appendChild(genero);
    cardBody.appendChild(especie);
    cardBody.appendChild(link);
    
    // Añadir img y cardBody a la card
    card.appendChild(img);
    card.appendChild(cardBody);
    
   return card;
}