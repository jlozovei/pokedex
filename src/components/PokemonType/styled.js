import styled from 'styled-components';
import { darken, lighten } from 'polished';

import { colors } from 'assets/styled/tokens';
import { isAccessibleColor } from 'helpers/colors';

const types = {
  fire: '#f42',
  water: '#39f',
  electric: '#fc3',
  grass: '#7c5',
  ice: '#6cf',
  fighting: '#b54',
  poison: '#a59',
  ground: '#db5',
  flying: '#89f',
  psychic: '#f59',
  bug: '#ab2',
  rock: '#ba6',
  ghost: '#66b',
  dragon: '#76e',
  dark: '#754',
  steel: '#aab',
  fairy: '#e9e'
};

const accessibleFontColor = (backgroundColor) => {
  if (isAccessibleColor(backgroundColor, colors.white)) {
    return colors.white;
  } else {
    return colors.black;
  }
};

export const StyledPokemonType = styled.span`
  display: inline-block;
  margin: 0.25rem;
  padding: 0.125rem 0.5rem;
  background-color: ${(props) =>
    props.type && types[props.type] ? lighten(0.15, types[props.type]) : colors.white};
  border: 1px solid
    ${(props) => (props.type && types[props.type] ? darken(0.15, types[props.type]) : colors.grey)};
  border-radius: 5px;
  font-size: 0.875rem;
  font-weight: bold;
  color: ${(props) =>
    props.type && types[props.type] ? accessibleFontColor(types[props.type]) : colors.black};
  text-transform: uppercase;
  letter-spacing: 0.4px;
`;
