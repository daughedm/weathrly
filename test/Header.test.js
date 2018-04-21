import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

import React from 'react';
import Header from "../lib/Header";


describe('Header Component', () => {
  let renderedApp;

  beforeEach(() => {
    renderedApp = shallow(<Header />);
  });

  it('should exist', () => {
    expect(renderedApp).toBeDefined();
  });

  it('should include SubmitForm component', () => {
    expect(renderedApp.find('SubmitForm').length).toEqual(1);
  });

});