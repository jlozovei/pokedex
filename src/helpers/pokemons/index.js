const pokemonImage = (name) => {
  if (!name) {
    throw new Error('pokemonImage need a name argument');
  }

  // sprites from the PokeAPI are too small :(
  return `https://img.pokemondb.net/artwork/${name}.jpg`;
};

export { pokemonImage };
