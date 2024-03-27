import React from 'react';

import ChatInputFollowUpQuestions from "./chat-input/ChatInputFollowUpQuestions";
import ChatInputTop from "./chat-input/ChatInputTop";
import ChatInputMiddle from "./chat-input/ChatInputMiddle";
import ChatInputBottom from "./chat-input/ChatInputBottom";

const ChatInputSection = () => {
    return (
        <section id="chat-input-section">
            <ChatInputFollowUpQuestions />

            <ChatInputTop />

            <ChatInputMiddle/>

            <ChatInputBottom />
        </section>
    );
};

export default ChatInputSection;