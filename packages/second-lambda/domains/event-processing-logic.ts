import { sendSqsMessage } from '../adapters/send-sqs-message';
import { convertXmlToJson } from '../ports/convert-xml-to-json.port';
import { getFprQueueUrl, getFptQueueUrl } from '../ports/get-queue-url.port';
import { MESSAGE_TYPES, Message } from './models/message';

export const processAAEvent = async (xmlMessage: string): Promise<string> => {
    try {
        const jsonMessage = await convertXmlToJson(xmlMessage);
        const { type } = jsonMessage;

        switch (type) {
            case MESSAGE_TYPES.FPR:
                const fprQueueUrl = await getFprQueueUrl();
                const fprSqsResponse = await processAuctionAccessFprMessage(jsonMessage, fprQueueUrl);
                console.log(`fptSqsResponse: ${JSON.stringify(fprSqsResponse)}`);
                return 'Successfully sent FPR message'; // todo: return something?
            case MESSAGE_TYPES.FPT:
                const fptQueueUrl = await getFptQueueUrl();
                const fptSqsResponse = await processAuctionAccessFptMessage(jsonMessage, fptQueueUrl);
                console.log(`fptSqsResponse: ${JSON.stringify(fptSqsResponse)}`);
                return 'Successfully sent FPT message'; // todo: return something?
            default:
                throw new Error(`Message Type (${type}) is invalid.`);
        }
    } catch (err) {
        throw err;
    }
};

async function processAuctionAccessFprMessage(jsonMessage: Message, fprQueueUrl: string) {
    const message = formatFprJson(jsonMessage);
    const stringifiedMessage = JSON.stringify(message);
    return await sendSqsMessage(stringifiedMessage, fprQueueUrl);
}

async function processAuctionAccessFptMessage(jsonMessage: Message, fptQueueUrl: string) {
    const message = formatFptJson(jsonMessage);
    const stringifiedMessage = JSON.stringify(message);
    return await sendSqsMessage(stringifiedMessage, fptQueueUrl);
}
function formatFprJson(jsonMessage: Message) {
    throw new Error('Function not implemented.');
}
function formatFptJson(jsonMessage: Message) {
    throw new Error('Function not implemented.');
}
