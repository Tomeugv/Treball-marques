// Funció per extreure les dades de les obres de teatre
function extreureDadesObres() {
    const obres = [];
    const elementsObres = document.getElementsByClassName("obras_teatro");

    for (let i = 0; i < elementsObres.length; i++) {
        const obra = elementsObres[i];
        const titol = obra.querySelector("h1").innerText;
        const data = obra.querySelector("h2").innerText;
        const descripcio = obra.querySelector("p").innerText;
        const imatge = obra.querySelector("img").src;

        obres.push({
            id: i + 1, // Identificador únic
            titol: titol,
            descripcio: descripcio,
            data: data,
            imatge: imatge
        });
    }

    return obres;
}
// Obtenir les dades de les obres
const obresTeatre = extreureDadesObres();
console.log("Estructura de dades generada automàticament:", obresTeatre);


//FUNCIÓ PER OCULTAR EL FORMULARI DE LA SECCIÓ D'ARTICLES
document.addEventListener("DOMContentLoaded", function () {
    // Seleccionar el botó i la secció del formulari
    const toggleButton = document.getElementById("amagaFormulari");
    const formulariSection = document.querySelector(".formulario_entrades");

    // Afegir un event listener al botó
    toggleButton.addEventListener("click", function () {
        // Alternar la classe "ocult" a la secció del formulari
        formulariSection.classList.toggle("ocult");

        // Canviar el text del botó segons l'estat
        if (formulariSection.classList.contains("ocult")) {
            toggleButton.textContent = "Mostrar Informació Entrades";
        } else {
            toggleButton.textContent = "Ocultar Informació Entrades";
        }
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.getElementById("toggleMode");

        // Funció per actualitzar els colors del botó segons el mode
    function actualitzarColorsBoto() {
        if (document.body.classList.contains("mode-fosc")) {
                // Mode fosc
            toggleButton.style.backgroundColor = "#1a1a1a"; // Fons fosc
            toggleButton.style.color = "#e0e0e0"; // Text clar
        } else {
                // Mode clar
            toggleButton.style.backgroundColor = "#64b5f6"; // Fons clar
            toggleButton.style.color = "#1a1a1a"; // Text fosc
        }
    }

        // Efecte hover
    toggleButton.addEventListener("mouseenter", function () {
        if (document.body.classList.contains("mode-fosc")) {
            toggleButton.style.backgroundColor = "#333"; // Hover en mode fosc
        } else {
            toggleButton.style.backgroundColor = "#42a5f5"; // Hover en mode clar
        }
    });

    toggleButton.addEventListener("mouseleave", function () {
            actualitzarColorsBoto(); // Restaurar colors segons el mode
    });

        // Alternar mode fosc
    toggleButton.addEventListener("click", function () {
        document.body.classList.toggle("mode-fosc");


            // Actualitzar colors del botó
            actualitzarColorsBoto();
    });     
    
});



let indexActual = 0; // Índex de la secció actual
const intervalTemps = 5000; // Canviar de secció cada 5 segons (5000 ms)

// Funció per moure el carrusel automàticament
function moureCarruselAutomatic() {
    const contingut = document.querySelector(".carrusel-contingut");
    const items = document.querySelectorAll(".carrusel-item");
    const totalItems = items.length;

    // Calcular el nou índex
    indexActual = (indexActual + 1) % totalItems;

    // Moure el contingut
    contingut.style.transform = `translateX(-${indexActual * 100}%)`;

    // Actualitzar indicadors
    actualitzarIndicadors();
}

// Funció per mostrar una secció específica
function mostrarSeccio(index) {
    indexActual = index;
    const contingut = document.querySelector(".carrusel-contingut");
    contingut.style.transform = `translateX(-${indexActual * 100}%)`;
    actualitzarIndicadors();
}

// Funció per actualitzar els indicadors
function actualitzarIndicadors() {
    const indicadors = document.querySelectorAll(".carrusel-indicador");
    indicadors.forEach((indicador, index) => {
        if (index === indexActual) {
            indicador.classList.add("actiu");
        } else {
            indicador.classList.remove("actiu");
        }
    });
}

// Iniciar el carrusel automàtic
let interval = setInterval(moureCarruselAutomatic, intervalTemps);

// Aturar el carrusel automàtic quan l'usuari interactua amb els indicadors
const indicadors = document.querySelectorAll(".carrusel-indicador");
indicadors.forEach((indicador, index) => {
    indicador.addEventListener("click", () => {
        clearInterval(interval); // Aturar l'interval
        mostrarSeccio(index); // Mostrar la secció seleccionada
        interval = setInterval(moureCarruselAutomatic, intervalTemps); // Reiniciar l'interval
    });
});

// Inicialitzar indicadors
actualitzarIndicadors();