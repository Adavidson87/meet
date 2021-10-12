import React, { Component } from "react";
import { shallow } from "enzyme";
import Event from "../Event"
import { mockData } from "../mock-data";

describe("<Event /> component", () => {
  let EventWrapper;
  beforeAll(() => {
    EventWrapper = shallow(<Event event={mockData[1]} />);
  });

  test("renders event summary", () => {
    expect(EventWrapper.find(".eventSummary")).toHaveLength(1);
  });

  test("renders event location", () => {
    expect(EventWrapper.find(".eventLocation")).toHaveLength(1);
  });

  test("renders dates and timezones", () => {
    expect(EventWrapper.find(".eventDate")).toHaveLength(1);
  });

  test("change show-state on click", () => {
    EventWrapper.setState({
      show: false,
    });
    EventWrapper.find(".showDetails").simulate("click");
    expect(EventWrapper.state("show")).toEqual(true);
  });

  test("hide details by default", () => {
    EventWrapper.setState({
      show: false,
    });
    expect(EventWrapper.find(".hideDetails")).toHaveLength(0);
  });

  test("show detail on click", () => {
    EventWrapper.setState({
      show: false,
    });
    EventWrapper.find(".showDetails").simulate("click");
    expect(EventWrapper.find(".eventDetails")).toHaveLength(1);
  });

  test("hide details on click", () => {
    EventWrapper.setState({
      show: true,
    });
    EventWrapper.find(".hideDetails").simulate("click");
    expect(EventWrapper.find(".eventDetails")).toHaveLength(0);
  });

})