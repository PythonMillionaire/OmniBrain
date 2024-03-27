import React from "react";

import ChatInputOrganizationSettings from "./middle/ChatInputOrganizationSettings";
import ChatInputMiddleActionRow from "./middle/ChatInputMiddleActionRow";
import ChatInputReplyInThread from "./middle/ChatInputReplyInThread";

import {ReplyMode} from "../../../../types/enums";

import { useReplyMode } from "../../../general/messages/ReplyModeContext";

const ChatInputMiddle = () => {
    const { replyMode, setReplyMode } = useReplyMode();

    return (
        <div id="chat-input-middle">
            {
                replyMode === ReplyMode.allMessages ? <ChatInputOrganizationSettings/>
                    : <ChatInputReplyInThread setReplyMode={setReplyMode} />
            }

            <div id="input-container">
                <textarea id="input-field" placeholder="Type your prompt here"></textarea>
            </div>

            <ChatInputMiddleActionRow />
        </div>
    );
}

export default ChatInputMiddle;