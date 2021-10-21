import React, { Component } from "react";

class NumberOfEvents extends Component {

  state = {
    numberOfEvents: 32,
    infoText: "",
  };

  handleInputChanged = (event) => {
    const value = event.target.value;
    if (value <= 0) {
      this.setState({
        errorText: 'Enter a number from 1 to 32',
        numberOfEvents: value
      });
    } else if (value > 32) {
      this.setState({
        errorText: 'Enter a number from 1 to 32',
        numberOfEvents: value
      });
    } else {
      this.setState({
        numberOfEvents: value,
      });
      this.props.updateEventCount(event.target.value);
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