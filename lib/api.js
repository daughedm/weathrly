export const apiCall = () => {
  return fetch('http://api.wunderground.com/api/e15f8e1362fe5a35/conditions/hourly/forecast10day/q/CA/San_Francisco.json').then((response) => {
    return response.json().then((wundergroundData) => {
      return wundergroundData;
    });
  });
};

