import React, {Component} from 'react';
import './css/welcome.css';
import mainLogo from './images/weathrly-logo.svg';
import SubmitForm from './SubmitForm.js';

class WelcomeScreen extends Component {
  constructor(props) {
    super();

    this.state = {

    };
  }

  render() {
    return (
      <div className="body-div">
        <div className="wrapper">
          <img className="logo" src={mainLogo} />
          <SubmitForm
            passUserInput={ this.passUserInput }
            compareUserInput = {this.props.compareUserInput}
          />
        </div>
      </div>
    );
  }
}

export default WelcomeScreen;