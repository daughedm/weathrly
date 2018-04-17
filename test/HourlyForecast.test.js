import React from 'react';
import ReactDOM from 'react-dom';
import HourlyForecast from '../lib/HourlyForecast';

describe('Hourly Forecast', () => {
  it.skip('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<HourlyForecast />, div);
  });
});