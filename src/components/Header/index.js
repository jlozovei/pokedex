import React from 'react';
import { NavLink } from 'react-router-dom';

import { Container } from 'containers/Container';

import jlozovei from 'assets/images/jlozovei.svg';
import pokeapi from 'assets/images/pokeapi.png';

import { StyledHeader, StyledLogo, StyledNav } from './styled';

const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <StyledLogo>
          <img src={jlozovei} alt="jlozovei" />
          <span>+</span>
          <img src={pokeapi} alt="PokéAPI" />
        </StyledLogo>

        <StyledNav>
          <ul>
            <li>
              <NavLink exact activeClassName="active" to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink exact activeClassName="active" to="/generations">
                Generations
              </NavLink>
            </li>
          </ul>
        </StyledNav>
      </Container>
    </StyledHeader>
  );
};

export { Header };
