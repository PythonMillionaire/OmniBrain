import React, { useState } from "react";

import aiLogo from "../../../../assets/images/ai-providers/logo-chatgpt.svg";
import userAvatar from '../../../../assets/images/user-avatar.svg';
import {MessageSenderType} from "../../../../types/enums";

import MessageInfo from "./message/MessageInfo";
import MessageMiddleSection from "./message/MessageMiddleSection";
import MessageBottomSection from "./message/MessageBottomSection";

interface MessageProps {
    sender: MessageSenderType;
    messageContents: string;
    actionButtons: React.ReactNode;
    threadSection?: React.ReactNode;
}

const Message: React.FC<MessageProps> = ({ sender, messageContents, actionButtons, threadSection }) => {
    const [showSideButtons, setShowSideButtons] = useState(true);

    const handleShowSideButtonsChange = (isVisible: boolean) => {
        setShowSideButtons(isVisible);
    };

    return (
        <div className={`chat-message-outer-container ${sender.toLowerCase()}`}>
            <div className="chat-message-inner-container">
                <MessageInfo
                    sender={sender}
                    userAvatar={userAvatar}
                    aiLogo={aiLogo}
                />

                <MessageMiddleSection
                    sender={sender}
                    messageContents={messageContents}
                    actionButtons={actionButtons}
                    onShowSideButtonsChange={handleShowSideButtonsChange}
                />

                <MessageBottomSection
                    actionButtons={actionButtons}
                    showSideButtons={showSideButtons}
                    children={threadSection}
                />
            </div>
        </div>
    );
};

export default Message;