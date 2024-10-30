import { useState } from "react";
import SliderCard from "../SliderCard/SliderCard";
import styles from "./Slider.module.css";
import TabBar from "../TabBar/TabBar";
import Icon from "../Icon/Icon";

export default function Slider() {
  const [forecast, setForecast] = useState("hours");
  const hoursData = require("../../mock/hoursForecast.json");
  const daysData = require("../../mock/daysForecast.json");

  return (
    <section className={styles.slider}>
      <TabBar forecast={forecast} setForecast={setForecast} />
      <div className={styles.sliderCarousel}>
        {forecast === "hours" ? (
          <div className={styles.carouselHours}>
            <button className={styles.previousButton} disabled>
              <Icon id="chevron" className={styles.previousButtonImg} />
            </button>
            <ul id="hours-gallery" className={styles.gallery}>
              {hoursData.map((element, index) => (
                <li key={index}>
                  <SliderCard
                    time={element.time}
                    icon={element.icon}
                    value={element.value}
                  />
                </li>
              ))}
            </ul>
            <button className={styles.nextButton}>
              <Icon id="chevron" className={styles.nextButtonImg} />
            </button>
          </div>
        ) : (
          <div className={styles.carouselDaily}>
            <button className={styles.previousButton} disabled={true}>
              <Icon id="chevron" className={styles.previousButtonImg} />
            </button>
            <ul id="daily-gallery" className={styles.gallery}>
              {daysData.map((element, index) => (
                <li key={index}>
                  <SliderCard
                    time={element.time}
                    icon={element.icon}
                    value={element.value}
                  />
                </li>
              ))}
            </ul>
            <button className={styles.nextButton}>
              <Icon id="chevron" className={styles.nextButtonImg} />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
