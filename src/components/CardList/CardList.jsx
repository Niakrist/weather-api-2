import Card from "../Card/Card";
import styles from "./CardList.module.css";

export default function CardList() {
  const cardsData = require("../../mock/weatherData.json").cards;

  return (
    <ul className={styles.cardList}>
      {cardsData.map((element, index) => (
        <li key={index}>
          <Card data={element} />
        </li>
      ))}
    </ul>
  );
}
