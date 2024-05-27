function resetErrorMessages() {
    let errorElements = document.querySelectorAll(".error-message");
    errorElements.forEach((element)=> {
        element.innerText = "";
    });
}
function displayErrorMessage(elementId, message) {
    let errorElement = document.getElementById(elementId);
    errorElement.innerText = message;
}
function isValidEmail(email) {
    // Utilizamos una expresión regular para validar el formato del correo electrónico
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // estructura texto@texto.texto

    return emailPattern.test(email);
}

function isValidNombre(nombre) {
    // Utilizamos una expresión regular para validar el formato del nombre
    let nombrePattern = /^[a-zA-ZáéíóúÁÉÍÓÚüÜ\s]+$/;
    // estructura letras

    return nombrePattern.test(nombre);
}

function isValidApellido(apellido) {
    // Utilizamos una expresión regular para validar el formato del apellido
    let apellidoPattern = /^[a-zA-ZáéíóúÁÉÍÓÚüÜ\s]+$/;
    // estructura letras

    return apellidoPattern.test(apellido);
}

function isValidTelefono(telefono) {
    // Utilizamos una expresión regular para validar el formato del teléfono
    let telefonoPattern = /^\d{7,14}$/;
    // 7 a 14 numeros

    return telefonoPattern.test(telefono);
}

document.addEventListener("DOMContentLoaded", ()=>{
    const form = document.getElementById("formularioContacto");

    form.addEventListener("submit", (event)=>{
        // Evitar que se envíe el formulario automáticamente
        event.preventDefault();

        // Resetear los mensajes de error
        resetErrorMessages();

        // Validar los campos
        let nombre = document.getElementById("nombre").value.trim();
        let apellido = document.getElementById("apellido").value.trim();
        let telefono = document.getElementById("telefono").value.trim();
        let mail = document.getElementById("mail").value.trim();
        let invitados = document.getElementById("invitados").value.trim();
        //let tipo = document.getElementById("tipo").value.trim();

        let tipo = document.querySelector('input[name="tipo"]:checked');   
        let lugar = document.getElementById('lugar').selectedIndex;

        // let lugar = document.getElementById("lugar").value.trim();
        let comentarios = document.getElementById("comentarios").value.trim(); 
        let isValid = true;

        if (!isValidNombre(nombre)) {
            displayErrorMessage("nombreError", "Ingrese su nombre.");
            isValid = false;
        }

        if (!isValidApellido(apellido)) {
            displayErrorMessage("apellidoError", "Ingrese su apellido.");
            isValid = false;
        }

        if (!isValidTelefono(telefono)) {
            displayErrorMessage("telefonoError", "Ingrese su número de teléfono.");
            isValid = false;
        }

        if (!isValidEmail(mail)) {
            displayErrorMessage("mailError", "Ingrese un correo electrónico válido.");
            isValid = false;
        }

        if (invitados === "") {
            displayErrorMessage("invitadosError", "Ingrese la cantidad de invitados.");
            isValid = false;
        }

        if(tipo == null) {   
            displayErrorMessage("tipoError", "Ingrese un tipo de evento.");
            isValid = false;
        }

        if ( lugar == 0 ) {
            displayErrorMessage("lugarError", "Ingrese un barrio.");
            isValid = false;
        }


        if (comentarios === "") {
            displayErrorMessage("comentariosError", "Ingrese un comentario.");
            isValid = false;
        }


        if (isValid) {
            alert("¡Formulario enviado correctamente!");
        }
    });
} );

