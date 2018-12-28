import 'fhirclient';
import React, { Component } from 'react';
import { render } from 'react-dom';
import Demo from './Components/Demo'
var ReactRouter = require('react-router-dom');
var Route = ReactRouter.Route;
var Router = ReactRouter.BrowserRouter;
var Switch = ReactRouter.Switch;
console.log('user authorized...')
//alert('ready');


FHIR.oauth2.ready((smart) => {
    //alert('inside oauth ready');
    if(smart!=null)
    {window.localStorage.setItem('smartObject', JSON.stringify(smart));}
    location.href='/demo';
    //alert('after oauth ready ');
});