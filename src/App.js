import React, { Component } from 'react';
import './App.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import { getEvents, extractLocations } from './api';
import NumberOfEvents from './NumberOfEvents';


class App extends Component {
  state = {
    events: [],
    locations: [],
    NumberOfEvents: 32,
    currentLocation: 'all'
  }

  updateEvents = (location) => {
    getEvents().then((events) => {
      const locationEvents = (location === 'all') ?
        events.slice(0, this.state.NumberOfEvents) : events.filter((event) => event.location === location);
      this.setState({
        events: locationEvents.slice(0, this.state.NumberOfEvents),
        currentLocation: location
      });
    });
  }

  updateEventCount = (eventCount) => {
    const { currentLocation } = this.state;
    this.setState({
      NumberOfEvents: eventCount
    });
    this.updateEvents(currentLocation, eventCount);
  }

  componentDidMount() {
    this.mounted = true;
    getEvents().then((events) => {
      if (this.mounted) {
        this.setState({ events, locations: extractLocations(events) });
      }
    });
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  render() {
    return (
      <div className="App" >
        <CitySearch locations={this.state.locations} updateEvents={this.updateEvents} />
        <NumberOfEvents NumberOfEvents={NumberOfEvents} updateEventCount={this.updateEventCount} />
        <EventList events={this.state.events} />
      </div>
    );
  }
}

export default App;
