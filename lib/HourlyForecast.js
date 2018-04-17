import React, {Component} from 'react';
import './css/HourlyForecast.scss';

class HourlyForecast extends Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <article className="card-container d-flex justify-content-center">
        <div className="card-inner d-flex">
        {this.props.weatherData.daily7hour.map((hour, index) => {
          return (
            <section key={index} className="weather-card">
              <p className="weather-card-text">{hour.hour}:00</p>
              <img src={hour.icon} alt={hour.icon}/>
              <p className="weather-card-text">{hour.temp}°</p>
            </section>
          );
        })
        }
        </div>
      </article>
    );
  }
}

export default HourlyForecast;