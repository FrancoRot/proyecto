
const queryString = window.location.search;
// Crear un objeto con los parámetros
const urlParams = new URLSearchParams(queryString);

// Obtener el valor de 'id'
const id = urlParams.get('id');
console.log(id);
inicializacion(id);

function inicializacion(numero) {
    // enlaces
    let imagen1 = document.getElementById(`imagen1`);
    let imagen2 = document.getElementById(`imagen2`);
    let imagen3 = document.getElementById(`imagen3`);
    let imagen4 = document.getElementById(`imagen4`);
    // carga de imagenes
    imagen1.src = datos[parseInt(numero)].foto1;
    imagen2.src = datos[parseInt(numero)].foto2;
    imagen3.src = datos[parseInt(numero)].foto3;
    imagen4.src = datos[parseInt(numero)].foto4;

    // enlace y carga de direccion
    let direccion = document.getElementById("direccion");
    direccion.innerHTML = "Dirección: " + datos[parseInt(numero)].direccion;
    // enlace y carga de precio
    let precio = document.getElementById("precio");
    precio.innerHTML = "" + datos[parseInt(numero)].precio;
    // enlace y carga de descripcion
    let descripcion = document.getElementById("descripcion");
    descripcion.innerHTML = datos[parseInt(numero)].descripcion;
    // enlace y carga de mapa
    let mapa = document.getElementById("mapa");
    mapa.src = datos[parseInt(numero)].mapa;

    // enlace y carga de caracteristicas
    let capacidad = document.getElementById("capacidad");
    let banios = document.getElementById("banios");
    let cocina = document.getElementById("cocina");
    let piscina = document.getElementById("piscina");
    let patio = document.getElementById("patio");
    let climatizacion = document.getElementById("climatizacion");
    let estacionamiento = document.getElementById("estacionamiento");
    let barra = document.getElementById("barra");
    let sonido = document.getElementById("sonido");
    let video = document.getElementById("video");
    let conectividad = document.getElementById("conectividad");
    let vestuario = document.getElementById("vestuario");
    let infantiles = document.getElementById("infantiles");
    let escenario = document.getElementById("escenario");

    capacidad.innerHTML = datos[parseInt(numero)].caracteristicas[0];
    banios.innerHTML = datos[parseInt(numero)].caracteristicas[1];
    cocina.innerHTML = datos[parseInt(numero)].caracteristicas[2] ? 'si' : 'no';
    piscina.innerHTML = datos[parseInt(numero)].caracteristicas[3] ? 'si' : 'no';
    patio.innerHTML = datos[parseInt(numero)].caracteristicas[4] ? 'si' : 'no';
    climatizacion.innerHTML = datos[parseInt(numero)].caracteristicas[5] ? 'si' : 'no';
    estacionamiento.innerHTML = datos[parseInt(numero)].caracteristicas[6] ? 'si' : 'no';
    barra.innerHTML = datos[parseInt(numero)].caracteristicas[7] ? 'si' : 'no';
    sonido.innerHTML = datos[parseInt(numero)].caracteristicas[8] ? 'si' : 'no';
    video.innerHTML = datos[parseInt(numero)].caracteristicas[9] ? 'si' : 'no';
    conectividad.innerHTML = datos[parseInt(numero)].caracteristicas[10] ? 'si' : 'no';
    vestuario.innerHTML = datos[parseInt(numero)].caracteristicas[11] ? 'si' : 'no';
    infantiles.innerHTML = datos[parseInt(numero)].caracteristicas[12] ? 'si' : 'no';
    escenario.innerHTML = datos[parseInt(numero)].caracteristicas[13] ? 'si' : 'no';

}

function mostrarFormulario() {
    let formulario = document.getElementById("formulario");
    formulario.classList.remove("oculto");
    formulario.classList.add("centrado")
}
// escuchador de boton reservar
document.getElementById("botonReservar").addEventListener("click", function (event) {
    event.preventDefault(); // Evita el comportamiento predeterminado del botón
    let formulario = document.getElementById("formulario");
    // para ocultar el formulario primero hay que sacar el centrado
    formulario.classList.remove("centrado");
    // Oculta la sección de formulario al presionar el botón de reserva
    formulario.classList.add("oculto");
});

function botonMapa() {
    let mapa = document.getElementById("mapa");

    if (mapa.classList.contains("oculto")) {
        mapa.classList.remove("oculto");
    } else {
        mapa.classList.add("oculto");
    }
}


function botonCaracteristicas() {
    let caracteristicas = document.getElementById("caracteristicas");
    
    if (caracteristicas.classList.contains("oculto")) {
        caracteristicas.classList.remove("oculto");
        caracteristicas.classList.add("container");
        caracteristicas.classList.add("centrado");
    } else {
        caracteristicas.classList.remove("container");
        caracteristicas.classList.remove("centrado");
        caracteristicas.classList.add("oculto");
    }
}

function botonReservar2() {
    let formulario = document.getElementById("formulario");

    if (formulario.classList.contains("oculto")) {
        formulario.classList.remove("oculto");
        formulario.classList.add("container");
        formulario.classList.add("centrado");
    } else {
        formulario.classList.remove("container");
        formulario.classList.remove("centrado");
        formulario.classList.add("oculto");
    }
    }
    const expresiones = {
        nombre: /^[a-zA-ZáéíóúÁÉÍÓÚüÜ\s]+$/,
        apellido: /^[a-zA-ZáéíóúÁÉÍÓÚüÜ\s]+$/,
        correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
        telefono: /^\d{7,14}$/, // 7 a 14 numeros.
        numeros : /^\d{1,7}$/ // De 1 a 7 números
    }
    function comprobarCampo(expresion, valor) {
        return expresion.test(valor);
    }
//retorna false si hay un campo vacio
function camposValidos() {
    const nombre = document.querySelector("#nombre");
    const apellido = document.querySelector("#apellido");
    const correo = document.querySelector("#email");
    const telefono = document.querySelector("#telefono");
    const cantidad = document.querySelector("#cantidad");
    const tipo_evento = document.querySelector("#tipo_evento");
    if ((nombre.value) === ""|| comprobarCampo(expresiones.nombre, nombre.value)===false) return false;
    if ((apellido.value) === "" || comprobarCampo(expresiones.apellido, apellido.value)===false) return false;
    if ((correo.value) === "" || comprobarCampo(expresiones.correo, correo.value)===false) return false;
    if ((telefono.value) === "" || comprobarCampo(expresiones.telefono, telefono.value)===false) return false;
    if ((cantidad.value) === "" || comprobarCampo(expresiones.numeros, cantidad.value)===false) return false;
    if ((tipo_evento.value) === "") return false;
    return true;
}
function obtenerDatos() {
    let validacion = camposValidos();
    if (!validacion) {
        alert("Todos los campos son obligatorios, por favor veifique todos los campos.");
    } else {// validacion campo fecha
        let fecha = obtenerFecha();
        if (fecha === null) {
            alert("fecha invalida");
        } else {
            // obtengo el vector de reservas
            let reservas = datos[parseInt(id)].reservas;
            // si esta vacio entonces no hay reservas y guardo fecha en el vector de reservas
            if (reservas.length === 0) {
                reservas.push(fecha);
                datos[parseInt(id)].reservas = reservas;
                alert("se envia los datos al servidor");
            } else {// si tiene reservas entonces verifico disponibilidad
                // devuelve false si encuentra la fecha y no esta disponible
                if (verificarDisponibilidad(reservas, fecha)) {
                    reservas.push(fecha);
                    datos[parseInt(id)].reservas = reservas;
                    alert("se envia los datos al servidor");
                } else {
                    alert("no esta disponible para esa fecha");
                }
            }
        }

    }

}

function obtenerFecha() {
    // Obtener el valor del input de fecha
    let fechaInput = document.getElementById("fecha").value;
    // si el formato esta bien entonces devuelve la fecha
    if (validarFormatoFecha(fechaInput)) {
        return fechaInput;
    } else {
        return null;
    }
}
function validarFormatoFecha(fecha) {
    // Expresión regular para verificar el formato de fecha (AAAA-MM-DD)
    let regexFecha = /^\d{4}-\d{2}-\d{2}$/;
    // Verificar si la fecha coincide con el formato deseado
    return regexFecha.test(fecha);
}
function verificarDisponibilidad(reservas, fecha) {
    return !reservas.includes(fecha);
}