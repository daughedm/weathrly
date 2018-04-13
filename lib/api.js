import dataSanitizer from './DataSanitizer'
import REACT_APP_WEATHER_API_KEY from '../key';
import App from './App';

const apiKey = REACT_APP_WEATHER_API_KEY;



export const apiCall = (city) => {
  return fetch(`http://api.wunderground.com/api/${apikey}/conditions/hourly/forecast10day/q/${city[1]}/${city[0]}.json`).then((response) => {
    return response.json().then((wundergroundData) => {
      return dataSanitizer(wundergroundData);
    });
  });
};

