import { pokemonImage } from 'helpers/pokemons';

describe('pokemonImage', () => {
  it('should return image URL', () => {
    const image = pokemonImage('mewtwo');

    expect(image).toBe('https://img.pokemondb.net/artwork/mewtwo.jpg');
  });

  it('should throw error', () => {
    expect(() => pokemonImage()).toThrow(Error);
  });
});
