import React from 'react';
import { shallow } from 'enzyme';
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