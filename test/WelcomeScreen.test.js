import React from 'react';
import ReactDOM from 'react-dom';

import { shallow } from 'enzyme';
import App from '../lib/app.js';
import LocalStorageMock from '../src/setupTests';
import cities from "../lib/largest1000cities";
import WelcomeScreen from "../lib/WelcomeScreen";

describe('WelcomeScreen', () => {
  let renderedApp;
  
  window.localStorage = {
    getItem: jest.fn(),
    setItem: jest.fn(),
    removeItem: jest.fn()
  };

  beforeEach(() => {
    renderedApp = shallow(<WelcomeScreen />);
  });

  it('should exist', () => {
    expect(renderedApp).toBeDefined();
  });

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<WelcomeScreen />, div);
  });

  it('should render the SubmitForm component', () => {
    expect(renderedApp.find('SubmitForm').length).toEqual(1);
  });
});


