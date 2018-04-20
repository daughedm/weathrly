import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

import React from 'react';
import DataSanitizer from '../lib/DataSanitizer.js';
import LocalStorageMock from '../src/setupTests';
import MockData from '../lib/MockData';

describe('DataSanitizer tests', () => {


  beforeEach(() => {
    renderedApp = shallow(<App />);
  });

  it('should exist', () => {
    expect(renderedApp).toBeDefined();
  });

  it.skip('Should initially have set states of a toggle, true; an undefined city, and error of false', () => {
    expect(renderedApp.state()).toEqual(
      {
        location: this.getData(),
        weatherData: {},
        cities,
        searchResults: [],
        apiError: false
      });
  });

  it.skip('App should have a default state of key and it should be default value', () => {

    const expectDefaultState = {
      currWeatherObj: {},
      hourArray: [],
      dayArray: []
    };

    expect(renderedApp.state()).toEqual(expectDefaultState);
  });
});