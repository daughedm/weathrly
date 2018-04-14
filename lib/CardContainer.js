import React, {Component} from 'react';
import Header from './Header';
import HourlyForecast from './HourlyForecast';
import './css/CurrentWeather.scss';

class CardContainer extends Component {
  constructor(props) {
    super();
  }
  render() {
    return (
      <article className="card-container d-flex justify-content-center">
        <HourlyForecast weatherData={this.props.weatherData} />
      </article>
    );
  }
}

export default CardContainer;