import React, { Component } from "react";

class DateSelector extends Component {
  render(props) {
    return (
      <div>
        Begin
        <input
          type="date"
          name="beginDate"
          value={this.props.beginDate}
          onChange={this.props.onChange}
        />
        End
        <input
          type="date"
          name="endDate"
          value={this.props.endDate}
          onChange={this.props.onChange}
        />
      </div>
    );
  }
}

export default DateSelector;
