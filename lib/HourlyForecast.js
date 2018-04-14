import React, {Component} from 'react';
import data from './mockData.js';
import DataSanitizer from './DataSanitizer';
import Header from './Header';
import image from './images/snowicon.svg';
import snow from './images/snowicon.svg';
import rain from './images/rainicon.svg';
import tstorm from './images/tstormicon.svg';
import partlycloudy from './images/partlycloudyicon.svg';
import sunny from './images/sunnyicon.svg';
import cloudy from './images/cloudyicon.svg';

class HourlyForecast extends Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <div className="card-inner d-flex">
        <section className="weather-card">
          <p className="weather-card-text">{this.props.weatherData.daily7hour[0].hour}:00</p>
          <img src={this.props.weatherData.daily7hour[0].icon} alt={this.props.weatherData.daily7hour[0].icon}/>
          <p className="weather-card-text">{this.props.weatherData.daily7hour[0].temp}°</p>
        </section>

        {/*<section className="weather-card">*/}
          {/*<p className="weather-card-text">6pm</p>*/}
          {/*<img src={image} alt=""/>*/}
          {/*<p className="weather-card-text">80°</p>*/}
        {/*</section>*/}
        {/*<section className="weather-card">*/}
          {/*<p className="weather-card-text">6pm</p>*/}
          {/*<img src={image} alt=""/>*/}
          {/*<p className="weather-card-text">80°</p>*/}
        {/*</section>*/}
        {/*<section className="weather-card">*/}
          {/*<p className="weather-card-text">6pm</p>*/}
          {/*<img src={image} alt=""/>*/}
          {/*<p className="weather-card-text">80°</p>*/}
        {/*</section>*/}
        {/*<section className="weather-card">*/}
          {/*<p className="weather-card-text">6pm</p>*/}
          {/*<img src={image} alt=""/>*/}
          {/*<p className="weather-card-text">80°</p>*/}
        {/*</section>*/}
        {/*<section className="weather-card">*/}
          {/*<p className="weather-card-text">6pm</p>*/}
          {/*<img src={image} alt=""/>*/}
          {/*<p className="weather-card-text">80°</p>*/}
        {/*</section>*/}
        {/*<section className="weather-card">*/}
          {/*<p className="weather-card-text">6pm</p>*/}
          {/*<img src={image} alt=""/>*/}
          {/*<p className="weather-card-text">80°</p>*/}
        {/*</section>*/}
      </div>
    );
  }
}

export default HourlyForecast;