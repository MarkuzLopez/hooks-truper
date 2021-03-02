import React from 'react';
import LoginUSer from './components/Login';
import Home from './components/Home';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const Routex = () => {
    return ( 
        <Router>
            <div className="container">
            <Switch>
                <Route exact path='/' component={LoginUSer} />
                <Route exact path='/home' component={Home} />
            </Switch>
            </div>
        </Router>
     );
}
 
export default Routex;