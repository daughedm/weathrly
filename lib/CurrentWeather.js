import React, {Component} from 'react';
// import './css/main.scss';
import data from './mockData.js';
import DataSanitizer from './DataSanitizer';
import hotBackground from './images/hot.png';
import Header from './Header';
import HourlyForecast from './HourlyForecast';
import './css/CurrentWeather.scss';
import CardContainer from "./CardContainer";
import cities from "./largest1000cities";

const clearData = DataSanitizer(data);

// console.log(clearData)
class CurrentWeather extends Component {
  constructor(props) {
    super();
    this.state = {
      isHourly: true
    };
    this.forecastToggle = this.forecastToggle.bind(this);
  }

  componentDidMount() {

  }

  forecastToggle() {
    if (this.state.isHourly) {
      this.setState({
        isHourly: false
      });
    } else {
      this.setState({
        isHourly: true
      });
    }
  }

  render() {
    return (
      <div>
        <div className="current-weather-container">
          <Header/>
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
