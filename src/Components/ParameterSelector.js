import React, { Component } from "react";

const divStyle = {
  color: "blue",
  marginleft: 100
};

class ParameterSelector extends Component {
  render(props) {
    return (
      <div>
        <text>Number of employees</text>
        <input
          type="text"
          name="numberOfEmployees"
          style={divStyle}
          value={this.props.numberOfEmployees}
          onChange={this.props.onValueChange}
        />
        {/*<input type="text" name="parameter2" value={this.props.parameter2} onChange={this.props.onValueChange}/>*/}
      </div>
    );
  }
}

export default ParameterSelector;
