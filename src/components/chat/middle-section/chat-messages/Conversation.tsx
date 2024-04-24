import React, {useState, useEffect, useRef} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import AgentMessage from "./AgentMessage";
import UserMessage from "./UserMessage";
import { createThread, addMessage } from '../../../../features/chat/chatSlice';
import MessageInfo from "../../../../types/messages/MessageInfo";
import MessageSender from "../../../../types/messages/MessageSender";
import { MessageSenderType } from "../../../../types/enums";
import { v4 as uuidv4 } from 'uuid';
import chatGPTLogo from "../../../../assets/images/ai-providers/logo-chatgpt.svg";
import userAvatar from "../../../../assets/images/user-avatar.svg";
import {RootState} from "../../../../app/store";

import {selectAllMessages} from "../../../../features/chat/chatSlice";

const Conversation = () => {
    const dispatch = useDispatch();

    const initialized = useRef(false); // This ref will track the initial dispatch


    useEffect(() => {
        if (!initialized.current) {
            const messageSenderChatGPT = new MessageSender("chat-gpt-4", "ChatGPT 4", chatGPTLogo, MessageSenderType.ai);
            const messageSenderUser = new MessageSender("u1234567890", "Zé", userAvatar, MessageSenderType.user);

            const firstMsg = new MessageInfo(uuidv4(), messageSenderChatGPT, "Long message text...", new Date());
            const secondMsg = new MessageInfo(uuidv4(), messageSenderChatGPT, "Short message text...", new Date(), firstMsg.id);

            const thirdMsg = new MessageInfo(uuidv4(), messageSenderUser, "Long message text...", new Date());
            const fourthMsg = new MessageInfo(uuidv4(), messageSenderUser, "Short message text...", new Date());

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
        <section id="chat-messages-section">
            {Object.values(messages).map(msg => (
                msg.sender.type === MessageSenderType.user ?
                    <UserMessage key={msg.id} messageInfo={msg} /> :
                    <AgentMessage key={msg.id} messageInfo={msg} />
            ))}
        </section>
    );
};

export default Conversation;