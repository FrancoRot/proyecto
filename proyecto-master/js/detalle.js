
/*let datos = [
    {
        "id": 0,
        "direccion": "Av. Rivadavia 8328, CABA",
        "foto1": "../images/1_.jpeg",
        "foto2": "../images/1_2.jpeg",
        "foto3": "../images/1_3.jpeg",
        "foto4": "../images/1_4.jpeg",
        "reservas": [],
        "precio": "$5.80",
        "caracteristicas": [100, 1, false, true, true, true, true, true, true, true, true, true, true, true],
        "mapa": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3282.8305666287274!2d-58.483252023502274!3d-34.63372175908469!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcc9972f2d9ceb%3A0xb475066fb549cf97!2sAv.%20Rivadavia%208328%2C%20C1407%20Cdad.%20Aut%C3%B3noma%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1716146430546!5m2!1ses-419!2sar",
        "disponible": true,
        "descripcion": "Espacio Rivadavia. Salon de Eventos - Cumpleaños - Casamientos - Comuniones - Bautismos - Cumples XV - Despedidas",
    },
    {
        "id": 1,
        "direccion": "Av. Pres. Figueroa Alcorta 7285, CABA",
        "foto1": "../images/2_.jpeg",
        "foto2": "../images/2_2.jpeg",
        "foto3": "../images/2_3.jpeg",
        "foto4": "../images/2_4.jpeg",
        "reservas": [],
        "precio": "$10.80",
        "caracteristicas": [200, 2, true, false, true, true, true, true, true, true, true, true, true, true],
        "mapa": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3286.245048159491!2d-58.446926723505705!3d-34.54735045452495!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb43716409723%3A0xc77f779b3f5ba7a4!2sAv.%20Pres.%20Figueroa%20Alcorta%207285%2C%20C1428%20Cdad.%20Aut%C3%B3noma%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1716146989406!5m2!1ses-419!2sar",
        "disponible": false,
        "descripcion": "Convite Eventos. Fiestas - Corporativos. Salón vidriado rodeado de arboles y luz natural, deck exterior y jardín.",
    },
    {
        "id": 2,
        "direccion": "Crámer 1428, CABA",
        "foto1": "../images/3_.jpeg",
        "foto2": "../images/3_2.jpeg",
        "foto3": "../images/3_3.jpeg",
        "foto4": "../images/3_4.jpeg",
        "reservas": [],
        "precio": "$15.80",
        "caracteristicas": [300, 3, true, true, false, true, true, true, true, true, true, true, true, true],
        "mapa": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3285.314586323171!2d-58.45688242350472!3d-34.57090575576732!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb5dafe5cdf87%3A0x79c6ae87c1256fcd!2sCr%C3%A1mer%201428%2C%20Cdad.%20Aut%C3%B3noma%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1716147227649!5m2!1ses-419!2sar",
        "disponible": false,
        "descripcion": "Casa Cramer. Más de 20 años de experiencia en el segmento de eventos corporativos y sociales de mediano y alto volumen. Un espacio que ofrece un verdadero servicio integral a la altura de tus necesidades y expectativas.",
    },
    {
        "id": 3,
        "direccion": "Puan 644, CABA",
        "foto1": "../images/4_.jpeg",
        "foto2": "../images/4_2.jpeg",
        "foto3": "../images/4_3.jpeg",
        "foto4": "../images/4_4.jpeg",
        "reservas": [],
        "precio": "$20.80",
        "caracteristicas": [400, 4, true, true, true, false, true, true, true, true, true, true, true, true],
        "mapa": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3282.9673227320786!2d-58.44825722350225!3d-34.63026605890217!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcca36ad98ddeb%3A0xe9cd33651d086713!2sParque%20Chacabuco%2C%20Pu%C3%A1n%20644%2C%20C1406CQN%20Cdad.%20Aut%C3%B3noma%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1716147914748!5m2!1ses-419!2sar",
        "disponible": false,
        "descripcion": "Espacio Puan. Cumples XV - Casamientos - Post Civil - Cumples adultos - Bautismos - Comuniones - Despedidas - Egresados - Graduaciones"

    },
    {
        "id": 4,
        "direccion": "Av. Hipólito Yrigoyen 3304, CABA",
        "foto1": "../images/5_.jpeg",
        "foto2": "../images/5_2.jpeg",
        "foto3": "../images/5_3.jpeg",
        "foto4": "../images/5_4.jpeg",
        "reservas": [],
        "precio": "$25.80",
        "caracteristicas": [500, 5, true, true, true, true, false, true, true, true, true, true, true, true],
        "mapa": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3283.6580083970002!2d-58.416076923503084!3d-34.612808457979675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccaf6933f5827%3A0x1a8c8413cdfa2d0!2sAv.%20Hip%C3%B3lito%20Yrigoyen%203304%2C%20C1208ABN%20Cdad.%20Aut%C3%B3noma%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1716148191992!5m2!1ses-419!2sar",
        "disponible": false,
        "descripcion": "Palacio Almagro Eventos. Siempre en tus mejores momentos. Salon de eventos Sociales, Corporativos e Infantiles.",
    },
    {
        "id": 5,
        "direccion": "Valle 715, CABA",
        "foto1": "../images/6_.jpeg",
        "foto2": "../images/6_2.jpeg",
        "foto3": "../images/6_3.jpeg",
        "foto4": "../images/6_4.jpeg",
        "reservas": [],
        "precio": "$30.80",
        "caracteristicas": [600, 6, true, true, true, true, true, false, true, true, true, true, true, true],
        "mapa": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3283.1912347157327!2d-58.44057262350274!3d-34.62460735860297!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcca48661ba76b%3A0x185b4cad1c9c845!2sValle%20715%2C%20C1424%20Cdad.%20Aut%C3%B3noma%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1716148727908!5m2!1ses-419!2sar",
        "disponible": false,
        "descripcion": "Casa Valle. Podes realizar todo tipo de reuniones, festejos informal (civil, comunión, bautismo, cumpleaños).La casa se alquila Sábado, domingos y feriados durante el día y por la noche hasta las 22hs.",
    },
    {
        "id": 6,
        "direccion": "Av. Corrientes 1900, CABA",
        "foto1": "../images/7_.jpeg",
        "foto2": "../images/7_2.jpeg",
        "foto3": "../images/7_3.jpeg",
        "foto4": "../images/7_4.jpeg",
        "reservas": [],
        "precio": "$35.80",
        "caracteristicas": [700, 7, true, true, true, true, true, true, false, true, true, true, true, true],
        "mapa": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3283.9836755901106!2d-58.393748499999994!3d-34.604574299999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccac1dc9c0c89%3A0xb038bcc23da9b9f8!2sAv.%20Corrientes%201900%2C%20C1045AAO%20Cdad.%20Aut%C3%B3noma%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1716151833850!5m2!1ses-419!2sar",
        "disponible": false,
        "descripcion": "Salón Espacio 14. Lugar ideal para eventos coroporativos, civiles, cumpleaños y casamientos chicos. Capacidad hasta 70 personas.",
    },
    {
        "id": 7,
        "direccion": "Luis María Drago 151, CABA",
        "foto1": "../images/8_.jpeg",
        "foto2": "../images/8_2.jpeg",
        "foto3": "../images/8_3.jpeg",
        "foto4": "../images/8_4.jpeg",
        "reservas": [],
        "precio": "$40.80",
        "caracteristicas": [800, 8, true, true, true, true, true, true, true, false, true, true, true, true],
        "mapa": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.0617324825084!2d-58.43853772350344!3d-34.60260045744035!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcca7272c22b5b%3A0x103bb69ef0a79dea!2sLuis%20Mar%C3%ADa%20Drago%20151%2C%20C1414%20Villa%20Crespo%2C%20Cdad.%20Aut%C3%B3noma%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1716152153805!5m2!1ses-419!2sar",
        "disponible": false,
        "descripcion": "Rufino Eventos. 10 años acompañando a cada persona en su momento especial. Salones en Palermo y Villa Crespo elegidos y ambientados con mucho amor y dedicación",
    },


];*/


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

//retorna false si hay un campo vacio
function camposValidos() {
    const nombre = document.querySelector("#nombre");
    const apellido = document.querySelector("#apellido");
    const correo = document.querySelector("#email");
    const telefono = document.querySelector("#telefono");
    const cantidad = document.querySelector("#cantidad");
    const tipo_evento = document.querySelector("#tipo_evento");
    if ((nombre.value) === "") return false;
    if ((apellido.value) === "") return false;
    if ((correo.value) === "") return false;
    if ((telefono.value) === "") return false;
    if ((cantidad.value) === "") return false;
    if ((tipo_evento.value) === "") return false;
    return true;
}
function obtenerDatos() {
    let validacion = camposValidos();
    if (!validacion) {
        alert("Todos los campos son obligatorios, por favor llene todos los campos correctamente.");
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