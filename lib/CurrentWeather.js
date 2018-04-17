import React, {Component} from 'react';
import data from './mockData.js';
import DataSanitizer from './DataSanitizer';
import Header from './Header';
import './css/CurrentWeather.scss';
import CardContainer from "./CardContainer";

// const clearData = DataSanitizer(data);

class CurrentWeather extends Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <div>
        <div className="current-weather-container">
          <Header
            compareUserInput = {this.props.compareUserInput}
            submitCity={this.props.submitCity}
          />
        </div>
        <section
          className="display-current-weather d-flex flex-justify-between flex-auto">
          <h1 className="city">{this.props.location}</h1>
          <p className="date">{this.props.weatherData.dataTime}</p>
        </section>
        <section
          className="display-temp-icon-container d-flex justify-content-center">
          <section className="display-temp-icon">
            <h2 className="temp">{this.props.weatherData.currentTemp}</h2>
            <img className="conditionIcon" src={this.props.weatherData.icon}/>
          </section>
        </section>
        <p className="current-conditions">{this.props.weatherData.currentDay}</p>
        <CardContainer weatherData={this.props.weatherData}/>
      </div>
    );
  }
}

export default CurrentWeather;
