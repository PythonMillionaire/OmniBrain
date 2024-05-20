import React, {useState, useEffect, useRef} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import AgentMessage from "./AgentMessage";
import UserMessage from "./UserMessage";
import {createThread, addMessage, appendMessageToThread} from '../../../../features/chat/chatSlice';
import MessageInfo from "../../../../types/messages/MessageInfo";
import MessageSender from "../../../../types/messages/MessageSender";
import { MessageSenderType } from "../../../../types/enums";
import { v4 as uuidv4 } from 'uuid';
import chatGPTLogo from "../../../../assets/images/ai-providers/logo-chatgpt.svg";
import userAvatar from "../../../../assets/images/user-avatar.svg";
import {RootState} from "../../../../app/store";

import {selectAllMessages} from "../../../../features/chat/chatSlice";

const longMessage = "Message\n\nMessage\n\nMessage\n\nMessage\n\nMessage\n\nMessage\n\nMessage\n\nMessage\n\nMessage\n\nMessage\n\nMessage\n\nMessage";

const Conversation = () => {
    const dispatch = useDispatch();

    const initialized = useRef(false); // This ref will track the initial dispatch

    useEffect(() => {
        if (!initialized.current) {
            const messageSenderChatGPT = new MessageSender("chat-gpt-4", "ChatGPT 4", chatGPTLogo, MessageSenderType.ai);
            const messageSenderUser = new MessageSender("u1234567890", "Zé", userAvatar, MessageSenderType.user);

            const firstMsg = new MessageInfo(uuidv4(), messageSenderChatGPT, "1 - " + longMessage, new Date());
            const secondMsg = new MessageInfo(uuidv4(), messageSenderChatGPT, "2 - Short message text...", new Date());

            const thirdMsg = new MessageInfo(uuidv4(), messageSenderUser, "3 - " + longMessage, new Date());
            const fourthMsg = new MessageInfo(uuidv4(), messageSenderUser, "4- Short message text...", new Date());

            // Create a thread with the first message
            dispatch(createThread({ firstReply: firstMsg }));
            // User reply
            const userFirstReply = new MessageInfo(uuidv4(), messageSenderUser, "I have a question about your services.", new Date(), firstMsg.id);
            // Follow-up AI message
            const aiSecondReply = new MessageInfo(uuidv4(), messageSenderChatGPT, "Sure, I'd be happy to help! What would you like to know more about?", new Date(), firstMsg.id);
            dispatch(appendMessageToThread({ messageToAdd: userFirstReply, threadId: firstMsg.id }));
            dispatch(appendMessageToThread({ messageToAdd: aiSecondReply, threadId: firstMsg.id }));

            // Dispatch messages in order required
            dispatch(addMessage(thirdMsg));
            dispatch(addMessage(firstMsg));
            dispatch(addMessage(fourthMsg));
            dispatch(addMessage(secondMsg));

            initialized.current = true; // Mark as initialized
        }
    }, [dispatch]); // Ensure `dispatch` is stable, typically it is

    const messages = useSelector((state: RootState) => selectAllMessages(state));

    return (
        <>
            {Object.values(messages).map(msg => (
                msg.sender.type === MessageSenderType.user ?
                    <UserMessage key={msg.id} messageInfo={msg} /> :
                    <AgentMessage key={msg.id} messageInfo={msg} />
            ))}
        </>
    );
};

export default Conversation;
