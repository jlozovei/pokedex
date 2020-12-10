import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { useContextState, useContextDispatch } from 'store';
import { getGenerations } from 'services';

import { formatGenerationName } from 'helpers/pokemons';

import { Page } from 'containers/Page';
import { Container } from 'containers/Container';
import { Loader } from 'components/Loader';

import { StyledListContainer } from './styled';

const Generations = () => {
  const dispatch = useContextDispatch();
  const { generations } = useContextState();

  const [isLoadingGenerations, setIsLoadingGenerations] = useState(true);

  useEffect(() => {
    async function searchForGenerations() {
      try {
        const payload = await getGenerations();
        const data = payload?.data || {};

        if (data) {
          dispatch({
            type: 'generations',
            value: data?.results || []
          });
        }

        setTimeout(() => {
          setIsLoadingGenerations(false);
        }, 1000);

        return data;
      } catch (err) {
        console.error(err);
      }
    }

    searchForGenerations();
  }, [dispatch]);

  return (
    <Page>
      <StyledListContainer>
        <Container>
          <h1 data-testid="page-title">Generations</h1>

          {isLoadingGenerations ? (
            <Loader size="md" />
          ) : (
            <ul>
              {generations?.length > 0 &&
                generations.map(({ name }) => (
                  <li key={name}>
                    <Link to={`/generation/${name}`}>{formatGenerationName(name)}</Link>
                  </li>
                ))}
            </ul>
          )}
        </Container>
      </StyledListContainer>
    </Page>
  );
};

export { Generations };
