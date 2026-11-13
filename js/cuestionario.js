const boton = document.getElementById("comprobar");
const resultado = document.getElementById("resultado-cuestionario");

boton.addEventListener("click", function () {
    const lugar = document.getElementById("lugar").value;
    const anio = document.getElementById("anio").value;
    const lema = document.getElementById("lema").value;

    if (lugar === "" || anio === "" || lema === "") {
        resultado.innerHTML = "Elegí una respuesta para cada pregunta.";
    } else {
        // El puntaje empieza en cero cada vez que se presiona el botón.let puntaje = 0;

// Guardamos las respuestas en el mismo orden.
const respuestas = [lugar, anio, lema];
const respuestasCorrectas = ["santa-dorotea", "1597", "piedad-letras"];

// Recorremos las respuestas y sumamos los aciertos.
for (let indice = 0; indice < respuestas.length; indice = indice + 1) {
    if (respuestas[indice] === respuestasCorrectas[indice]) {
        puntaje = puntaje + 1;
    }
}

        resultado.innerHTML = "Acertaste " + puntaje + " de 3 preguntas.";
    }
});
