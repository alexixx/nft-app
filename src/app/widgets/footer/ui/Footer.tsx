import styles from './Footer.module.scss';
import LogoIcon from '@/shared/assets/icons/Logo.svg';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.info}>
          <a href="#" className={styles.logo}>
            <LogoIcon className={styles.logoIcon} />
            <span>DiveSea</span>
          </a>
          <div className={styles.nav}>
            <a href="#">Privacy Policy</a>
            <a href="#">Term & Conditions</a>
            <a href="#">About Us</a>
            <a href="#">Contact</a>
          </div>
        </div>
        <div className="">
          <span className={styles.copyright}>© 2023 DiveSea All Rights Reserved.</span>
        </div>
      </div>
    </footer>
  );
};
