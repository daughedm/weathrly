import React, { Component } from 'react';
import './css/main.css';
import DisplayComponent from './DisplayComponent.js';
import CurrentWeather from './CurrentWeather.js';
import {data} from './mockData';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      location: ''
    };
  }

  render() {
    return (
      <div>
        <CurrentWeather />
        <CurrentWeather />
      </div>
    );
  }
}