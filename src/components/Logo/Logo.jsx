import styles from "./Logo.module.css";
import Icon from "../Icon/Icon";

export default function Logo() {
  return (
    <a href="/" className={styles.logoLink}>
      <Icon id="desktop-logo" className={styles.logoDesktop} />
      <Icon id="tablet-logo" className={styles.logoTablet} />
      <Icon id="mobile-logo" className={styles.logoMobile} />
    </a>
  );
}
