import styles from "./Card.module.css";
import Icon from "../Icon/Icon";
import ProgressBar from "../ProgressBar/ProgressBar";

const Card = ({
  title,
  value,
  hasProgressBar,
  measurement,
  meaning,
  meaningEnd,
  hasGradient,
  deg,
}) => {
  let valuePercentage = value;
  while (valuePercentage > 100) {
    valuePercentage /= 10;
  }

  let imgName;
  if (title === "Влажность") {
    imgName = "humidity";
  } else if (title === "Давление") {
    imgName = "barometer";
  } else if (title === "Видимость") {
    imgName = "visibility";
  } else if (title === "Рассвет") {
    imgName = "sunrise";
  } else if (title === "Закат") {
    imgName = "sunset";
  } else if (title === "Сила ветра") {
    imgName = "direction";
  }

  return (
    <li className={styles["card"]}>
      <h2 className={styles["title"]}>{title}</h2>
      <Icon
        name={imgName}
        className={styles.imgCard}
        style={{ transform: deg && `rotate(${deg + 45}deg)` }}
      />
      <p className={styles["degree"]}>{`${value} ${measurement}`}</p>
      {hasProgressBar ? (
        <ProgressBar current={valuePercentage} type={hasGradient} />
      ) : null}
      <div className={styles["box"]}>
        <p className={styles["indicator"]}>{meaning}</p>
        {meaningEnd && <p className={styles["indicator"]}>{meaningEnd}</p>}
      </div>
    </li>
  );
};

export default Card;
