import React from 'react';
import PropTypes from 'prop-types';

import { titlecase } from 'helpers/strings';
import { pokemonImage } from 'helpers/pokemons';

import { StyledPokeCard } from './styled';

const PokeCard = ({ name, children }) => {
  return (
    <StyledPokeCard>
      {children ? (
        children
      ) : (
        <React.Fragment>
          <img src={pokemonImage(name)} alt={titlecase(name)} />

          <h1 data-testid="pokemon-name">{titlecase(name)}</h1>
        </React.Fragment>
      )}
    </StyledPokeCard>
  );
};

export { PokeCard };

PokeCard.defaultProps = {
  name: 'bulbasaur',
  children: false
};

PokeCard.propTypes = {
  name: PropTypes.string.isRequired,
  children: PropTypes.node
};
