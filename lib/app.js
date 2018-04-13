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
    // Wichita, KS
    apiCall().then((wundergroundData) => {
      this.setState({
        location: city,
        weatherData: wundergroundData
      })
    })
    // sanitize the data.


  }

  passUserInput() {

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
    if (!location) {
      return (<WelcomeScreen
        getLocation={this.getLocation}
        compareUserInput = {this.compareUserInput}
      />);
    } else {
      //this will show the main page when there is a location selected
      return (
        <div>
         {/*<CurrentWeather />*/}
          <WelcomeScreen
            passUserInput = { this.passUserInput }
            compareUserInput = {this.compareUserInput}
            submitCity = { this.submitCity }
          />
          {/*<DisplayComponent />*/}
        </div>
      );
    }
  }
}

export default App;