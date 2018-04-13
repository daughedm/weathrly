import dataSanitizer from './DataSanitizer'
export const apiCall = () => {
  //make api key a variable and use interpolation in url
  //`http://api.wunderground.com/api/${apikey}/conditions/hourly/forecast10day/q/${state}/${city}.json`
  
  return fetch('http://api.wunderground.com/api/e15f8e1362fe5a35/conditions/hourly/forecast10day/q/CA/San_Francisco.json').then((response) => {
    return response.json().then((wundergroundData) => {
      return dataSanitizer(wundergroundData);
    });
  });
};

