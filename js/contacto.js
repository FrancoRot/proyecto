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

        if (nombre === "") {
            displayErrorMessage("nombreError", "Ingrese su nombre.");
            isValid = false;
        }

        if (apellido === "") {
            displayErrorMessage("apellidoError", "Ingrese su apellido.");
            isValid = false;
        }

        if (telefono === "") {
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

        // if (document.getElementById("tipo").checked==false) {
        //     displayErrorMessage("tipoError", "Ingrese un tipo de evento.");
        //     isValid = false;
        // }

        if(tipo == null) {   
            displayErrorMessage("tipoError", "Ingrese un tipo de evento.");
            isValid = false;
        }

        if ( lugar == 0 ) {
            displayErrorMessage("lugarError", "Ingrese un barrio.");
            isValid = false;
        }


        if (comentarios === "") {
            displayErrorMessage("comentariosError", "Ingrese un comenarios.");
            isValid = false;
        }


        if (isValid) {
            alert("¡Formulario enviado correctamente!");
        }
    });
} );


//         let username = document.getElementById("tipoError").value.trim();
// let username = document.getElementById("lugarError").value.trim();

//         if (password.length < 8) {
//             displayErrorMessage("passwordError", "La contraseña debe tener al menos 8 caracteres.");
//             isValid = false;
//         }
