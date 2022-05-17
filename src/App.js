import React, { useEffect, useState } from 'react';
import { Converter } from './converter/Converter';
import { Navbar } from './navbar/Navbar';
import styles from './App.module.css';
import { CurrencyRates } from './currencyRates/CurrencyRates';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { PATH } from './consts/consts';
import { ratesAPI } from './api/rates';

function App() {
  const [rate, setRate] = useState([]);

  useEffect(() => {
    ratesAPI.get().then(rates => setRate(rates));
  }, []);

  return (
    <BrowserRouter>
      <div className={styles.app}>
        <Navbar />
        <div className={styles.wrapper}>
          <Routes>
            <Route path={PATH.HOME} element={<Navigate to={PATH.CONVERTER} replace/>} />
            <Route path={PATH.CONVERTER} element={rate.length ? <Converter rate={rate} /> : null} />
            <Route path={PATH.RATES} element={<CurrencyRates rate={rate} />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
