import { getCurrenciesData } from '../ports/currencies-service';
import { getStockData } from '../ports/repository';
import { StockWithCurrencies } from './models/stock-with-currencies';

const CURRENCIES = ['USD', 'CAD', 'AUD'];

export const retrieveStockValues = async (stockID: string): Promise<StockWithCurrencies> => {
    try {
        const stockValue = await getStockData(stockID);
        const currencyList = await getCurrenciesData(CURRENCIES);

        const stockWithCurrencies: StockWithCurrencies = {
            stock: stockValue?.stockId,
            values: {
                EUR: stockValue?.value.toString(),
            },
        };

        for (const currency in currencyList.rates) {
            stockWithCurrencies.values[currency] = (stockValue?.value * currencyList.rates[currency]).toFixed(2);
        }

        return stockWithCurrencies;
    } catch (err) {
        throw err;
    }
};
