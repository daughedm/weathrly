import React, {Component} from 'react';
import mainLogo from './images/weathrly-logo.svg';
import SubmitForm from './SubmitForm.js';

class Header extends Component {
  constructor() {
    super();

    this.state = {

    };
  }

  render() {
    return (
      <div className="headerContainer">
        <img className="headerLogo" src={mainLogo} />
        <SubmitForm className="rightForm" />
      </div>
    );
  }
}

export default Header;