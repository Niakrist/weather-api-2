import { useEffect, useState } from "react";
import styles from "./App.module.css";
import fetchData from "./utils/fetchData";

import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";

import { MainContext } from "./Context/context";

import { fillTemplateWeatherData } from "./utils/fillTemplateWeatherData";
import { useCityData } from "./hooks/useCityData";
import { useWeatherData } from "./hooks/useWeatherData";

const App = () => {
  const [oneDayDataFromAPI, setOneDayDataFromAPI] = useState([]);
  const [fiveDaysDataFromAPI, setFiveDaysDataFromAPI] = useState([]);

  const [inputSearchCity, setInputSearchCity] = useState("");
  const [cityName, setCityName] = useState("Москва");
  const { cityData, isLoadingCity, errorCity } = useCityData(
    cityName,
    inputSearchCity
  );
  const { weatherData, isWeatherData, errorWeatherData } =
    useWeatherData(cityData);

  useEffect(() => {
    fetchData("/one-day-data.json", setOneDayDataFromAPI);
    fetchData("/five-day-data.json", setFiveDaysDataFromAPI);
  }, []);

  if (isLoadingCity || isWeatherData || !weatherData) {
    return (
      <div style={{ color: "white", fontSize: "40px" }}>Загрузка данных</div>
    );
  }

  if (errorCity) console.log(errorCity);
  if (errorWeatherData) console.log(errorWeatherData);

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
          inputSearchCity,
          setInputSearchCity,
        }}
      >
        <Header />

        <Main />

        <Footer />
      </MainContext.Provider>
    </div>
  );
};

export default App;
