import { Builder, parseStringPromise, processors } from 'xml2js';
import { Message } from '../domains/models/message';

export const convertRawXmlToJson = async (xmlRecord: string): Promise<Message> => {
    try {
        return parseStringPromise(xmlRecord, { explicitArray: false, tagNameProcessors: [processors.stripPrefix] });
    } catch (err) {
        // console.log(err);
        throw err;
    }
};
