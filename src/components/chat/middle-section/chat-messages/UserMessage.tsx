import React from "react";
import Message from "./Message";

import {MessageSenderType} from "../../../../types/enums";

import {UserMessageActionButtons} from "./MessageActionButton";

interface UserMessageProps {
    messageContents: string;
}

const UserMessage: React.FC<UserMessageProps> = ({ messageContents }) => {
    return <Message sender={MessageSenderType.user} messageContents={messageContents} actionButtons={<UserMessageActionButtons />} />;
};

export default UserMessage;
