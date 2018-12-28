import React, { Component } from 'react';
class Demo extends Component{
    render(){
        const data = localStorage.getItem('smartObject');
        console.log(JSON.parse(data))
        const res = JSON.parse(data)
        return(
                <div>
                    <h1>Demo!!</h1>
                    <p>patient id: {res.patient.id}</p>
                </div>
            );
    }
}
export default Demo;