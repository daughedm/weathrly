import React, {Component} from 'react';
// import './css/main.css';
import data from './mockData.js';
import DataSanitizer from './DataSanitizer';
import hotBackground from './images/hot.png';
import Header from './Header';

const clearData = DataSanitizer(data);
// console.log(clearData)
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
      <div className="HeaderContainer">
        <Header />
        <h1 className="city" >{this.state.location}</h1>
        <p className="date">{this.state.dataTime}</p>
        <h2 className="temp">{this.state.currentTemp}</h2>
        <img className="conditionIcon" src={this.state.icon}/>

      </div>

    );
  }
}

export default CurrentWeather;
