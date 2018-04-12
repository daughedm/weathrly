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
import cities from './largest1000cities';

class App extends Component {
  constructor() {
    super();

    this.state = {
      location: '',
      // weatherData: {} || {},
      cities,
      searchResults: []
    };
    this.compareUserInput = this.compareUserInput.bind(this);
  }

  passUserInput() {

  }

  // onchange
  // setState.
  // import completeMe
  // destructoring

  compareUserInput(userInputSearchBar) {
    let cityArr = this.state.cities.citiesArr;

    cityArr = cityArr.map(city => {
      return city.toLowerCase();
    });
    const citiesFound = cityArr.filter(city => city.includes(userInputSearchBar));

    this.setState({
      searchResults: citiesFound
    }, console.log(this.state));
  }


  // componentDidMount() {
  //   // fetch
  //
  // }

  render() {

    //this will show the welcome screen on startup when no location selected
    if (!location) {
      return (<WelcomeScreen getLocation={this.getLocation} />);

    } else {
      //this will show the main page when there is a location selected
      return (
        <div>
          {/* <CurrentWeather /> */}
          <WelcomeScreen
            passUserInput = { this.passUserInput }
            compareUserInput = {this.compareUserInput}
          />
          {/*<DisplayComponent />*/}
        </div>
      );
    }
  }
}

export default App;