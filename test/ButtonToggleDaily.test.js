import {configure, shallow, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

import React from 'react';
import ButtonToggleDaily from '../lib/ButtonToggleDaily';

describe('Button toggle daily', () => {
  let renderApp;

  beforeEach(() => {
    renderApp = shallow(<ButtonToggleDaily/>);
  });

  it('should be a thing', () => {
    expect(renderApp).toBeDefined();
  });
});