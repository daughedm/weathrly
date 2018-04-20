import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

import React from 'react';
import App from '../lib/app.js';
import LocalStorageMock from '../src/setupTests';
import cities from "../lib/largest1000cities";
import CurrentWeather from "../lib/CurrentWeather";
import Header from "../lib/Header";

describe('CurrentWeather', () => {
  let renderedApp;

  window.localStorage = {
    getItem: jest.fn(),
    setItem: jest.fn(),
    removeItem: jest.fn()
  };

  beforeEach(() => {
    renderedApp = shallow(<CurrentWeather />);
  });

  it('should exist', () => {
    expect(renderedApp).toBeDefined();
  });

  it('should render the Card Container component', () => {
    expect(renderedApp.find('CardContainer').length).toEqual(1);
  });

  it('should render the Header component', () => {
    expect(renderedApp.find('Header').length).toEqual(1);
  });
});
