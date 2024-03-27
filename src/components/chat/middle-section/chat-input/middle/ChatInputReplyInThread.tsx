import React from "react";

import {ReplyMode} from "../../../../../types/enums";

interface ChatInputMiddleProps {
    setReplyMode: React.Dispatch<React.SetStateAction<ReplyMode>>;
}

const ChatInputReplyInThread: React.FC<ChatInputMiddleProps> = ({ setReplyMode }) => {
    return(
        <div id="chat-input-reply-in-thread">Test</div>
    )
}

export default ChatInputReplyInThread;