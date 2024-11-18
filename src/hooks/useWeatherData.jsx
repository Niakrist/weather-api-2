import { useEffect, useState } from "react";
import { fetchWeatherData } from "../api/fetchWeatherData";

export const useWeatherData = (cityData) => {
  const [weatherData, setWeatherData] = useState(null);
  const [isWeatherData, setIsWeatherData] = useState(false);
  const [errorWeatherData, setErrorWeatherData] = useState(null);

  useEffect(() => {
    if (!cityData) return;
    setIsWeatherData(true);
    const getWeaherData = async () => {
      try {
        const data = await fetchWeatherData(cityData.lat, cityData.lon);
        setWeatherData(data);
      } catch (error) {
        console.log(error);
        setErrorWeatherData(error);
      } finally {
        setIsWeatherData(false);
      }
    };
    getWeaherData();
  }, [cityData]);

  return { weatherData, isWeatherData, errorWeatherData };
};
