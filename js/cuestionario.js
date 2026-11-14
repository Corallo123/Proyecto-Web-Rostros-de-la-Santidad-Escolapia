const boton = document.getElementById("comprobar");
const resultado = document.getElementById("resultado-cuestionario");

boton.addEventListener("click", function () {
    const lugar = document.getElementById("lugar").value;
    const anio = document.getElementById("anio").value;
    const lema = document.getElementById("lema").value;
    const destinatarios = document.getElementById("destinatarios").value;
    const navegacion = document.getElementById("navegacion").value;

    if (
        lugar === "" ||
        anio === "" ||
        lema === "" ||
        destinatarios === "" ||
        navegacion === ""
    ) {
        resultado.innerHTML = "Elegí una respuesta para cada pregunta.";
    } else {
        let puntaje = 0;

        const respuestas = [
            lugar,
            anio,
            lema,
            destinatarios,
            navegacion
        ];

        const respuestasCorrectas = [
            "santa-dorotea",
            "1597",
            "piedad-letras",
            "todos",
            "nav"
        ];

        for (let indice = 0; indice < respuestas.length; indice = indice + 1) {
            if (respuestas[indice] === respuestasCorrectas[indice]) {
                puntaje = puntaje + 1;
            }
        }

        resultado.innerHTML =
            "Acertaste " + puntaje + " de " + respuestas.length + " preguntas.";
    }
});
const botonReiniciar = document.getElementById("reiniciar");

botonReiniciar.addEventListener("click", function () {
    const campos = ["lugar", "anio", "lema", "destinatarios", "navegacion"];

    for (let indice = 0; indice < campos.length; indice = indice + 1) {
        document.getElementById(campos[indice]).value = "";
    }

    resultado.innerHTML = "";
});
