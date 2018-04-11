import React, {Component} from 'react';
import './css/welcome.css';
import mainLogo from './images/weathrly-logo.svg';

class WelcomeScreen extends Component {
  constructor() {
    super();

    this.state = {

    };
  }

  render() {
    return (
      <div className="body-div">
        <div className="wrapper">
          <img className="logo" src={mainLogo} />
          <form>
            <input type="text" className="searchTerm" placeholder="Enter City or Zip" />
              <button type="submit" className="searchButton">
              <img src={require('./images/magnifying-glass.svg')} />
              </button>
          </form>
        </div>
      </div>
    );
  }
}

export default WelcomeScreen;