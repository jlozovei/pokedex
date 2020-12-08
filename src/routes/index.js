import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Home } from 'pages/Home';
import { Details } from 'pages/Details';
import { Page404 } from 'pages/404';

const Routes = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/:name" component={Details} />

      <Route path="*" component={Page404} />
    </Switch>
  </Router>
);

export { Routes };