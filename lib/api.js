import dataSanitizer from './DataSanitizer';
import REACT_APP_WEATHER_API_KEY from '../key';

const apiKey = REACT_APP_WEATHER_API_KEY;

export const apiCall = (city) => {
  let location;

  if (Array.isArray(city)) {
    let state = city[1];
    let finalCity = city[0];

    location = state + '/' + finalCity;
  } else {
    location = city;
  }

  return fetch(`https://api.wunderground.com/api/${apiKey}/conditions/forecast/hourly/geolookup/forecast10day/q/${location}.json`)
    .then((response) => response.json())
    .then((wundergroundData) => dataSanitizer(wundergroundData))
    .catch(error => console.log('Error Message', error));
};

