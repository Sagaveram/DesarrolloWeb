const baseUrl = 'https://pokeapi.co/api/v2/';
const pokemonListUrl = baseUrl + 'pokemon';

fetch(pokemonListUrl)
  .then(response => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error('Error en la solicitud:', response.status);
    }
  })
  .then(pokemonData => {
    const pokemonList = document.getElementById('pokemonList');

    pokemonData.results.forEach(async pokemon => {
      const pokemonResponse = await fetch(pokemon.url);
      const pokemonDetails = await pokemonResponse.json();

      const listItem = document.createElement('li');
      const image = document.createElement('img');
      const name = document.createElement('span');

      image.src = pokemonDetails.sprites.front_default;
      name.textContent = pokemon.name;

      listItem.appendChild(image);
      listItem.appendChild(name);
      pokemonList.appendChild(listItem);
    });
  })
  .catch(error => {
    console.error('Error:', error);
  });