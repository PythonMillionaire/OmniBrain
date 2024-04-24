import {MessageSenderType} from "../enums";

export default class MessageSender {
    constructor(
        public id: string,
        public name: string,
        public logo: string,
        public type: MessageSenderType
    ) {}
}

export interface AIProviderInfo extends MessageSender {
    type: MessageSenderType.ai;
}

export interface UserInfo extends MessageSender {
    type: MessageSenderType.user;
}