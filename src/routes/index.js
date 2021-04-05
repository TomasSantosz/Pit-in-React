import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Dashboard from '../pages/Dashboard/';
import Search from '../pages/Search';
import Order from '../pages/Order';
import Profile from '../pages/Profile';

const Routes = () => (
  <Switch>
    <Route path="/" exact component={Dashboard} />
    <Route path="/search" exact component={Search} />
    <Route path="/order" exact component={Order} />
    <Route path="/profile" exact component={Profile} />
  </Switch>
);

export default Routes;
