import { useContext, useEffect, useState } from "react";
import { fetchCityData } from "../api/fetchCityData";
import { MainContext } from "../Context/context";

export const useCityData = (cityName) => {
  const [cityData, setCityData] = useState(null);
  const [isLoadingCity, setIsLoadingCity] = useState(false);
  const [errorCity, setErrorCity] = useState(null);

  useEffect(() => {
    setIsLoadingCity(true);
    const getCityData = async () => {
      try {
        const data = await fetchCityData(cityName);

        if (data.name.toLowerCase() !== cityName.toLowerCase()) {
          throw new Error("Упс! Город не найден, попробуйте другой");
        }

        setCityData(data);
      } catch (error) {
        console.log(error);
        setErrorCity(error);
      } finally {
        setIsLoadingCity(false);
      }
    };
    getCityData();
  }, [cityName]);
  return { cityData, isLoadingCity, errorCity };
};
