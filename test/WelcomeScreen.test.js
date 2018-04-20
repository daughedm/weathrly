import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

import React from 'react';
import WelcomeScreen from '../lib/WelcomeScreen';
import './css/welcome.scss';


describe('Welcome Screen', () => {

  let renderedApp;

  beforeEach(() => {
    renderedApp = shallow(<WelcomeScreen />);
  });

  it('should exist', () => {
    expect(renderedApp).toBeDefined();
  });

  it('should render SubmitForm component', () => {
    expect(renderedApp.find('SubmitForm').length).toEqual(1);
  });
});