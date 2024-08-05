import React, { createContext, useState } from 'react';

// Create Weather Context
export const WeatherContext = createContext();

const WeatherProvider = ({ children }) => {
  // Default weather data
  const [weatherData, setWeatherData] = useState({
    location: 'New York',
    temperature: '20',
    condition: 'Sunny'
  });

  const fetchWeather = async (location) => {
    try {
      // Replace with actual API call
      const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=YOUR_API_KEY&q=${location}`);
      const data = await response.json();
      setWeatherData({
        location: data.location.name,
        temperature: data.current.temp_c,
        condition: data.current.condition.text,
      });
    } catch (error) {
      // Handle errors (e.g., API call fails)
      console.error('Error fetching weather data:', error);
    }
  };

  return (
    <WeatherContext.Provider value={{ weatherData, fetchWeather }}>
      {children}
    </WeatherContext.Provider>
  );
};

export default WeatherProvider;
