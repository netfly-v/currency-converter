import { IRate } from '../types/types';
import { getRateByCc } from '../utils/utils';
import styles from './Header.module.css';

interface HeaderProps {
  rate: IRate[];
}

export const Header = ({ rate }: HeaderProps) => {

  return (
    <div className={styles.header}>
      <span className={styles.currencyPair}>
        USD/UAH:
        <span className={styles.rate}>{getRateByCc(rate, 'USD')}</span>
      </span>
      <span className={styles.currencyPair}>
        EUR/UAH:
        <span className={styles.rate}>{getRateByCc(rate, 'EUR')}</span>
      </span>
    </div>
  );
};
