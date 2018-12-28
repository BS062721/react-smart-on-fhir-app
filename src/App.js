import React, { Component } from 'react';
var ReactRouter = require('react-router-dom');
import Demo from "./Components/Demo"
var ReactRouter = require('react-router-dom');
var Route = ReactRouter.Route;
var Router = ReactRouter.BrowserRouter;
var Switch = ReactRouter.Switch;

class App extends Component {
    render(){
        return(
            <Router>
                <Switch>
                    <Route path="/demo" component={Demo} />
                </Switch>
            </Router>
        );
    }   
}

export default App;