
// menu
const open = document.querySelector("#Abrir");
const close = document.querySelector("#Cerrar");
const nav = document.querySelector("#navbar");

open.addEventListener("click", () => {
    nav.classList.add("visible");
});


close.addEventListener("click", () => {
    nav.classList.remove("visible");
});
//
const cardData = {
    1: {
        text: "Información de Igloo INC. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        buttonText: "Explore Web Igloo",
        link: "https://www.igloo.inc/"
    },
    2: {
        text: "Información de Fritz-Cola. Suspendisse potenti. Nulla facilisi.",
        buttonText: "Explore Web Fritz-Cola",
        link: "https://fritz-kola.com/es"
    },
    3: {
        text: "Información de Funtech INC. Praesent a magna sit amet libero cursus.",
        buttonText: "Explore Web Funtech",
        link: "https://www.funtech.inc/ja"
    }
};

// Selecciona todas las tarjetas y el contenido de información
const cards = document.querySelectorAll('.custom-card-expand'); // Cambiado a 'custom-card-expand'
const infoText = document.getElementById('info-text-expand'); // Cambiado a 'info-text-expand'
const infoBtn = document.getElementById('info-btn'); // Este se mantiene igual

// Añadir evento de clic a cada tarjeta
cards.forEach(card => {
    card.addEventListener('click', () => {
        const cardId = card.getAttribute('data-card');
        
        // Actualiza el contenido con los datos correspondientes
        infoText.textContent = cardData[cardId].text;
        infoBtn.textContent = cardData[cardId].buttonText;
        infoBtn.setAttribute('href', cardData[cardId].link);
    });
});

// Para cambiar de color el botón 
const btn = document.querySelector('.custom-info-content-expand .custom-btn'); // Cambiado a 'custom-info-content-expand' y 'custom-btn'

cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        // Obtener el color de fondo de la tarjeta
        const bgColor = getComputedStyle(card).backgroundColor;
        btn.style.backgroundColor = bgColor; // Cambiar el color del botón
    });

    card.addEventListener('mouseleave', () => {
        // Restablecer el color del botón al color por defecto
        btn.style.backgroundColor = '#72c0e5'; // Color por defecto
    });
});


// Para cambiar el color del botón y la sombra
const infoContent = document.querySelector('.custom-info-content-expand'); // Selecciona el contenedor de información

cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        // Obtener el color de fondo de la tarjeta
        const bgColor = getComputedStyle(card).backgroundColor;

        // Cambiar el color del botón
        btn.style.backgroundColor = bgColor; // Cambiar el color del botón

        // Cambiar el color de la sombra
        infoContent.style.boxShadow = `0 5px 10px ${bgColor}`; // Cambia la sombra del contenedor de información
    });

    card.addEventListener('mouseleave', () => {
        
        btn.style.backgroundColor = '#72c0e5'; // Color por defecto
        
        // Restablecer la sombra al color por defecto
        infoContent.style.boxShadow = '0 5px 10px #f5a142'; // Color por defecto de la sombra
    });
});


