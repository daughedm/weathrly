import React, {Component} from 'react';

class Suggestions extends Component {
  constructor(props) {
    super();

    this.state = {

    };
  }

  render() {
    return (
      <div>
        <datalist id="browsers">
          <option value={"Chrome"}>Chrome</option>
          <option value="Firefox">Firefox</option>
          <option value="Internet Explorer">Internet Explorer</option>
        </datalist>
      </div>
    );
  }
}

export default Suggestions;