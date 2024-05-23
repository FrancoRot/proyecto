
/*
let datos = [
    {
        "id": 1,
        "direccion": "Av. Rivadavia 8328, CABA",
        "foto1": "images/1_.jpeg",
        "foto2": "images/1_2.jpeg",
        "foto3": "images/1_3.jpeg",
        "foto4": "images/1_4.jpeg",
        "mapa":"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3285.235967624149!2d-58.451262400000026!3d-34.572895399999986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcbd062784d91f%3A0x65b2e235c5cc4c10!2sConesa%201003%2C%20C1426AQU%20Cdad.%20Aut%C3%B3noma%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1713504553283!5m2!1ses-419!2sar",
        "disponible": true,
        "descripcion": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex saepe quisquam velit voluptatum modi quibusdam possimus voluptate praesentium dolore aut nam.",
    },
    {
        "id": 2,
        "direccion": "estomba 200, caba",
        "foto1": "images/2_.jpeg",
        "foto2": "images/2_2.jpeg",
        "foto3": "images/2_3.jpeg",
        "foto4": "images/2_4.jpeg",
        "mapa":"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.615974646876!2d-58.47180622492993!3d-34.58858237295977!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb60eb11c36bf%3A0x8a56e8d57e0e4beb!2sEstomba%20200%2C%20C1427COF%20Cdad.%20Aut%C3%B3noma%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1713504623620!5m2!1ses-419!2sar",
        "disponible": false,
        "descripcion": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex saepe quisquam velit voluptatum modi quibusdam possimus cum repudiandae labore!",
    },
    {
        "id": 3,
        "direccion": "arcos 3000, caba",
        "foto1": "images/3_.jpeg",
        "foto2": "images/3_2.jpeg",
        "foto3": "images/3_3.jpeg",
        "foto4": "images/3_4.jpeg",
        "mapa":"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3286.0654304302075!2d-58.461338299999916!3d-34.55189869999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb42841fb30f9%3A0x9dee4624aa4b34f!2sArcos%203000%2C%20C1429%20Cdad.%20Aut%C3%B3noma%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1713504219963!5m2!1ses-419!2sar",
        "disponible": false,
        "descripcion": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex saepe quibusdam possimus voluptate praesentium dolore aut nam amet excepturi eum,abre!",
    },
    {
        "id": 4,
        "direccion": "la pampa 4000, caba",
        "foto1": "images/4_.jpeg",
        "foto2": "images/4_2.jpeg",
        "foto3": "images/4_3.jpeg",
        "foto4": "images/4_4.jpeg",
        "mapa":"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3285.192869148119!2d-58.4723027249307!3d-34.573986072964914!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb670b9371dd7%3A0x9c8063e55f7080d7!2sLa%20Pampa%204000%2C%20C1430BXN%20Cdad.%20Aut%C3%B3noma%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1713504286795!5m2!1ses-419!2sar",
        "disponible": false,
        "descripcion": "Lorem ipsum dolor. Ex saepe quisquam velit voluptatum modi quibusdam possimus voluptate praesentium dolore aut nam amet excepturi eum, repellat ab",
    },
    {
        "id": 5,
        "direccion": "zabala 2200, caba",
        "foto1": "images/5_.jpeg",
        "foto2": "images/5_2.jpeg",
        "foto3": "images/5_3.jpeg",
        "foto4": "images/5_4.jpeg",
        "mapa":"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2323.17745903253!2d-58.44883084466951!3d-34.56699585585618!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb5c58a16fe57%3A0xd9a8d9070c8a66dd!2sZabala%202200%2C%20Cdad.%20Aut%C3%B3noma%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1713551423228!5m2!1ses-419!2sar",
        "disponible": false,
        "descripcion": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex saepe quisquam velit voluptatum modi quibusdam possimus ab distinctio, cum repudiandae labore!",
    },
    {
        "id": 6,
        "direccion": "moldes 600, caba",
        "foto1": "images/6_.jpeg",
        "foto2": "images/6_2.jpeg",
        "foto3": "images/6_3.jpeg",
        "foto4": "images/6_4.jpeg",
        "mapa": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3285.2397463164625!2d-58.449263824930675!3d-34.57279977296538!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb5c3ea652879%3A0x8024ff1002f16338!2sMoldes%20600%2C%20C1426ALB%20Cdad.%20Aut%C3%B3noma%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1713504458243!5m2!1ses-419!2sar",
        "disponible": false,
        "descripcion": "Ex velit voluptatum modi quibusdam possimus voluptate praesentium dolore aut nam amet excepturi eum, repellat ab distinctio, cum repudiandae labore!",
    },
    {
        "id": 7,
        "direccion": "conesa 1003, caba",
        "foto1": "images/7_.jpeg",
        "foto2": "images/7_2.jpeg",
        "foto3": "images/7_2.jpeg",
        "foto4": "images/7_2.jpeg",
        "mapa":"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3285.235967624149!2d-58.451262400000026!3d-34.572895399999986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcbd062784d91f%3A0x65b2e235c5cc4c10!2sConesa%201003%2C%20C1426AQU%20Cdad.%20Aut%C3%B3noma%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1713504553283!5m2!1ses-419!2sar",
        "disponible": true,
        "descripcion": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex saepe quisquam velit voluptatum modi quibusdam possimus voluptate praesentium dolore aut nam.",
    },
    {
        "id": 8,
        "direccion": "estomba 200, caba",
        "foto1": "images/8_.jpeg",
        "foto2": "images/8_2.jpeg",
        "foto3": "images/8_3.jpeg",
        "foto4": "images/8_4.jpeg",
        "mapa":"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.615974646876!2d-58.47180622492993!3d-34.58858237295977!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb60eb11c36bf%3A0x8a56e8d57e0e4beb!2sEstomba%20200%2C%20C1427COF%20Cdad.%20Aut%C3%B3noma%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1713504623620!5m2!1ses-419!2sar",
        "disponible": false,
        "descripcion": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex saepe quisquam velit voluptatum modi quibusdam possimus cum repudiandae labore!",
    },

];
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

    let direccion1 = document.getElementById("direccion1");
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
    direccion8.innerHTML= datos[7].direccion;

    let descripcion1 = document.getElementById("descripcion1");
    let descripcion2 = document.getElementById("descripcion2");
    let descripcion3 = document.getElementById("descripcion3");
    let descripcion4 = document.getElementById("descripcion4");
    let descripcion5 = document.getElementById("descripcion5");
    let descripcion6 = document.getElementById("descripcion6");
    let descripcion7 = document.getElementById("descripcion7");
    let descripcion8 = document.getElementById("descripcion8");
    descripcion1.innerHTML= datos[0].descripcion;
    descripcion2.innerHTML= datos[1].descripcion;
    descripcion3.innerHTML= datos[2].descripcion;
    descripcion4.innerHTML= datos[3].descripcion;
    descripcion5.innerHTML= datos[4].descripcion;
    descripcion6.innerHTML= datos[5].descripcion;
    descripcion7.innerHTML= datos[6].descripcion;
    descripcion8.innerHTML= datos[7].descripcion;
}
*/

function hizoClick(numero){
    console.log("numero: " + numero);
    window.location.href = "pages/detalle.html?id=" + numero;
}