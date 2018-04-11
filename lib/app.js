import React, { Component } from 'react';
import './css/main.css';
import DisplayComponent from './DisplayComponent.js';
import CurrentWeather from './CurrentWeather.js';
import WelcomeScreen from './WelcomeScreen';
import Header from './Header.js';
import TenDay from './TenDay.js';
import SevenHour from './SevenHour.js';
import Button from './Button';
import data from './mockData';

class App extends Component {
  constructor() {
    super();

    this.state = {
      location: '',
      weatherData: {} || {} 
    };
  }



  
  render() {

    //this will show the welcome screen on startup when no location selected
    if (!location) {
      return (<WelcomeScreen getLocation={this.getLocation} />);

    } else {
      //this will show the main page when there is a location selected
      return (
        <div>
          {/* <CurrentWeather /> */}
          <WelcomeScreen />
          {/*<DisplayComponent />*/}
        </div>
      );
    }
  }
}

export default App;