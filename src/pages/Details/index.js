import React, { useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';

import { Context } from 'store';
import { getPokemonByName, getPokemonSpecies } from 'services';

import { unslugify, titleCase } from 'helpers/strings';
import { padding } from 'helpers/numbers';

const Details = () => {
  const { globalContext, setGlobalContext } = useContext(Context);
  const { current } = globalContext;
  const { name } = useParams();

  function filterByLanguage({ source, language = 'en' }) {
    const filter = source.filter((item) => {
      return item.language.name === language;
    });

    return filter;
  }

  function getSpecies(id) {
    getPokemonSpecies(id).then((response) => {
      const { data } = response;

      setGlobalContext({
        ...globalContext,
        current: {
          ...current,
          species_info: data
        }
      }).catch((err) => console.error(err));
    });
  }

  useEffect(() => {
    getPokemonByName(name)
      .then((response) => {
        const { data } = response;

        setGlobalContext({
          ...globalContext,
          current: data
        });
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <h1>Details - {name}</h1>

      {/* sprites from the PokeAPI are too small :( */}
      {current.sprites && <img src={`https://img.pokemondb.net/artwork/${name}.jpg`} alt={name} />}

      <div>
        <h2>Pokedex Data</h2>

        <p>National Nº: {padding(current.id)}</p>
        {current.types && (
          <p>
            Type:{' '}
            <span>
              {current.types.map((item, index) => (
                <span key={index}>{item.type.name}</span>
              ))}
            </span>
          </p>
        )}

        <p>Height: {current.height / 10}m</p>
        <p>Weight: {current.weight / 10}kg</p>
        <p>Base Exp: {current.base_experience}</p>
      </div>

      <div>
        <h2>Abilities</h2>

        <ul>
          {current.abilities &&
            current.abilities.map((item, index) => (
              <li key={index}>
                {titleCase(unslugify(item.ability.name))} {item.is_hidden && <span>(hidden)</span>}
              </li>
            ))}
          <li></li>
        </ul>
      </div>

      <div>
        <h2>Stats</h2>
        <table>
          <tbody>
            {current.stats &&
              current.stats.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>{titleCase(unslugify(item.stat.name))}</td>
                    <td>{item.base_stat}</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>

      <button onClick={() => getSpecies(current.id)}>fetch species data</button>

      {current.species_info && (
        <React.Fragment>
          <div>
            <p>Base Friendship: {current.species_info.base_happiness}</p>
            <p>Capture Rate: {current.species_info.capture_rate}</p>
            <p>Growth Rate: {current.species_info.growth_rate.name}</p>
            <p>Species: {filterByLanguage({ source: current.species_info.genera })[0]['genus']}</p>
          </div>

          <div>
            <h2>Egg Groups</h2>
            {current.species_info.egg_groups.map((item, index) => (
              <p key={index}>{item.name}</p>
            ))}
          </div>

          <div>
            <h2>Names in other languages</h2>
            <ul>
              {current.species_info.names.map((item, index) => (
                <li key={index}>
                  {item.name} ({item.language.name})
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2>Pokedex Entries</h2>
            <ul>
              {current.species_info.pokedex_numbers.map((item, index) => (
                <li key={index}>
                  {titleCase(unslugify(item.pokedex.name))} - {padding(item.entry_number)}
                </li>
              ))}
            </ul>
          </div>
        </React.Fragment>
      )}
    </div>
  );
};

export { Details };
