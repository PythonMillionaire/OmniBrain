import AddElementButton from "../../../../general/AddElementButton";
import React from "react";

import ChatInputReplyInThread from "./ChatInputReplyInThread";
import {useReplyMode} from "../../../../general/messages/ReplyModeContext";
import Tag from "../../../../general/Tag";

import {ReplyMode} from "../../../../../types/enums";

const ChatInputOrganizationSettings = () => {
    const { replyMode, setReplyMode } = useReplyMode();

    return (
        <div id="chat-input-organization-settings">
            <div id="chat-input-organization-settings-top">
                {
                    replyMode === ReplyMode.allMessages ?
                        <div id="chat-input-topics-section">
                            <div id="chat-input-topics">
                                <div className="topic-tab selected">Graphic design</div>
                                <div className="topic-tab">Programming</div>
                            </div>
                                <AddElementButton type={"topic"}/>
                        </div>

                        : <ChatInputReplyInThread setReplyMode={setReplyMode} newActiveThreadID={''} />
                }

                <div id="tags-section">
                    <div id="new-message-tag-list">
                        <Tag className={"chat-tag"} tagName={"Tag name"}/>
                    </div>
                    <AddElementButton type={"new-tag-input"}/>
                </div>
            </div>

            <div id="subchat-input-topics-section">
                <div className="subtopic">Ajahn Brahm is the VERY BEST. No question...</div>
                <AddElementButton type={"subtopic"}/>
            </div>
        </div>
    );
}

export default ChatInputOrganizationSettings;