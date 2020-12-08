import React from 'react';
import PropTypes from 'prop-types';

import { titlecase } from 'helpers/strings';

import { StyledPokeCard } from './styled';

const PokeCard = ({ name }) => {
  return (
    <StyledPokeCard>
      {/* sprites from the PokeAPI are too small :( */}
      <img src={`https://img.pokemondb.net/artwork/${name}.jpg`} alt={name} />

      <h1>{titlecase(name)}</h1>
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
