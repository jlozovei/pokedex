import React, { useState, useEffect } from 'react';
import { Link, useParams, useHistory } from 'react-router-dom';

import { useContextState, useContextDispatch } from 'store';
import { getGenerationByName } from 'services';

import { titlecase } from 'helpers/strings';
import { pokemonImage, formatGenerationName } from 'helpers/pokemons';

import { Page } from 'containers/Page';
import { PokemonType } from 'components/PokemonType';
import { Tabs, TabsNavigation, TabsContent, TabPane } from 'components/Tabs';
import { ResponsiveTable } from 'components/ResponsiveTable';
import { Loader } from 'components/Loader';

import { StyledBody, StyledInfoGroup, StyledList } from './styled';

const Generation = () => {
  const dispatch = useContextDispatch();
  const { currentGeneration } = useContextState();

  const { generationId } = useParams();
  const routerHistory = useHistory();

  const [tabActive, setTabActive] = useState(0);
  const [isLoadingGenerationData, setIsLoadingGenerationData] = useState(true);

  useEffect(() => {
    getGenerationByName(generationId)
      .then((response) => {
        const { data } = response;

        if (!data) {
          routerHistory.push('/404');
        } else {
          dispatch({
            type: 'currentGeneration',
            value: data
          });

          setTimeout(() => {
            setIsLoadingGenerationData(false);
          }, 1000);
        }
      })
      .catch((err) => {
        console.error(err);
        routerHistory.push('/404');
      });
  }, [generationId, routerHistory, dispatch]);

  return (
    <Page>
      <StyledBody />

      {currentGeneration?.name && <h1>{formatGenerationName(currentGeneration.name)}</h1>}

      <Tabs>
        <TabsNavigation
          items={[
            {
              label: 'Generation Info',
              onClick: () => setTabActive(0),
              active: tabActive === 0
            },
            {
              label: 'Generation Species',
              onClick: () => setTabActive(1),
              active: tabActive === 1
            }
          ]}
        />

        <TabsContent>
          <TabPane data-testid="info-tab" active={tabActive === 0}>
            {isLoadingGenerationData ? (
              <Loader size="md" />
            ) : (
              <React.Fragment>
                <ResponsiveTable>
                  <table>
                    <tbody>
                      {currentGeneration?.main_region && (
                        <tr>
                          <td>Main Region</td>
                          <td>{titlecase(currentGeneration.main_region.name)}</td>
                        </tr>
                      )}

                      {currentGeneration?.types && currentGeneration.types.length > 0 && (
                        <tr>
                          <td>Types Available</td>
                          <td>
                            {currentGeneration.types.map(({ name }, index) => {
                              return <PokemonType key={index} type={name} />;
                            })}
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </ResponsiveTable>

                {currentGeneration?.names && currentGeneration.names.length > 0 && (
                  <StyledInfoGroup>
                    <h2>
                      <span role="img" aria-label="Label">
                        🔖
                      </span>{' '}
                      Names in other languages
                    </h2>

                    <ul>
                      {currentGeneration.names.map(({ name, language }, index) => (
                        <li key={index}>
                          {name} ({language.name})
                        </li>
                      ))}
                    </ul>
                  </StyledInfoGroup>
                )}
              </React.Fragment>
            )}
          </TabPane>

          <TabPane data-testid="species-tab" active={tabActive === 1}>
            {isLoadingGenerationData ? (
              <Loader size="md" />
            ) : (
              <React.Fragment>
                {currentGeneration?.pokemon_species &&
                  currentGeneration.pokemon_species.length > 0 && (
                    <StyledList>
                      {currentGeneration.pokemon_species.map(({ name }, index) => (
                        <li key={name}>
                          <Link to={`/pokemon/${name}`}>
                            <img src={pokemonImage(name)} alt={titlecase(name)} />
                            {titlecase(name)}
                          </Link>
                        </li>
                      ))}
                    </StyledList>
                  )}
              </React.Fragment>
            )}
          </TabPane>
        </TabsContent>
      </Tabs>
    </Page>
  );
};

export { Generation };
