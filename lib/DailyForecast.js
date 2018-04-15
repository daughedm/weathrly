import React, {Component} from 'react';
import './css/DailyForecast.scss';

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

class DailyForecast extends Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <article className="card-container d-flex justify-content-center">
          {this.props.weatherData.daily10.map((day, index) => {
            return (
              <section key={index} className="weather-card">
                <p className="weather-card-text">{day.title}</p>
                <img src={day.icon} alt={day.icon}/>
                <p className="weather-card-text">{day.high}° / {day.low}°</p>
              </section>
            );
          })
          }
      </article>
    );
  }
}

export default DailyForecast;