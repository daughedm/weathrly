import React, {Component} from 'react';
// import './css/main.css';
import data from './mockData.js';
import DataSanitizer from './DataSanitizer'

const clearData = DataSanitizer(data);
console.log(clearData)
class CurrentWeather extends Component {
  constructor(props) {
    super();
    this.state = {
      location: clearData.location,
      currentTemp: clearData.currentTemp,
      dataTime: clearData.dataTime,
      icon: clearData.icon
    };
    // this.updateCount = this.updateCount.bind(this);
  }

  componentDidMount() {

  }

  // pull you data
  // run your clean data method
  // setState with what is returned.


  // function in app that does api
  // pass function down to search
  // app doesn't know about input

  render() {
    return (
      <div>
        <h1>{this.state.location}</h1>
        <p>{this.state.currentTemp}</p>
        <p>{this.state.dataTime}</p>
        <img src={this.state.icon}/>

      </div>

    );
  }
}

export default CurrentWeather;
