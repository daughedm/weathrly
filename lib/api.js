import dataSanitizer from './DataSanitizer'
// import key  from '../key';

const root = 'http://api.wunderground.com/api/e15f8e1362fe5a35';
// 

export const apiCall = (state, city) => {
  return fetch(`${root}/hourly/conditions/forecast10day/q/CO/denver.json`).then((response) => {
   return response.json().then((wundergroundData) => {
      return dataSanitizer(wundergroundData);
    });
  });
};

