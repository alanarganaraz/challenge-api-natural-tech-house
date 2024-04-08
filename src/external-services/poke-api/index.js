const axios = require('axios')
const config = require('../../../env.secrets.json')
const { createError, formatPokemonDetails } = require('../../common/Util')

const getPokemonByName = async (pokemonName) => {
  try {
    const endpoint = `${config.pokeApiBaseUrl}/pokemon/${pokemonName}`
    const response = await axios.get(endpoint)
    const pokemonData = response.data;

    if (pokemonData) {
      const completePokemonData = formatPokemonDetails(pokemonData);
      return completePokemonData
    } else {
      throw createError()
    }
  } catch (err) {
    const status = err.response && err.response.status
    const message = err.message && err.message
    throw createError(status, message)
  }
}

const getPokemonByType = async (offset = 0, limit = 20, pokemonType) => {
  try {
    const endpoint = `${config.pokeApiBaseUrl}/type/${pokemonType}`;
    const response = await axios.get(endpoint);
    const pokemonData = response.data;
    
    if (pokemonData) {
      const pokemonList = pokemonData.pokemon.slice(offset, offset + limit);

      const pokemonDetailsPromises = pokemonList.map(async (pokemon) => {
        const pokemonResponse = await axios.get(pokemon.pokemon.url);
        const pokemonData = pokemonResponse.data;

        const completePokemonData = formatPokemonDetails(pokemonData);

        
        return completePokemonData;
      });

      const pokemonDetails = await Promise.all(pokemonDetailsPromises);
      return pokemonDetails;
    } else {
      throw createError();
    }
  } catch (err) {
    const status = err.response && err.response.status;
    const message = err.message && err.message;
    throw createError(status, message);
  }
};

const getAllPokemon = async (offset = 0, limit = 20) => {
  try {
    const endpoint = `${config.pokeApiBaseUrl}/pokemon?offset=${offset}&limit=${limit}`;
    const response = await axios.get(endpoint);
    const pokemonData = response.data;
    
    if (pokemonData) {
      const pokemonDetailsPromises = pokemonData.results.map(async (pokemon) => {

        const pokemonResponse = await axios.get(pokemon.url);
        const pokemonData = pokemonResponse.data;

        const completePokemonData = formatPokemonDetails(pokemonData);

        
        return completePokemonData;
      });

      const pokemonDetails = await Promise.all(pokemonDetailsPromises);
      return pokemonDetails;
    } else {
      throw createError();
    }
  } catch (err) {
    const status = err.response && err.response.status;
    const message = err.message && err.message;
    throw createError(status, message);
  }
};


module.exports = {
  getPokemonByName,
  getPokemonByType,
  getAllPokemon
}
