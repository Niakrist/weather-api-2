import { API_KEY } from "../constants/constant";

export const fetchWeatherData = async (lat, lon) => {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`
    );
    const weatherData = await response.json();
    return weatherData;
  } catch (error) {
    console.log(error);
  }
};
