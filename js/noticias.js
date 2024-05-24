/*let titulo1,titulo2,titulo3,titulo4,titulo5=null;
let textoPublicacion1,textoPublicacion2,textoPublicacion3,textoPublicacion4,textoPublicacion5=null;
let imagen1,imagen2,imagen3,imagen4,imagen5=null;
let fechaNoticia1,fechaNoticia2,fechaNoticia3,fechaNoticia4,fechaNoticia5=null;
inicializacion();
let texto1Largo,texto2Largo,texto3Largo,texto4Largo,texto5Largo=null;
let texto1Cortado,texto2Cortado,texto3Cortado,texto4Cortado,texto5Cortado=null;



// publicacion 1

mostrarTitulo(titulo1,noticias[0].titulo);
// se asigna el texto largo de la BD,a la variable
texto1Largo=asignarTexto(texto1Largo,noticias[0].texto);
// se corta el texto largo para obtener uno mas corto y mostrarlo
texto1Cortado = cortarTexto(texto1Cortado,texto1Largo);
mostrarTexto(textoPublicacion1,texto1Cortado);
let textoLargo1 = false;
// se asigna la fecha extraida de la BD,a la variable y mostrarla
fechaNoticia1=asignarFecha(fechaNoticia1,noticias[0].fecha);
// se asigna la imagen extraida de la BD,a la variable y mostrarla
imagen1=asignarImagen(imagen1,noticias[0].imagen);

// publicacion 2
mostrarTitulo(titulo2,noticias[1].titulo);
texto2Largo=asignarTexto(texto2Largo,noticias[1].texto);
texto2Cortado = cortarTexto(texto2Cortado,texto2Largo);
mostrarTexto(textoPublicacion2,texto2Cortado);
let textoLargo2 = false;
fechaNoticia2=asignarFecha(fechaNoticia2,noticias[1].fecha);
imagen2=asignarImagen(imagen2,noticias[1].imagen);

// publicacion 3
mostrarTitulo(titulo3,noticias[2].titulo);
texto3Largo=asignarTexto(texto3Largo,noticias[2].texto);
texto3Cortado = cortarTexto(texto3Cortado,texto3Largo);
mostrarTexto(textoPublicacion3,texto3Cortado);
let textoLargo3 = false;
fechaNoticia3=asignarFecha(fechaNoticia3,noticias[2].fecha);
imagen3=asignarImagen(imagen3,noticias[2].imagen);

// publicacion 4
mostrarTitulo(titulo4,noticias[3].titulo)
texto4Largo=asignarTexto(texto4Largo,noticias[3].texto);
texto4Cortado = cortarTexto(texto4Cortado,texto4Largo);
mostrarTexto(textoPublicacion4,texto4Cortado);
let textoLargo4 = false;
fechaNoticia4=asignarFecha(fechaNoticia4,noticias[3].fecha);
imagen4=asignarImagen(imagen4,noticias[3].imagen);

// publicacion 5
mostrarTitulo(titulo5,noticias[4].titulo)
texto5Largo=asignarTexto(texto5Largo,noticias[4].texto);
texto5Cortado = cortarTexto(texto5Cortado,texto5Largo);
mostrarTexto(textoPublicacion5,texto5Cortado);
let textoLargo5 = false;
fechaNoticia5=asignarFecha(fechaNoticia5,noticias[4].fecha);
imagen5=asignarImagen(imagen5,noticias[4].imagen);

function inicializacion(){
    imagen1 = document.getElementById('imagen1');
    imagen2 = document.getElementById('imagen2');
    imagen3 = document.getElementById('imagen3');
    imagen4 = document.getElementById('imagen4');
    imagen5 = document.getElementById('imagen5');

    titulo1 = document.getElementById('titulo1');
    titulo2 = document.getElementById('titulo2');
    titulo3 = document.getElementById('titulo3');
    titulo4 = document.getElementById('titulo4');
    titulo5 = document.getElementById('titulo5');

    textoPublicacion1 = document.getElementById("txtNoticias1");
    textoPublicacion2 = document.getElementById("txtNoticias2");
    textoPublicacion3 = document.getElementById("txtNoticias3");
    textoPublicacion4 = document.getElementById("txtNoticias4");
    textoPublicacion5 = document.getElementById("txtNoticias5");

    fechaNoticia1 = document.getElementById("fechaNoticias1");
    fechaNoticia2 = document.getElementById("fechaNoticias2");
    fechaNoticia3 = document.getElementById("fechaNoticias3");
    fechaNoticia4 = document.getElementById("fechaNoticias4");
    fechaNoticia5 = document.getElementById("fechaNoticias5");
    
}
function asignarTitulo(tituloN,tiuloBD){
    tituloN = tiuloBD;
    return tituloN;
}
function mostrarTitulo(tituloN,titulo){
    tituloN.textContent = titulo;
}
function asignarTexto(textoNlargo,texto){
    textoNlargo = texto;
    return textoNlargo;
}
function cortarTexto(textoCortado,texto){
    textoCortado = texto.split(" ").slice(0, 20).join(" ");
    return textoCortado;
}
function mostrarTexto(textoPublicacionN,textoNCortado){
    textoPublicacionN.textContent = textoNCortado + "...";
}
function asignarFecha(fechaNoticiaN,fecha){
    fechaNoticiaN.textContent = "Publicado " + fecha;
    return fechaNoticiaN;
}
function asignarImagen(imagenN,imagen){
    imagenN.src = imagen;
    return imagenN;
}

function verPublicacion(numero) {
    switch (numero) {
        case 0:
            textoLargo1 = publicacion(textoLargo1, textoPublicacion1, texto1Largo, texto1Cortado)
            break;
        case 1:
            textoLargo2 = publicacion(textoLargo2, textoPublicacion2, texto2Largo, texto2Cortado)
            break;
        case 2:
            textoLargo3 = publicacion(textoLargo3, textoPublicacion3, texto3Largo, texto3Cortado)
            break;
        case 3:
            textoLargo4 = publicacion(textoLargo4, textoPublicacion4, texto4Largo, texto4Cortado)
            break;
        case 4:
            textoLargo5 = publicacion(textoLargo5, textoPublicacion5, texto5Largo, texto5Cortado)
            break;
        default:
            break;
    }

}
// cambia el texto segun corresponda si es largo o corto
function publicacion(esLargo, publicacionN, texto, palabras20) {
    if (esLargo === true) {// tiene texto largo entonces pone texto corto 
        publicacionN.textContent = palabras20 + "...";
        esLargo = false;
    } else { // tiene texto cortado entonces pone el texto largo
        publicacionN.textContent = texto;
        esLargo = true;
    }
    return esLargo;
}*/
//inicio();
/*function inicio(){
    console.log(noticias)
    console.log(noticias.length)
    noticias.forEach((noticia)=> {
        console.log("id: " + noticia.id );
    });
}*/
// Función para cargar las noticias en el HTML
function cargarNoticias() {
    for (let i = 0; i < noticias.length; i++) {
        let noticia = noticias[i];
        document.getElementById("titulo" + (i + 1)).textContent = noticia.titulo;
        document.getElementById("txtNoticias" + (i + 1)).textContent = cortarTexto(noticia.texto)+ " ...";
        document.getElementById("imagen" + (i + 1)).src = noticia.imagen;
        document.getElementById("fechaNoticias" + (i + 1)).textContent = "Publicado " + noticia.fecha;
    }
}
function verPublicacion(numero) {
    let boton = document.getElementById("boton"+(numero))
    let texto = document.getElementById("txtNoticias" + (numero + 1)).textContent;
    let cantidadPalabras = contarPalabras(texto);
    if (cantidadPalabras <= 21) {
        boton.textContent = "ver menos";
        document.getElementById("txtNoticias" + (numero + 1)).textContent = noticias[numero].texto;
    } else {
        boton.textContent = "ver mas";
        document.getElementById("txtNoticias" + (numero + 1)).textContent = cortarTexto(noticias[numero].texto)+ " ...";
    }

}
function cortarTexto(texto) {
    let textoCortado = texto.split(" ").slice(0, 20).join(" ");
    return textoCortado;
}
function contarPalabras(texto) {
    // Utiliza el método split() para dividir el texto en palabras
    let palabras = texto.trim().split(/\s+/);
    // Devuelve la longitud del array de palabras
    return palabras.length;
}
cargarNoticias();
// Llama a la función cargarNoticias cuando el DOM esté completamente cargado
//document.addEventListener("DOMContentLoaded", cargarNoticias);