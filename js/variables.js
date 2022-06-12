const listaAlumnos = []

listaAlumnos.push (new Alumno(1, "Emiliano", "emiliano@gmail.com", "Argentina", 15, "masculino"))
listaAlumnos.push (new Alumno(2, "Federico", "fede@gmail.com", "Argentina", 19, "masculino"));
listaAlumnos.push (new Alumno(3, "Pilar", "pilu@gmail.com", "Chile", 17, "femenino"));
listaAlumnos.push (new Alumno(4,"Lara", "lara@gmail.com", "Argentina", 18, "femenino"));
listaAlumnos.push (new Alumno(5,"Facundo", "facundo@gmail.com", "Colombia", 21, "masculino"));
listaAlumnos.push (new Alumno(6,"Carlos", "carlos@gmail.com", "España", 16, "masculino"));
listaAlumnos.push (new Alumno(7,"Valentina", "valentina@gmail.com", "Argentina", 19, "femenino"));
listaAlumnos.push (new Alumno(8,"Valentin", "valen@gmail.com", "Cuba", 21, "otro"));
listaAlumnos.push (new Alumno(9,"Tomas", "tomi@gmail.com", "Argentina", 19, "masculino"));
listaAlumnos.push (new Alumno(10,"Estella", "estella@gmail.com", "Chile", 17, "femenino"));
listaAlumnos.push (new Alumno(11, prompt("Ingrese su nombre:"), prompt("Ingrese su email:"), prompt("Ingrese su nacionalidad:"), parseInt(prompt("Ingrese su edad"), prompt("Ingrese su género"))))

let paises = ["Argentina, Chile, Colombia, Cuba, España"]
let nombre = ["Emiliano","Federico","Pilar","Lara","Facundo", "Carlos", "Valentina", "Valentin", "Tomas", "Estella"]

const argentina = listaAlumnos.filter((e)=>{
    return e.pais == "Argentina"
})

console.log(argentina)

const matricula = listaAlumnos.find((e)=>{
    return e.nroAlumno == 6
})

console.log(matricula)





// const cincoCaracteres = nombre.find((e)=>e.length=5);
// const cincoLetras = nombre.findIndex((e)=>e.length=5);

// console.log(cincoCaracteres)
// console.log(cincoLetras)



// const letraV=nombre.filter((e)=>e[0]="V");
// letraV;

// console.log(letraV)
 






