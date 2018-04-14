import React, {Component} from 'react';
import data from './mockData.js';
import DataSanitizer from './DataSanitizer';
import Header from './Header';
import image from './images/snowicon.svg';

class HourlyForecast extends Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <div className="card-inner d-flex">
        <section className="weather-card">
          <p className="weather-card-text">6pm</p>
          <img src={image} alt=""/>
          <p className="weather-card-text">80°</p>
        </section>



        {/*<section className="weather-card">*/}
          {/*<p className="weather-card-text">6pm</p>*/}
          {/*<img src={image} alt=""/>*/}
          {/*<p className="weather-card-text">80°</p>*/}
        {/*</section>*/}
        {/*<section className="weather-card">*/}
          {/*<p className="weather-card-text">6pm</p>*/}
          {/*<img src={image} alt=""/>*/}
          {/*<p className="weather-card-text">80°</p>*/}
        {/*</section>*/}
        {/*<section className="weather-card">*/}
          {/*<p className="weather-card-text">6pm</p>*/}
          {/*<img src={image} alt=""/>*/}
          {/*<p className="weather-card-text">80°</p>*/}
        {/*</section>*/}
        {/*<section className="weather-card">*/}
          {/*<p className="weather-card-text">6pm</p>*/}
          {/*<img src={image} alt=""/>*/}
          {/*<p className="weather-card-text">80°</p>*/}
        {/*</section>*/}
        {/*<section className="weather-card">*/}
          {/*<p className="weather-card-text">6pm</p>*/}
          {/*<img src={image} alt=""/>*/}
          {/*<p className="weather-card-text">80°</p>*/}
        {/*</section>*/}
        {/*<section className="weather-card">*/}
          {/*<p className="weather-card-text">6pm</p>*/}
          {/*<img src={image} alt=""/>*/}
          {/*<p className="weather-card-text">80°</p>*/}
        {/*</section>*/}
      </div>
    );
  }
}

export default HourlyForecast;