document.addEventListener("DOMContentLoaded", function () {
    // Funció per extreure les dades de les obres de teatre
    function extreureDadesObres() {
        const obres = [];
        const elementsObres = document.getElementsByClassName("obras_teatro");

        for (let i = 0; i < elementsObres.length; i++) {
            const obra = elementsObres[i];
            const titol = obra.querySelector("h1").innerText;
            const data = obra.querySelector("h2 .data").innerText; //Extreiem la data de la obra
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

        return obres; // Devuelve el array de obras
    }

    // Funció per filtrar les obres a partir de juny
    function filtrarObrasAPartirDeJunio(obres) {
        const meses = {
            "enero": 0, "febrero": 1, "marzo": 2, "abril": 3, "mayo": 4, "junio": 5,
            "julio": 6, "agosto": 7, "septiembre": 8, "octubre": 9, "noviembre": 10, "diciembre": 11
        };

        return obres.filter(obra => {
            // Emprar una expressió regular per extreure el dia, mes i any
            const regex = /(\d{1,2}) de (\w+), (\d{4})/;
            const [, dia, mesTexto, año] = obra.data.match(regex);

            // Convertim el mes de text a número
            const mes = meses[mesTexto.toLowerCase()];

            // Filtram les obres a partir de juny
            return mes >= 5;
        });
    }

        // Funció per ordenar les obres de desembre a gener
        function ordenarObrasDeDiciembreAEnero(obres) {
            const meses = {
                "enero": 0, "febrero": 1, "marzo": 2, "abril": 3, "mayo": 4, "junio": 5,
                "julio": 6, "agosto": 7, "septiembre": 8, "octubre": 9, "noviembre": 10, "diciembre": 11
            };
    
            return obres.sort((a, b) => {
                // Extraiem el mes de la primera obra
                const regex = /(\d{1,2}) de (\w+), (\d{4})/;
                const [, , mesTextoA] = a.data.match(regex);
                const mesA = meses[mesTextoA.toLowerCase()];
    
                // Extraiem el mes de la segona obra
                const [, , mesTextoB] = b.data.match(regex);
                const mesB = meses[mesTextoB.toLowerCase()];
    
                // Ordenam les obres de desembre a gener
                return mesB - mesA;
            });
        }

    // Obtenim les dades de les obres de teatre
    const obresTeatre = extreureDadesObres();
    console.log("Estructura de dades generada automàticament:", obresTeatre);

    // Filtram les obres a partir de juny
    const obresAPartirDeJunio = filtrarObrasAPartirDeJunio(obresTeatre);
    console.log("Obres a partir de juny:", obresAPartirDeJunio);

    // Ordenam les obres de desembre a gener
    const obresOrdenades = ordenarObrasDeDiciembreAEnero(obresTeatre);
    console.log("Obres ordenades de desembre a gener:", obresOrdenades);




    

    // FUNCIÓ PER OCULTAR EL FORMULARI DE LA SECCIÓ D'ARTICLES
    const toggleButton = document.getElementById("amagaFormulari");
    const formulariSection = document.querySelector(".formulario_entrades");

    if (toggleButton && formulariSection) {
        toggleButton.addEventListener("click", function () {
            formulariSection.classList.toggle("ocult");

            if (formulariSection.classList.contains("ocult")) {
                toggleButton.textContent = "Mostrar Informació Entrades";
            } else {
                toggleButton.textContent = "Ocultar Informació Entrades";
            }
        });
    }

    // Mode fosc
    const toggleModeButton = document.getElementById("toggleMode");

    if (toggleModeButton) {
        function actualitzarColorsBoto() {
            if (document.body.classList.contains("mode-fosc")) {
                toggleModeButton.style.backgroundColor = "#1a1a1a";
                toggleModeButton.style.color = "#e0e0e0";
            } else {
                toggleModeButton.style.backgroundColor = "#64b5f6";
                toggleModeButton.style.color = "#1a1a1a";
            }
        }

        toggleModeButton.addEventListener("mouseenter", function () {
            if (document.body.classList.contains("mode-fosc")) {
                toggleModeButton.style.backgroundColor = "#333";
            } else {
                toggleModeButton.style.backgroundColor = "#42a5f5";
            }
        });

        toggleModeButton.addEventListener("mouseleave", function () {
            actualitzarColorsBoto();
        });

        toggleModeButton.addEventListener("click", function () {
            document.body.classList.toggle("mode-fosc");
            actualitzarColorsBoto();
        });
    }

    // Carrusel
    let indexActual = 0;
    const intervalTemps = 5000;

    function moureCarruselAutomatic() {
        const contingut = document.querySelector(".carrusel-contingut");
        const items = document.querySelectorAll(".carrusel-item");
        const totalItems = items.length;

        indexActual = (indexActual + 1) % totalItems;
        contingut.style.transform = `translateX(-${indexActual * 100}%)`;
        actualitzarIndicadors();
    }

    function mostrarSeccio(index) {
        indexActual = index;
        const contingut = document.querySelector(".carrusel-contingut");
        contingut.style.transform = `translateX(-${indexActual * 100}%)`;
        actualitzarIndicadors();
    }

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

    let interval = setInterval(moureCarruselAutomatic, intervalTemps);

    const indicadors = document.querySelectorAll(".carrusel-indicador");
    indicadors.forEach((indicador, index) => {
        indicador.addEventListener("click", () => {
            clearInterval(interval);
            mostrarSeccio(index);
            interval = setInterval(moureCarruselAutomatic, intervalTemps);
        });
    });

    actualitzarIndicadors();

    // Comentarios
    const mostrarComentariosBtn = document.getElementById('mostrarComentarios');
    const listaComentariosDiv = document.getElementById('listaComentarios');
    const comentariosUl = document.getElementById('comentarios');
    const formularioComentario = document.getElementById('formularioComentario');
    const nuevoComentarioInput = document.getElementById('nuevoComentario');

    if (mostrarComentariosBtn && listaComentariosDiv && comentariosUl && formularioComentario && nuevoComentarioInput) {
        mostrarComentariosBtn.addEventListener('click', function () {
            listaComentariosDiv.classList.toggle('hidden');
        });

        formularioComentario.addEventListener('submit', function (event) {
            event.preventDefault();

            const comentarioTexto = nuevoComentarioInput.value.trim();

            if (comentarioTexto !== "") {
                const nuevoComentarioLi = document.createElement('li');
                nuevoComentarioLi.textContent = comentarioTexto;
                comentariosUl.appendChild(nuevoComentarioLi);
                nuevoComentarioInput.value = '';
            }
        });
    }

    // Ampliar imágenes
    function ampliarImagen(src) {
        const contenedorAmpliado = document.getElementById('contenedor-ampliado');
        const imagenAmpliada = document.getElementById('imagen-ampliada');

        if (contenedorAmpliado && imagenAmpliada) {
            imagenAmpliada.src = src;
            contenedorAmpliado.style.display = 'block';
        }
    }

    function cerrarImagen() {
        const contenedorAmpliado = document.getElementById('contenedor-ampliado');
        if (contenedorAmpliado) {
            contenedorAmpliado.style.display = 'none';
        }
    }
});