import React, { Component } from 'react';
import './css/main.scss';
import DisplayComponent from './DisplayComponent.js';
import CurrentWeather from './CurrentWeather.js';
import WelcomeScreen from './WelcomeScreen';
import Header from './Header.js';
import TenDay from './TenDay.js';
import SevenHour from './SevenHour.js';
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
      searchResults: []
    };

    this.compareUserInput = this.compareUserInput.bind(this);
    this.submitCity = this.submitCity.bind(this);
  }

  submitCity(event, city) {

    event.preventDefault();
    const splitCity = city.split(' ');
    splitCity[0] = splitCity[0].substring(0, splitCity[0].length - 1);

    apiCall(splitCity).then((wundergroundData) => {
      console.log(wundergroundData)
      this.setState({
        location: city,
        weatherData: wundergroundData
      });
    });
    // sanitize the data.


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

    // fetch('http://api.wunderground.com/api/e15f8e1362fe5a35/conditions/hourly/forecast10day/q/CA/San_Francisco.json').then((response) => {
    //   response.json().then((wundergroundData) => {
    //     console.log(wundergroundData)
    //   });
    // });
  }


  render() {
    //this will show the welcome screen on startup when no location selected
    if (!this.state.location) {
      return (
        <WelcomeScreen
          getLocation={this.getLocation}
          compareUserInput = {this.compareUserInput}
          submitCity={this.submitCity}
        />);
    } else {
      //this will show the main page when there is a location selected
      return (
        <div>
         <CurrentWeather 
          location={this.state.location}
          weatherData={this.state.weatherData}
          submitCity={this.submitCity}
         />
        </div>
      );
    }
  }
}

export default App;