import { Handler, SQSEvent } from 'aws-lambda';
import { processEventRequest } from './adapters/process-event-request';

export const handler: Handler = async (event: SQSEvent): Promise<string> => {
    try {
        const xmlMessage = extractPayloadFromSqsMessage(event);
        const response = await processEventRequest(xmlMessage);
        return 'Successful event processing!';
    } catch (err) {
        throw err;
    }
};

function extractPayloadFromSqsMessage(sqsEvent: SQSEvent): string {
    const records = sqsEvent.Records.map((record) => record.body);
    return records[0];
}
