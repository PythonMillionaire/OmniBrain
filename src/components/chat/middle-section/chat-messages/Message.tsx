import React, { useState } from "react";

import aiLogo from "../../../../assets/images/ai-providers/logo-chatgpt.svg";
import userAvatar from '../../../../assets/images/user-avatar.png';
import {MessageSenderType} from "../../../../types/enums";

import MessageTop from "./message/MessageTop";
import MessageMiddleSection from "./message/MessageMiddleSection";
import MessageBottomSection from "./message/MessageBottomSection";
import MessageInfo from "../../../../types/messages/MessageInfo";

interface MessageProps {
    messageInfo: MessageInfo;
    actionButtons: React.ReactNode;
    threadSection?: React.ReactNode;
}

const Message: React.FC<MessageProps> = ({ messageInfo, actionButtons, threadSection }) => {
    const [showSideButtons, setShowSideButtons] = useState(true);
    const [showBottomSection, setShowBottomSection] = useState(false);

    const handleShowSideButtonsChange = (isVisible: boolean) => {
        setShowSideButtons(isVisible);
    };

    return (
        <div className={`chat-message-outer-container ${messageInfo.sender.type.toLowerCase()}`}>
            <div className="chat-message-inner-container">
                <MessageTop
                    sender={messageInfo.sender}
                    userAvatar={userAvatar}
                    aiLogo={aiLogo}
                    sendDate={messageInfo.date}
                />

                <MessageMiddleSection
                    sender={messageInfo.sender}
                    messageContents={messageInfo.contents}
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