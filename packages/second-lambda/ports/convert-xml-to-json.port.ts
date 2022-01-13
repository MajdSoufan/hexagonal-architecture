import { convertRawXmlToJson } from '../adapters/convert-raw-xml-to-json';
import { Message } from '../domains/models/message';

export const convertXmlToJson = async (rawXml: string): Promise<Message> => {
    try {
        const response = await convertRawXmlToJson(rawXml);
        return response;
    } catch (err) {
        throw err;
    }
};
