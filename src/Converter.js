import { useEffect, useState, useCallback } from 'react';
import styles from './Converter.module.css';

const SelectRate = ({ direction, rate, amount, select, changeAmount, updateSelect }) => (
  <div className={styles.currencyField}>
    <input
      type="textarea"
      name={`currencyInput_${direction}`}
      value={amount}
      onChange={({ target }) => {
        if (direction === DIRECTION.FROM) {
          if (/^\d*\.?\d*$/.test(target.value)) {
            changeAmount(target.value);
          }
        }
      }}
    />
    <select
      name={`currency_${direction}`}
      value={select}
      onChange={({ target }) => {
        updateSelect(target.value);
      }}
    >
      {rate.map(el => (
        <option value={el.cc} key={el.cc}>
          {el.cc} {el.txt}
        </option>
      ))}
    </select>
  </div>
);

const DIRECTION = {
  FROM: 'from',
  TO: 'to',
};

export const Converter = ({ rate }) => {
  const [amount, setAmount] = useState(0);
  const [convertedAmount, setConvertedAmount] = useState(0);
  const [selectFrom, setSelectFrom] = useState(rate[0].cc);
  const [selectTo, setSelectTo] = useState(rate[0].cc);

  const changeAmount = useCallback(value => {
    setAmount(value);
    const rateFrom = rate.find(el => el.cc === selectFrom).rate;
    const rateTo = rate.find(el => el.cc === selectTo).rate;
    const result = (rateFrom / rateTo) * value;
    setConvertedAmount(result);
  }, [rate, selectFrom, selectTo]);
  
  useEffect(() => {
    changeAmount(amount);
  }, [amount, changeAmount]);

  const swapCurrency = () => {
    setSelectFrom(selectTo);
    setSelectTo(selectFrom);
  };

  return (
    <div className={styles.converter}>
      <div className={styles.title}>Выберите валюты:</div>
      <>
        <SelectRate
          rate={rate}
          direction={DIRECTION.FROM}
          amount={amount}
          select={selectFrom}
          changeAmount={changeAmount}
          updateSelect={setSelectFrom}
        />
        <button className={styles.changeButton} onClick={swapCurrency}>
          <img src="https://finance.liga.net/design/images/icons/converter-min-arr.png" />
        </button>
        <SelectRate
          rate={rate}
          direction={DIRECTION.TO}
          amount={convertedAmount}
          select={selectTo}
          updateSelect={setSelectTo}
        />
      </>
    </div>
  );
};
