import React from 'react'; 
import './theme/styles.scss';
import { Router, Switch, Route } from 'react-router-dom';
import Dashboard from './screens/Dashboard/Dashboard';
import Login from './screens/Login/Login';
import history from './hub/history';

function App() {
  return (
    
    <Router history={history}>
      <Switch>
        <Route
          exact
          authState='access'
          path={'/dashboard'}
          component={Dashboard}
          layout
        />
        <Route
          exact
          authState='initial'
          path={'/'}
          component={Login}
          layout
        />
      </Switch>
    </Router>      
  );
}

export default App;
