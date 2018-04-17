import React, {Component} from 'react';
import './css/main.scss';
import CurrentWeather from './CurrentWeather.js';
import WelcomeScreen from './WelcomeScreen';
import cities from './largest1000cities';
import {apiCall} from './api';


class App extends Component {
  constructor() {
    super();

    this.getData = () => {
      let inputApi = localStorage.getItem('key') || '';

      apiCall(inputApi).then((wundergroundData) => {
        this.setState({
          location: inputApi,
          weatherData: wundergroundData
        });
      });
    };

    this.state = {
      location: this.getData(),
      weatherData: {},
      cities,
      searchResults: [],
      apiError: false
    };

    this.compareUserInput = this.compareUserInput.bind(this);
    this.submitCity = this.submitCity.bind(this);
  }

  submitCity(event, city) {
    event.preventDefault();
    let inputApi;

    if (isNaN(city)) {
      inputApi = city.split(' ');
      inputApi[0] = inputApi[0].substring(0, inputApi[0].length - 1);
    } else {
      inputApi = city;
    }

    localStorage.setItem('key', inputApi);

    apiCall(inputApi).then((wundergroundData) => {
      this.setState({
        location: city,
        weatherData: wundergroundData
      });
    });
  }

  compareUserInput(userInputSearchBar) {
    let cityArr = this.state.cities;

    cityArr = cityArr.map(city => {
      return city.toLowerCase();
    });

    const citiesFound = cityArr.filter(city => city.includes(userInputSearchBar));

    this.setState({
      searchResults: citiesFound
    });
  }

  render() {
    if (!this.state.location) {
      return (
          <WelcomeScreen
            compareUserInput={this.compareUserInput}
            submitCity={this.submitCity}
            appError={this.state.apiError}
          />);
    } else {
      return (
        <div>
          <CurrentWeather
            debugger
            location={this.state.location}
            weatherData={this.state.weatherData}
            compareUserInput={this.compareUserInput}
            submitCity={this.submitCity}
            appError={this.state.apiError}
          />
        </div>
      );
    }
  }
}

export default App;