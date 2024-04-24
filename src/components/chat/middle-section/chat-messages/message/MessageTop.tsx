import React from 'react';
import {MessageSenderType} from "../../../../../types/enums";
import MessageSender from "../../../../../types/messages/MessageSender";

interface MessageInfoProps {
    sender: MessageSender;
    userAvatar: string;
    aiLogo: string;
}

const MessageTop: React.FC<MessageInfoProps> = ({sender, userAvatar, aiLogo}) => {
    return(
        <div className="chat-message-info">
            {sender.type === MessageSenderType.ai ? (
                <div className="chat-list-item-ai-model-logo-message">
                    <img className={"message-avatar"} src={aiLogo} alt="AI Model Logo" />
                </div>
            ) : (
                <div className="account-avatar-message">
                    <img className={"message-avatar"} src={userAvatar} alt="User avatar" />
                </div>
            )}
            <div className="chat-message-info-sender">{sender.name}</div>
        </div>
    )
}

export default MessageTop;