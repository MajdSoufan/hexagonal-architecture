import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import { DynamoDBDocumentClient, GetCommand } from '@aws-sdk/lib-dynamodb';
import { StockItem } from './models/dynamodb';

const client = DynamoDBDocumentClient.from(new DynamoDBClient({ region: 'REGION' }));

const DB_TABLE = process.env.DB_TABLE;

export const getStockValue = async (stockID = 'AMZN'): Promise<StockItem> => {
    const params = {
        TableName: DB_TABLE,
        Key: {
            STOCK_ID: stockID,
        },
    };

    try {
        const stockData = await client.send(new GetCommand(params));
        return stockData.Item as StockItem;
    } catch (err) {
        console.log(err);
        throw err;
    }
};
