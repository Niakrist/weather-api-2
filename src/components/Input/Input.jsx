import { useContext } from "react";
import { MainContext } from "../../Context/context";
import styles from "./Input.module.css";

const Input = () => {
  const { setCityName, inputSearchCity, setInputSearchCity } =
    useContext(MainContext);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!inputSearchCity) return;
    setCityName(inputSearchCity);
  };

  const handleCleanInput = () => {
    setInputSearchCity("");
  };

  return (
    <form className={styles["form"]} action="#" onSubmit={handleSubmit}>
      <input
        type="search"
        className={styles["input"]}
        placeholder="Поиск по городу"
        value={inputSearchCity}
        onChange={(e) => setInputSearchCity(e.target.value)}
      />
      <button
        type="button"
        onClick={handleCleanInput}
        className={inputSearchCity.length ? styles["btnColse"] : styles["btn"]}
      />
    </form>
  );
};

export default Input;
