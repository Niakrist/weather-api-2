import React from "react";
import Icon from "../Icon/Icon";
import styles from "./SliderCard.module.css";

export default function SliderCard({ time, icon, value }) {
  console.log("icon: ", icon);
  return (
    <article className={styles.galleryCard}>
      <time datatime={time}>{time}</time>
      <Icon name={icon} title={icon} className={styles.cardImage} alt={icon} />

      {typeof value === "object" ? (
        <p>
          от {value[0]}° до {value[1]}°
        </p>
      ) : (
        <p>{value}°</p>
      )}
    </article>
  );
}
