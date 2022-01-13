import { sendSqsMessage } from '../adapters/send-sqs-message';

export const sendMessageToQueue = async (sqsMessage: string, queueUrl: string): Promise<string> => {
    try {
        const response = await sendSqsMessage(sqsMessage, queueUrl);
        return response;
    } catch (err) {
        throw err;
    }
};
