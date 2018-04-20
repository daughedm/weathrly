import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

import React from 'react';
import HourlyForecast from "../lib/HourlyForecast";


describe('Hourly Forecast', () => {
  let renderedApp;

  beforeEach(() => {
    renderedApp = shallow(<HourlyForecast />);
  });

  it('should exist', () => {
    expect(renderedApp).toBeDefined();
  });
});