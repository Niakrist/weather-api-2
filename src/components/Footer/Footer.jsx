import styles from "./Footer.module.css";
import { memo } from "react";

export default memo(function Footer() {
  return (
    <footer className={styles.footer}>
      <p>
        Проект выполнен в рамках стажировки{" "}
        <a href="https://preax.ru" target="_blank" rel="noopener noreferrer">
          PREAX
        </a>
      </p>
    </footer>
  );
});
