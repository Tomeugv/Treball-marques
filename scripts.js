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