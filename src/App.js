import React, { useEffect, useState } from 'react';
import { Converter } from './Converter';
import { Navbar } from './Navbar';
import styles from './App.module.css';
import { CurrencyRates } from './CurrencyRates';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import axios from 'axios';

function App() {
  const [rate, setRate] = useState([]);

  useEffect(() => {
    axios.get('https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json').then(response => {
      setRate(response.data);
    });
  }, []);

  return (
    <BrowserRouter>
      <div className={styles.app}>
        <Navbar />
        <div className={styles.wrapper}>
          <Routes>
            <Route path="/converter" element={rate.length ? <Converter rate={rate} /> : null} />
            <Route path="/rates" element={<CurrencyRates rate={rate} />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
