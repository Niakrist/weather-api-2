import Card from "./Card";
import styles from "./CardList.module.css";

const CardList = ({ data }) => {
  console.log("data: ", data);
  return (
    <ul className={`${styles.weatherTodayDetails} ${styles.details}`}>
      {data.map((item, index) => (
        <li
          key={index}
          className={`${styles.details__item} ${styles.detailsItem}`}
        >
          <Card item={item} />
        </li>
      ))}
    </ul>
  );
};

export default CardList;
