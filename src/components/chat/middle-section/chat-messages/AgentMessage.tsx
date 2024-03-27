import React from "react";
import Message from "./Message";
import {AgentMessageActionButtons} from "./MessageActionButton";

import {MessageSenderType} from "../../../../types/enums";
import MessageThreadInfo from "../../../../types/MessageThreadInfo";
import MessageThread from "./message/MessageThread";

interface AgentMessageProps {
    messageContents: string;
    messageThreadInfo?: MessageThreadInfo;
}

const AgentMessage: React.FC<AgentMessageProps> = ({ messageContents , messageThreadInfo}) => {
    return (
        <Message
            sender={MessageSenderType.ai}
            messageContents={messageContents}
            actionButtons={<AgentMessageActionButtons />}
            threadSection={
                <MessageThread
                    messageThreadInfo={ messageThreadInfo }/>
                }
        />
    );
};

export default AgentMessage;
