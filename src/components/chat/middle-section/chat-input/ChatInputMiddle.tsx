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
                <CustomScrollbar minHeight="50px">
                    <textarea
                        id="chat-input-field"
                        placeholder="Type your prompt here"
                        ref={textareaRef}
                        value={text}
                        onChange={handleChange}
                        style={{
                            width: '100%',
                            minHeight: '50px',
                            maxHeight: '70vh',
                            position: 'absolute',  // Ensures it's positioned relative to the nearest positioned ancestor
                            bottom: '0',
                            //overflow: 'hidden',
                            resize: 'none',
                            marginRight: '-20px',
                            zIndex: 1000  // Ensures it's on top of all other content
                        }}
                    />
                </CustomScrollbar>
            </div>
            <ChatInputMiddleActionRow />
        </div>
    );
}

export default ChatInputMiddle;
