import CardList from "../CardList/CardList";
import CityCard from "../CityCard/CityCard";
import styles from "./Main.module.css";

export default function Main() {
  return (
    <main className={styles.main}>
      <CityCard />
      <CardList />
    </main>
  );
}
