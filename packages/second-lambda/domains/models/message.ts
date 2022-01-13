export interface Message {
    content: string;
    type: string;
}

export const MESSAGE_TYPES = {
    FPR: 'FPR',
    FPT: 'FPT',
    FPS: 'FPS',
    FPP: 'FPP',
};
