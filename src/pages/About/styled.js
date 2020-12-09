import styled from 'styled-components';

import { colors } from 'assets/styled/tokens';

export const StyledContentContainer = styled.div`
  width: 80%;
  max-width: 48rem;
  padding: 4rem 0;

  h1 {
    margin-bottom: 2rem;
    font-size: 3rem;
  }

  h2,
  h3,
  h4 {
    margin-top: 2rem;
    margin-bottom: 1rem;
  }

  p + p {
    margin-top: 1rem;
  }

  a {
    color: ${colors.blue};
  }

  ul {
    margin: 1rem 0;

    li {
      list-style: disc inside;
    }
  }
`;
