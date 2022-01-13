import { SQSClient, SendMessageCommand } from '@aws-sdk/client-sqs';

const sqsClient = new SQSClient({ region: process.env.awsRegion });

export const sendSqsMessage = async (sqsMessage: string, queueUrl: string): Promise<string> => {
    try {
        const response = await sqsClient.send(new SendMessageCommand({ MessageBody: sqsMessage, QueueUrl: queueUrl }));
        return response.MessageId!;
    } catch (err) {
        // console.log(err);
        throw err;
    }
};
