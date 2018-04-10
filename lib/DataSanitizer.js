import React from 'react';
import data from './mockData.js';

const DataSanitizer = (data) => {
  return {
    location: data.current_observation.display_location.full,
    currentTemp: data.current_observation.temp_f,
    dateTime: data.current_observation.local_time_rfc822,
    icon: data.current_observation.icon_url
  };

};

export default DataSanitizer;