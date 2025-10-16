
// Nav.jsx
import styles from './nav.module.css';
export default function Nav() {
  return (
    <nav className={styles.nav}>
      <div className={styles.nav__wrapper}>
        <figure className={styles.nav__img__mask}>
          <img
            src="logo.png"
            alt="Logo"
            className={styles.nav__img}
          />
        </figure>

        <ul className={styles.nav__list__wrapper }>
          <li className={`${styles.nav__list} ${styles.nav__list__login}`}>Login</li>
          <li className={styles.nav__list }>About</li>
          <li className={styles.nav__list}>Contact</li>
          <li className={styles.nav__list}>Help</li>
        </ul>
      </div>
    </nav>
  );
}