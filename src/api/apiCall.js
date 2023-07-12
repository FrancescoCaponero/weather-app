import axiosInstance from './axiosInstance';

export const fetchWeatherData = async (city) => {
  try {
    const response = await axiosInstance.get(`?q=${city}&appid=${import.meta.env.VITE_API_KEY}&units=metric`);
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch weather data');
  }
};
