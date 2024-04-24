import MessageInfo from "./MessageInfo";
import {MessageSenderType} from "../enums";
import {AIProviderInfo} from "./MessageSender";

export default class MessageThreadInfo {
    private _replies: MessageInfo[];

    constructor(
        public id: string,
        replies: MessageInfo[] = [],
        public name?: string
    ) {
        this._replies = replies;
    }

    get replies(): MessageInfo[] {
        return this._replies;
    }

    get repliesCount(): number {
        return this._replies.length;
    }

    get lastInteractionDate(): Date | undefined {
        if (this._replies.length > 0) {
            // last reply is the most recent one
            return this._replies[this._replies.length - 1].date;
        }
        return undefined;
    }

    get aiProviders(): AIProviderInfo[] {
        const uniqueIds = new Set<string>();

        // filter out undefined values, then apply the uniqueness check.
        return this._replies
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


    addReply(reply: MessageInfo): void {
        this._replies.push(reply);
    }

    // deletes reply by id
    deleteReply(reply: MessageInfo): void {
        this._replies = this._replies.filter(r => r.id !== reply.id);
    }
}
