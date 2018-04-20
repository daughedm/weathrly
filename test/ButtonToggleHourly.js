import {configure, shallow, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

import React from 'react';
import ButtonToggleHourly from '../lib/ButtonToggleHourly';

describe('Button toggle hourly', () => {
  let renderApp;

  beforeEach(() => {
    renderApp = shallow(<ButtonToggleHourly/>);
  });

  it('should be a thing', () => {
    expect(renderApp).toBeDefined();
  });
});