import styles from './Navbar.module.css';
import { NavLink } from 'react-router-dom';

export const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <NavLink to="/converter">
        <button className={styles.menu}>Конвертер валют</button>
      </NavLink>
      <NavLink to="/rates">
        <button className={styles.menu}>Курсы валют</button>
      </NavLink>
    </div>
  );
};
