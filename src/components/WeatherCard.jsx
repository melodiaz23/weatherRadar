import React, { useContext } from 'react';
import { WeatherContext } from './WeatherContext';

const WeatherCard = () => {
  const { weatherData } = useContext(WeatherContext);

  // Default values to show while the actual weather data is not available
  const defaultWeather = {
    location: 'Unknown Location',
    temperature: 'N/A',
    condition: 'N/A'
  };

  const displayData = weatherData || defaultWeather;

  return (
    <div className="weather-card">
      <h2>{displayData.location}</h2>
      <p>Temperature: {displayData.temperature}°C</p>
      <p>Condition: {displayData.condition}</p>
    </div>
  );
};

export default WeatherCard;