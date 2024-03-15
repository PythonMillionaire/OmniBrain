import React from "react";
import ChatMessageTag from "./ChatMessageTag";
import aiLogo from "../../../../assets/images/ai-providers/logo-chatgpt.svg";

interface MessageProps {
    sender: string;
    messageContents: string;
    senderButtonsBottom: React.ReactNode;
    senderButtonsSide: React.ReactNode;
    children?: React.ReactNode;
}

const Message: React.FC<MessageProps> = ({ sender, messageContents, senderButtonsSide, senderButtonsBottom, children }) => {
    return (
        <div className={`chat-message-outer-container ${sender.toLowerCase()}`}>
            <div className="chat-message-inner-container">
                <div className="chat-message-info">
                    {sender === "Agent" && (
                        <div className="chat-list-item-ai-model-logo-message">
                            <img src={aiLogo} alt="AI Model Logo" />
                        </div>
                    )}
                    <div className="chat-message-info-sender">{sender}</div>
                </div>

                <div className="chat-message-select-checkbox">
                    <label className="checkbox-field">
                        <input type="checkbox"/>
                        <span>
                      <br/>
                    </span>
                    </label>
                </div>

                <div className="chat-message-wrapper">
                    <div className={`chat-message ${sender.toLowerCase()}-message`}>
                        <div className="chat-message-contents">{messageContents}</div>
                    </div>
                </div>

                <div className="chat-message-buttons-side">
                    {senderButtonsSide}
                </div>

                <div className="chat-message-bottom">
                    {children}

                    <div className="chat-message-action-row">
                        <div className="chat-message-tag-list">
                            <ChatMessageTag/>
                        </div>
                        {senderButtonsBottom}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Message;