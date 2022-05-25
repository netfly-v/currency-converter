import styles from './Header.module.css';

export const Header = ({ rate }) => {
  const getMainCurrencyRate = currency => (rate.length ? rate.find(el => el.cc === currency).rate : null);

  return (
    <div className={styles.header}>
      <span className={styles.currencyPair}>
        USD/UAH:
        <span className={styles.rate}>{getMainCurrencyRate('USD')}</span>
      </span>
      <span className={styles.currencyPair}>
        EUR/UAH:
        <span className={styles.rate}>{getMainCurrencyRate('EUR')}</span>
      </span>
    </div>
  );
};
