
inicializacion();

function inicializacion(){
    let imagen1= document.getElementById(`imagen1`);
    let imagen2= document.getElementById(`imagen2`);
    let imagen3= document.getElementById(`imagen3`);
    let imagen4= document.getElementById(`imagen4`);
    let imagen5= document.getElementById(`imagen5`);
    let imagen6= document.getElementById(`imagen6`);
    let imagen7= document.getElementById(`imagen7`);
    let imagen8= document.getElementById(`imagen8`);
    imagen1.src= datos[0].foto1;
    imagen2.src= datos[1].foto1;
    imagen3.src= datos[2].foto1;
    imagen4.src= datos[3].foto1;
    imagen5.src= datos[4].foto1;
    imagen6.src= datos[5].foto1;
    imagen7.src= datos[6].foto1;
    imagen8.src= datos[7].foto1;

   /* let direccion1 = document.getElementById("direccion1");
    let direccion2 = document.getElementById("direccion2");
    let direccion3 = document.getElementById("direccion3");
    let direccion4 = document.getElementById("direccion4");
    let direccion5 = document.getElementById("direccion5");
    let direccion6 = document.getElementById("direccion6");
    let direccion7 = document.getElementById("direccion7");
    let direccion8 = document.getElementById("direccion8");
    direccion1.innerHTML= datos[0].direccion;
    direccion2.innerHTML= datos[1].direccion;
    direccion3.innerHTML= datos[2].direccion;
    direccion4.innerHTML= datos[3].direccion;
    direccion5.innerHTML= datos[4].direccion;
    direccion6.innerHTML= datos[5].direccion;
    direccion7.innerHTML= datos[6].direccion;
    direccion8.innerHTML= datos[7].direccion;*/

    let presentacion1 = document.getElementById("presentacion1");
    let presentacion2 = document.getElementById("presentacion2");
    let presentacion3 = document.getElementById("presentacion3");
    let presentacion4 = document.getElementById("presentacion4");
    let presentacion5 = document.getElementById("presentacion5");
    let presentacion6 = document.getElementById("presentacion6");
    let presentacion7 = document.getElementById("presentacion7");
    let presentacion8 = document.getElementById("presentacion8");
    presentacion1.textContent= datos[0].presentacion;
    presentacion2.textContent= datos[1].presentacion;
    presentacion3.textContent= datos[2].presentacion;
    presentacion4.textContent= datos[3].presentacion;
    presentacion5.textContent= datos[4].presentacion;
    presentacion6.textContent= datos[5].presentacion;
    presentacion7.textContent= datos[6].presentacion;
    presentacion8.textContent= datos[7].presentacion;
}


function hizoClick(numero){
    console.log("numero: " + numero);
    window.location.href = "pages/detalle.html?id=" + numero;
}

/*  // Obtener el contenedor de los artículos
var contenedorArticulos = document.getElementById("contenedor-articulos");

// Iterar sobre el arreglo de datos de los artículos
datosArticulos.forEach(function(articulo, indice) {
  // Crear el artículo
  var nuevoArticulo = document.createElement("article");
  nuevoArticulo.classList.add("card-df");

  // Crear el enlace
  var enlace = document.createElement("a");
  enlace.href = "#";

  // Crear la figura
  var figura = document.createElement("figure");

  // Crear la imagen
  var imagen = document.createElement("img");
  imagen.src = articulo.imagen;
  imagen.alt = "Imagen del artículo " + (indice + 1);
  imagen.onclick = function() {
    hizoClick(indice);
  };

  // Agregar la imagen a la figura
  figura.appendChild(imagen);

  // Agregar la figura al enlace
  enlace.appendChild(figura);

  // Crear el contenido del artículo
  var contenidoArticulo = document.createElement("div");
  contenidoArticulo.classList.add("card-df-content");

  // Agregar el título del artículo
  var titulo = document.createElement("h3");
  titulo.textContent = articulo.titulo;

  // Agregar el texto de presentación del artículo
  var presentacion = document.createElement("p");
  presentacion.textContent = articulo.presentacion;

  // Agregar el enlace "leer más"
  var leerMas = document.createElement("a");
  leerMas.href = "pages/detalle.html?id=" + articulo.id;
  leerMas.textContent = "Leer más";

  // Agregar todos los elementos al contenido del artículo
  contenidoArticulo.appendChild(titulo);
  contenidoArticulo.appendChild(presentacion);
  contenidoArticulo.appendChild(leerMas);

  // Agregar el contenido del artículo al artículo
  nuevoArticulo.appendChild(enlace);
  nuevoArticulo.appendChild(contenidoArticulo);

  // Agregar el artículo al contenedor de artículos
  contenedorArticulos.appendChild(nuevoArticulo);
});
En este código, contenedorArticulos es el elemento HTML que contiene todos tus artículos, identificado por su ID. Debes asegurarte de que tu HTML tenga un elemento con ese ID y que sea el contenedor de tus artículos.

Con este código, puedes agregar dinámicamente tantos artículos como quieras a tu HTML utilizando los datos del arreglo datosArticulos. Cada artículo se crea dinámicamente y se agregan la imagen, el título, el texto de presentación y el enlace "Leer más" correspondientes  */