import Icon from "../Icon/Icon";
import ProgressBar from "../ProgressBar/ProgressBar";
import styles from "./Card.module.css";

export default function Card({ data }) {
  const value = parseInt(data.value);
  const current = value > 100 ? value / 10 : value;
  const rotate = {
    transform: `rotate(${parseInt(data.direction)}deg)`,
  };

  return (
    <article className={styles.card}>
      <div className={styles.cardValues}>
        <h4>{data.name}</h4>
        <Icon
          name={data.title}
          className={styles.icon}
          style={rotate}
          alt={data.name}
          loading="lazy"
        />

        <p>{data.value || data.time || data.speed}</p>
      </div>
      <div className={styles.cardBar}>
        {data.value && (
          <ProgressBar title={data.title} current={current} type={data.type} />
        )}
        <div className={styles.barValues} name={data.title}>
          {typeof data.description === "string" && data.description}
          {typeof data.description !== "string" &&
            data.description.map((element) => (
              <span key={element}>{element}</span>
            ))}
        </div>
      </div>
    </article>
  );
}
