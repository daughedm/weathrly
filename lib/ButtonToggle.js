import React, {Component} from 'react';
import './css/ButtonToggle.scss';


class ButtonToggle extends Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <div>
        <button
          type="button"
          className="hourly-forecast-btn"
          onClick={() => {
            this.props.forecastToggle();
          }}
        >Next 7 Hours
        </button>
        <button
          type="button"
          className="daily-forecast-btn"
          onClick={() => {
            this.props.forecastToggle();
          }}
        >10 Day Forecast
        </button>
      </div>
    );
  }
}

export default ButtonToggle;