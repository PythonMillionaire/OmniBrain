import extractTextFromWebsiteIcon from "../../../../../assets/images/website.svg";
import voiceMessageIcon from "../../../../../assets/images/voice-message.svg";
import fileUploadIcon from "../../../../../assets/images/file-upload.svg";
import React from "react";


const ChatInputMiddleActionRow = () => {
    return (
        <div id="chat-input-middle-action-row">
            <div id="chat-input-token-counter">
                <div id="chat-input-token-counter-total">
                    <div id="chat-input-token-counter-title">Total tokens:</div>
                    <div id="chat-input-token-counter-value"><b>2914</b></div>
                </div>

                <div id="chat-input-token-counter-prompt">
                    <div id="chat-input-token-counter-title">Tokens in prompt:</div>
                    <div id="chat-input-token-counter-value"><b>354</b></div>
                </div>

                <div id="chat-input-token-counter-context">
                    <div id="chat-input-token-counter-context-title">Included messages:</div>
                    <div id="chat-input-token-counter-context-value"><b>6</b><i> (2560 tokens)</i></div>
                </div>
            </div>

            <div id="chat-input-special-actions">
                <img src={extractTextFromWebsiteIcon} alt="Extract text from website"
                     id="extract-text-from-website-icon"
                     className="button input-special-action-button"/>
                <img src={voiceMessageIcon} alt="Voice message" id="voice-message-icon"
                     className="button input-special-action-button"/>
                <img src={fileUploadIcon} alt="File upload" id="file-upload-icon"
                     className="button input-special-action-button"/>
            </div>
        </div>
    );
}

export default ChatInputMiddleActionRow;