import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../../../../app/store';
import { ReplyMode } from '../../../../../types/enums';
import { scrollToThread } from '../functionality/ReplyModeFunctionality';
import { selectReplyMode, setReplyMode, selectActiveThreadID } from '../../../../../features/chat/chatSlice';

const ChatInputReplyInThread: React.FC = () => {
    const dispatch = useDispatch();
    const replyMode = useSelector(selectReplyMode);
    const activeThreadID = useSelector(selectActiveThreadID);

    const closeReplyToThread = (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
        dispatch(setReplyMode({ replyMode: ReplyMode.allMessages, activeThreadID: '' }));
        e.stopPropagation();
    };

    return (
        <div className="button" id="chat-input-reply-in-thread" onClick={scrollToThread}>
            <span id="chat-input-currently-active-thread-label">Replying to Thread:</span>
            <span id="chat-input-currently-active-thread">#{activeThreadID}</span>
            <span id="chat-input-reply-in-thread-close-button" onClick={closeReplyToThread}>×</span>
        </div>
    );
}

export default ChatInputReplyInThread;
