import React, { Component } from "react";

class Header extends Component {
  render() {
    if (this.props.step === 0) {
      return <h1>Header</h1>;
    }

    return (
      <h1>
        Step {this.props.step}
      </h1>
    );
  }
}

export default Header;
