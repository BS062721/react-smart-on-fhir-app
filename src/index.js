import ReactDOM from "react-dom";
import React, { Component } from 'react';
import Demo from './Components/Demo'
var ReactRouter = require('react-router-dom');
var Route = ReactRouter.Route;
var Router = ReactRouter.BrowserRouter;
var Switch = ReactRouter.Switch;

const routing = (
  <Router>
       <Switch>
           <Route path="/demo" component={Demo} />
       </Switch>
  </Router>
)

ReactDOM.render(routing, document.getElementById('index'));