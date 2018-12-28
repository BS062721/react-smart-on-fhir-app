import 'fhirclient';
import React, { Component } from 'react';
import { render } from 'react-dom';
import Demo from './src/Components/Demo' 

console.log('authenticating user...')
alert('ready');
FHIR.oauth2.ready((smart) => {
    alert('ok2');
    render(
           <Demo />
    )
});