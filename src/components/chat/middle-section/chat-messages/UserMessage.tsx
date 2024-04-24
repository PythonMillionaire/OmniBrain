import React from "react";
import Message from "./Message";

import {UserMessageActionButtons} from "./MessageActionButton";
import MessageInfo from "../../../../types/messages/MessageInfo";

interface UserMessageProps {
    messageInfo: MessageInfo;
}

const UserMessage: React.FC<UserMessageProps> = ({ messageInfo }) => {
    return <Message messageInfo={messageInfo} actionButtons={<UserMessageActionButtons />} />;
};

export default UserMessage;
