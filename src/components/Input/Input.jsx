import { useContext } from "react";
import { useState } from "react";
import { fetchCityData } from "../../api/fetchCityData";
import { MainContext } from "../../Context/context";
import styles from "./Input.module.css";

const Input = () => {
  const { setCityName, cityData, setCityData, cardsWeatherData, setIsLoading } =
    useContext(MainContext);
  const [inputSearchCity, setInputSearchCity] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("Клик");

    setIsLoading(true);

    try {
      const data = await fetchCityData(inputSearchCity);
      setCityName(inputSearchCity);

      console.log("data: ", data);
      if (data?.address?.city.toLowerCase() !== inputSearchCity.toLowerCase()) {
        throw new Error(
          "Указанного города не существует!!!!!!!!!!!!!!!!!!!!!!!!!!"
        );
      }

      setInputSearchCity("");
      setCityData(data);
    } catch (error) {
      console.error("Ошибка при получении данных о городе:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCleanInput = () => {
    setInputSearchCity("");
  };

  return (
    <form className={styles["form"]} action="#" onSubmit={handleSubmit}>
      <input
        type="search"
        className={styles["input"]}
        placeholder="Поиск по городу"
        value={inputSearchCity}
        onChange={(e) => setInputSearchCity(e.target.value)}
      />
      <button
        type="button"
        onClick={handleCleanInput}
        className={inputSearchCity.length ? styles["btnColse"] : styles["btn"]}
      />
    </form>
  );
};

export default Input;
