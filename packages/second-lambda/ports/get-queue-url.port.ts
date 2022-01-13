import { getSqsFprQueueUrl, getSqsFptQueueUrl } from '../adapters/get-sqs-queue-url';

export const getFptQueueUrl = async (): Promise<string> => {
    try {
        const response = await getSqsFptQueueUrl();
        return response;
    } catch (err) {
        throw err;
    }
};
export const getFprQueueUrl = async (): Promise<string> => {
    try {
        const response = await getSqsFprQueueUrl();
        return response;
    } catch (err) {
        throw err;
    }
};
