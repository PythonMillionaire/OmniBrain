import React from 'react';
import Conversation from "./chat-messages/Conversation";
import CustomScrollbar from "../../general/CustomScrollbar";

const ChatMessagesSection = () => {
    return (
        <CustomScrollbar>
            <section id="chat-messages-section">
                <Conversation />
            </section>
        </CustomScrollbar>
    );
};

export default ChatMessagesSection;