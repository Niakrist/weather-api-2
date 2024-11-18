import styles from "./CityCard.module.css";
import Icon from "../Icon/Icon";
import { useContext } from "react";
import { MainContext } from "../../Context/context";
import { fromKelvinsToDegrees } from "../../utils/calculationOfValues";

const CityCard = () => {
  const { cityName, weatherData } = useContext(MainContext);

  return (
    <div className={styles["wrapper"]}>
      <div className={styles["top"]}>
        <h2 className={styles["city"]}>{cityName}</h2>
        <time dateTime="01-06" className={styles["text"]}>
          Суббота, 06 января
        </time>
        <time dateTime="11h 29m" className={styles["text"]}>
          11:29
        </time>
      </div>
      <p className={styles["temperature"]}>
        {weatherData.main && fromKelvinsToDegrees(weatherData.main.temp)}°
      </p>
      <div className={styles["bottom"]}>
        <figure className={styles["inner"]}>
          <Icon name={"day-cloudy"} className={null} />
          <figcaption className={styles["text"]}>Облачно</figcaption>
        </figure>
        <p className={styles["text"]}>
          Ощущается как{" "}
          {weatherData.main &&
            fromKelvinsToDegrees(weatherData.main.feels_like)}
          °
        </p>
      </div>
    </div>
  );
};

export default CityCard;
