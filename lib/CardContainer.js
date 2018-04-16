import React, {Component} from 'react';
import Header from './Header';
import HourlyForecast from "./HourlyForecast";
import DailyForecast from './DailyForecast';
import ButtonToggleHourly from "./ButtonToggleHourly";
import ButtonToggleDaily from "./ButtonToggleDaily";


class CardContainer extends Component {
  constructor(props) {
    super();

    this.state = {
      isHourly: true
    };
    this.forecastToggleHourly = this.forecastToggleHourly.bind(this);
    this.forecastToggleDaily = this.forecastToggleDaily.bind(this);
  }

  forecastToggleHourly() {
    if (!this.state.isHourly) {
      this.setState({
        isHourly: true
      });
    }
  }

  forecastToggleDaily() {
    if (this.state.isHourly) {
      this.setState({
        isHourly: false
      });
    }
  }

  render() {
    return (
      <div>
        <div className = "button-toggle-container">
          <div className = "button-toggle-inner">
            <ButtonToggleHourly
              forecastToggleHourly={this.forecastToggleHourly}/>

            <ButtonToggleDaily
              forecastToggleDaily={this.forecastToggleDaily}/>
          </div>
        </div>
        {
          this.state.isHourly &&
          <HourlyForecast
            weatherData={this.props.weatherData}
            isHourly={this.state.isHourly}
          />
        }
        {
          !this.state.isHourly &&
          <div>
            <DailyForecast
              weatherData={this.props.weatherData}
              isHourly={this.state.isHourly}
            />
          </div>
        }
      </div>
    );
  }
}


export default CardContainer;