import styles from './CurrencyRates.module.css';

export const CurrencyRates = ({ rate }) => {
  return (
    <div>
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
