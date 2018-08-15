<<<<<<< HEAD
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

import React from 'react';
import { shallow } from 'enzyme';
=======
import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

import React from 'react';
>>>>>>> c3c71d72ebdc2f9c57aabc5b4008145e6e87a143
import Suggestions from '../lib/Suggestions';
import './css/welcome.scss';


<<<<<<< HEAD
describe('Welcome Screen', () => {

  let renderedApp;

  beforeEach(() => {
    renderedApp = shallow(<Suggestions />);
=======
describe('Suggestions Component', () => {

  let renderedApp;


  beforeEach(() => {
    const props = { suggestions:
        ["Dearborn heights, mi", "Detroit, mi", "Denton, tx", "Des moines, ia", "Des plaines, il", "Desoto, tx", "Dearborn, mi", "Denver, co", "Deltona, fl", "Delray beach, fl"]};
    renderedApp = shallow(<Suggestions  {...props} />);
>>>>>>> c3c71d72ebdc2f9c57aabc5b4008145e6e87a143
  });

  it('should exist', () => {
    expect(renderedApp).toBeDefined();
  });

<<<<<<< HEAD
  it('should render SubmitForm component', () => {
    expect(renderedApp.find('datalist').length).toEqual(1);
=======
  it('should render the datalist element', () => {
    expect(renderedApp.find('#suggestions-datalist'));
  });

  it('should render datalist with 10 options', () => {
    const props = { suggestions:
        ["Dearborn heights, mi", "Detroit, mi", "Denton, tx", "Des moines, ia", "Des plaines, il", "Desoto, tx", "Dearborn, mi", "Denver, co", "Deltona, fl", "Delray beach, fl"]};
    renderedApp = mount(<Suggestions  {...props} />);
    // expect(renderedApp.find('option'));
    expect(renderedApp.find('option').length).toEqual(10);
>>>>>>> c3c71d72ebdc2f9c57aabc5b4008145e6e87a143
  });
});