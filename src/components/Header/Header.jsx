import Logo from "./../Logo/Logo";
import Input from "./../Input/Input";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles["header"]}>
      <Logo />
      <Input />
    </header>
  );
};

export default Header;
