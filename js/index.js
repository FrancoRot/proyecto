
let pagina = 1;


function renderPublicacion(publicacion,contador,pagina){

  let html = `
  <article class="card-df">
  <a href="#">
      <figure>

          <img class="d-block w-100" id="imagen1" src="${publicacion.foto1}" onclick=hizoClick(${contador}); alt="Salón.">

      </figure>
  </a>

  <div class="card-df-content">
      <h3 id="direccion1"></h3>
      <p id="presentacion1" >${publicacion.presentacion}</p>
      <a href="pages/detalle.html?id=${publicacion.id}">leer mas</a>

  </div>
</article>`
return html;
}

function hizoClick(numero){
    console.log("numero: " + numero);
    window.location.href = "pages/detalle.html?id=" + numero;
}

//document.addEventListener("DOMContentLoaded", inicializacion);
// el codigo inicia : recorre el array y envia cada objeto a la funcion 
// para armar el html de cada publicacion y despues lo mete en el html
(async () => {
  try {

     let sectionPublicaciones = document.querySelector('#seccionPublicaciones');
     for(let i=0;i<datos.length;i++){
      let html = renderPublicacion(datos[i],i,pagina);
      sectionPublicaciones.insertAdjacentHTML('beforeend',html)
     }

  } catch (error) {
      console.error('Hubo un error al obtener los datos:', error);
  }
})();
