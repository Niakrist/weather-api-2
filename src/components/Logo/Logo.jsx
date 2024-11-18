import styles from './Logo.module.css';
import LogoMobileSvg from '../../assets/icon/logo-small.svg';
import Icon from '../Icon/Icon';

const Logo = () => {
  return (
    <a className={styles['logo']} href="index.html">
      <picture>
        <source
          srcSet={LogoMobileSvg}
          media="(max-width: 886px)"
          alt="Логотип"
        />
        <Icon name={'logo'} className={styles['logo-small']} />
      </picture>
    </a>
  );
};

export default Logo;
