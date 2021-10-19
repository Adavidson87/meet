import React, { Component } from "react";

class Event extends Component {

  state = {
    show: false
  }

  handleButton = () => {
    this.setState((prevState) => ({ show: !prevState.show }));
  };

  render() {
    let event = this.props.event;

    return (
      <div className="event">
        <ul className="list-events">
          <li className="eventSummary"><h2>{event.summary}</h2></li>
          <li className="eventLocation"><h3>{event.location}</h3></li>
          <li className="eventDate">Begins: {event.start.dateTime} {event.start.timeZone}, Ends: {event.end.dateTime} {event.end.timeZone}</li>
          {this.state.show === true && (
            <p className="eventDetails">{event.description}</p>
          )}
          {this.state.show === false && (
            <button className="detailsButton" onClick={() => this.handleButton()}>Show Details</button>
          )}
          {this.state.show === true && (
            <button className="detailsButton" onClick={() => this.handleButton()}>Hide Details</button>
          )}
        </ul>
      </div>
    )
  }
}

export default Event;