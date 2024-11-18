import { useContext } from "react";
import styles from "./CardList.module.css";

import Card from "./../Card/Card";

import { MainContext } from "./../../Context/context";

const CardList = () => {
  const { cardsWeatherData } = useContext(MainContext);

  const cards = cardsWeatherData.map((cardData) => {
    return (
      <Card
        key={cardData.id}
        title={cardData.title}
        image={cardData.image}
        value={cardData.value}
        deg={cardData.deg}
        measurement={cardData.measurement}
        hasProgressBar={cardData.hasProgressBar}
        meaning={cardData.meaning}
        meaningEnd={cardData.meaningEnd}
        hasGradient={cardData.title === "Давление"}
      />
    );
  });

  return (
    <div className={styles["wrapper"]}>
      <ul className={styles["card-list"]}>{cards}</ul>
    </div>
  );
};

export default CardList;
