import { Header } from '../header/Header';
import { IRate } from '../types/types';

interface CurrencyRatesProps {
  rate: IRate[]
}

export const CurrencyRates = ({ rate }: CurrencyRatesProps) => {
  return (
    <div>
      <Header rate={rate} />
      {rate.length ? (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Currency</th>
              <th>Rate</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {rate.map(el => {
              return (
                <tr key={el.cc}>
                  <td>{el.txt}</td>
                  <td>{el.cc}</td>
                  <td>{el.rate} UAH</td>
                  <td>{el.exchangedate}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      ) : null}
    </div>
  );
};
