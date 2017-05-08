import React, { Component } from 'react';
import DateSelection from './DateSelection';
import Home from './Home';
import ReactDOM from 'react-dom';

class Footer extends Component {

constructor(props) {
    super(props);
    this.state = {
      isGoing: true
    };

    this.navigateToWelcomePage = props.navigateToWelcomePage;
    this.navigateToStep2 = props.navigateToStep2;
  }

   
   render(){
        return (
            <div>
                <button onClick ={this.navigateToWelcomePage}
                 style={{width: 50, height: 50, backgroundColor: 'steelblue'}}>
                    Back
                </button>
                <button onClick={this.navigateToStep2} style={{width: 50, height: 50, backgroundColor: 'steelblue'}}>
                        Next
                </button>
            </div>
        );
    }
}





export default Footer;