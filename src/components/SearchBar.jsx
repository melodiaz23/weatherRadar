import React, { useState, useContext } from 'react';
import { WeatherContext } from './WeatherContext';

const SearchBar = () => {
  const [location, setLocation] = useState('');
  const { fetchWeather } = useContext(WeatherContext);

  const handleSearch = () => {
    fetchWeather(location);
    setLocation('');
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        placeholder="Enter location"
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;
