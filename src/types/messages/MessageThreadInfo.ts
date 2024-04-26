import MessageInfo from "./MessageInfo";
import {MessageSenderType} from "../enums";
import {AIProviderInfo} from "./MessageSender";

export default class MessageThreadInfo {
    private _messages: MessageInfo[];

    constructor(
        public id: string,
        messages: MessageInfo[] = [],
        public name?: string
    ) {
        this._messages = messages;
    }

    get messages(): MessageInfo[] {
        return this._messages;
    }

    get messageCount(): number {
        return this.messages.length;
    }

    get allMessageIds(): string[] { return this._messages.map(reply => reply.id); } // returns all messageIds

    get lastInteractionDate(): Date | undefined {
        if (this._messages.length > 0) {
            // last reply is the most recent one
            return this._messages[this._messages.length - 1].date;
        }
        return undefined;
    }

    get aiProviders(): AIProviderInfo[] {
        const uniqueIds = new Set<string>();

        // filter out undefined values, then apply the uniqueness check.
        return this._messages
            .map(reply => reply.sender.type === MessageSenderType.ai ? reply.sender as AIProviderInfo : undefined)
            .filter((provider): provider is AIProviderInfo => provider !== undefined)
            .filter(provider => {
                const isUnique = !uniqueIds.has(provider.id);

                if (isUnique) {
                    uniqueIds.add(provider.id);
                }

                return isUnique;
            });
    }


    addMessage(messageToAdd: MessageInfo): void {
        this._messages.push(messageToAdd);
    }

    // deletes reply by id
    deleteReply(reply: MessageInfo): void {
        this._messages = this._messages.filter(r => r.id !== reply.id);
    }
}
