import React from 'react';
import {shallow} from 'enzyme';
import App from '../lib/app.js';
import LocalStorageMock from '../src/setupTests';

describe('App tests', () => {
  let renderedApp;
  window.localStorage = {
    getItem: jest.fn(),
    setItem: jest.fn(),
    removeItem: jest.fn()
  };

  window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
    json: () => Promise.resolve({
      groceries: mockGroceries
    })
  }));

  beforeEach(() => {
    renderedApp = shallow(<App/>);
  });

  it('should exist', () => {
    expect(renderedApp).toBeDefined();
  });

  it('Should initially have set states of a toggle, true; an undefined city, and error of false', () => {
    expect(renderedApp.state()).toEqual(
      {
        location: this.getData(),
        weatherData: {},
        cities,
        searchResults: [],
        apiError: false
      });
  });

  it('App should have a default state of key and it should be default value', () => {

    const expectDefaultState = {
      currWeatherObj: {},
      hourArray: [],
      dayArray: []
    };

    expect(renderedApp.state()).toEqual(expectDefaultState);
  });
});