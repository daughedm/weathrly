import React, {Component} from 'react';
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
import {apiCall} from './api';
import dataSanitizer from "./DataSanitizer";


class App extends Component {
  constructor() {
    super();

    this.getData = () => {
      // get data from local storage or return empty object
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

  componentWillMount() {

  }

  componentDidMount() {
    // let inputApi;

    // if (localStorage.length > 0) {
    //   inputApi = localStorage.getItem('key');
    // }

    // apiCall(inputApi).then((wundergroundData) => {
    //   this.setState({
    //     location: inputApi,
    //     weatherData: wundergroundData
    //   });
    // });
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
    // let cityArr = this.state.cities.citiesArr;
    let cityArr = this.state.cities;

    // console.log(cityArr)
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
            //this will show the welcome screen on startup when no location selected
            // getLocation={this.getLocation}
          />);
    } else {
        //this will show the main page when there is a location selected
      return (
        <div>
          <CurrentWeather
            debugger
            location={this.state.location}
            weatherData={this.state.weatherData}
            compareUserInput={this.compareUserInput}
            submitCity={this.submitCity}
            appError={this.state.apiError}
            // getLocation={this.getLocation}
          />
        </div>
      );
    }
  }
}

export default App;