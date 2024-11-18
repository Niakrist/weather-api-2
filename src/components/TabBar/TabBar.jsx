import { useContext } from 'react';
import styles from './TabBar.module.css';
import SLIDER_TYPE from '../../constants/SLIDER_TYPE';
import Tab from '../Tab/Tab.jsx';
import { MainContext } from '../../Context/context';

const TabBar = ({ currentSlider }) => {
  const { oneDayDataFromAPI, fiveDaysDataFromAPI } = useContext(MainContext);
  const oneDaySliderCards = oneDayDataFromAPI.map((cardData, index) => (
    <Tab
      key={index}
      title={cardData.title}
      dateTime={cardData.dateTime}
      image={'day-cloudy'}
      temperature={cardData.temperature}
    />
  ));
  const fiveDaySliderCards = fiveDaysDataFromAPI.map((cardData, index) => (
    <Tab
      key={index}
      title={cardData.title}
      dateTime={cardData.dateTime}
      day={cardData.day}
      image={'day-few-clouds'}
      temperature={cardData.temperature}
      temperatureMax={cardData.temperatureMax}
    />
  ));

  return (
    <div className={styles['wrapper']}>
      <button type="button" className={styles['btn']}>
        <svg
          className={styles['btn-img']}
          viewBox="0 0 24 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16 3.58789L7 12.5879L16 21.5879"
            stroke="#545454"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {currentSlider === SLIDER_TYPE.forOneDay && (
        <div className={styles['cards']}>{oneDaySliderCards}</div>
      )}
      {currentSlider === SLIDER_TYPE.forFiveDays && (
        <div className={styles['cards']}>{fiveDaySliderCards}</div>
      )}

      <button type="button" className={styles['btn']}>
        <svg
          className={styles['btn-img']}
          viewBox="0 0 24 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8 21.5879L17 12.5879L8 3.58789"
            stroke="#545454"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </div>
  );
};

export default TabBar;
