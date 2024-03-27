import React from "react";

import {formatDistanceToNow} from 'date-fns';

import MessageThreadInfo from "../../../../../types/MessageThreadInfo";
import {useReplyMode} from "../../../../general/messages/ReplyModeContext";
import {ReplyMode} from "../../../../../types/enums";

interface MessageThreadProps {
    messageThreadInfo?: MessageThreadInfo;
}

const EmptyThread: React.FC = () => {
    const { replyMode, setReplyMode } = useReplyMode();

    return(
        <div className="button chat-message-thread-info"
             onClick={() => {
                 replyMode === ReplyMode.allMessages ? setReplyMode(ReplyMode.thread) : setReplyMode(ReplyMode.allMessages);
             }
             }>
            <div className="replies-info">
            </div>
            <div className="reply-in-thread">Reply in thread</div>
        </div>
    )
}

const MessageThread: React.FC<MessageThreadProps> = ({ messageThreadInfo}) => {
    if (messageThreadInfo === undefined) {
        return <EmptyThread />;
    }

    const { repliesCount, lastInteractionDate, aiProviders } = messageThreadInfo;

    return (
        repliesCount > 0 ? <div className="button chat-message-thread-info">
            <div className="replies-info">
                <div className="replies-providers-in-thread">
                    {
                        aiProviders.map((provider) => (
                            <img className="replies-provider-in-thread-logo" src={provider.logo} alt={`${provider.name} logo`}/>
                        ))
                    }
                </div>
                <div className="replies-counter">{repliesCount} replies</div>
                { lastInteractionDate && <div className="last-thread-interaction">Last
                    interaction: <span>{ formatDistanceToNow(lastInteractionDate, { addSuffix: true }) }</span></div> }
            </div>
            <div className="view-thread">View thread</div>
        </div>
            : <EmptyThread />
    );
};


export default MessageThread;