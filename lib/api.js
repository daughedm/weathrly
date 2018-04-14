import dataSanitizer from './DataSanitizer';
import REACT_APP_WEATHER_API_KEY from '../key';
// import App from './App';

const apiKey = REACT_APP_WEATHER_API_KEY;

export const apiCall = (city) => {
  let state = city[1];
  let finalCity = city[0];

  return fetch(`https://api.wunderground.com/api/${apiKey}/conditions/forecast/hourly/geolookup/forecast10day/q/${state}/${finalCity}.json`)
    .then((response) => response.json())
    .then((wundergroundData) => dataSanitizer(wundergroundData));
};
