import React, { useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';

import { Context } from 'store';
import { getPokemonByName, getPokemonSpecies } from 'services';

const Details = () => {
  const { globalContext, setGlobalContext } = useContext(Context);
  const { current } = globalContext;
  const { name } = useParams();

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

      {current.sprites && <img src={current.sprites.front_default} alt={name} />}

      <div>
        <p>Order: {current.order}</p>
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
                {item.ability.name} {item.is_hidden && <span>(hidden)</span>}
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
                    <td>{item.stat.name}</td>
                    <td>{item.base_stat}</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export { Details };
