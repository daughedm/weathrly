import React, {Component} from 'react';
import Header from './Header';
import DailyForecast from './DailyForecast';
import './css/CurrentWeather.scss';
import HourlyForecast from "./HourlyForecast";
import ButtonToggle from "./ButtonToggle";

class CardContainer extends Component {
  constructor(props) {
    super();

    this.state = {
      isHourly: true
    };
  }

  forecastToggle() {
    // !this.state.isHourly;
    // // this.state.isHourly ? false : true;
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
    if (this.state.isHourly) {
      return (
      <div>
        <ButtonToggle/>
        <HourlyForecast
          weatherData={this.props.weatherData}
        />
      </div>
      );
    } else {
      return (
        <div>
          <ButtonToggle />
          <DailyForecast
            weatherData={this.props.weatherData}
          />
        </div>
      );
    }
    // return (
      {/*/!*<article className="card-container d-flex justify-content-center">*!/*/}
        {/*<HourlyForecast */}
          {/*weatherData={this.props.weatherData}*/}
        {/*/>*/}
        {/*<DailyForecast */}
          {/*weatherData={this.props.weatherData} */}
        {/*/>*/}
      {/*/!*</article>*!/*/}
    // );
  }
}

export default CardContainer;