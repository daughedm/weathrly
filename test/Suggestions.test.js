import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

import React from 'react';
import { shallow } from 'enzyme';
import Suggestions from '../lib/Suggestions';
import './css/welcome.scss';


describe('Welcome Screen', () => {

  let renderedApp;

  beforeEach(() => {
    renderedApp = shallow(<Suggestions />);
  });

  it('should exist', () => {
    expect(renderedApp).toBeDefined();
  });

  it('should render SubmitForm component', () => {
    expect(renderedApp.find('datalist').length).toEqual(1);
  });
});