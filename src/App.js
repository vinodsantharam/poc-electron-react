import React, { Component } from 'react';
import Home from './Components/Home';
import DateSelector from './Components/DateSelector'
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      step: 0,
      beginDate: '',
      endDate: '',
      value1: '',
      value2: ''
    };
  }

  render() {
    return (
      <div className="App">
        {
          this.renderHeader()
        }
        {
          this.renderContent()
        }
        {
          this.renderBottomBar()
        }
      </div>
    );
  }

  renderContent() {
    switch(this.state.step) {
      case 0:
        return this.renderHome();
      case 1:
        return this.renderStep1();
      case 2:
        return this.renderStep2();
      case 3:
        return this.renderStep3();
      default:
        throw new Error("Invalid step");
    }
  }

  renderHome() {
    return (
      <Home/>
    );
  }

  renderStep1() {
    return (
       <DateSelector beginDate={this.state.beginDate} endDate={this.state.endDate} onChange={this.onDateChange} />
    );
  }

  onDateChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  }

  renderStep2() {
    return (
      <div>
        <input type="text" name="value1" value={this.state.value1} onChange={this.onValueChange}/>
        <input type="text" name="value2" value={this.state.value2} onChange={this.onValueChange}/>
      </div>
    );
  }

  onValueChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  }

  renderStep3() {
    return (
      <div>
        <h2>Result</h2>
        <div>{this.state.beginDate}</div>
        <div>{this.state.endDate}</div>
        <div>{this.state.value1}</div>
        <div>{this.state.value2}</div>
      </div>
    )
  }

  renderBottomBar() {
    return (
      <div>
        {
          this.state.step > 0 && <button type="button" onClick={this.goToPreviousStep}>Previous</button>
        }
        {
          this.renderNextButton(this.state.step)
        }
      </div>
    )
  }

  renderHeader() {
    if(this.state.step === 0) {
      return <h1>Header</h1>;
    }

    return <h1>Title {this.state.step}</h1>;
  }

  renderNextButton(step) {
    switch(step) {
      case 0:
      case 1:
        return <button type="button" onClick={this.goToNextStep}>Next</button>;
      case 2:
        return <button type="button" onClick={this.goToNextStep}>Calculate</button>;
      case 3:
        return <button type="button" onClick={this.restart}>Restart</button>;
      default:
        throw new Error("Invalid step");
    }
  }

  goToPreviousStep = () => {
    this.setState(previousState => ({ step: previousState.step - 1}))
  }

  goToNextStep = () => {
    this.setState(previousState => ({ step: previousState.step + 1}));
  }

  restart = () => {
    this.setState({ step: 0 });
  }
}

export default App;
