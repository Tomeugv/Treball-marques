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


//FUNCIÓ PER A ACTIVAR EL MODE FOSC
document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.getElementById("toggleMode");

    toggleButton.addEventListener("click", function () {
        // Alternar la classe "mode-fosc" al body
        document.body.classList.toggle("mode-fosc");

        // Canviar el text del botó segons l'estat
        if (document.body.classList.contains("mode-fosc")) {
            toggleButton.textContent = "Desactivar Mode Fosc";
        } else {
            toggleButton.textContent = "Activar Mode Fosc";
        }
    });
});



