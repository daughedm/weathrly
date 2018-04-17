import React from 'react';
import ReactDOM from 'react-dom';
import CardContainer from '../lib/CardContainer';

describe('CardContainer', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<CardContainer />, div);
  });
});