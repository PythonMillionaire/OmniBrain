import React, { useState, useRef } from 'react';
import FollowUpQuestion from "./elements/FollowUpQuestion";
import Slider from "../../general/Slider";
import ProviderSendButton from "./elements/ProviderSendButton";
import Checkbox from "../../general/Checkbox";

import chatGPTIcon from "../../../assets/images/ai-providers/logo-chatgpt.svg";
import claudeIcon from "../../../assets/images/ai-providers/logo-claude.svg";
import geminiIcon from "../../../assets/images/ai-providers/logo-gemini.svg";

const ChatInputSection: React.FC = () => {
    const [isVisible, setIsVisible] = useState(true);
    const responseSettingsRef = useRef<HTMLDivElement>(null); // Ref for the label

    return (
        <section id="chat-input-section">
            <div id="follow-up-questions-section">
                <FollowUpQuestion questionContent="Ajahn Brahm is the VERY BEST. No question..." />
                <FollowUpQuestion questionContent="Ajahn Brahm is the VERY BEST. Indeed" />
                <FollowUpQuestion questionContent="Ajahn Brahm is the VERY BEST. No question..." />
                <FollowUpQuestion questionContent="Ajahn Brahm is the VERY BEST. " />
            </div>
            <div id="chat-input-top">
                <div
                    className="button"
                    id="chat-input-top-collapse-button"
                    onClick={() => setIsVisible(!isVisible)}
                >
                    <span style={{top: isVisible ? '1px' : '0' }}>{isVisible ? '▼' : '▲'}</span>
                </div>
                <div id="chat-input-top-response-settings" ref={responseSettingsRef} style={{ display: isVisible ? 'flex' : 'none'}}>
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
                        <div className="button add-new" id="add-new-topic-button">
                            <div className="add-new-circle">+</div>
                        </div>
                    </div>
                    <div id="tags-section">
                        <div id="new-message-tag-list">
                            <div className="chat-tag">Tag name <div className="button chat-tag-delete">X</div>
                            </div>
                        </div>
                        <div className="button add-new" id="add-new-tag-button-input">
                            <div className="add-new-circle">+</div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="chat-input-middle">
                <div id="subtopics-section">
                    <div className="subtopic">Ajahn Brahm is the VERY BEST. No question...</div>
                    <div className="add-new-circle">+</div>
                </div>
                <div id="input-container">
                    <textarea id="input-field" placeholder="Type your prompt here"></textarea>
                </div>

            </div>
            <div id="chat-input-bottom">
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
                        <Checkbox text={"Don't include previous messages"} tooltipText={"Whether all previous chat messages should be omitted from next request."} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ChatInputSection;