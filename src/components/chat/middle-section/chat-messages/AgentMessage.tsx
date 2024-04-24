import React, {useEffect, useState} from "react";
import Message from "./Message";
import {AgentMessageActionButtons} from "./MessageActionButton";

import MessageThread from "./message/MessageThread";

import { useSelector, useDispatch } from 'react-redux';
import { RootState } from "../../../../app/store";
import { selectThreadById, createThread } from "../../../../features/chat/chatSlice";
import { v4 as uuidv4 } from 'uuid';  // Import UUID for generating unique IDs

import MessageThreadInfo from "../../../../types/messages/MessageThreadInfo";
import MessageInfo from "../../../../types/messages/MessageInfo";

interface AgentMessageProps {
    messageInfo: MessageInfo;
}

const AgentMessage: React.FC<AgentMessageProps> = ({ messageInfo }) => {
    const dispatch = useDispatch();
    const [currentThreadID, setCurrentThreadID] = useState(messageInfo.parentThreadID);

    // Ensure thread exists or create one
    useEffect(() => {
        if (!currentThreadID) {
            const newThreadID = uuidv4();  // Generate a unique ID for the new thread
            dispatch(createThread({ firstReply: { ...messageInfo, parentThreadID: newThreadID } }));
            setCurrentThreadID(newThreadID); // Update the current thread ID
        }
    }, [dispatch, currentThreadID, messageInfo]);

    const threadDetails = useSelector((state: RootState) => currentThreadID ? selectThreadById(state, currentThreadID) : undefined);

    return (
        <Message
            messageInfo={messageInfo}
            actionButtons={<AgentMessageActionButtons />}
            threadSection={
                <MessageThread messageInfo={messageInfo} messageThreadInfo={threadDetails}
                />
            }
        />
    );
};

export default AgentMessage;
