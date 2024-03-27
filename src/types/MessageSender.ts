import {MessageSenderType} from "./enums";

export default interface MessageSender {
    name: string;
    id: string;
    logo: string;
    type: MessageSenderType;
}

export interface AIProviderInfo extends MessageSender {
    type: MessageSenderType.ai;
}

export interface UserInfo extends MessageSender {
    type: MessageSenderType.user;
}