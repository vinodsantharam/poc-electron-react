import React, { Component } from 'react';

class ParameterSelector extends Component {

    render(props) {
        return(
        <div>
            <input type="text" name="numberOfEmployees" value={this.props.numberOfEmployees} onChange={this.props.onValueChange}/>
            <input type="text" name="parameter2" value={this.props.parameter2} onChange={this.props.onValueChange}/>
        </div>
        );
    }
}

export default ParameterSelector;