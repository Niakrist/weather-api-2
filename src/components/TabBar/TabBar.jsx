import { DAYS, HOURS } from "../../constants/constants";
import Tab from "../Tab/Tab";
import styles from "./TabBar.module.css";

export default function TabBar({ forecast, setForecast }) {
  return (
    <div className={styles.sliderMenu}>
      <h3>Прогноз:</h3>
      <Tab
        name="menu"
        value={HOURS}
        forecast={forecast}
        setForecast={setForecast}>
        на 24 часа
      </Tab>
      <Tab
        name="menu"
        value={DAYS}
        forecast={forecast}
        setForecast={setForecast}>
        на 5 дней
      </Tab>
    </div>
  );
}
