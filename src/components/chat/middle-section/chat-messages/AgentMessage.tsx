import React, {useEffect, useState} from "react";
import Message from "./Message";
import {AgentMessageActionButtons} from "./MessageActionButton";

import MessageThread from "./message/MessageThread";

import MessageInfo from "../../../../types/messages/MessageInfo";

interface AgentMessageProps {
    messageInfo: MessageInfo;
    allowThreads?: boolean;
}

const AgentMessage: React.FC<AgentMessageProps> = ({ messageInfo, allowThreads = true}) => {
    return (
        <Message
            messageInfo={messageInfo}
            actionButtons={<AgentMessageActionButtons isInsideThread={!allowThreads}/>}
            threadSection={
                !allowThreads ? null :
                <MessageThread messageInfo={messageInfo}
                />
            }
        />
    );
};

export default AgentMessage;
