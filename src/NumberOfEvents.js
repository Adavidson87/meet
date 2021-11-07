import React, { Component } from "react";
import { ErrorAlert } from "./Alert";

class NumberOfEvents extends Component {

  state = {
    numberOfEvents: 32,
    errorText: '',
  };

  handleInputChanged = (event) => {
    const value = event.target.value;
    if (value < 1 || value > 33) {
      this.setState({
        errorText: 'Enter a number from 1 to 32',
        numberOfEvents: value
      });
    } else {
      this.setState({
        errorText: '',
        numberOfEvents: value,
      });
      this.props.updateEventCount(event.target.value);
    }
  };

  render() {
    const numberOfEvents = this.state.numberOfEvents;
    return (
      <div className="numberOfEvents">
        <h3>Number of Events</h3>
        <ErrorAlert className="numberOfEventsErrorAlert" text={this.state.errorText} />
        <input type="text" className="EventsNumber" value={numberOfEvents} onChange={(e) => this.handleInputChanged(e)} />
      </div>
    );
  }
}
export default NumberOfEvents;