import React, { Component } from "react";
import Home from "./Components/Home";
import DateSelector from "./Components/DateSelector";
import ParamenterSelector from "./Components/ParameterSelector";
import ContractSelector from "./Components/ContractTypeSelector";
import SetupContract from "./Components/SetupContract";
import Result from "./Components/Result";
import Header from "./Components/Header";
import "./App.css";
import BaseData from "./Data/base.js";
import Person from "./Data/person.js";

class App extends Component {
  constructor() {
    super();
    this.state = {
      step: 0,
      beginDate: "",
      endDate: "",
      numberOfEmployees: "",
      parameter2: "",
      dataToSend: "",
      hasUVG: false,
      hasUVG2: false,
      hasKTG: false,
      UVGContracts: [
        {
          value: "A1",
          numberOfEmployees: 50
        },
        {
          value: "A2",
          numberOfEmployees: 10
        }
      ],
      UVG2Contracts: [],
      KTGContracts: []
    };

    this.onUVGContractChanged = this.onUVGContractChanged.bind(this);
  }

  render() {
    return (
      <div className="App">
        {this.renderHeader()}
        {this.renderContent()}
        {this.renderBottomBar()}
      </div>
    );
  }

  renderContent() {
    switch (this.state.step) {
      case 0:
        return this.renderHome();
      case 1:
        return this.renderStep1();
      case 2:
        return this.renderStep2();
      case 3:
        return this.renderStep3();
      case 4:
        return this.renderStep4();
      default:
        throw new Error("Invalid step");
    }
  }

  renderHome() {
    return <Home />;
  }

  renderStep1() {
    return (
      <ParamenterSelector
        numberOfEmployees={this.state.numberOfEmployees}
        parameter2={this.state.parameter2}
        onValueChange={this.onValueChange}
      />
    );
  }

  onDateChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  renderStep2() {
    return (
      <ContractSelector
        hasUVG={this.state.hasUVG}
        hasUVG2={this.state.hasUVG2}
        hasKTG={this.state.hasKTG}
        onContractTypeChange={this.onContractTypeChange}
      />
    );
  }

  onContractTypeChange = event => {
    this.setState({ [event.target.name]: event.target.checked });
  };

  onValueChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  onUVGContractChanged(value, index) {
    // change the state here

    //   alert(value + '-' + index)

    this.setState((prevState, props) => {
      var prevStateUVG = prevState.UVGContracts;
      var contract = prevStateUVG[index];
      contract.value = value;

      return { UVGContracts: prevStateUVG };
    });
  }

  renderStep3() {
    return (
      <SetupContract
        hasKTG={this.state.hasKTG}
        hasUVG={this.state.hasUVG}
        hasUVG2={this.state.hasUVG2}
        step={this.state.step}
        UVGContracts={this.state.UVGContracts}
        onUVGContractChanged={this.onUVGContractChanged}
      />
    );
  }

  renderStep4() {
    return (
      <Result
        beginDate={this.state.beginDate}
        endDate={this.state.endDate}
        numberOfEmployees={this.state.numberOfEmployees}
        parameter2={this.state.parameter2}
        dataToSend={this.state.dataToSend}
      />
    );
  }

  renderBottomBar() {
    return (
      <div>
        {this.state.step > 0 &&
          <button type="button" onClick={this.goToPreviousStep}>
            Previous
          </button>}
        {this.renderNextButton(this.state.step)}
      </div>
    );
  }

  renderHeader() {
    return <Header step={this.state.step} />;
  }

  renderNextButton(step) {
    switch (step) {
      case 0:
      case 1:
        return (
          <button type="button" onClick={this.goToNextStep}>
            Next
          </button>
        );
      case 2:
        return (
          <button type="button" onClick={this.goToNextStep}>
            Next
          </button>
        );
      case 3:
        return (
          <button type="button" onClick={this.calculate}>
            Calculate
          </button>
        );
      case 4:
        return (
          <button type="button" onClick={this.restart}>
            Restart
          </button>
        );
      default:
        throw new Error("Invalid step");
    }
  }

  goToPreviousStep = () => {
    this.setState(previousState => ({ step: previousState.step - 1 }));
  };

  goToNextStep = () => {
    this.setState(previousState => ({ step: previousState.step + 1 }));
  };

  restart = () => {
    this.setState({ step: 0 });
  };

  calculate = () => {
    this.setState({ dataToSend: BaseData + Person }); // to test only
    this.setState(previousState => ({ step: previousState.step + 1 }));
  };
}

export default App;
