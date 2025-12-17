// Nav.jsx
import Link from "next/link";
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

        <ul className={styles.nav__list__wrapper}>
          <li className={styles.nav__list}>
            <Link href="/login" className={styles.nav__list__login}>
              Login
            </Link>
          </li>
          <li className={styles.nav__list}>
            <Link href="/about">About</Link>
          </li>
          <li className={styles.nav__list}>
            <Link href="/contact">Contact</Link>
          </li>
          <li className={styles.nav__list}>
            <Link href="/help">Help</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
