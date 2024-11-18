import styles from './Tab.module.css';
import Icon from '../Icon/Icon';

const Tab = ({
  title,
  dateTime,
  day,
  image,
  temperature,
  temperatureMax,
}) => {
  let temperatureText;
  if (temperatureMax) {
    temperatureText = `От ${temperature}° до ${temperatureMax}°`;
  } else {
    temperatureText = `${temperature}°`;
  }

  let dateTimeText;
  if (day) {
    dateTimeText = `${day}, ${dateTime}°`;
  } else {
    dateTimeText = dateTime;
  }

  return (
    <div className={styles['card']}>
      <time dateTime={dateTime} className={styles['text']}>
        {dateTimeText}
      </time>
      <Icon name={image} className={styles.imgTab} />
      <p className={styles['text']}>{temperatureText}</p>
    </div>
  );
};

export default Tab;
