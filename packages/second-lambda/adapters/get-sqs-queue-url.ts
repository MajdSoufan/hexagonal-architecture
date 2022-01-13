import { SQSClient, GetQueueUrlCommand } from '@aws-sdk/client-sqs';

const sqsClient = new SQSClient({ region: process.env.awsRegion });

let fprDestinationQueueUrl: string, fptDestinationQueueUrl: string;

export const getSqsFptQueueUrl = async (): Promise<string> => {
    try {
        const fptDestinationQueueName = process.env.FPT_DESTINATION_QUEUE_NAME;

        if (!fptDestinationQueueName) {
            throw new Error('Missing required queue name!');
        }
        if (!fptDestinationQueueUrl) {
            const { QueueUrl } = await sqsClient.send(new GetQueueUrlCommand({ QueueName: fptDestinationQueueName }));
            fptDestinationQueueUrl = QueueUrl!;
        }
        console.debug({ fptQueueName: fptDestinationQueueName });
        return fptDestinationQueueUrl;
    } catch (err) {
        // console.log(err);
        throw err;
    }
};

export const getSqsFprQueueUrl = async (): Promise<string> => {
    try {
        const fprDestinationQueueName = process.env.FPR_DESTINATION_QUEUE_NAME;

        if (!fprDestinationQueueName) {
            throw new Error('Missing required queue name!');
        }
        if (!fprDestinationQueueUrl) {
            const { QueueUrl } = await sqsClient.send(new GetQueueUrlCommand({ QueueName: fprDestinationQueueName }));
            fprDestinationQueueUrl = QueueUrl!;
        }
        console.debug({ fprQueueName: fprDestinationQueueName });
        return fprDestinationQueueUrl;
    } catch (err) {
        // console.log(err);
        throw err;
    }
};
