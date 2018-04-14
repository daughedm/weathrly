// import data from './mockData';
import snow from './images/snowicon.svg';
import rain from './images/rainicon.svg';
import tstorm from './images/tstormicon.svg';
import partlycloudy from './images/partlycloudyicon.svg';
import sunny from './images/sunnyicon.svg';
import cloudy from './images/cloudyicon.svg';

const dataConverter = date => {
  let splitString = date.split(' ');
  let weekDay = splitString[0].split('');
  let splitTime = splitString[4].split('');
  let noSeconds = splitTime.slice(0, 5);
  let time = noSeconds.join('');
  let noComma = weekDay.pop();
  let weekDayNoComma = weekDay.join('');

  splitString.splice(0, 1, weekDayNoComma);
  let dayNum = splitString[1];
  let days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday',
    'Friday', 'Saturday', 'Sunday'];
  let months = ['January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'];

  const grabDay = days.find(day => {
    return day.includes(splitString[0]);
  });

  const grabMonth = months.find(month => {
    return month.includes(splitString[2]);
  });

  return `${grabDay}, ${grabMonth} ${dayNum}  |  ${time}`;
};

//what gets place in weatherIcon switch data.current_observation.icon
const weatherIcon = ((condition) => {
  if (condition === 'chanceflurries' || 'flurries' || 'snow' || 'chancesnow') {
    return snow;
  } else if (condition === 'chancerain' || 'chancesleet' || 'rain' || 'sleet') {
    return rain;
  } else if (condition === 'chancetstorms' || 'tstorms') {
    return tstorm;
  } else if (condition === 'mostlycloudy' || 'mostlysunny' || 'partlycloudy' || 'partlysunny') {
    return partlycloudy;
  } else if (condition === 'sunny' || 'clear') {
    return sunny;
  } else if (condition === 'cloudy' || 'fog' || 'hazy') {
    return cloudy;
  } else {
    return './images/unkown.svg';
  }
});

const get10forcast = (data) => {
  const dayForcasts = data.filter(halfDay => {
    return halfDay.period % 2 === 0;
  });

  return dayForcasts.map(dayForcast => {
    let rObj = {};
    rObj.title = dayForcast.title;
    rObj.icon = dayForcast.icon;
    return rObj;
  });
};

const get10Temps = (data) => {
  const dayTemps = data.map(day => {
    let rObj = {};
    rObj.high = day.high.fahrenheit;
    rObj.low = day.low.fahrenheit;
    return rObj;
  });
  return dayTemps;
};


const dataSanitizer = (data) => {
  // Wednesday, April 15 | 5:45pm
  // Wed, 20 Dec 2017 11:27:36 -0500

  return {
    // City
    location: data.current_observation.display_location.full,

    // Current condition
    // Grab WU icon and convert to custom icon
    icon: weatherIcon(data.current_observation.icon),

    //Current Date and Time
    dataTime: dataConverter(data.current_observation.local_time_rfc822),

    //Current Day Summary
    currentDay: data.forecast.txt_forecast.forecastday[0].fcttext,

    // Current Temp
    currentTemp: Math.round(data.current_observation.temp_f) + '°',
    // Expected High and low - 7 hour

    // Expected High and low - 10day

    daily10: get10forcast(data.forecast.txt_forecast.forecastday),

    daily10highlow: get10Temps(data.forecast.simpleforecast.forecastday)

    // summary - weather the day


  };
};

export default dataSanitizer;