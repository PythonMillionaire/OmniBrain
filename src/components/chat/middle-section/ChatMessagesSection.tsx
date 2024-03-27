import React from 'react';
import AgentMessage from "./chat-messages/AgentMessage";
import UserMessage from "./chat-messages/UserMessage";

const ChatMessagesSection = () => {
    return (
        <section id="chat-messages-section">
            <UserMessage
                messageContents={"Test\ntest\ntest\ntestTest\ntest\ntest\ntestTest\ntest\ntest\ntestTest\ntest\ntest\ntestTest\ntest\ntest\ntestTest\ntest\ntest\ntestTest\ntest\ntest\ntestTest\ntest\ntest\ntestTest\ntest\ntest\ntestTest\ntest\ntest\ntestTest\ntest\ntest\ntestTest\ntest\ntest\ntestTest\ntest\ntest\ntest"}
            />

            <AgentMessage
                messageContents={"Test\ntest\ntest\ntestTest\ntest\ntest\ntestTest\ntest\ntest\ntestTest\ntest\ntest\ntestTest\ntest\ntest\ntestTest\ntest\ntest\ntestTest\ntest\ntest\ntestTest\ntest\ntest\ntestTest\ntest\ntest\ntestTest\ntest\ntest\ntestTest\ntest\ntest\ntestTest\ntest\ntest\ntestTest\ntest\ntest\ntestTest\ntest\ntest\ntest"}
            />

            <UserMessage
                messageContents={"Test"}
            />

            <AgentMessage
                messageContents={"Test"}
            />
        </section>
    );
};

export default ChatMessagesSection;