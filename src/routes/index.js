import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import { Home } from 'pages/Home';
import { About } from 'pages/About';
import { Pokemon } from 'pages/Pokemon';

import { Generations } from 'pages/Generations';
import { Generation } from 'pages/Generation';

import { Page404 } from 'pages/404';

const Routes = () => {
  const isLocal =
    window.location.hostname.includes('localhost') ||
    window.location.hostname.includes('127.0.0.1');

  const basename = isLocal ? '' : '/pokedex';

  return (
    <Router basename={basename}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />

        <Route exact path="/generations" component={Generations} />
        <Route exact path="/generation/:generationId" component={Generation} />

        <Route exact path="/pokemon/:pokemonId" component={Pokemon} />

        <Route path="*" component={Page404} />
      </Switch>
    </Router>
  );
};

export { Routes };
