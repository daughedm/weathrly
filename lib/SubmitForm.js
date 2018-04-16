import React, {Component} from 'react';
import Trie from './Trie';
import cities from "./largest1000cities";
import Suggestions from './Suggestions';

class SubmitForm extends Component {
  constructor(props) {
    super();

    this.state = {
      userInput: '',
      prefixTrie: new Trie(),
      suggestions: []
    };
    this.updateUserInput = this.updateUserInput.bind(this);
    this.state.prefixTrie.populate(cities);
    this.state.prefixTrie.suggest(this.state.userInput);
    // console.log(this.state.prefixTrie);
  }

  updateUserInput(event) {
    this.setState({userInput: event.target.value});
    this.state.suggestions.shift();
    this.state.suggestions.push(this.state.prefixTrie.suggest(this.state.userInput));
  }

  render() {
    return (
      <div className="header-search-from ">
        <form>
          <input
            type="text"
            className="searchTerm"
            placeholder="Enter City or Zip"
            onKeyUp={this.updateUserInput}
          />
          <Suggestions />
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