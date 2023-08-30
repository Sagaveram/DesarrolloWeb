
const url = "https://rickandmortyapi.com/api/character";

async function fetchData(characterIndex) {
  try {
    const response = await fetch(url, { method: "GET" });
    const data = await response.json();
    const personajes = data.results; // Asumiendo que los personajes están en data.results

    if (personajes.length > characterIndex) {
      const tarjeta1 = document.getElementById("nombre1");
      tarjeta1.innerHTML = ""; // Limpia el contenido previo si lo hubiera

      const nuevaTarjeta = document.createElement("div");
      nuevaTarjeta.className = "card";
      nuevaTarjeta.style = "width:75%";

      const imagen = document.createElement("img");
      imagen.src = personajes[characterIndex].image;

      const nombrePersonaje = document.createElement("p");
      nombrePersonaje.textContent = personajes[characterIndex].name;

      nuevaTarjeta.appendChild(imagen);
      nuevaTarjeta.appendChild(nombrePersonaje);

      tarjeta1.appendChild(nuevaTarjeta);
    } else {
      console.log("Índice de personaje inválido.");
      alert("Fuera de indice")
    }
  } catch (error) {
    console.log("Error fetching data: ", error);
  }
}

const botonMostrar = document.getElementById("botonMostrar");
botonMostrar.addEventListener("click", function () {
  const indiceInput = document.getElementById("indicePersonaje");
  const characterIndex = parseInt(indiceInput.value, 10); // Convierte el valor a entero
  fetchData(characterIndex);
});

const indiceInput = document.getElementById("indicePersonaje");
indiceInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      const characterIndex = parseInt(indiceInput.value, 10);
      fetchData(characterIndex);
    }
  });



  

