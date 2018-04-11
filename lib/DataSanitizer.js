import data from './mockData';

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

  return `${grabDay}, ${grabMonth} ${dayNum} | ${time}`;
};

// const date = dataConverter(data);

const DataSanitizer = (data) => {
  let time = data.current_observation.local_time_rfc822;
  // Wednesday, April 15 | 5:45pm
  // Wed, 20 Dec 2017 11:27:36 -0500



  return {
    location: data.current_observation.display_location.full,
    currentTemp: data.current_observation.temp_f + '°F',
    dataTime: dataConverter(data.current_observation.local_time_rfc822),
    icon: data.current_observation.icon_url
  };
};

export default DataSanitizer;