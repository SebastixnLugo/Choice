debugger

let usuario = "Sebastian";

cont = 0;
while (cont < 3) {
    let usuario = prompt("Introduzca su usuario");
    let contrasena = prompt("Introduzca su contraseña");

    if (usuario == 'Sebastian' && contrasena == "CoderHouse") {
        alert("Bienvenido a Choice");
        cont = 0;
        break;

    } else {

        if (usuario != 'Sebastian' && contrasena == 'CoderHouse') {
            alert('usuario incorrecto');
        } else if (usuario == 'Sebastian' && contrasena != 'CoderHouse') {
            alert('contraseña incorrecta');
        } else {
            cont++;
            alert('Error. Los datos son incorrectos');
        }

        if (cont == 3) {
            alert('Lo siento, has agotado el número de intentos');
        }
    }

}