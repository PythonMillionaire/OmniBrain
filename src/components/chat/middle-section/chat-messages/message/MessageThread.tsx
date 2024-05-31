import React, {Dispatch, useState} from "react";

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
import AgentMessage from "../AgentMessage";
import {UnknownAction} from "@reduxjs/toolkit";

import viewThreadIcon from "../../../../../assets/images/action-buttons/view-thread.svg";
import replyInThreadIcon from "../../../../../assets/images/action-buttons/reply-in-thread.svg";
import cancelReplyInThreadIcon from "../../../../../assets/images/action-buttons/cancel-reply-in-thread.svg";

const handleToggleReplyMode = (
                             activeThreadID: string,
                             currentThreadID: string ,
                             replyMode: ReplyMode,
                             dispatch: Dispatch<UnknownAction>) => {
    const isCurrentThreadActive = activeThreadID === currentThreadID;

    if (replyMode === ReplyMode.thread && isCurrentThreadActive) {
        dispatch(setReplyMode({ replyMode: ReplyMode.allMessages, activeThreadID: '' }));
    } else {
        dispatch(setReplyMode({ replyMode: ReplyMode.thread, activeThreadID: currentThreadID }));
    }
};

const ReplyInThisThread: React.FC = () => {
    return <><img className={"reply-in-thread-button-icon"} src={replyInThreadIcon} alt="Reply in thread"/>Reply in thread</>;
}

const AlreadyReplyingInThisThread: React.FC = () => {
    return <span>
            <img className={"reply-in-thread-button-icon"} src={replyInThreadIcon} alt="Cancel reply in thread"/>
            Replying to this thread. Click to cancel
        </span>;
}

const ReplyToAnotherThread: React.FC = () => {
    return <span>
                <img className={"reply-in-thread-button-icon"} src={cancelReplyInThreadIcon}
                     alt="Reply to another thread"/>
                Already replying to a thread. Reply to this one instead
            </span>;
}

interface EmptyThreadProps {
    currentThreadID: string;
    activeThread: string,
    replyMode: ReplyMode
    threadStateClass: string
}

/* Thread with no messages */
const EmptyThread: React.FC<EmptyThreadProps> = ({currentThreadID, activeThread, replyMode, threadStateClass}) => {
    const dispatch = useDispatch();

    const buttonElement = replyMode === ReplyMode.thread ? (activeThread === currentThreadID ?
        <AlreadyReplyingInThisThread /> : <ReplyToAnotherThread />
            ) : <ReplyInThisThread />;

    return (
        <div className={`button chat-message-thread-info-border ${threadStateClass}`} onClick={() => handleToggleReplyMode(activeThread, currentThreadID, replyMode, dispatch)}>
            <div className={`button chat-message-thread-info`}>
                <div className="chat-message-thread-action-section"></div>
                <div className="chat-message-reply-in-thread">{buttonElement}</div>
            </div>
        </div>
    );
};

interface MessageThreadInfoComponentProps {
    isBottomOne: boolean;
    viewingThread: boolean;
    setViewingThread: (viewingThread: boolean) => void;
    messageCount: number;
    lastInteractionDate?: Date;
    aiProviders?: AIProviderInfo[];
    currentThreadID: string;
    activeThread: string;
    replyMode: ReplyMode;
}

const MessageThreadInfoComponent: React.FC<MessageThreadInfoComponentProps> = React.memo(({
                                                                                   isBottomOne,
                                                                                   viewingThread,
                                                                                   setViewingThread,
                                                                                   messageCount,
                                                                                   lastInteractionDate,
                                                                                   aiProviders,
                                                                                   currentThreadID,
                                                                                   activeThread,
                                                                                   replyMode
                                                                               }) => {
    const dispatch = useDispatch();

    return <span className={`chat-message-thread-action-section${viewingThread ? ' chat-message-viewing-thread' : ''} ${isBottomOne && !viewingThread ? 'bottom-element' : ''}`}>
        <span className={`chat-message-thread-replies-info`}>{
            aiProviders && aiProviders.map((provider: AIProviderInfo) => (
                <img key={provider.id} src={provider.logo} alt={`${provider.name} logo`}
                     className="replies-provider-in-thread-logo"/>
            ))
        }
            <div className="replies-counter">{messageCount} replies</div>
            {
                lastInteractionDate && <div className="last-thread-interaction">{lastInteractionDate.toDateString()}</div>
            }
        </span>
        <span className="chat-message-view-reply-thread">
            {
                <>
                    <span className={'button chat-message-reply-in-thread-button'}
                          onClick={() => handleToggleReplyMode(activeThread, currentThreadID, replyMode, dispatch)}>
                        {replyMode === ReplyMode.thread ? (activeThread === currentThreadID ?
                                <AlreadyReplyingInThisThread /> : <ReplyToAnotherThread />
                        ) : <ReplyInThisThread />}
                    </span>

                    <span className={'button chat-message-view-thread-button'}
                          onClick={() => setViewingThread(!viewingThread)}>
                            {viewingThread ? 'Close thread' :
                                <><img className={"view-thread-button-icon"} src={viewThreadIcon} alt="View thread"/>View
                                    thread</>}
                        </span>
                </>

            }
                </span>
            </span>
});

interface MessageThreadProps {
    messageInfo: MessageInfo;
}

const MessageThread: React.FC<MessageThreadProps> = ({messageInfo}) => {
    const [viewingThread, setViewingThread] = useState(false);

    const messageThreadInfo = useSelector((state: RootState) => selectThreadById(state, messageInfo.id));

    const replyMode = useSelector((state: RootState) => selectReplyMode(state));

    const currentThreadID = messageThreadInfo && messageThreadInfo.id ? messageThreadInfo.id : messageInfo.id;

    const activeThread = useSelector((state: RootState) => selectActiveThreadID(state));

    const threadStateClass = replyMode === ReplyMode.thread ? (activeThread === currentThreadID ?
            'chat-message-currently-replying-to-this-thread' : 'chat-message-replying-to-another-thread'
    ) : 'chat-message-reply-to-this-thread';

    // If there are no messages, return empty thread
    if (!messageThreadInfo || messageThreadInfo.messageCount === 0) {
        return <EmptyThread
            currentThreadID={currentThreadID}
            activeThread={activeThread}
            replyMode={replyMode}
            threadStateClass={threadStateClass}
        />;
    }

    const { messageCount, lastInteractionDate, aiProviders } = messageThreadInfo;

    return (
        <div className={`chat-message-thread-info-border${messageCount > 0 ? ' has-replies' : ''}`}>
            <div className={`chat-message-thread-info ${threadStateClass}${viewingThread ? ' chat-message-viewing-thread' : ''}`}>
                <MessageThreadInfoComponent
                    isBottomOne={false}
                    messageCount={messageCount}
                    lastInteractionDate={lastInteractionDate}
                    aiProviders={aiProviders}
                    setViewingThread={setViewingThread}
                    viewingThread={viewingThread}
                    currentThreadID={currentThreadID}
                    activeThread={activeThread}
                    replyMode={replyMode}
                />

                <div className={`chat-message-thread-contents ${viewingThread ? 'chat-message-viewing-thread' : ''}`}>
                    {
                        messageThreadInfo && messageThreadInfo.messages && messageThreadInfo.messages.length && messageThreadInfo.messages.map((reply: MessageInfo) => (
                            reply.sender.type === MessageSenderType.user ?
                                <UserMessage key={reply.id} messageInfo={reply} /> :
                                <AgentMessage key={reply.id} messageInfo={reply} allowThreads={false} />
                        ))
                    }
                </div>

                <MessageThreadInfoComponent
                    isBottomOne={true}
                    messageCount={messageCount}
                    lastInteractionDate={lastInteractionDate}
                    aiProviders={aiProviders}
                    setViewingThread={setViewingThread}
                    viewingThread={viewingThread}
                    currentThreadID={messageThreadInfo && messageThreadInfo.id ? messageThreadInfo.id : messageInfo.id}
                    activeThread={activeThread}
                    replyMode={replyMode}
                />
            </div>
        </div>
    );
};

export default MessageThread;