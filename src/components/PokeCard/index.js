import React from 'react';
import PropTypes from 'prop-types';

import { titlecase } from 'helpers/strings';
import { pokemonImage } from 'helpers/pokemons';

import { StyledPokeCard } from './styled';

const PokeCard = ({ name }) => {
  return (
    <StyledPokeCard>
      <img src={pokemonImage(name)} alt={titlecase(name)} />

      <h1 data-testid="pokemon-name">{titlecase(name)}</h1>
    </StyledPokeCard>
  );
};

export { PokeCard };

PokeCard.defaultProps = {
  name: 'bulbasaur'
};

PokeCard.propTypes = {
  name: PropTypes.string.isRequired
};
