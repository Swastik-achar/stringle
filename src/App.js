import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';

import Home from './Home';

function App() {
  return (
    <Router>
      <Switch>
          <Route path="/home" component={Home} />
          <Redirect from="/" to="/home" /> 
        </Switch>
    </Router>
  );
}

export default App;
