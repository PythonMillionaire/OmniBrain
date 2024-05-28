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
import userAvatar from "../../../../assets/images/user-avatar.png";
import {RootState} from "../../../../app/store";

import {selectAllMessages} from "../../../../features/chat/chatSlice";

const longMessage = `Duis non vehicula urna. Maecenas vulputate, lacus vel ultrices convallis, odio est pellentesque quam, id iaculis velit augue varius eros. Ut et vehicula est. Phasellus tortor sem, ullamcorper a ante vel, dignissim fringilla lectus. Ut maximus porta dui eget ultrices. Praesent nec purus sem. Pellentesque porttitor sapien eget dui tincidunt egestas. Phasellus volutpat velit ullamcorper dictum dapibus. Donec id pharetra mauris.

Proin nec enim interdum purus congue ornare sed et est. Vivamus ultrices vestibulum sem, accumsan porttitor leo sodales et. Proin at massa erat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Duis pharetra diam non nulla feugiat, sit amet sodales lorem dictum. Duis vitae quam nec nibh vestibulum auctor vitae non ipsum. Nullam quam lacus, ultrices ultricies rutrum eu, gravida a quam. Integer eget luctus metus. Ut mattis varius erat, eget volutpat orci consequat et.

Vivamus sit amet mi id lectus tincidunt sollicitudin interdum et erat. Quisque porta sapien vitae turpis imperdiet ullamcorper. Mauris tincidunt lacus ac diam fermentum fermentum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin arcu nunc, elementum quis venenatis sit amet, aliquam eu purus. Integer interdum finibus dignissim. Nunc risus urna, eleifend in leo ac, posuere fermentum elit. Aenean dui dui, ullamcorper nec ullamcorper nec, convallis quis elit.

Maecenas id dictum nisi. Quisque a lectus neque. Suspendisse lorem nibh, gravida sit amet lobortis in, sollicitudin vitae sapien. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce in erat tempor, congue risus in, eleifend dolor. Praesent id mi orci. Morbi non nisl id lectus mattis interdum. Sed luctus odio vitae nulla pulvinar, mattis fringilla ex sagittis. Vestibulum gravida magna sit amet sodales pulvinar. Fusce vel magna ornare, aliquam tellus ac, tincidunt magna.

Morbi vitae felis accumsan, porttitor mi in, consectetur nulla. In hac habitasse platea dictumst. Morbi consequat sem eu molestie ultrices. Donec porttitor libero hendrerit porta laoreet. Nullam vitae sagittis nulla. Donec dignissim sem quis urna venenatis imperdiet. Curabitur nec libero non velit mollis pretium. Donec turpis augue, sagittis vel ante quis, laoreet condimentum ante.

Morbi ultrices varius mi sit amet vestibulum. Donec scelerisque porta venenatis. Etiam viverra orci dui, eget gravida est sagittis vitae. Phasellus eros diam, condimentum quis enim id, facilisis dictum velit. Sed interdum commodo suscipit. Sed ac velit tristique, porttitor urna ut, lobortis dui. Quisque scelerisque varius tristique. Aliquam non porta enim. Aliquam in lectus nulla. Cras ut mauris vitae ex faucibus blandit. Fusce a consectetur lectus. Nullam consequat eleifend augue, eu cursus mauris efficitur id. Cras tristique eros sapien, ac dignissim ipsum ornare ac. Sed at bibendum felis, quis volutpat lorem.

Aenean tincidunt augue vitae eros malesuada, nec blandit metus condimentum. Fusce dignissim tortor risus, at molestie sapien volutpat eu. Aliquam mattis neque nunc, vel condimentum libero pulvinar quis. Nam pulvinar eros justo, id luctus lacus aliquet sed. Cras eu placerat erat, eu cursus sapien. Aenean varius porta ligula, quis venenatis elit commodo sed. Sed luctus lobortis mauris, non porta eros. Morbi nec sapien nibh. Fusce hendrerit, metus id ultricies feugiat, quam justo scelerisque lorem, eget imperdiet quam mi et odio. Nulla rhoncus lorem lorem, sed consequat lacus tincidunt eget. Vivamus sagittis, velit non semper lobortis, nisi nisi mattis lorem, sit amet pellentesque ligula arcu non augue.

Nam tempor pellentesque mi id posuere. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tellus justo, euismod eget tempor quis, ultricies vel turpis. Proin convallis ac purus nec ullamcorper. Praesent eget eros id quam ullamcorper eleifend. Nunc maximus sed arcu a efficitur. Vivamus eu orci lobortis, facilisis enim eget, blandit tortor. Phasellus erat metus, eleifend vitae ultricies quis, cursus sed nunc. Aenean id rutrum arcu, sit amet rhoncus mauris. Pellentesque cursus tellus id dui vestibulum, auctor lacinia massa convallis. Nam aliquet dignissim turpis vel pellentesque. Suspendisse dapibus libero et enim porta blandit.

Etiam a elementum nibh. Etia

m aliquam, mi et congue sodales, ex mauris feugiat tellus, sit amet pulvinar ligula risus vitae augue. Duis eget libero purus. Morbi risus velit, sollicitudin quis imperdiet sed, iaculis nec nulla. Cras vitae euismod ipsum. Sed commodo diam et nisl hendrerit, non pretium enim tincidunt. Curabitur tincidunt non turpis nec hendrerit. Sed dolor enim, laoreet vitae tincidunt et, condimentum sed ligula. Vestibulum viverra dolor a ante tincidunt sagittis. Fusce pretium non nulla imperdiet consequat. Proin luctus aliquam arcu vehicula iaculis.`
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
