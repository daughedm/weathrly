import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

import React from 'react';
import DailyForecast from "../lib/DailyForecast";
import Header from "../lib/Header";

describe('DailyForecast Test', () => {
  let renderedApp;

  beforeEach(() => {
    const props = [
        {title: "Thu", icon: "e1bdbbfa32eccfe45f5c6e90557c1f59.svg", high: "69", low: "41"},
        {title: "Fri", icon: "d2d14ff5997f9a7d48eaede90cb66ee6.svg", high: "53", low: "34"},
        {title: "Sat", icon: "de6cdb49eb37be0b5eb00f423ebfb8e8.svg", high: "50", low: "35"},
        {title: "Sun", icon: "6523d6415722fbb3254c6f3ddbe69767.svg", high: "65", low: "40"},
        {title: "Mon", icon: "e1bdbbfa32eccfe45f5c6e90557c1f59.svg", high: "71", low: "37"},
        {title: "Tue", icon: "e1bdbbfa32eccfe45f5c6e90557c1f59.svg", high: "54", low: "38"},
        {title: "Wed", icon: "e1bdbbfa32eccfe45f5c6e90557c1f59.svg", high: "70", low: "44"},
        {title: "Thu", icon: "6523d6415722fbb3254c6f3ddbe69767.svg", high: "71", low: "44"},
        {title: "Fri", icon: "6523d6415722fbb3254c6f3ddbe69767.svg", high: "73", low: "46"},
        {title: "Sat", icon: "e1bdbbfa32eccfe45f5c6e90557c1f59.svg", high: "70", low: "47"}
      ];
    renderedApp = shallow(<DailyForecast  {...props} />);
  });

  it('should exist', () => {
    expect(renderedApp).toBeDefined();
  });
});