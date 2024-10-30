import Tab from "../Tab/Tab";
import styles from "./TabBar.module.css";

export default function TabBar({ forecast, setForecast }) {
  return (
    <div className={styles.sliderMenu}>
      <h3>Прогноз:</h3>
      <Tab
        name="menu"
        value="hours"
        forecast={forecast}
        setForecast={setForecast}>
        на 24 часа
      </Tab>
      <Tab
        name="menu"
        value="days"
        forecast={forecast}
        setForecast={setForecast}>
        на 5 дней
      </Tab>
    </div>
  );
}
