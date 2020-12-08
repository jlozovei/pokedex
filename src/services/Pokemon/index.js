import { PokeAPI } from 'services';

export const getPokemons = () => {
  return PokeAPI.get(`/pokemon`);
};

export const getPokemonByName = (name) => {
  if (!name) throw new Error('getPokemonByName need a name argument');

  return PokeAPI.get(`/pokemon/${name}`);
};

export const getPokemonSpecies = (id) => {
  if (!id) throw new Error('getPokemonSpecies need a id argument');

  return PokeAPI.get(`/pokemon-species/${id}`);
};
