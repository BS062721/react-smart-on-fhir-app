import React, { Component } from 'react';
import root from 'window-or-global'
import 'fhirclient';
class Demo extends Component{
    constructor(props) {
        super(props);
        this.state = {};
      }
      componentDidMount(){
        root.FHIR.oauth2.ready((smart) => {
            console.log("smart in demo")
            console.log(smart)
            this.setState({ 
                smartData: JSON.parse(JSON.stringify(smart)).patient.id
              })
        });
      }
    render(){
        //const data = localStorage.getItem('smartObject');
        console.log("render called")
        //const res = JSON.parse(data)
        return(
                <div>
                    <h1>Demo!!</h1>
                    <p>patient id: {this.state.smartData}</p>
                </div>
            );
    }
}
export default Demo;