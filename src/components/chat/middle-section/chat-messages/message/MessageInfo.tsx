import React from 'react';
import {MessageSenderType} from "../../../../../types/enums";

interface MessageInfoProps {
    sender: MessageSenderType;
    userAvatar: string;
    aiLogo: string;
}

const MessageInfo: React.FC<MessageInfoProps> = ({sender, userAvatar, aiLogo}) => {
    return(
        <div className="chat-message-info">
            {sender === MessageSenderType.ai ? (
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
    )
}

export default MessageInfo;