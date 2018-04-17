import React from 'react';
import ReactDOM from 'react-dom';

import { shallow } from 'enzyme';
import App from '../lib/app.js';
import LocalStorageMock from '../src/setupTests';
import cities from "../lib/largest1000cities";
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
});