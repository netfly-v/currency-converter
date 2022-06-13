import { useEffect, useState, useCallback } from 'react';
import { Header } from '../header/Header';
import { Direction, IRate } from '../types/types';
import { getRateByCc } from '../utils/utils';
import styles from './Converter.module.css';

interface ConverterProps {
  rate: IRate[];
}

interface SelectRateProps {
  direction: Direction;
  rate: IRate[];
  amount: number;
  select: string;
  changeAmount?: (value: number) => void;
  updateSelect: (value: string) => void;
}

const SelectRate = ({ direction, rate, amount, select, changeAmount, updateSelect }: SelectRateProps) => (
  <div className={styles.currencyField}>
    <span className={styles.direction}>{direction === Direction.From ? 'Отдаете' : 'Получаете'}</span>
    <input
      type="textarea"
      name={`currencyInput_${direction}`}
      className={styles.rateInput}
      value={amount}
      onChange={({ target }) => {
        if (direction === Direction.From) {
          if (/^\d*\.?\d*$/.test(target.value)) {
            changeAmount && changeAmount(parseInt(target.value, 10));
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

export const Converter = ({ rate }: ConverterProps) => {
  const [amount, setAmount] = useState(0);
  const [convertedAmount, setConvertedAmount] = useState(0);
  const [selectFrom, setSelectFrom] = useState(rate[0].cc);
  const [selectTo, setSelectTo] = useState(rate[0].cc);

  const changeAmount = useCallback(
    (value: number) => {
      setAmount(value);
      const rateFrom = getRateByCc(rate, selectFrom);
      const rateTo = getRateByCc(rate, selectTo);
      const result = rateFrom && rateTo ? (rateFrom / rateTo) * value : 0;
      setConvertedAmount(result);
    },
    [rate, selectFrom, selectTo]
  );

  useEffect(() => {
    changeAmount(amount);
  }, [amount, changeAmount]);

  const swapCurrency = () => {
    setSelectFrom(selectTo);
    setSelectTo(selectFrom);
  };

  return (
    <div className={styles.converter}>
      <Header rate={rate} />
      <div className={styles.title}>Выберите валюты:</div>
      <>
        <SelectRate
          rate={rate}
          direction={Direction.From}
          amount={amount}
          select={selectFrom}
          changeAmount={changeAmount}
          updateSelect={setSelectFrom}
        />
        <button className={styles.changeButton} onClick={swapCurrency}>
          <img src="https://finance.liga.net/design/images/icons/converter-min-arr.png" alt="converter img" />
        </button>
        <SelectRate
          rate={rate}
          direction={Direction.To}
          amount={convertedAmount}
          select={selectTo}
          updateSelect={setSelectTo}
        />
      </>
    </div>
  );
};
