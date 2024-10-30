import { useState } from "react";
import styles from "./Input.module.css";
import Icon from "../Icon/Icon";

export default function Input() {
  const [value, setValue] = useState("");

  const onChange = (event) => {
    let userValue = event.target.value;
    setValue(userValue);
    console.log("Значение в input", value);
  };

  const onSubmit = () => {
    console.log("Значение в input", value);
  };

  const onReset = () => {
    setValue("");
  };

  return (
    <form method="get" className={styles.form}>
      <input
        className={styles.formInput}
        type="text"
        spellCheck="false"
        autoComplete="off"
        placeholder="Поиск по городу"
        value={value}
        onChange={onChange}
      />
      {value === "" ? (
        <button
          type="button"
          className={styles.formButton}
          title="Поиск"
          onClick={onSubmit}>
          <Icon id="search-icon" className={styles.buttonIcon} />
        </button>
      ) : (
        <button
          type="button"
          className={styles.formButton}
          title="Сброс"
          onClick={onReset}>
          <Icon id="clear-input-icon" className={styles.buttonIcon} />
        </button>
      )}
    </form>
  );
}
