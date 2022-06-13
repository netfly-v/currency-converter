import styles from './Navbar.module.css';
import { NavLink } from 'react-router-dom';
import { PATH } from '../consts/consts';

export const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <NavLink to={PATH.CONVERTER}>
        <button className={styles.menu}>Конвертер валют</button>
      </NavLink>
      <NavLink to={PATH.RATES}>
        <button className={styles.menu}>Курсы валют</button>
      </NavLink>
    </div>
  );
};
