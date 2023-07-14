import React, { useState, useEffect } from 'react';
import { fetchWeatherData } from '../api/apiCall';
import Layout from '../Layout';

const WeatherSearch = () => {
  const [city, setCity] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Retrieve weather data from localStorage on Search mount
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
    <Layout>
        {isLoading ? (
          <p>Loading...</p>
        ) : weatherData ? (
          <div className='w-full px-10 mb-20'>
            <h2 className='font-light text-white text-[3rem] absolute top-3'>{weatherData.name}</h2>
            <div>
              <p className='font-semibold text-white text-[9rem] color-secondary leading-tight'>{(weatherData.main.temp).toFixed(0)}°</p>
              <p className='font-light text-[3rem] color-secondary leading-7'>{weatherData.weather[0].description}</p>
            </div>
          </div>
        ) : (
          <p className='font-light text-white text-[1.6rem] leading-7'>{error && 'We don\'t know this city'} &#128531;</p>
        )}
        <form onSubmit={handleFormSubmit} className='absolute md:bottom-10 bottom-20 flex items-center justify-center md:block flex flex-col gap-10'>
          <input type="text" value={city} onChange={handleInputChange} placeholder="Insert Location" 
          className='px-3 bg-transparent placeholder-gray-600 outline-0 min-w-[100px]'/>
          <button type="submit"  
          className='transition bg-transparent hover:bg-primary color-primary font-semibold hover:text-white py-2 px-14 border border-primary hover:border-transparent text-[1.1rem] rounded-full'>Get Weather</button>
        </form>
    </Layout>
  );
};

export default WeatherSearch;
