import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

import React from 'react';
import ReactDOM from 'react-dom';
import HourlyForecast from '../lib/HourlyForecast';

describe('Hourly Forecast', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<HourlyForecast />, div);
  });
});