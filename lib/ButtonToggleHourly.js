import React, {Component} from 'react';
import './css/ButtonToggle.scss';


class ButtonToggleHourly extends Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <div>
        <button
          type="button"
          className="hourly-forecast-btn ghost-button"
          onClick={
            this.props.forecastToggleHourly
          }
        >Next 7 Hours
        </button>
      </div>
    );
  }
}

export default ButtonToggleHourly;