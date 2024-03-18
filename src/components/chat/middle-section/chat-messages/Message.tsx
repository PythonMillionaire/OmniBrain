import React from "react";
import ChatMessageTag from "./ChatMessageTag";
import aiLogo from "../../../../assets/images/ai-providers/logo-chatgpt.svg";
import userAvatar from '../../../../assets/images/user-avatar.svg';
import {MessageSender} from "../../../../types/enums";

interface MessageProps {
    sender: MessageSender;
    messageContents: string;
    actionButtons: React.ReactNode;
    children?: React.ReactNode;
}

const Message: React.FC<MessageProps> = ({ sender, messageContents, actionButtons, children }) => {
    return (
        <div className={`chat-message-outer-container ${sender.toLowerCase()}`}>
            <div className="chat-message-inner-container">
                <div className="chat-message-info">
                    {sender === MessageSender.Agent ? (
                        <div className="chat-list-item-ai-model-logo-message">
                            <img className={"message-avatar"} src={aiLogo} alt="AI Model Logo" />
                        </div>
                    ) : (
                        <div className="account-avatar-message">
                            <img className={"message-avatar"} src={userAvatar} alt="User avatar" />
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
                    {actionButtons}
                </div>

                <div className="chat-message-bottom">
                    {children}

                    <div className="chat-message-action-row">
                        <div className="chat-message-tag-list">
                            <ChatMessageTag/>
                        </div>
                        {actionButtons}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Message;