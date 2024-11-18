import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles['footer']}>
      <p className={styles['copyright']}>
        Проект выполнен в рамках стажировки&nbsp;
        <a className={styles['link']} target="_blank" href="https://preax.ru" rel="noreferrer">
          PREAX
        </a>
      </p>
    </footer>
  );
};

export default Footer;
