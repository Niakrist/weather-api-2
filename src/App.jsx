import "./app.css";
import CardList from "./components/CardList";

import { weatherDataArray } from "./data.js";

function App() {
  return (
    <div className="container">
      <header className="header">
        <div className="header__logo">
          <img
            className="header__logo-img"
            src="./public/logo-dt.svg"
            alt="logo"
          />
        </div>
        <form className="header__search-form search-form">
          <input
            type="text"
            className="search-form__input"
            placeholder="Поиск по городу"
          />
          <button type="reset" className="search-form__btn search"></button>
        </form>
      </header>
      <main>
        <h1 className="visually-hidden">Прогноз погоды</h1>
        <section className="weather-today">
          <h2 className="visually-hidden">Прогноз погоды на сегодня</h2>
          <div className="weather-today__info info-weather">
            <h2 className="info-weather__city">Кременчуг-константиновское</h2>
            <p className="info-weather__date">Суббота, 06 января</p>
            <time className="info-weather__time">11:29</time>
            <p className="info-weather__degrees">-7°</p>
            <div className="info-weather__cloud">
              <img src="./public/weather.svg" alt="Облачно" />
              <span>Облачно с прояснениями</span>
            </div>
            <p className="info-weather__feels">Ощущается как -11°</p>
          </div>
          <CardList data={weatherDataArray} />
        </section>
      </main>
      <footer className="footer">
        <p className="footer__text">
          Проект выполнен в рамках стажировки
          <a href="https://preax.ru/" target="_blank" rel="nofollow">
            PREAX
          </a>
        </p>
      </footer>
    </div>
  );
}

export default App;
