import React from 'react';
import ReactDOM from 'react-dom';
import CurrentWeather from '../lib/CurrentWeather.js';

describe('Welcome Screen', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<CurrentWeather />, div);
  });
});