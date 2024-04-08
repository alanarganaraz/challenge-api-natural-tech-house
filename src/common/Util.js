const config = require('../../env.secrets.json');

const createError = (status = 500, message = 'Ha ocurrido un error.') => {
  return {
    status: status,
    data: {
      error: true,
      status: status,
      message: message
    }
  };
};

const formatPokemonDetails = (pokemonData) => {
  const pokemonTypes = [];
  const pokemonAbilities = [];
  const pokemonStats = {};
  const pokemonImage = pokemonData.sprites.front_default ? pokemonData.sprites.front_default : config.defaultPokemonImage;
  
  if (pokemonData && pokemonData.types) { 
    pokemonData.types.forEach(type => {
      pokemonTypes.push(type.type.name)
    });
  }

  if (pokemonData && pokemonData.stats) {
    pokemonData.stats.forEach(stat => {
      pokemonStats[stat.stat.name] = stat.base_stat;
    });
  }

  if (pokemonData && pokemonData.abilities) {
    pokemonData.abilities.forEach(ability => {
      pokemonAbilities.push(ability.ability.name)
    });
  }

  const pokemonDetail = {
    id: pokemonData.id,
    image: pokemonImage,
    name: pokemonData.name,
    height: pokemonData.height,
    weight: pokemonData.weight,
    type: pokemonTypes,
    abilities: pokemonAbilities,
    stats: pokemonStats
  }

  return pokemonDetail;
}

module.exports = {
  createError,
  formatPokemonDetails
}
