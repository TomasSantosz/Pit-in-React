import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Dashboard from '../pages/Dashboard/index';

const Routes = () => (
  <Switch>
    <Route path="/" exact component={Dashboard} />
    <Route path="/pesquisa" exact component={Dashboard} />
    <Route path="/pedidos" exact component={Dashboard} />
    <Route path="/perfil" exact component={Dashboard} />
  </Switch>
);

export default Routes;
