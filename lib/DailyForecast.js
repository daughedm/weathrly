import React, {Component} from 'react';
import './css/DailyForecast.scss';

class DailyForecast extends Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <article className="card-container d-flex justify-content-center">
        <div className="card-inner d-flex">
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
        </div>
      </article>
    );
  }
}

export default DailyForecast;