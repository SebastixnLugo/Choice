
function Alumno(nroAlumno, nombre, email, pais, edad, genero) {
    this.cupoAlumno = nroAlumno
    this.nombre = nombre
    this.email = email
    this.pais = pais 
    this.edad = edad
    this.genero = genero
}


let cuposPython = 20;
let totalAlumnos = 11;

function cuposRestantes () {
    return cuposPython - totalAlumnos
}

cuposRestantes()

const email = document.getElementById("email-registro");
const password = document.getElementById("password-registro");
const name = document.getElementById("nombre-registro");
const text = document.getElementById("apellido-registro");


let miFormulario = document.getElementById("formulario");
miFormulario.addEventListener("submit", validarFormulario);

function validarFormulario(e) {
    e.preventDefault();
    console.log("Formulario Enviado");
    alert("Gracias por registrarte ¡Bienvenido/a a choice :)!")
}

let halagoBienvenida = ["tutorazo", "Nacho", "crack", "ídolo", "purasangre"];
const bienvenida = halagoBienvenida[Math.floor(Math.random() * halagoBienvenida.length)];
alert("Bienvenido " + bienvenida + " :)");





