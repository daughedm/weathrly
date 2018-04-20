import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

import React from 'react';
import { shallow } from 'enzyme';
import CardContainer from "../lib/CardContainer";

describe('App tests', () => {
  let renderedApp;

  window.localStorage = {
    getItem: jest.fn(),
    setItem: jest.fn(),
    removeItem: jest.fn()
  };

  beforeEach(() => {
    renderedApp = shallow(<CardContainer />);
  });

  it('should exist', () => {
    expect(renderedApp).toBeDefined();
  });

  it('Should initially have set states isHourly', () => {
    expect(renderedApp.state()).toEqual(
      {
        isHourly: true
      });
  });

  it('should render the ButtonToggleHourly component', () => {
    expect(renderedApp.find('ButtonToggleHourly').length).toEqual(1);
  });

  it('should render the ButtonToggleDaily component', () => {
    expect(renderedApp.find('ButtonToggleDaily').length).toEqual(1);
  });

  it('should render the HourlyForecast component', () => {
    expect(renderedApp.find('HourlyForecast').length).toEqual(1);
  });

  it('should render the DailyForecast component', () => {
    renderedApp.setState({ isHourly: false });
    expect(renderedApp.find('DailyForecast').length).toEqual(1);
  });

  describe('State Change', () => {
    it('should change state correctly when forecastToggleDaily is called', () => {
      const expectation = { isHourly: false };

      renderedApp.instance().forecastToggleDaily();

      expect(renderedApp.state()).toEqual(expectation);
    });

    it('should change state correctly when forecastToggleHourly is called', () => {
      const expectation = { isHourly: true };

      renderedApp.instance().forecastToggleHourly();

      expect(renderedApp.state()).toEqual(expectation);
    })
  });
});