import { PokeAPI } from 'services';

export const getGenerations = () => {
  return PokeAPI.get(`/generation`);
};

export const getGenerationByName = (name) => {
  if (!name) throw new Error('getGenerationByName need a name argument');

  return PokeAPI.get(`/generation/${name}`);
};
