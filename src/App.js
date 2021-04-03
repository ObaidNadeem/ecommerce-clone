import React from 'react';
import Routes from './route/router'
import { Route, Switch } from 'react-router-dom'
import Home from './Home'
import SellPage from './Containers/SellPage'

const App = () => {

    return (
      <div >
          <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/sellpage' component={SellPage} />
          </Switch>
         
      </div>
    );
  }
  
  export default App;
  