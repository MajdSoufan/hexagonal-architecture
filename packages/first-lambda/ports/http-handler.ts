import { StockWithCurrencies } from '../domains/models/stock-with-currencies';
import { retrieveStockValues } from '../domains/stocks-logic';

export const retrieveStock = async (stockID: string): Promise<StockWithCurrencies> => {
    try {
        const stockWithCurrencies = await retrieveStockValues(stockID);
        return stockWithCurrencies;
    } catch (err) {
        throw err;
    }
};
