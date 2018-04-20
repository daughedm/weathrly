import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

import React from 'react';
import Suggestions from '../lib/Suggestions';
import './css/welcome.scss';


describe('Suggestions Component', () => {

  let renderedApp;


  beforeEach(() => {
    const props = { suggestions:
        ["Dearborn heights, mi", "Detroit, mi", "Denton, tx", "Des moines, ia", "Des plaines, il", "Desoto, tx", "Dearborn, mi", "Denver, co", "Deltona, fl", "Delray beach, fl"]};
    renderedApp = shallow(<Suggestions  {...props} />);
  });

  it('should exist', () => {
    expect(renderedApp).toBeDefined();
  });

  it('should render the datalist element', () => {
    expect(renderedApp.find('#suggestions-datalist'));
  });

  it('should render datalist with options', () => {
    const props = { suggestions:
        ["Dearborn heights, mi", "Detroit, mi", "Denton, tx", "Des moines, ia", "Des plaines, il", "Desoto, tx", "Dearborn, mi", "Denver, co", "Deltona, fl", "Delray beach, fl"]};
    renderedApp = mount(<Suggestions  {...props} />);
    expect(renderedApp.find('#suggestions-datalist'));
  });
});