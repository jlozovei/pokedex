import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';

import { useContextState, useContextDispatch } from 'store';
import { getPokemonByName, getPokemonSpecies } from 'services';

import { unslugify, titlecase } from 'helpers/strings';
import { padding } from 'helpers/numbers';
import { filterByLanguage } from 'helpers/arrays';
import { kilogramsToPounds, metersToFeet, formatFeet } from 'helpers/units';

import { Page } from 'containers/Page';
import { Progress } from 'components/Progress';
import { PokeCard } from 'components/PokeCard';
import { PokemonType } from 'components/PokemonType';
import { Tabs, TabsNavigation, TabsContent, TabPane } from 'components/Tabs';
import { ResponsiveTable } from 'components/ResponsiveTable';
import { Loader } from 'components/Loader';

import { StyledGrid, StyledColumn, StyledInfoGroup } from './styled';

const Pokemon = () => {
  const dispatch = useContextDispatch();
  const { currentPokemon } = useContextState();

  const { pokemonId } = useParams();
  const routerHistory = useHistory();

  const [tabActive, setTabActive] = useState(0);
  const [hasSearchedForSpecies, setHasSearchedForSpecies] = useState(false);
  const [isLoadingPokemonData, setIsLoadingPokemonData] = useState(true);
  const [isLoadingSpeciesData, setIsLoadingSpeciesData] = useState(false);

  function pokemonGender(genderRate) {
    switch (genderRate) {
      case 0:
        return 'Masculine';
      case -1:
        return 'Genderless';
      case 8:
        return 'Feminine';
      default:
        return 'Masculine and Feminine';
    }
  }

  function getSpecies(id) {
    setIsLoadingSpeciesData(true);

    getPokemonSpecies(id)
      .then((response) => {
        const { data } = response;

        dispatch({
          type: 'species',
          value: data
        });

        setHasSearchedForSpecies(true);

        setTimeout(() => {
          setIsLoadingSpeciesData(false);
        }, 1000);
      })
      .catch((err) => console.error(err));
  }

  useEffect(() => {
    getPokemonByName(pokemonId)
      .then((response) => {
        const { data } = response;

        if (!data) {
          routerHistory.push('/404');
        } else {
          dispatch({
            type: 'currentPokemon',
            value: data
          });

          setTimeout(() => {
            setIsLoadingPokemonData(false);
          }, 1000);
        }
      })
      .catch((err) => {
        console.error(err);
        routerHistory.push('/404');
      });
  }, [pokemonId, routerHistory, dispatch]);

  return (
    <Page>
      <StyledGrid>
        <StyledColumn>
          <PokeCard name={currentPokemon.name}>
            {isLoadingPokemonData && <Loader size="md" />}
          </PokeCard>
        </StyledColumn>

        <StyledColumn>
          <Tabs>
            <TabsNavigation
              items={[
                {
                  label: 'Pokédex Data',
                  onClick: () => setTabActive(0),
                  active: tabActive === 0
                },
                {
                  label: 'Species Data',
                  onClick: () => {
                    if (!hasSearchedForSpecies) {
                      getSpecies(currentPokemon.id);
                    }

                    setTabActive(1);
                  },
                  active: tabActive === 1
                }
              ]}
            />

            <TabsContent>
              <TabPane data-testid="pokedex-tab" active={tabActive === 0}>
                {isLoadingPokemonData ? (
                  <Loader size="md" />
                ) : (
                  <React.Fragment>
                    <StyledInfoGroup>
                      <ResponsiveTable>
                        <table>
                          <tbody>
                            <tr>
                              <td>National Nº</td>
                              <td>
                                <strong>{padding(currentPokemon.id)}</strong>
                              </td>
                            </tr>
                            <tr>
                              <td>Base Experience</td>
                              <td>{currentPokemon.base_experience}</td>
                            </tr>
                            <tr>
                              <td>Type</td>
                              <td>
                                {currentPokemon?.types &&
                                  currentPokemon.types.map(({ type }, index) => (
                                    <PokemonType key={index} type={type.name} />
                                  ))}
                              </td>
                            </tr>
                            <tr>
                              <td>Height</td>
                              <td>
                                {currentPokemon.height / 10}m (
                                {formatFeet(metersToFeet(currentPokemon.height / 10))})
                              </td>
                            </tr>
                            <tr>
                              <td>Weight</td>
                              <td>
                                {currentPokemon.weight / 10}kg (
                                {kilogramsToPounds(currentPokemon.weight / 10)}
                                lbs)
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </ResponsiveTable>
                    </StyledInfoGroup>

                    <StyledInfoGroup>
                      <h2>
                        <span role="img" aria-label="Joystick">
                          🕹️
                        </span>{' '}
                        Abilities
                      </h2>

                      <ol>
                        {currentPokemon.abilities &&
                          currentPokemon.abilities.map(({ is_hidden, ability }, index) => (
                            <li key={index} className={is_hidden ? 'hidden' : ''}>
                              {titlecase(unslugify(ability.name))}{' '}
                              {is_hidden && <span>(hidden)</span>}
                            </li>
                          ))}
                      </ol>
                    </StyledInfoGroup>

                    <StyledInfoGroup>
                      <h2>
                        <span role="img" aria-label="Statistics">
                          📈
                        </span>{' '}
                        Base Stats
                      </h2>

                      <ResponsiveTable>
                        <table>
                          <tbody>
                            {currentPokemon.stats &&
                              currentPokemon.stats.map(({ base_stat, stat }, index) => (
                                <tr key={index}>
                                  <td style={{ width: '30%' }}>
                                    {titlecase(unslugify(stat.name))}
                                  </td>
                                  <td style={{ width: '25%' }} className="numeric">
                                    {base_stat}
                                  </td>
                                  <td>
                                    <Progress value={base_stat} />
                                  </td>
                                </tr>
                              ))}
                          </tbody>
                        </table>
                      </ResponsiveTable>
                    </StyledInfoGroup>
                  </React.Fragment>
                )}
              </TabPane>

              <TabPane data-testid="species-tab" active={tabActive === 1}>
                {isLoadingSpeciesData ? (
                  <Loader size="md" />
                ) : (
                  <React.Fragment>
                    {currentPokemon.species_info && (
                      <React.Fragment>
                        <StyledInfoGroup>
                          <ResponsiveTable>
                            <table>
                              <tbody>
                                <tr>
                                  <td>Base Friendship</td>
                                  <td>{currentPokemon.species_info.base_happiness}</td>
                                </tr>
                                <tr>
                                  <td>Capture Rate</td>
                                  <td>{currentPokemon.species_info.capture_rate}</td>
                                </tr>

                                {currentPokemon.species_info?.growth_rate && (
                                  <tr>
                                    <td>Growth Rate</td>
                                    <td>
                                      {titlecase(
                                        unslugify(currentPokemon.species_info.growth_rate.name)
                                      )}
                                    </td>
                                  </tr>
                                )}

                                {currentPokemon.species_info?.genera &&
                                  currentPokemon.species_info?.genera.length > 0 && (
                                    <tr>
                                      <td>Species</td>
                                      <td>
                                        {
                                          filterByLanguage({
                                            source: currentPokemon.species_info.genera
                                          })[0]['genus']
                                        }
                                      </td>
                                    </tr>
                                  )}

                                <tr>
                                  <td>Gender</td>
                                  <td>{pokemonGender(currentPokemon.species_info.gender_rate)}</td>
                                </tr>

                                {currentPokemon.species_info?.egg_groups &&
                                  currentPokemon.species_info?.egg_groups.length > 0 && (
                                    <tr>
                                      <td>Egg Groups</td>
                                      <td>
                                        {currentPokemon.species_info.egg_groups.map(
                                          ({ name }, index) => (
                                            <React.Fragment key={index}>
                                              {titlecase(name)}
                                              {index + 1 <
                                                currentPokemon.species_info.egg_groups.length && (
                                                <React.Fragment>, </React.Fragment>
                                              )}
                                            </React.Fragment>
                                          )
                                        )}
                                      </td>
                                    </tr>
                                  )}

                                {currentPokemon.species_info.generation && (
                                  <tr>
                                    <td>Generation</td>
                                    <td>
                                      {titlecase(
                                        unslugify(currentPokemon.species_info.generation.name)
                                      )}
                                    </td>
                                  </tr>
                                )}
                              </tbody>
                            </table>
                          </ResponsiveTable>
                        </StyledInfoGroup>

                        {currentPokemon.species_info?.names &&
                          currentPokemon.species_info?.names.length > 0 && (
                            <StyledInfoGroup>
                              <h2>
                                <span role="img" aria-label="Label">
                                  🔖
                                </span>{' '}
                                Names in other languages
                              </h2>

                              <ul>
                                {currentPokemon.species_info.names.map(
                                  ({ name, language }, index) => (
                                    <li key={index}>
                                      {name} ({language.name})
                                    </li>
                                  )
                                )}
                              </ul>
                            </StyledInfoGroup>
                          )}

                        {currentPokemon.species_info?.pokedex_numbers &&
                          currentPokemon.species_info?.pokedex_numbers.length > 0 && (
                            <StyledInfoGroup>
                              <h2>
                                <span role="img" aria-label="Entries">
                                  📚
                                </span>{' '}
                                Pokédex Entries
                              </h2>

                              <ResponsiveTable>
                                <table>
                                  <tbody>
                                    {currentPokemon.species_info.pokedex_numbers.map(
                                      ({ pokedex, entry_number }, index) => (
                                        <tr key={index}>
                                          <td>{titlecase(unslugify(pokedex.name))}</td>
                                          <td className="numeric">{padding(entry_number)}</td>
                                        </tr>
                                      )
                                    )}
                                  </tbody>
                                </table>
                              </ResponsiveTable>
                            </StyledInfoGroup>
                          )}
                      </React.Fragment>
                    )}
                  </React.Fragment>
                )}
              </TabPane>
            </TabsContent>
          </Tabs>
        </StyledColumn>
      </StyledGrid>
    </Page>
  );
};

export { Pokemon };
