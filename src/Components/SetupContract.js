import React, {Component} from 'react';
import AddContractForm from './AddContractForm'

class SetupContract extends Component {

    render(props){
        return(
            <div>
                {
                   this.renderUVG(props)
                }
                {
                   this.renderUVG2(props)
                }
                {
                   this.renderKTG(props)
                }
            </div>
        );
    }

    renderUVG(props){

         if(this.props.hasUVG) {
            return(
                <div>
                    <AddContractForm 
                        title='UVG' 
                        step={this.props.step}
                        contracts={this.props.UVGContracts}
                        onContractChanged={this.props.onUVGContractChanged}/>
                </div>
            );
         }
    }

     renderUVG2(props){

         if(this.props.hasUVG2) {

            return(
                <div>
                    UVG2
                </div>
            );
                        
         }
    }

    renderKTG(props){

         if(this.props.hasKTG) {

            return(
                <div>
                    KTG
                </div>
            );
                        
         }
    }
}

export default SetupContract;