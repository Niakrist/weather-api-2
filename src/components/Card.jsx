import styles from "./Card.module.css";

const Card = ({ item }) => {
  console.log("item: ", item.passed);

  const getInfo = () => {
    if (item.info && item.passed) {
      return (
        <span>
          {item.info} {item.passed}
        </span>
      );
    }
    if (item.info) {
      return item.info;
    }
  };

  return (
    <>
      <div className={styles.detailsItemInfoAll}>
        <h3 className={styles.detailsItemTitle}>{item.name}</h3>
        <img src={item.icon} alt="" />
        <div className={styles.detailsItemValue}>
          {item.value} {item.designation}
        </div>
        <div className={styles.detailsItemInfoCustom}>
          <div className={styles.detailsItemDesc}>{getInfo()}</div>
        </div>
      </div>
    </>
  );
};

export default Card;
