import React from 'react';
import './styles/main.scss';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Dashboard from './layout/pages/Dashboard';

const App: React.FC = () => {

  return (
   <Router>
      <Switch>
        <Route path="/dashboard" >
          <Dashboard />
        </Route>
      </Switch>
   </Router>
  );
}

export default App;
