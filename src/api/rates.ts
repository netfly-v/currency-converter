import axios from 'axios';

export const ratesAPI = {
  get() {
    return axios
      .get('https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json')
      .then(response => response.data);
  },
};
