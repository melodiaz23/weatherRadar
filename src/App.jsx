import React from 'react';
import SearchBar from './components/SearchBar';
import WeatherCard from './components/WeatherCard';
import WeatherProvider from './components/WeatherContext';

const App = () => {
  return (
    <WeatherProvider>
      <div className="app">
        <h1>WeatherRadar</h1>
        <SearchBar />
        <WeatherCard />
      </div>
    </WeatherProvider>
  );
};

export default App;