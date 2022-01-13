import { processAAEvent } from '../domains/event-processing-logic';

export const processEvent = async (xmlMessage: string): Promise<string> => {
    try {
        const response = await processAAEvent(xmlMessage);
        return response;
    } catch (err) {
        throw err;
    }
};
