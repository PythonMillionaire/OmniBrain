import AddElementButton from "../../../../general/AddElementButton";
import React, {useState} from "react";

import ChatInputReplyInThread from "./ChatInputReplyInThread";
import Tag from "../../../../general/Tag";

import {ReplyMode} from "../../../../../types/enums";
import {useSelector} from "react-redux";
import {selectReplyMode} from "../../../../../features/chat/chatSlice";

interface TopicTabProps {
    text: string,
    selectedTopic: string,
    setSelectedTopic: React.Dispatch<React.SetStateAction<string>>
}

const TopicTab: React.FC<TopicTabProps> = ({text, selectedTopic, setSelectedTopic}) => {
    const tabId = `topic-tab-${text.toLowerCase().split(" ").join("-")}`;

    const isCurrentTopicSelected = tabId === selectedTopic;

    return (
        <div
            className={`topic-tab-outer-border${isCurrentTopicSelected ? " selected" : " button"}`}
            id={tabId}
            onClick={() => setSelectedTopic(tabId)}
        >
            <div className={`topic-tab-border`}>
                <div className={`topic-tab`}>{text}</div>
            </div>
        </div>
    );
};

interface SubtopicTabProps {
    text: string,
    selectedSubtopic: string,
    setSelectedSubtopic: React.Dispatch<React.SetStateAction<string>>
}

const SubtopicTab: React.FC<SubtopicTabProps> = ({text, selectedSubtopic, setSelectedSubtopic}) => {
    const tabId = `topic-tab-${text.toLowerCase().split(" ").join("-")}`;

    const isCurrentTopicSelected = tabId === selectedSubtopic;

    return (
        <div
            className={`subtopic-border${isCurrentTopicSelected ? " selected" : " button"}`}
            id={tabId}
            onClick={() => setSelectedSubtopic(tabId)}
        >
            <div className={`button subtopic`}>{text}</div>
        </div>
    );
};

const ChatInputOrganizationSettings: React.FC = () => {
    const replyMode = useSelector(selectReplyMode);

    const [selectedTopic, setSelectedTopic] = useState("topic-tab-general");
    const [selectedSubtopic, setSelectedSubtopic] = useState("subtopic-tab-general");

    return (
        <div id="chat-input-organization-settings">
            <div id="chat-input-organization-settings-top">
                {
                    replyMode === ReplyMode.allMessages ?
                        <div id="chat-input-topics-section">
                            <div id="chat-input-topics">
                                <TopicTab text={"General"} selectedTopic={selectedTopic} setSelectedTopic={setSelectedTopic}/>
                                <TopicTab text={"Graphic design"} selectedTopic={selectedTopic} setSelectedTopic={setSelectedTopic}/>
                                <TopicTab text={"Programming"} selectedTopic={selectedTopic} setSelectedTopic={setSelectedTopic}/>
                                <TopicTab text={"Marketing"} selectedTopic={selectedTopic} setSelectedTopic={setSelectedTopic}/>
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

            <div id="subchat-input-subtopics-section-border">
                <div id="subchat-input-subtopics-section">
                    <div id="subchat-input-subtopics">
                        <SubtopicTab text={"Default"} selectedSubtopic={selectedSubtopic} setSelectedSubtopic={setSelectedSubtopic}/>
                        <SubtopicTab text={"Ajahn Brahm is the VERY BEST. No question about it"} selectedSubtopic={selectedSubtopic} setSelectedSubtopic={setSelectedSubtopic}/>
                        <SubtopicTab text={"Ajahn Brahm is beautiful"} selectedSubtopic={selectedSubtopic} setSelectedSubtopic={setSelectedSubtopic}/>
                        <AddElementButton type={"subtopic"}/>
                    </div>

                    <div id="minimize-subtopics-section">
                        —
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ChatInputOrganizationSettings;