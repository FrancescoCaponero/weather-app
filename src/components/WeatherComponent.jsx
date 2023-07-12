import React, { useState, useEffect } from 'react';
import { fetchWeatherData } from '../api/apiCall';

const WeatherComponent = () => {
  const [city, setCity] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Retrieve weather data from localStorage on component mount
    const storedWeatherData = localStorage.getItem('weatherData');
    if (storedWeatherData) {
      setWeatherData(JSON.parse(storedWeatherData));
    }
  }, []);

  const handleInputChange = (event) => {
    setCity(event.target.value);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    try {
      const data = await fetchWeatherData(city);
      console.log(data);
      setWeatherData(data);
      setError(null);
      localStorage.setItem('weatherData', JSON.stringify(data));
    } catch (error) {
      setError(error.message);
      setWeatherData(null);
    }
    setIsLoading(false);

  };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <input type="text" value={city} onChange={handleInputChange} placeholder="Enter city" />
        <button type="submit">Get Weather</button>
      </form>
      {isLoading ? (
        <p>Loading...</p>
      ) : weatherData ? (
        <div>
          <h2>{weatherData.name}</h2>
          <p>Temperature: {weatherData.main.temp}°C</p>
          <p>Weather: {weatherData.weather[0].description}</p>
        </div>
      ) : (
        <p>{error || 'Enter a city to get weather information'}</p>
      )}
    </div>
  );
};

export default WeatherComponent;
