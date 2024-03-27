import extractTextFromWebsiteIcon from "../../../../../assets/images/website.svg";
import voiceMessageIcon from "../../../../../assets/images/voice-message.svg";
import fileUploadIcon from "../../../../../assets/images/file-upload.svg";
import React from "react";


const ChatInputMiddleActionRow = () => {
    return (
        <div id="chat-input-middle-action-row">
            <div id="chat-input-token-counter">
                <div id="chat-input-token-counter-title">Tokens in prompt:</div>
                <div id="chat-input-token-counter-value"><b>0</b></div>
            </div>
            <div id="chat-input-special-actions">
                <img src={extractTextFromWebsiteIcon} alt="Extract text from website" id="extract-text-from-website-icon"
                     className="button input-special-action-button"/>
                <img src={voiceMessageIcon} alt="Voice message" id="voice-message-icon" className="button input-special-action-button"/>
                <img src={fileUploadIcon} alt="File upload" id="file-upload-icon" className="button input-special-action-button"/>
            </div>
        </div>
    );
}

export default ChatInputMiddleActionRow;