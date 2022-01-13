export interface StockWithCurrencies {
    stock: string;
    values: {
        [key: string]: string;
    };
}
