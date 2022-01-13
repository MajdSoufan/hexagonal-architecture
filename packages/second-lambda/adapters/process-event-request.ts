import { processEvent } from '../ports/process-event.port';

export const processEventRequest = async (xmlMessage: string): Promise<string> => {
    try {
        const messageData = await processEvent(xmlMessage);
        return messageData;
    } catch (err) {
        // console.log(err);
        throw err;
    }
};
