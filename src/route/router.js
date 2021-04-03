import React, { Component } from 'react';

import SellPage from '../Containers/SellPage';
import Home from '../Home'

import { Router, Route , Switch } from 'react-router'


import history from '../utils/history'


class Routes extends Component {
    render(){
        return(
            <div>
                
                <Router history={history}>
                    <div>
                    <Switch >
                        
                        <Route exact path='/' component={Home} />
                        <Route exact path='/sellpage' component={SellPage} /> 
                        
                    </Switch>
                    </div>
                </Router>
            </div>
        )
    }
}

export default Routes;