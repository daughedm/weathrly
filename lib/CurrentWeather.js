import React, { Component } from 'react';
// import './css/main.css';
import data from './mockData';


console.log(data)
class CurrentWeather extends Component {
  render() {
    return (
      <div>
        <h1>{data.current_observation.display_location.full}</h1>
        <h1>{data.current_observation.temp_f}°</h1>
        <img src={data.current_observation.icon_url} />
        <h1>{data.current_observation.local_time_rfc822}</h1>
      </div>

    );
  }
}

export default CurrentWeather;
