import React, { Component } from 'react';
import Home from './Components/Home';
import DateSelector from './Components/DateSelector'
import ParamenterSelector from './Components/ParameterSelector';
import Result from './Components/Result';
import Header from './Components/Header';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      step: 0,
      beginDate: '',
      endDate: '',
      numberOfEmployees: '',
      parameter2: ''
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
      <ParamenterSelector numberOfEmployees={this.state.numberOfEmployees} parameter2={this.state.parameter2} onValueChange={this.onValueChange} />
    );
  }

  onValueChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  }

  renderStep3() {
    return (
      <Result
         beginDate={this.state.beginDate}
         endDate={this.state.endDate}
         numberOfEmployees={this.state.numberOfEmployees}
         parameter2={this.state.parameter2} />
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
    return <Header step={this.state.step} />;
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
