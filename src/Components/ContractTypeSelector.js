import React, { Component } from 'react';


class ContractTypeSelector extends Component{

    render(props){
        return(
            <div>
                Contract Type:
                <br/>
                
                <input
                    name="hasUVG"
                    type="checkbox"
                    checked={this.props.hasUVG}
                    onChange={this.props.onContractTypeChange}
                    />
                UVG
                <br/>

                <input
                    name="hasUVG2"
                    type="checkbox"
                    checked={this.props.hasUVG2}
                    onChange={this.props.onContractTypeChange}
                    />
                UVG2
                <br/>
                
                <input
                    name="hasKTG"
                    type="checkbox"
                    checked={this.props.hasKTG}
                    onChange={this.props.onContractTypeChange}
                    />
                KTG
                <br/>
            </div>
        );
    }
}

export default ContractTypeSelector;