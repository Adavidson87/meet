import React, { Component } from "react";

class NumberOfEvents extends Component {

  state = {
    numberOfEvents: 32,
    infoText: "",
  };

  handleInputChanged = (event) => {
    const value = event.target.value;
    if (value <= 1 || value > 99) {
      return this.setState({
        errorText: 'Enter a number from 1 to 99',
        numberOfEvents: ''
      });
    } else {
      this.setState({
        numberOfEvents: value,
      });
      this.props.updateEvents('', value);
    }
  };

  render() {
    const numberOfEvents = this.state.numberOfEvents;
    return (
      <div className="numberOfEvents">
        <input type="text" className="EventsNumber" value={this.state.numberOfEvents} onChange={(e) => this.handleInputChanged(e)} />
      </div>
    );
  }
}
export default NumberOfEvents;