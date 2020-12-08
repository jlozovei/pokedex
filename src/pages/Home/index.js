import React, { useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';

import { Context } from 'store';
import { getPokemons } from 'services';

const Home = () => {
  const { globalContext, setGlobalContext } = useContext(Context);
  const { popular } = globalContext;

  useEffect(() => {
    async function popularPokemons() {
      const payload = await getPokemons();
      const { data } = payload;

      setGlobalContext({
        ...globalContext,
        current: {},
        popular: data.results || []
      });

      return data;
    }

    popularPokemons();
  }, []);

  return (
    <div>
      <h1>Home</h1>

      <ul>
        {popular.length > 0 &&
          popular.map(({ name }) => (
            <li key={name}>
              <Link to={`/${name}`}>{name}</Link>
            </li>
          ))}
      </ul>
    </div>
  );
};

export { Home };
