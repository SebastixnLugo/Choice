cargarPregunta(0)


function cargarPregunta(cuestionario){
    objetoPregunta = preguntas[cuestionario]
    opciones = [...objetoPregunta.opcionesIncorrectas]
    opciones.push(objetoPregunta.respuesta)
    opciones.sort(()=>Math.random()-0.5)
    document.getElementById("pregunta").innerHTML = objetoPregunta.pregunta
    document.getElementById("value-1").innerHTML = opciones[0]
    document.getElementById("value-2").innerHTML = opciones[1]
    document.getElementById("value-3").innerHTML = opciones[2]
    document.getElementById("value-4").innerHTML = opciones[3]
}

async function elegirOpcion(cuestionario){
    let validacion = opciones[cuestionario] == objetoPregunta.respuesta;
    if(validacion) {
        await Swal.fire({
            icon: 'success',
            title: "!Muy bien¡ La respuesta es correcta! :)",
            timer: 2500
          });
    } else {
        await Swal.fire({
            icon: 'error',
            title: "La respuesta es incorrecta :( ¡Seguí intentando!",
            timer: 2500,
          });
    }
}