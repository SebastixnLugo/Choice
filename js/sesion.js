let mail = prompt("Ingrese su email:");
if (mail == "sebxstianlugo@gmail.com") {
    console.log("¡Bienvenido Sebastián! Ahora ingresa tu contraseña");
} else {
    console.warn("Su mail no está en nuestra base de datos");
    alert("Su mail no está en nuestra base de datos");
}

let password = prompt("Ingrese su contraseña:");
if (password == "12345678") {
    console.log("Su contraseña es correcta");
    alert("¡Bienvenido Sebastián!");
} else {
    console.warn("Su contraseña es incorrecta");
    alert("Su contraseña es incorrecta. Ingrese nuevamente los datos");
}