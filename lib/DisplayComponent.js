import React, { Component } from 'react';
import data from './mockData.js';

class DisplayComponent extends Component {
  constructor(props) {
    super();
    this.state = {
      day: ''
    };
  }
  displayDay() {
    const day = this.state.day;
  }

  render() {
    const dataLoc = data.display_location.full;

    return (
      <div>{dataLoc}</div>
    );
  }
}


export default DisplayComponent;
