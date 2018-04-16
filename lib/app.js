import React, { Component } from 'react';
import './css/main.scss';
import DisplayComponent from './DisplayComponent.js';
import CurrentWeather from './CurrentWeather.js';
import WelcomeScreen from './WelcomeScreen';
import Header from './Header.js';
import DailyForecast from './DailyForecast.js';
import HourlyForecast from './HourlyForecast.js';
import Button from './Button';
import data from './mockData';
import cities from './largest1000cities';
import REACT_APP_WEATHER_API_KEY from '../key';
import { apiCall } from './api';
import dataSanitizer from "./DataSanitizer";


class App extends Component {
  constructor() {
    super();

    this.state = {
      location: '',
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
      // is string
      inputApi = city.split(' ');
      inputApi[0] = inputApi[0].substring(0, inputApi[0].length - 1);
    } else {
      inputApi = city;
    }

    apiCall(inputApi).then((wundergroundData) => {
      this.setState({
        location: city,
        weatherData: wundergroundData
      });
    });
  }

  compareUserInput(userInputSearchBar) {
    let cityArr = this.state.cities.citiesArr;

    cityArr = cityArr.map(city => {
      return city.toLowerCase();
    });
    const citiesFound = cityArr.filter(city => city.includes(userInputSearchBar));

    this.setState({
      searchResults: citiesFound
    });
  }

  componentDidMount() {
    // if (this.state.state && this.state.city) {
    //
    // }
  }


  render() {
    //this will show the welcome screen on startup when no location selected
    if (!this.state.location) {
      return (
        <WelcomeScreen
          getLocation={this.getLocation}
          compareUserInput = {this.compareUserInput}
          submitCity={this.submitCity}
          appError={this.state.apiError}
        />);
    } else {
      //this will show the main page when there is a location selected
      return (
        <div>
         <CurrentWeather 
          location={this.state.location}
          weatherData={this.state.weatherData}
          getLocation={this.getLocation}
          compareUserInput = {this.compareUserInput}
          submitCity={this.submitCity}
          appError={this.state.apiError}
         />
        </div>
      );
    }
  }
}

export default App;