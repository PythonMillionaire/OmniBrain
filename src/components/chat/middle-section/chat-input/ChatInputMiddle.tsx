import React from "react";

import ChatInputOrganizationSettings from "./middle/ChatInputOrganizationSettings";
import ChatInputMiddleActionRow from "./middle/ChatInputMiddleActionRow";

const ChatInputMiddle = () => {
    return (
        <div id="chat-input-middle">
            <ChatInputOrganizationSettings/>

            <div id="input-container">
                <textarea id="input-field" placeholder="Type your prompt here"></textarea>
            </div>

            <ChatInputMiddleActionRow />
        </div>
    );
}

export default ChatInputMiddle;