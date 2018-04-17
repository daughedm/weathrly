import React, {Component} from 'react';

class Suggestions extends Component {
  constructor(props) {
    super();

    this.state = {

    };
  }

  render() {
    let suggestionsArr = this.props.suggestions;

    // console.log(suggestionsArr)
    if (suggestionsArr.length && suggestionsArr.length < 10) {
      suggestionsArr = suggestionsArr[0];
      suggestionsArr = suggestionsArr.slice(0, 10);
    }

    console.log('Suggestions: ', suggestionsArr);

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