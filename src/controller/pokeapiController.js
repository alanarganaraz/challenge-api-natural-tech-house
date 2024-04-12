const { createError } = require("../common/Util");
const { getAllPokemon, getPokemonByName, getPokemonByType } = require("../services/pokeapiServices")

const getAllPokemonController = async (req, res) => {
  const { offset, limit } = req.query;
  try {
    const data = await getAllPokemon(offset, limit);
    return res.status(200).send(data);
  } catch (error) {
    return res.status(error.status).send({ error });
  }
};

const getPokemonByTypeController = async (req, res) => {
  let { pokemonType } = req.query;

  try {
    if (!req.query.hasOwnProperty('pokemonType') || Object.keys(req.query).length !== 1) {
        throw createError(502, 'Invalid Query Param, only pokemonType is valid.')
    }
    pokemonType = pokemonType.toLowerCase();
    const data = await getPokemonByType(pokemonType);
    return res.status(200).send(data);
  } catch (error) {
    return res.status(error.status).send({ error });
  }
};

const getPokemonByNameController = async (req, res) => {
  let { pokemonName } = req.query;

  try {
    if (!req.query.hasOwnProperty('pokemonName') || Object.keys(req.query).length !== 1) {
        throw createError(502, 'Invalid Query Param, only pokemonName is valid.')
    }
    pokemonName = pokemonName.toLowerCase();
    const data = await getPokemonByName(pokemonName);
    return res.status(200).send([data]);
  } catch (error) {
    return res.status(error.status).send({ error });
  }
};

module.exports = {
  getAllPokemonController,
  getPokemonByTypeController,
  getPokemonByNameController
};
