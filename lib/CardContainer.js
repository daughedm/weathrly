import React, {Component} from 'react';
import Header from './Header';
import HourlyForecast from "./HourlyForecast";
import DailyForecast from './DailyForecast';
import ButtonToggle from "./ButtonToggle";

class CardContainer extends Component {
  constructor(props) {
    super();

    this.state = {
      isHourly: true
    };
    this.forecastToggle = this.forecastToggle.bind(this);
  }

  forecastToggle() {
    // !this.state.isHourly;
    // // this.state.isHourly ? false : true;
    debugger;
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
        <ButtonToggle 
          forecastToggle={this.forecastToggle}/>
        <HourlyForecast
          weatherData={this.props.weatherData}
          isHourly={this.state.isHourly}
        />
      </div>
      );
    } else {
      return (
        <div>
          <ButtonToggle 
            forecastToggle={this.forecastToggle}/>
          <DailyForecast
            weatherData={this.props.weatherData}
            isHourly={this.state.isHourly}
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