import React, {useState} from "react";

import {useSelector} from 'react-redux';
import {RootState} from "../../../../../app/store"; // Adjust path as necessary
import {selectThreadById} from "../../../../../features/chat/chatSlice";
import {useReplyMode} from "../../../../general/messages/ReplyModeContext";
import {MessageSenderType, ReplyMode} from "../../../../../types/enums";
import MessageInfo from "../../../../../types/messages/MessageInfo";
import UserMessage from "../UserMessage";
import AgentMessage from "../AgentMessage";
import {AIProviderInfo} from "../../../../../types/messages/MessageSender";
import MessageThreadInfo from "../../../../../types/messages/MessageThreadInfo";

/* Toggles between reply in thread mode and normal replies */
const toggleReplyMode = (
    replyMode: ReplyMode,
    setReplyMode: (newMode: ReplyMode, newActiveThreadID: string) => void,
    currentThreadID: string,
    activeThreadID: string ) => {

    const isCurrentThreadActive = activeThreadID === currentThreadID;

    // If currently in thread mode and the active thread is the same as the one being clicked, cancel thread reply mode
    if (replyMode === ReplyMode.thread && isCurrentThreadActive) {
        // Toggle back to allMessages
        setReplyMode(ReplyMode.allMessages, '');
    } else {
        // Otherwise, switch from the current thread to the clicked thread
        setReplyMode(ReplyMode.thread, currentThreadID);
    }
}

interface EmptyThreadProps {
    currentThreadID: string;
    setReplyMode: (newMode: ReplyMode, newActiveThreadID: string) => void;  // Ensure this matches the context signature
}


/* Thread with no messages */
const EmptyThread: React.FC<EmptyThreadProps> = ({ currentThreadID, setReplyMode }) => {
    const { replyMode, activeThreadID } = useReplyMode();

    const currentThread = useSelector((state: RootState) =>
        currentThreadID ? selectThreadById(state, currentThreadID) : undefined
    );

    const isReplyingToCurrentThread = activeThreadID && replyMode === ReplyMode.thread && activeThreadID === currentThreadID;

    const buttonText = isReplyingToCurrentThread ? 'Currently replying to this thread. Click to cancel' :
        (replyMode === ReplyMode.thread ? 'Already replying to a thread. Click to reply to this one instead' : 'Reply in thread');

    console.log("Button text: " + buttonText);
    console.log("Current thread: " + currentThread + "Current thread ID: " + currentThreadID);

    return (
        <div className="button chat-message-thread-info"
             onClick={() => toggleReplyMode(replyMode, setReplyMode, currentThreadID, activeThreadID)}>
            <div className="chat-message-thread-replies-info"></div>
            {(!currentThread || (currentThread.id === '')) && (
                <div className="chat-message-reply-in-thread">{buttonText}</div>
            )}

        </div>
    );
};


interface MessageThreadProps {
    messageInfo: MessageInfo;
    messageThreadInfo?: MessageThreadInfo;
}

const MessageThread: React.FC<MessageThreadProps> = ({messageInfo, messageThreadInfo}) => {
    const { replyMode, setReplyMode } = useReplyMode();
    const [viewingThread, setViewingThread] = useState(false);

    // If there are no messages, return empty thread
    if (!messageThreadInfo || messageThreadInfo.repliesCount === 0) {
        console.log("No messages in thread");
        return <EmptyThread currentThreadID={messageThreadInfo && messageThreadInfo.id ? messageThreadInfo.id : messageInfo.id} setReplyMode={setReplyMode}/>
    }

    const { repliesCount, lastInteractionDate, aiProviders } = messageThreadInfo;

    return (
        <div className={`button chat-message-thread-info ${viewingThread ? 'chat-message-viewing-thread' : ''}`}>
            <div className="chat-message-thread-replies-info">
                {aiProviders.map((provider: AIProviderInfo) => (
                    <img key={provider.id} src={provider.logo} alt={`${provider.name} logo`} className="replies-provider-in-thread-logo" />
                ))}
                <div className="replies-counter">{repliesCount} replies</div>
                {lastInteractionDate && <div className="last-thread-interaction">Last interaction: {lastInteractionDate.toDateString()}</div>}
            </div>

            <div className="chat-message-view-thread" onClick={() => setViewingThread(!viewingThread)}>
                {viewingThread ? 'Close thread' : 'View thread'}
            </div>

            <div className="chat-message-thread-contents" style={{ display: viewingThread ? 'flex' : 'none' }}>
                {messageThreadInfo.replies.map((reply: MessageInfo) => (
                    reply.sender.type === MessageSenderType.user ?
                        <UserMessage key={reply.id} messageInfo={reply} /> :
                        <AgentMessage key={reply.id} messageInfo={reply} />
                ))}
            </div>
        </div>
    );
};

export default MessageThread;