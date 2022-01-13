import * as axios from 'axios';
import { CurrencyList } from './models/stock-with-currencies';

const API_KEY = process.env.API_KEY;

export const getCurrencies = async (currencies: string[]): Promise<CurrencyList> => {
    try {
        // replace with  URL from the service
        const res = await axios.default.get<CurrencyList>(`http://api.mysite.com?access_key=${API_KEY}&symbols=${currencies.toString()}`);
        return res.data;
    } catch (err) {
        throw err;
    }
};
