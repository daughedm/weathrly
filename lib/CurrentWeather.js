import React, { Component } from 'react';
// import './css/main.css';
import data from './mockData';


console.log(data)
class CurrentWeather extends Component {
  render() {
    return (
      <div>{data.current_observation.display_location.full}</div>
    );
  }
}

export default CurrentWeather;
