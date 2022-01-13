import { APIGatewayProxyEvent, APIGatewayProxyHandler, APIGatewayProxyResult } from 'aws-lambda';
import { getStocksRequest } from './adapters/get-stocks-request';

export const handler: APIGatewayProxyHandler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
    try {
        const stockID = event.pathParameters?.StockID;
        const response = await getStocksRequest(stockID!);
        return {
            statusCode: 200,
            headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
            body: JSON.stringify(response),
        };
    } catch (err) {
        console.log(err);
        throw err;
    }
};
