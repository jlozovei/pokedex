import styled from 'styled-components';

import { colors, viewports } from 'assets/styled/tokens';

export const StyledPokeCard = styled.div`
  position: relative;
  padding: 1rem;
  border: 1px solid ${colors.grey};
  border-radius: 5px;
  text-align: center;

  img {
    margin: 0 auto 1rem;
  }

  h1 {
    font-size: 1.875rem;
  }

  @media screen and (min-width: ${viewports.tablet}) {
    padding: 2rem;

    img {
      margin-bottom: 2rem;
    }
  }
`;
