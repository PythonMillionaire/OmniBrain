import React from "react";

import {ReplyMode} from "../../../../../types/enums";
import {scrollToThread} from "../functionality/ReplyModeFunctionality";
import MessageThreadInfo from "../../../../../types/messages/MessageThreadInfo";

interface ChatInputMiddleProps {
    setReplyMode: (newMode: ReplyMode, newActiveThreadID: string) => void;
    newActiveThreadID: string;
}

const ChatInputReplyInThread: React.FC<ChatInputMiddleProps> = ({ setReplyMode, newActiveThreadID }) => {
    return(
        <div className="button" id="chat-input-reply-in-thread" onClick={scrollToThread}>
            <span id="chat-input-currently-active-thread-label">Currently replying to Thread:</span> <span id="chat-input-currently-active-thread">#P1-M34</span>
            <span id="chat-input-reply-in-thread-close-button" onClick={(e) => {
                setReplyMode(ReplyMode.allMessages, newActiveThreadID);
                e.stopPropagation();
            }}>×</span>
        </div>
    )
}

export default ChatInputReplyInThread;