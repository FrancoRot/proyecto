
const formulario = document.getElementById('formulario');
// enlace a todos los inputs del formulario
//const inputs = document.querySelectorAll('#formulario input');


const expresiones = {
	//usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
	//nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	nombre: /^[a-zA-ZáéíóúÁÉÍÓÚüÜ\s]+$/,
    apellido: /^[a-zA-ZáéíóúÁÉÍÓÚüÜ\s]+$/,
    //password: /^.{4,12}$/, // 4 a 12 digitos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{7,14}$/ // 7 a 14 numeros.
}

const campos = {
	//usuario: false,
	nombre: false,
    apellido: false,
	//password: false,
	correo: false,
	telefono: false,
}
function comprobarCampos(){
    const nombre = document.getElementById('nombre');
    const apellido = document.getElementById('apellido');

    console.log(nombre.value)
    comprobarCampo(expresiones.nombre,nombre.value);
   
    
// Verificar nombre
if (comprobarCampo(expresiones.nombre, nombre.value)) {
    // El nombre es válido
    console.log("El nombre es válido")
} else {
    // El nombre no es válido
    console.log("El nombre no es válido")
}

// Verificar correo
if (comprobarCampo(expresiones.correo, correo.value)) {
    // El correo es válido
} else {
    // El correo no es válido
}

// Verificar teléfono
if (comprobarCampo(expresiones.telefono, telefono.value)) {
    // El teléfono es válido
} else {
    // El teléfono no es válido
}
}


function comprobarCampo(expresion, valor) {
    return expresion.test(valor);
}


// 1 * el codigo empieza aca
// se activa cuando se presiona el boton enviar
formulario.addEventListener('submit', (e) => {
	// se quita el comportamiento por defecto del formulario que es recargar la pagina y borrar todo el contenido
	e.preventDefault();
    comprobarCampos();
	
	if(campos.usuario && campos.nombre && campos.password && campos.correo && campos.telefono && terminos.checked ){
		// limpia los campos y muestra el alert
		formulario.reset();
		//alert("formulario correcto");
		
	} else {
		// si algo esta mal muestra un mensaje con letras rojas abajo del formulario
	
	//alert("completar correctamente el fotmulario");
}
});