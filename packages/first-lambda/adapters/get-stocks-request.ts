import { retrieveStock } from '../ports/http-handler';

export const getStocksRequest = async (stockID: string) => {
    try {
        const stockData = await retrieveStock(stockID);
        return stockData;
    } catch (err) {
        console.log(err);
        throw err;
    }
};
