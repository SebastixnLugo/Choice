let miFormulario = document.getElementById("stripe-login");
miFormulario.addEventListener("submit", validarFormulario);

function validarFormulario(e) {
    e.preventDefault();
    console.log("Formulario Enviado");
    alert("¡Gracias por volver a choice :)!")
}

const email = document.getElementById("email-sesion");
const password = document.getElementById("password-sesion");


document.addEventListener("submit", (e) => {
    e.preventDefault()
    guardarDatosDeUsr()
    alert("Formulario enviado. Gracias por confiar en Choice")
})

function guardarDatosDeUsr() {
    const datos  = {
        email:email.value,
        password:password.value,
    }
    const str = JSON.stringify(datos)
    sessionStorage.setItem("datos", str)
}





// function recuperacionDatosDeUsr() {
//     if (localStorage.length === 2) {
//         inputEmail.value = localStorage.getItem("email");
//         inputPassword.value = localStorage.getItem("password");
//     } else {
//         btnSubmit.enable = true
//     }
// }
// recuperacionDatosDeUsr()