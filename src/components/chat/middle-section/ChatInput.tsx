import React, { useState, useRef } from 'react';
import FollowUpQuestion from "./elements/FollowUpQuestion";
import Slider from "../../general/Slider";
import ProviderSendButton from "./elements/ProviderSendButton";
import Checkbox from "../../general/Checkbox";
import Tag from "../../general/Tag";

import AddElementButton from "../../general/AddElementButton";
import CollapseButton from "../../general/CollapseSectionButton";

import chatGPTIcon from "../../../assets/images/ai-providers/logo-chatgpt.svg";
import claudeIcon from "../../../assets/images/ai-providers/logo-claude.svg";
import geminiIcon from "../../../assets/images/ai-providers/logo-gemini.svg";

import fileUploadIcon from "../../../assets/images/file-upload.svg";
import voiceMessageIcon from "../../../assets/images/voice-message.svg";
import extractTextFromWebsiteIcon from "../../../assets/images/website.svg";


import {ButtonPosition} from "../../../types/enums";

const ChatInputSection: React.FC = () => {
    const [isVisible, setIsVisible] = useState(true);
    const elementRef = useRef<HTMLDivElement>(null);

    return (
        <section id="chat-input-section">
            <div id="follow-up-questions-section">
                <FollowUpQuestion questionContent="Ajahn Brahm is the VERY BEST. No question..." />
                <FollowUpQuestion questionContent="Ajahn Brahm is the VERY BEST. Indeed" />
                <FollowUpQuestion questionContent="Ajahn Brahm is the VERY BEST. No question..." />
                <FollowUpQuestion questionContent="Ajahn Brahm is the VERY BEST. " />
            </div>
            <div id="chat-input-top">
                <CollapseButton isVisible={isVisible} buttonPosition={ButtonPosition.bottom} toggleVisibility={() => setIsVisible(!isVisible)} id={"chat-input-top-collapse-button"} />

                <div id="chat-input-top-response-settings" ref={elementRef} style={{ display: isVisible ? 'flex' : 'none'}}>
                    <div className="chat-input-detail-level-slider">
                        <div>Response detail level <br/>
                        </div>
                        <Slider/>
                    </div>
                    <div id="ai-response-settings-checkboxes">
                        <Checkbox text={"Include examples"} tooltipText={"Whether or not the AI should include illustrative examples in its output."} />
                        <Checkbox text={"Include explanation"} tooltipText={"Whether or not the AI should also provide explanations in addition to completing the given task."} />
                        <Checkbox text={"Split output"} tooltipText={"Whether the AI's output should split into sections, as defined in Settings."} />
                    </div>
                </div>
                <div id="chat-input-top-organization-settings">
                    <div id="topics-section">
                        <div id="topics">
                            <div className="topic-tab selected">Graphic design</div>
                            <div className="topic-tab">Programming</div>
                        </div>
                        <AddElementButton type={"topic"}/>
                    </div>
                    <div id="tags-section">
                        <div id="new-message-tag-list">
                            <Tag className={"chat-tag"} tagName={"Tag name"}/>
                        </div>
                        <AddElementButton type={"new-tag-input"}/>
                    </div>
                </div>
            </div>
            <div id="chat-input-middle">
                <div id="subtopics-section">
                    <div className="subtopic">Ajahn Brahm is the VERY BEST. No question...</div>
                    <AddElementButton type={"subtopic"}/>
                </div>
                <div id="input-container">
                    <textarea id="input-field" placeholder="Type your prompt here"></textarea>
                </div>

            </div>
            <div id="chat-input-bottom">
                <div id="input-special-actions">
                    <img src={extractTextFromWebsiteIcon} alt="Extract text from website" id="extract-text-from-website-icon" className="button input-special-action-button"/>
                    <img src={voiceMessageIcon} alt="Voice message" id="voice-message-icon" className="button input-special-action-button"/>
                    <img src={fileUploadIcon} alt="File upload" id="file-upload-icon" className="button input-special-action-button"/>
                </div>
                <div id="provider-buttons-container">
                    <ProviderSendButton providerName={"Midjourney"}/>
                    <ProviderSendButton providerName={"ChatGPT 3.5"}/>
                    <ProviderSendButton providerName={"Claude 3"} providerIcon={claudeIcon}/>
                    <ProviderSendButton providerName={"Gemini 1.5"} providerIcon={geminiIcon}/>
                    <ProviderSendButton providerName={"ChatGPT 4"} providerIcon={chatGPTIcon}/>
                </div>
                <div id="prompt-settings">
                    <div id="prompt-settings-checkboxes">
                        <Checkbox text={"Keep prompt after sending"} tooltipText={"Whether the prompt should remain in the input field after the message is sent."} />
                        <Checkbox text={"Improve prompt before sending"} tooltipText={"Whether the prompt should first be improved by the AI defined in Settings before being sent."} />
                        <Checkbox text={"Don't include any previous messages"} tooltipText={"Whether all previous chat messages should be omitted from next request."} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ChatInputSection;