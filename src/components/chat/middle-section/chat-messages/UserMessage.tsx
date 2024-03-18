import React from "react";
import Message from "./Message";

import {MessageSender} from "../../../../types/enums";

import {UserMessageActionButtons} from "./MessageActionButton";

interface UserMessageProps {
    messageContents: string;
}

const UserMessage: React.FC<UserMessageProps> = ({ messageContents }) => {
    return <Message sender={MessageSender.User} messageContents={messageContents} actionButtons={<UserMessageActionButtons />} />;
};

export default UserMessage;
