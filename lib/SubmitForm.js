import React, { Component } from 'react';

class SubmitForm extends Component {
  constructor() {
    super();

    this.state = {
      userInput: ''
    }; 
    this.updateUserInput = this.updateUserInput.bind(this);
  }

  updateUserInput(event) {
    this.setState({ userInput: event.target.value });
  }

  render() {
    return (
      <div>
        <form>
          <input 
            type="text" 
            className="searchTerm" 
            placeholder="Enter City or Zip" 
            onChange={ this.updateUserInput }
          />
          <button type="submit" className="searchButton">
            <img src={require('./images/magnifying-glass.svg')} />
          </button>
        </form>
      </div>
    );
  }
}

export default SubmitForm;