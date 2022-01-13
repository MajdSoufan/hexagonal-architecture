import { getStockValue } from '../adapters/get-stocks-db';
import { StockItem } from '../adapters/models/dynamodb';

export const getStockData = async (stockID: string): Promise<StockItem> => {
    try {
        const data = await getStockValue(stockID);
        return data;
    } catch (err) {
        throw err;
    }
};
