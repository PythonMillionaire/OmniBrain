import React from 'react';
import Message from './elements/Message';
import AgentMessage from "./elements/AgentMessage";
import UserMessage from "./elements/UserMessage";

const ChatMessages: React.FC = () => {
    return (
        <section id="chat-messages-section">
            <UserMessage  messageContents={"Test\ntest\ntest\ntest"}/>
            <AgentMessage  messageContents={"Test\ntest\ntest\ntest"}/>
        </section>
    );
};

export default ChatMessages;