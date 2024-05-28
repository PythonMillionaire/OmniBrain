import AddElementButton from "../../../../general/AddElementButton";
import React from "react";

import ChatInputReplyInThread from "./ChatInputReplyInThread";
import Tag from "../../../../general/Tag";

import {ReplyMode} from "../../../../../types/enums";
import {useDispatch, useSelector} from "react-redux";
import {selectReplyMode, setReplyMode} from "../../../../../features/chat/chatSlice";

const TopicTab: React.FC<{text: string, selected: boolean}> = ({text, selected}) => {
    return (
        <div className={`topic-tab-border${selected ? " selected" : ""}`}>
            <div className={`button topic-tab`}>{text}</div>
        </div>
    );
};

const SubtopicTab: React.FC<{text: string, selected: boolean}> = ({text, selected}) => {
    return (
        <div className={`subtopic-border${selected ? " selected" : ""}`}>
            <div className={`button subtopic`}>{text}</div>
        </div>
    );
};

const ChatInputOrganizationSettings: React.FC = () => {
    const replyMode = useSelector(selectReplyMode);

    return (
        <div id="chat-input-organization-settings">
            <div id="chat-input-organization-settings-top">
                {
                    replyMode === ReplyMode.allMessages ?
                        <div id="chat-input-topics-section">
                            <div id="chat-input-topics">
                                <TopicTab text={"Graphic design"} selected={true}/>
                                <TopicTab text={"Programming"} selected={false}/>
                                <TopicTab text={"Marketing"} selected={false}/>
                            </div>
                                <AddElementButton type={"topic"}/>
                        </div>

                        : <ChatInputReplyInThread />
                }

                <div id="chat-input-tags-section">
                    <div id="new-message-tag-list">
                        <Tag className={"chat-tag"} tagName={"Tag name"}/>
                    </div>
                    <AddElementButton type={"new-tag-input"}/>
                </div>
            </div>

            <div id="subchat-input-topics-section-border">
                <div id="subchat-input-topics-section">

                    <SubtopicTab text={"Ajahn Brahm is the VERY BEST. No question about it"} selected={true}/>
                    <SubtopicTab text={"Ajahn Brahm is beautiful"} selected={false}/>
                    <AddElementButton type={"subtopic"}/>
                </div>
            </div>
        </div>
    );
}

export default ChatInputOrganizationSettings;