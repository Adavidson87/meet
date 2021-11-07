import { loadFeature, defineFeature } from 'jest-cucumber';
import React from 'react';
import { mount, shallow } from 'enzyme';
import App from '../App';
import { mockData } from '../mock-data';
import Event from '../Event';
import EventList from '../EventList';


const feature = loadFeature('./src/features/showHideAnEventsDetails.feature');

defineFeature(feature, test => {
  let AppWrapper;
  let EventWrapper;
  let EventListWrapper;

  test('An event element is collapsed by default.', ({ given, when, then }) => {
    given('the event elements are collapsed.', () => {
      AppWrapper = mount(<App />);
      EventListWrapper = mount(<EventList events={mockData} />);
      EventWrapper = mount(<Event event={mockData[0]} />);
    });

    let AppWrapper;
    when('the user opens the app.', () => {
      AppWrapper = mount(<App />);
    });

    then('the user should see a list of collapsed events.', () => {
      AppWrapper.update();
      AppWrapper.setState({events: mockData})
      expect(AppWrapper.find('.event')).toHaveLength(mockData.length);
    });
  });

  test('User can expand an event to see its details.', ({ given, when, then }) => {
    given('the event elements are collapsed.', () => {
      AppWrapper = mount(<App />);
      EventListWrapper = mount(<EventList events={mockData} />);
      EventWrapper = mount(<Event event={mockData[0]} />);
    });
    when('the user clicks on the show event button.', () => {
      EventWrapper.find(".detailsButton").simulate("click");
    });

    then('the event element expands to show details.', () => {
      expect(EventWrapper.find(".eventDetails")).toHaveLength(1);
    });
  });

  test('User can collapse an event to hide its details.', ({ given, when, then }) => {
    given('the event element is expanded.', () => {
      AppWrapper = mount(<App />);
      EventListWrapper = mount(<EventList events={mockData} />);
      EventWrapper = mount(<Event event={mockData[0]} />);
      EventWrapper.find(".detailsButton").simulate("click");
      EventWrapper.find(".eventDetails");
    });

    when('the user clicks on the hide details button.', () => {
      EventWrapper.find(".detailsButton").simulate("click");
    });

    then('the event element collapses.', () => {
      expect(EventWrapper.find(".event-details")).toHaveLength(0);
    });
  });
});