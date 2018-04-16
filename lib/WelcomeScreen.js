import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './css/welcome.scss';
import mainLogo from './images/weathrly-logo.svg';
import SubmitForm from './SubmitForm.js';

class WelcomeScreen extends Component {
  constructor(props) {
    super();

    this.state = {};
  }

  render() {
    return (
      <div className="body-div">
        <div className="wrapper">
          <img className="logo" src={mainLogo}/>
          <SubmitForm
            passUserInput={this.passUserInput}
            compareUserInput={this.props.compareUserInput}
            submitCity={this.props.submitCity}
          />
          {this.props.appError &&
            <p className="error-message">Could not find city</p>
          }
        </div>
      </div>
    );
  }
}

WelcomeScreen.propTypes = {
  compareUserInput: PropTypes.func
};

export default WelcomeScreen;