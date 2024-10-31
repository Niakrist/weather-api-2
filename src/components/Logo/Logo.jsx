import styles from "./Logo.module.css";
import Icon from "../Icon/Icon";
import { LOGODESCTOP, LOGOMOBILE, LOGOTABLET } from "../../constants/constants";

export default function Logo() {
  return (
    <a href="/">
      <Icon name={LOGODESCTOP} className={styles.logoDesktop} />
      <Icon name={LOGOTABLET} className={styles.logoTablet} />
      <Icon name={LOGOMOBILE} className={styles.logoMobile} />
    </a>
  );
}
