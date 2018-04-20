import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

import React from 'react';
import ReactDOM from 'react-dom';
import Button from '../lib/ButtonToggleDaily';
import { shallow, mount } from 'enzyme';

describe('button toggle daily', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<ButtonToggleDaily />)
  })

  it('should be a thing', () => {
    expect(wrapper).toBeDefined();
  });
});

