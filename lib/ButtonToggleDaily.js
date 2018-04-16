import React, {Component} from 'react';
// import './css/ButtonToggle.scss';


class ButtonToggleDaily extends Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <div>
        <button
          type="button"
          className="daily-forecast-btn"
          onClick={
            this.props.forecastToggleDaily
          }
        >Next 10 Hours
        </button>
      </div>
    );
  }
}

export default ButtonToggleDaily;