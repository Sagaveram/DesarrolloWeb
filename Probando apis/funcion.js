let personajes = [];

function getCharacters(done){
    const results=fetch("https://rickandmortyapi.com/api/character")

    results.then(response => response.json())
    .then(data =>{
        done(data)
    });

}

const url="https://rickandmortyapi.com/api/character";
/*getCharacters(data => {
    console.log(data);
    
});*/
    
async function fetchData() {
  try {
const response = await fetch(url, { method: "GET" });
    const data = await response.json(); // extract JSON from response
    personajes=data;
    let tarjeta1 = document.getElementById("nombre1");
    
    let nuevaTarjeta = document.createElement("div");
    nuevaTarjeta.className="card";
    nuevaTarjeta.style="width:75%";
    console.log(personajes);
    nuevaTarjeta.innerHTML = personajes[0].name;
    
    tarjeta1.appendChild(nuevaTarjeta);
} catch (error) {
console.log("Error fetching data: ", error);
}
 }

const boton1 = document.getElementById("boton1");

boton1.addEventListener("click",fetchData);

  

