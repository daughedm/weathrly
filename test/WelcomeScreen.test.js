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

  it('Should initially have set states isHourly', () => {
    expect(renderedApp.state()).toEqual(
      {

      });
  });

  it('should render SubmitForm component', () => {
    expect(renderedApp.find('SubmitForm').length).toEqual(1);
  });
});