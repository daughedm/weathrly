import React, {Component} from 'react';

class Suggestions extends Component {
  constructor(props) {
    super();
  }

  render() {
    let suggestionsArr = this.props.suggestions;

    if (suggestionsArr.length && suggestionsArr.length < 10) {
      suggestionsArr = suggestionsArr[0];
      suggestionsArr = suggestionsArr.slice(0, 10);
    }

    return (
      <datalist id="suggestions-datalist">
      { this.props.suggestions &&
      suggestionsArr.map(item => {
        return <option value={item}>{item}</option>;
      })
      }
      </datalist>
    );
  }
}

export default Suggestions;