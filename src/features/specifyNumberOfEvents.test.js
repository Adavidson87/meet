import { loadFeature, defineFeature } from 'jest-cucumber';
import React from 'react';
import { mount } from 'enzyme';
import App from '../App';
import NumberOfEvents from '../NumberOfEvents';

const feature = loadFeature('./src/features/specifyNumberOfEvents.feature');

defineFeature(feature, test => {
  test('When user hasn’t specified a number, thirty-two is the default number.', ({ given, when, then }) => {
    let AppWrapper;
    let NumberOfEventsWrapper
    given('a user hasn\'t specified a number of events.', () => {
      NumberOfEventsWrapper = mount(<NumberOfEvents />);
    });

    when('the app is open.', () => {
      AppWrapper = mount(<App />);
    });

    then('list thirty-two events.', () => {
      AppWrapper = mount(<App />);
      NumberOfEventsWrapper = mount(<NumberOfEvents />);
    });
  });

  test('User can change the number of events they want to see.', ({ given, when, then }) => {
    let AppWrapper;
    let NumberOfEventsWrapper;
    given('the user can see the list of events.', () => {
      AppWrapper = mount(<App />);
    });

    when('the user changes the number of desired events to be seen.', () => {
      AppWrapper.find('.EventsNumber').simulate('change', { target: { value: '1' } });
    });

    then('change the number of events shown to what the user chose.', () => {
      NumberOfEventsWrapper = AppWrapper.find(NumberOfEvents);
      expect(NumberOfEventsWrapper.state('numberOfEvets')).toBe(1);
    });
  });
});