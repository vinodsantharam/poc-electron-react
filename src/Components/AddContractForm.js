import React, {Component} from 'react';

class AddContractForm extends Component {

    renderParameters(contracts, handler) {
        const listItems = contracts.map((contract, index) =>
            <li key={index}>
                <input
                    tabIndex={index}
                    type="text"
                    name="contractValue" 
                    value={contract.value} 
                    onChange={this.onContractValueChange}
                   />

                 <input
                    type="text"
                    name="numberOfEmployees" 
                    value={contract.numberOfEmployees}
                    onChange={this.onNumberOfEmployeesChange}
                   />
            </li>
            
        );

        return (
        <ul>
            {listItems}
        </ul>
  );
    }


    onContractValueChange = event => {

      this.props.onContractChanged([event.target.value],event.target.tabIndex);
    }

    onNumberOfEmployeesChange(numberOfEmployees, index){
           
    }
    
    render(props){

        return(
            <div>
                Set {this.props.title}
                    {this.props.step}
                    {this.renderParameters(this.props.contracts, this.props.onContractChanged)}
                    
            </div>
        );
    }

}


export default AddContractForm;