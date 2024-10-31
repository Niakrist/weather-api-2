import Icon from "../Icon/Icon";
import styles from "./CityCard.module.css";

export default function CityCard() {
  const weatherData = require("../../mock/weatherData.json");
  return (
    <section className={styles.cityCard}>
      <div className={styles.today}>
        <h3>{weatherData.location}</h3>
        <time>{weatherData.day}</time>
        <time>{weatherData.time}</time>
      </div>
      <span className={styles.temp}>{weatherData.temperature}</span>
      <div className={styles.other}>
        <figure className={styles.otherInfo}>
          <Icon name={weatherData.weatherImage} className={styles.otherImage} />
          <figcaption>{weatherData.weatherDescription}</figcaption>
        </figure>
        <p className={styles.otherFeel}>{weatherData.weatherFeels}</p>
      </div>
    </section>
  );
}
