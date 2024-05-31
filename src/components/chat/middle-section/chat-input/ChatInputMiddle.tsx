import React, { useState, useEffect, useRef } from 'react';

import ChatInputOrganizationSettings from "./middle/ChatInputOrganizationSettings";
import ChatInputMiddleActionRow from "./middle/ChatInputMiddleActionRow";
import CustomScrollbar from "../../../general/CustomScrollbar";

const ChatInputMiddle = () => {
    const textareaRef = useRef<HTMLTextAreaElement>(null);
    const [text, setText] = useState<string>("");

    const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setText(event.target.value);
    };

    return (
        <div id="chat-input-middle" style={{ position: 'relative', zIndex: 1 }}>
            <ChatInputOrganizationSettings />
            <div id="chat-input-container" style={{ position: 'relative', zIndex: 2 }}>
                    <div id="chat-input-field-border">
                        <textarea
                            id="chat-input-field"
                            placeholder="Type your prompt here"
                            ref={textareaRef}
                            value={text}
                            onChange={handleChange}
                        />
                    </div>
            </div>
            <ChatInputMiddleActionRow />
        </div>
    );
}

export default ChatInputMiddle;
