function miAlertaColumna(){
    alert("Columna añadida con éxito");
    // Crear el elemento <p>
    const nuevoParrafo = document.createElement("p");

    // Crear contenido para el párrafo
    let textoParrafo = document.createTextNode("Este es un nuevo párrafo creado en JavaScript.");

    // Agregar el contenido al párrafo
    nuevoParrafo.appendChild(textoParrafo);

    // Obtener el div existente donde deseas agregar el párrafo
    let divExistente = document.getElementById("agregar");

    // Agregar el párrafo al div
    divExistente.appendChild(nuevoParrafo);
}

function agregarColumna(){
    let contenedor=document.getElementById("container");
    let contenidoHTML=
    `
        <div class="col-sm-12 col-md-5 tarjetas">
          <h1>Columna Prueba</h1>
          <br />
          <div class="card botoncentrado" style="width: 75%;">
            <img src="..\Trello\descarga (1).png" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">Tarjeta 1</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">An item</li>
              <li class="list-group-item">A second item</li>
              <li class="list-group-item">A third item</li>
            </ul>
            <div class="card-body">
              <a href="#" class="card-link">Card link</a>
              <a href="#" class="card-link">Another link</a>
            </div>
          </div>
          <br />
          <div class="card" style="width: 75%;">
            <img src="..\Trello\descarga (1).png" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">An item</li>
              <li class="list-group-item">A second item</li>
              <li class="list-group-item">A third item</li>
            </ul>
            <div class="card-body">
              <a href="#" class="card-link">Card link</a>
              <a href="#" class="card-link">Another link</a>
            </div>
          </div>
          <br />
          <div class="botoncentrado">
            <button type="button" class="btn btn-primary">
              Añadir tarjeta +
            </button>
          </div>
          <br />
        </div>`
        ;
    contenedor.innerHTML=contenidoHTML;

}
const botonColumna=document.getElementById("boton");
console.log(botonColumna);
botonColumna.addEventListener("click", miAlertaColumna);

const boton1=document.getElementById("boton1");
boton1.addEventListener("click",agregarColumna);



