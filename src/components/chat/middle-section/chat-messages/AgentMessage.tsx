import React from "react";
import Message from "./Message";
import {AgentMessageActionButtons} from "./MessageActionButton";

import {MessageSender} from "../../../../types/enums";

import chatGPTLogo from "../../../../assets/images/ai-providers/logo-chatgpt.svg";
import claudeLogo from "../../../../assets/images/ai-providers/logo-claude.svg";
import geminiLogo from "../../../../assets/images/ai-providers/logo-gemini.svg";

interface AgentMessageProps {
    messageContents: string;
}

const AgentMessage: React.FC<AgentMessageProps> = ({ messageContents }) => {

    // Define Agent-specific buttons and the thread info section
    const agentElements = (
            <div className="button chat-message-thread-info">
                <div className="replies-info">
                    <div className="replies-providers-in-thread">
                        <img className="replies-provider-in-thread-logo" src={chatGPTLogo} alt="ChatGPT logo"/>
                        <img className="replies-provider-in-thread-logo" src={claudeLogo} alt="ChatGPT logo"/>
                        <img className="replies-provider-in-thread-logo" src={geminiLogo} alt="ChatGPT logo"/>
                    </div>
                    <div className="replies-counter">8 replies</div>
                    <div className="last-thread-interaction">Last
                        interaction: <span>3 days and 12 hours ago</span></div>
                </div>
                <div className="view-thread">View thread</div>
            </div>
    );

    return <Message sender={MessageSender.Agent} messageContents={messageContents} actionButtons={<AgentMessageActionButtons />} children={agentElements}></Message>;
};

export default AgentMessage;
