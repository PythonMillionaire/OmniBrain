import React, { useState, useRef } from 'react';

import ChatInputOrganizationSettings from "./middle/ChatInputOrganizationSettings";
import ChatInputMiddleActionRow from "./middle/ChatInputMiddleActionRow";
import CustomScrollbar from "../../../general/CustomScrollbar";
import Slider from "../../../general/Slider";

enum InputMode {
    Prompt = "prompt",
    SystemMessage = "system-message"
}

const ChatInputMiddle = () => {
    const textareaRef = useRef<HTMLTextAreaElement>(null);
    const [text, setText] = useState<string>("");

    const [inputMode, setInputMode] = useState<InputMode>(InputMode.Prompt);

    const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setText(event.target.value);
    };

    return (
        <div id="chat-input-middle" style={{ position: 'relative', zIndex: 1 }}>
            <ChatInputOrganizationSettings />
            <div id="chat-input-container" style={{ position: 'relative', zIndex: 2 }}>
                    <div id="chat-input-field-outer-border">
                        <div id="chat-input-field-container"
                             className={`${ inputMode === InputMode.SystemMessage ? "system-message" : "" }`}>
                            <div id="chat-input-settings-container">
                                <div id="chat-input-mode-container">
                                    <div id="chat-input-mode-prompt"
                                         className={`${ inputMode === InputMode.Prompt ? "selected" : "button" }`}
                                         onClick={() => setInputMode(InputMode.Prompt)}>
                                        Prompt
                                    </div>

                                    <div className={"divider"}>|</div>

                                    <div id="chat-input-mode-system-message"
                                         className={`${ inputMode === InputMode.SystemMessage ? "selected" : "button" }`}
                                         onClick={() => setInputMode(InputMode.SystemMessage)}>
                                        System message
                                    </div>
                                </div>

                                <div id="chat-input-settings">
                                    <Slider
                                        min={0} max={1} step={0.01}
                                        labelText={"Temperature"}
                                        id={"chat-input-temperature-slider"}
                                        classes={"chat-input-slider"}/>

                                    <Slider
                                        min={1} max={4096} step={1}
                                        labelText={"Max. tokens"}
                                        id={"chat-input-max-token-slider"}
                                        classes={"chat-input-slider"}/>
                                </div>
                            </div>
                            <textarea
                                id="chat-input-field"
                                placeholder={`${inputMode === InputMode.SystemMessage ? "Instructions to steer the model toward better performance" : "Type your prompt here"}`}
                                ref={textareaRef}
                                value={text}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
            </div>
            <ChatInputMiddleActionRow />
        </div>
    );
}

export default ChatInputMiddle;
