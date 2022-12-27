import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './main/Home';
import Shop from './main/Shop';

function App() {
  return (
    <Switch>
      <Route exact path="/main/home" component={Home} />
      <Route exact path="/main/shop" component={Shop} />
    </Switch>
  );
}

export default App;

