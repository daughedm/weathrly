import React from 'react';
import ReactDOM from 'react-dom';
import WelcomeScreen from '../lib/WelcomeScreen';

describe('Welcome Screen', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<WelcomeScreen />, div);
  });
});