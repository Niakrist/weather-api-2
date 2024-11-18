import { useEffect, useState } from "react";
import styles from "./App.module.css";
import fetchData from "./utils/fetchData";

import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";

import { MainContext } from "./Context/context";
import { fetchWeatherData } from "./api/fetchWeatherData";
import { fetchCityData } from "./api/fetchCityData";
import { fillTemplateWeatherData } from "./utils/fillTemplateWeatherData";

const App = () => {
  const [oneDayDataFromAPI, setOneDayDataFromAPI] = useState([]);
  const [fiveDaysDataFromAPI, setFiveDaysDataFromAPI] = useState([]);

  const [weatherData, setWeatherData] = useState(null);
  const [cityData, setCityData] = useState(null);
  const [cityName, setCityName] = useState("Москва");

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetchCityData(cityName)
      .then((data) => setCityData(data))
      .catch((err) => console.log(err))
      .finally(setIsLoading(false));
  }, [cityName]);

  useEffect(() => {
    setIsLoading(true);
    if (cityData) {
      fetchWeatherData(cityData.lat, cityData.lon)
        .then((data) => setWeatherData(data))
        .catch((err) => console.log(err))
        .finally(setIsLoading(false));
    }
  }, [cityData]);

  useEffect(() => {
    console.log("isLoading: ", isLoading);
  }, [isLoading, cityName, cityData]);

  useEffect(() => {
    fetchData("/one-day-data.json", setOneDayDataFromAPI);
    fetchData("/five-day-data.json", setFiveDaysDataFromAPI);
  }, []);

  if (!weatherData) {
    return (
      <div style={{ color: "white", fontSize: "40px" }}>Загрузка данных</div>
    );
  }

  // {
  //   !isLoading && (
  //     <div style={{ color: "white", fontSize: "40px" }}>Загрузка данных</div>
  //   );
  // }

  const cardsWeatherData = fillTemplateWeatherData(weatherData);

  return (
    <div className={styles["container"]}>
      <MainContext.Provider
        value={{
          cardsWeatherData,
          oneDayDataFromAPI,
          fiveDaysDataFromAPI,
          weatherData,
          cityData,
          cityName,
          setCityName,
          setIsLoading,
          setCityData,
        }}>
        <Header />

        <Main />

        <Footer />
      </MainContext.Provider>
    </div>
  );
};

export default App;
