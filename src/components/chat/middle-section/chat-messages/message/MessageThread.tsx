import React, {useState} from "react";

import {useDispatch, useSelector} from 'react-redux';
import {RootState} from "../../../../../app/store"; // Adjust path as necessary
import {
    selectActiveThreadID,
    selectReplyMode,
    selectThreadById,
    setReplyMode
} from "../../../../../features/chat/chatSlice";
import {MessageSenderType, ReplyMode} from "../../../../../types/enums";
import MessageInfo from "../../../../../types/messages/MessageInfo";
import UserMessage from "../UserMessage";
import {AIProviderInfo} from "../../../../../types/messages/MessageSender";
import MessageThreadInfo from "../../../../../types/messages/MessageThreadInfo";
import AgentMessage from "../AgentMessage";


/* Thread with no messages */
const EmptyThread: React.FC<{ currentThreadID: string }> = ({ currentThreadID }) => {
    const dispatch = useDispatch();
    const replyMode = useSelector((state: RootState) => selectReplyMode(state));
    const activeThreadID = useSelector((state: RootState) => selectActiveThreadID(state));

    const handleToggleReplyMode = () => {
        const isCurrentThreadActive = activeThreadID === currentThreadID;

        if (replyMode === ReplyMode.thread && isCurrentThreadActive) {
            dispatch(setReplyMode({ replyMode: ReplyMode.allMessages, activeThreadID: '' }));
        } else {
            dispatch(setReplyMode({ replyMode: ReplyMode.thread, activeThreadID: currentThreadID }));
        }
    };

    const buttonText = replyMode === ReplyMode.thread && activeThreadID === currentThreadID ?
        'Currently replying to this thread. Click to cancel' :
        (replyMode === ReplyMode.thread ? 'Already replying to a thread. Click to reply to this one instead' : 'Reply in thread');

    return (
        <div className="button chat-message-thread-info" onClick={handleToggleReplyMode}>
            <div className="chat-message-thread-replies-info"></div>
            <div className="chat-message-reply-in-thread">{buttonText}</div>
        </div>
    );
};


interface MessageThreadProps {
    messageInfo: MessageInfo;
}


const MessageThread: React.FC<MessageThreadProps> = ({messageInfo}) => {
    console.log("Rendering MessageThread", messageInfo.contents);

    const [viewingThread, setViewingThread] = useState(false);

    const messageThreadInfo = useSelector((state: RootState) => selectThreadById(state, messageInfo.id));

    // If there are no messages, return empty thread
    if (!messageThreadInfo || messageThreadInfo.messageCount === 0) {
        console.log("No messages in thread.", messageInfo, messageThreadInfo, messageThreadInfo?.messageCount);
        return <EmptyThread currentThreadID={messageThreadInfo && messageThreadInfo.id ? messageThreadInfo.id : messageInfo.id}/>;
    } else {
        console.log(messageThreadInfo.messageCount, " messages in thread ", messageThreadInfo);
    }

    console.log("THREAD INFO", messageThreadInfo, messageThreadInfo.messages);

    const { messageCount, lastInteractionDate, aiProviders } = messageThreadInfo;

    return (
        <div className={`button chat-message-thread-info ${viewingThread ? 'chat-message-viewing-thread' : ''}`}>
            <span className="chat-message-thread-replies-info">
                {aiProviders && aiProviders.map((provider: AIProviderInfo) => (
                    <img key={provider.id} src={provider.logo} alt={`${provider.name} logo`}
                         className="replies-provider-in-thread-logo"/>
                ))}
                <div className="replies-counter">{messageCount} replies</div>
                {lastInteractionDate && <div className="last-thread-interaction">Last
                    interaction: {lastInteractionDate.toDateString()}</div>}

                <span className="chat-message-view-thread" onClick={() => setViewingThread(!viewingThread)}>
                {viewingThread ? 'Close thread' : 'View thread'}
            </span>
            </span>


            <div className="chat-message-thread-contents" style={{display: viewingThread ? 'flex' : 'none'}}>
                {
                    /// THIS PART FREEZES THINGS. If I only use UserMessage, which has no MessageThread subcomponent, it works fine
                    messageThreadInfo && messageThreadInfo.messages && messageThreadInfo.messages.length && messageThreadInfo.messages.map((reply: MessageInfo) => (
                        reply.sender.type === MessageSenderType.user ?
                            <UserMessage key={reply.id} messageInfo={reply} /> :
                            <AgentMessage key={reply.id} messageInfo={reply} allowThreads={false} />
                    ))
                }
            </div>
        </div>
    );
};

export default MessageThread;