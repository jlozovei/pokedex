import React from 'react';
import PropTypes from 'prop-types';

import { StyledPokemonType } from './styled';

const PokemonType = ({ type }) => {
  return <StyledPokemonType type={type}>{type}</StyledPokemonType>;
};

export { PokemonType };

PokemonType.defaultProps = {
  type: 'pokemon-type'
};

PokemonType.propTypes = {
  type: PropTypes.string.isRequired
};
