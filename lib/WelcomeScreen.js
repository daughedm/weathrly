import React, {Component} from 'react';
import './css/welcome.css';
import mainLogo from './images/weathrly-logo.svg';
import SubmitForm from './SubmitForm.js';

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
          <SubmitForm />
        </div>
      </div>
    );
  }
}

export default WelcomeScreen;