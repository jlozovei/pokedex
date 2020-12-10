import { pokemons } from 'constants/pokemons';
import { randomInt } from 'helpers/numbers';

const pokemonImage = (name) => {
  if (!name) {
    throw new Error('pokemonImage need a name argument');
  }

  // sprites from the PokeAPI are too small :(
  return `https://img.pokemondb.net/artwork/${name}.jpg`;
};

const formatGenerationName = (name) => {
  const gen = name.split('-')[1];

  return `Generation ${gen.toUpperCase()}`;
};

const getRandomPokemonName = () => {
  return pokemons[randomInt(0, pokemons.length - 1)];
};

export { pokemonImage, formatGenerationName, getRandomPokemonName };
