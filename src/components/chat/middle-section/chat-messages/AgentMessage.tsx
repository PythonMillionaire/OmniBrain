import React from "react";
import Message from "./Message";
import {AgentMessageActionButtons} from "./MessageActionButton";

import {MessageSender} from "../../../../types/enums";

interface AgentMessageProps {
    messageContents: string;
}

const AgentMessage: React.FC<AgentMessageProps> = ({ messageContents }) => {

    // Define Agent-specific buttons and the thread info section
    const agentElements = (
            <div className="chat-message-thread-info">
                <div className="replies-info">
                    <div className="replies-counter">8 replies</div>
                    <div className="last-thread-interaction">Last
                        interaction: <span>3 days and 12 hours ago</span></div>
                </div>
                <div className="button view-thread">View thread</div>
            </div>
    );

    return <Message sender={MessageSender.Agent} messageContents={messageContents} actionButtons={<AgentMessageActionButtons />} children={agentElements}></Message>;
};

export default AgentMessage;
