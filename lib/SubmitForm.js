import React, {Component} from 'react';

class SubmitForm extends Component {
  constructor(props) {
    super();

    this.state = {
      userInput: ''
    };
    this.updateUserInput = this.updateUserInput.bind(this);
  }

  updateUserInput(event) {
    this.setState({userInput: event.target.value});
    this.props.compareUserInput(event.target.value);
  }

  render() {
    return (
      <div>
        <form>
          <input
            type="text"
            className="searchTerm"
            placeholder="Enter City or Zip"
            onChange={this.updateUserInput}
          />
          <button
            type="submit"
            className="searchButton"
            onClick={(event) => {
              this.props.submitCity(event, this.state.userInput);
            }}
          >
            <img className="search-icon"
                 src={require('./images/magnifying-glass.svg')}
            />
          </button>
        </form>
      </div>
    );
  }
}

export default SubmitForm;