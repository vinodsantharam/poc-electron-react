import React, { Component }  from 'react';

class DateSelector extends Component {
    render() {
        return(
            <div>
                Begin
                <input type="date" name="date1" value={this.state.date1} onChange={this.onDateChange}/>
                end
                <input type="date" name="date2" value={this.state.date2} onChange={this.onDateChange}/>
            </div>
        );
    }
}

export default DateSelector;