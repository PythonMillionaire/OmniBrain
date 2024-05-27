import React from 'react';
import {MessageSenderType} from "../../../../../types/enums";
import MessageSender from "../../../../../types/messages/MessageSender";

interface MessageInfoProps {
    sender: MessageSender;
    userAvatar: string;
    aiLogo: string;
    sendDate: Date;
}

const MessageTop: React.FC<MessageInfoProps> = ({sender, userAvatar, aiLogo, sendDate}) => {
    return(
        <div className="chat-message-info">
            {
                sender.type === MessageSenderType.ai ? (
                    <>
                        <div className="chat-message-info-sender">
                            <div className="chat-list-item-ai-model-logo-message">
                                <img className={"message-avatar"} src={aiLogo} alt="AI Model Logo"/>
                            </div>
                            <div className="chat-message-info-sender-name">{sender.name}</div>
                        </div>
                        <div className="chat-message-info-send-date">
                            <b>{sendDate.toLocaleDateString()}</b>, {sendDate.toLocaleTimeString()}
                        </div>

                    </>
                ) : (
                    <>
                        <div className="chat-message-info-send-date">
                            <b>{sendDate.toLocaleDateString()}</b>, {sendDate.toLocaleTimeString()}
                        </div>

                        <div className="chat-message-info-sender">
                            <div className="account-avatar-message">
                                <img className={"message-avatar"} src={userAvatar} alt="User avatar"/>
                            </div>
                            <div className="chat-message-info-sender-name">{sender.name}</div>
                        </div>
                    </>
                )
            }

        </div>
    )
}

export default MessageTop;