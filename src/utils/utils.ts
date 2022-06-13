import { IRate } from '../types/types';

export const getRateByCc = (rate: IRate[], property: string): number | null => {
    const rateObjByCc = rate.find(({ cc }) => cc === property)
    return rateObjByCc ? rateObjByCc.rate : null
};
