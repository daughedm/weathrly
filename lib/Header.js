import React, {Component} from 'react';
import mainLogo from './images/weathrly-logo.svg';
import SubmitForm from './SubmitForm.js';


class Header extends Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <div className="header-input">
        <img className="headerLogo" src={mainLogo} />
        <SubmitForm className="rightForm"
          compareUserInput = {this.props.compareUserInput}
          submitCity={this.props.submitCity}
        />
      </div>
    );
  }
}

export default Header;