import { pokemonImage, formatGenerationName, getRandomPokemonName } from 'helpers/pokemons';
import { pokemons } from 'constants/pokemons';

describe('pokemonImage', () => {
  it('should return image URL', () => {
    const image = pokemonImage('mewtwo');

    expect(image).toBe('https://img.pokemondb.net/artwork/mewtwo.jpg');
  });

  it('should throw error', () => {
    expect(() => pokemonImage()).toThrow(Error);
  });
});

describe('formatGenerationName', () => {
  it('should return Generation I', () => {
    const generation = formatGenerationName('generation-i');

    expect(generation).toBe('Generation I');
  });

  it('should return Generation IV', () => {
    const generation = formatGenerationName('generation-iv');

    expect(generation).toBe('Generation IV');
  });
});

describe('getRandomPokemonName', () => {
  it('should return random name', () => {
    const random = getRandomPokemonName();

    expect(pokemons).toContain(random);
  });
});
