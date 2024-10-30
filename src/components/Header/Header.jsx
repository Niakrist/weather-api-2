import styles from "./Header.module.css";
import Logo from "../Logo/Logo";
import Input from "../Input/Input";

export default function Header() {
  return (
    <header className={styles.header}>
      <Logo />
      <Input />
    </header>
  );
}
