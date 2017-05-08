import React, { Component } from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
import DateSelection from './Components/DateSelection';
import Home from './Components/Home';
import ReactDOM from 'react-dom';
import { browserHistory } from 'react-router';


import logo from './logo.svg';
import './App.css';

class App extends Component {


constructor(props) {
    super(props);
    this.state = {
      isGoing: true
    };

    this.navigateToWelcomePage = this.navigateToWelcomePage.bind(this);
    this.navigateToStep2 = this.navigateToStep2.bind(this);
  }


 navigateToStep2() {
           browserHistory.push('/dateselection');
    }

 navigateToWelcomePage() {
            browserHistory.push('/');
 }

  render() {
    return (
      <div className="App">
        <Header/>
        <div id='content'>
          <p className="App-intro">
            {this.props.children}
          </p>
        </div>  
        <Footer navigateToWelcomePage={this.navigateToWelcomePage} navigateToStep2={this.navigateToStep2}/>
      </div>
    );
  }
}

export default App;
