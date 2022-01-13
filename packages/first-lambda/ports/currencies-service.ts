import { getCurrencies } from '../adapters/currency-converter';
import { CurrencyList } from '../adapters/models/stock-with-currencies';
// const getCurrencies = require("../adapters/CurrencyConverterWithCache");

export const getCurrenciesData = async (currencies: string[]): Promise<CurrencyList> => {
    try {
        const data = await getCurrencies(currencies);
        return data;
    } catch (err) {
        throw err;
    }
};
