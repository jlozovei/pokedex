import React, { useState, useEffect, useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import { Context } from 'store';
import { getPokemons, getPokemonByName } from 'services';

import { pokemons } from 'constants/pokemons';
import { titlecase } from 'helpers/strings';
import { pokemonImage } from 'helpers/pokemons';
import { randomInt } from 'helpers/numbers';

import { Page } from 'containers/Page';
import { Container } from 'containers/Container';
import { Loader } from 'components/Loader';
import { StyledForm, StyledInput, StyledSubmit } from 'assets/styled/components/Form';

import { StyledSearchContainer, StyledListContainer } from './styled';

const Home = () => {
  const { globalContext, setGlobalContext } = useContext(Context);
  const { firstTwelve } = globalContext;

  const [randomPokemonName, setRandomPokemonName] = useState('');
  const [formError, setFormError] = useState('');
  const [isLoadingPokemons, setIsLoadingPokemons] = useState(true);
  const [isFetchingPokemonData, setIsFetchingPokemonData] = useState(false);

  const { register, handleSubmit } = useForm();
  const routerHistory = useHistory();

  const onSubmit = async (values) => {
    const { searchterm } = values;
    const pokemonName = searchterm.toLowerCase();

    setIsFetchingPokemonData(true);

    getPokemonByName(pokemonName)
      .then((response) => {
        const data = response?.data || false;

        if (data) {
          setFormError('');
          routerHistory.push(`/pokemon/${pokemonName}`);
        } else {
          setFormError(`No Pokémon found with ${searchterm}. Try once again!`);
        }
      })
      .catch((err) => {
        console.error(err);
        setFormError(`No Pokémon found with ${searchterm}. Try once again!`);
      });
  };

  useEffect(() => {
    async function firstTwelvePokemons() {
      try {
        const payload = await getPokemons();
        const data = payload?.data || {};

        if (data) {
          setGlobalContext({
            ...globalContext,
            current: {},
            firstTwelve: data?.results || []
          });
        }

        setTimeout(() => {
          setIsLoadingPokemons(false);
        }, 1000);

        return data;
      } catch (err) {
        console.error(err);
      }
    }

    firstTwelvePokemons();

    setRandomPokemonName(titlecase(pokemons[randomInt(0, pokemons.length - 1)]));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Page fluid={true}>
      <StyledSearchContainer>
        <Container>
          <h1>
            Search your{' '}
            <span
              role="img"
              className="pokemon-logo"
              aria-label="Pokémon"
              data-testid="pokemon-logo"
            >
              poke
            </span>{' '}
          </h1>

          <StyledForm onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="searchterm">Type the name of a Pokémon:</label>
            <StyledInput
              id="searchterm"
              name="searchterm"
              type="text"
              placeholder={randomPokemonName}
              ref={register({ required: true })}
            />
            <StyledSubmit type="submit" isLoading={isFetchingPokemonData}>
              Search
              {isFetchingPokemonData && <Loader size="sm" />}
            </StyledSubmit>

            <small data-testid="form-error">{formError}</small>
          </StyledForm>
        </Container>
      </StyledSearchContainer>

      <StyledListContainer>
        <Container>
          <h2>Or try one of those:</h2>

          {isLoadingPokemons ? (
            <Loader size="md" />
          ) : (
            <ul>
              {firstTwelve?.length > 0 &&
                firstTwelve.map(({ name }) => (
                  <li key={name}>
                    <Link to={`/pokemon/${name}`}>
                      <img src={pokemonImage(name)} alt={titlecase(name)} />
                      {titlecase(name)}
                    </Link>
                  </li>
                ))}
            </ul>
          )}
        </Container>
      </StyledListContainer>
    </Page>
  );
};

export { Home };
