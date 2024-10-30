import styles from "./Tab.module.css";

export default function Tab({ children, name, value, forecast, setForecast }) {
  return (
    <div>
      <input
        type="radio"
        id={value}
        className={styles.buttonInput}
        name={name}
        value={value}
        onChange={() => setForecast(value)}
        checked={forecast === value && true}
      />
      <label className={styles.buttonLabel} htmlFor={value}>
        {children}
      </label>
      <div className={styles.underline}></div>
    </div>
  );
}
