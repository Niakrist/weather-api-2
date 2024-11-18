import styles from './Main.module.css';

import CityCard from './../CityCard/CityCard';
import CardList from './../CardList/CardList';
import Slider from '../Slider/Slider';

const Main = () => {
  return (
    <main>
      <section className={styles['weather-today']}>
        <CityCard />
        <CardList />
      </section>
      <Slider />
    </main>
  );
};

export default Main;
