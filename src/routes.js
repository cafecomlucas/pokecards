import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Cards from './pages/Cards';

export default function routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/cards" component={Cards} />
      </Switch>
    </BrowserRouter>
  );
}
