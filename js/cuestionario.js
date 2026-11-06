const boton = document.getElementById("comprobar");
const resultado = document.getElementById("resultado-cuestionario");

boton.addEventListener("click", function () {
    const lugar = document.getElementById("lugar").value;
    const anio = document.getElementById("anio").value;
    const lema = document.getElementById("lema").value;

    if (lugar === "" || anio === "" || lema === "") {
        resultado.innerHTML = "Elegí una respuesta para cada pregunta.";
    } else {
        // El puntaje empieza en cero cada vez que se presiona el botón.
        let puntaje = 0;

        if (lugar === "santa-dorotea") {
            puntaje = puntaje + 1;
        }

        if (anio === "1597") {
            puntaje = puntaje + 1;
        }

        if (lema === "piedad-letras") {
            puntaje = puntaje + 1;
        }

        resultado.innerHTML = "Acertaste " + puntaje + " de 3 preguntas.";
    }
});