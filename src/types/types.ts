export interface IRate {
  cc: string;
  exchangedate: string;
  rate: number;
  txt: string;
}

export enum Direction {
  From = 'from',
  To = 'to',
}
