import React from 'react';
import ReactDOM from 'react-dom';
import Button from '../lib/DailyForecast';

describe('Daily Forecast', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<DailyForecast />, div);
  });
});