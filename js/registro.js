
function Alumno(nroAlumno, nombre, email, pais, edad, genero) {
    this.cupoAlumno = nroAlumno
    this.nombre = nombre
    this.email = email
    this.pais = pais 
    this.edad = edad
    this.genero = genero
}

debugger

let cuposPython = 20;
let totalAlumnos = 11;

function cuposRestantes () {
    return cuposPython - totalAlumnos
}

cuposRestantes()


