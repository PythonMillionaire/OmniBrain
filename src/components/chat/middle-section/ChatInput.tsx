import React from 'react';
import FollowUpQuestion from "./elements/FollowUpQuestion";
import Slider from "../../general/Slider";
import ProviderSendButton from "./elements/ProviderSendButton";
import Checkbox from "../../general/Checkbox";

const ChatInputSection: React.FC = () => {
    // @ts-ignore
    return (
        <section id="chat-input-section">
            <div id="follow-up-questions-section">
                <FollowUpQuestion questionContent="Ajahn Brahm is the VERY BEST. No question..." />
                <FollowUpQuestion questionContent="Ajahn Brahm is the VERY BEST. Indeed" />
                <FollowUpQuestion questionContent="Ajahn Brahm is the VERY BEST. No question..." />
                <FollowUpQuestion questionContent="Ajahn Brahm is the VERY BEST. " />
            </div>
            <div id="chat-input-top">
                <div id="chat-input-top-row-1">
                    <div className="chat-input-detail-level-slider">
                        <div>Response detail level <br/>
                        </div>
                        <Slider/>
                    </div>
                    <div id="ai-response-settings-checkboxes">
                        <Checkbox text={"Include examples"} tooltipText={"Whether or not the AI should include examples in its output."} />
                        <Checkbox text={"Include explanation"} tooltipText={"Whether or not the AI should explain the output."} />
                        <Checkbox text={"Split output"} tooltipText={"Whether the AI's output should split into the sections defined in Settings."} />
                    </div>
                </div>
                <div id="chat-input-top-row-2">
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
                        <div className="button add-new" id="add-new-tag-button">
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
                    <textarea id="input-field" placeholder="Example Text"></textarea>
                </div>

            </div>
            <div id="chat-input-bottom">
                <div id="provider-buttons-container">
                    <ProviderSendButton providerName={"Midjourney"}/>
                    <ProviderSendButton providerName={"ChatGPT 3.5"}/>
                    <ProviderSendButton providerName={"Claude 3"}/>
                    <ProviderSendButton providerName={"Gemini 1.5"}/>
                    <ProviderSendButton providerName={"ChatGPT 4"}/>
                </div>
                <div id="prompt-settings">
                    <div id="prompt-settings-checkboxes">
                        <label className="checkbox-field">
                            <input type="checkbox"/>
                            <span className="checkbox-label">Keep prompt after sending</span>
                        </label>
                        <label className="checkbox-field">
                            <input type="checkbox"/>
                            <span className="checkbox-label">Improve prompt before sending</span>
                        </label>
                        <label className="checkbox-field">
                            <input type="checkbox"/>
                            <span className="checkbox-label">Don't include other messages</span>
                        </label>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ChatInputSection;