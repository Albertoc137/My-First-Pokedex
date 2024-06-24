const poke_container = document.getElementById("poke-container");
// console.log(poke_container)
const pokemon_count = 150;

const colors = {
  fire: "#FDDFDF",
  grass: "#DEFDE0",
  electric: "#FCF7DE",
  water: "#DEF3FD",
  ground: "#f4e7da",
  rock: "#d5d5d4",
  fairy: "#fceaff",
  poison: "#98d7a5",
  bug: "#f8d5a3",
  dragon: "#97b3e6",
  psychic: "#eaeda1",
  flying: "#F5F5F5",
  fighting: "#E6E0D4",
  normal: "#F5F5F5",
};

const main_types = Object.keys(colors);
console.log(main_types);

const fetchPokemons = async () => {
  for (let id = 1; id <= pokemon_count; id++) {
    //we are going to call a function that makes api call
    await getPokemon(id);
  }
};

const getPokemon = async (id) => {
  //api call to the pokeapi//
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  const response = await fetch(url);
  const data = await response.json();
  //console.log(data);
  createPokemonCard(data);
};

const createPokemonCard = (pokemon) => {
  const pokemonEl = document.createElement("div");
  pokemonEl.classList.add("pokemon");
  //console.log(pokemonE1)

  const pokemonInnerHTML = `
     <div class="img-container">
    <img
      src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}1.png"
      alt=""
    />
  </div>
  <div class="info">
    <span class="number">${pokemon.id}</span>
    <h3 class="name">${pokemon.name}</h3>
    <small class="type">Type <span>${pokemon.types[0].type.name}</span></small>
  </div>
    `;
  pokemonEl.innerHTML = pokemonInnerHTML;
  poke_container.appendChild(pokemonEl);
  //console.log(pokemonEl);
};
fetchPokemons();

/*
<div id="poke-container" class="poke-container">
<!-- be;low will be made in js-->
<div class="pokemon">
  <div class="img-container">
    <img
      src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
      alt=""
    />
  </div>
  <div class="info">
    <span class="number">#001</span>
    <h3 class="name">Balbasaur</h3>
    <small class="type">Type <span>grass</span></small>
  </div>
</div>
</div> 
*/
