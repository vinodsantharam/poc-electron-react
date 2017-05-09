import React, { Component } from 'react';

class Result extends Component {
    render() {
        return (
        <div>
            <h2>Result</h2>
            <div>{this.props.beginDate}</div>
            <div>{this.props.endDate}</div>
            <div>{this.props.numberOfEmployees}</div>
            <div>{this.props.parameter2}</div>
            <div>{this.props.dataToSend}</div>
        </div>
        );
    }
}

export default Result;