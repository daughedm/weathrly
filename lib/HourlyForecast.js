import React, {Component} from 'react';
import './css/HourlyForecast.scss';

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
        {this.props.weatherData.daily7hour.map((hour, index) => {
          return (
            <article key={index} className="card-container d-flex justify-content-center">
              <section className="weather-card">
                <p className="weather-card-text">{hour.hour}:00</p>
                <img src={hour.icon} alt={hour.icon}/>
                <p className="weather-card-text">{hour.temp}°</p>
              </section>
            </article>
          );
        })

        }
      </div>
    );
  }
}

export default HourlyForecast;