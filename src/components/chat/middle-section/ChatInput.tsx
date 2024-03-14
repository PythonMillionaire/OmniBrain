import React from 'react';

const ChatInputSection: React.FC = () => {
    // @ts-ignore
    return (
        <section id="chat-input-section">
            <div id="follow-up-questions-section">
                <div className="follow-up-question">Ajahn Brahm is the VERY BEST. No question...</div>
                <div className="follow-up-question">I LOVE Ajahn Brahm &lt;3....</div>
                <div className="follow-up-question">I LOVE Ajahn Brahm SOOOO FUKEN MUCH &lt;3....</div>
                <div className="follow-up-question">I LOVE Ajahn Brahm ENORMOUSLY &lt;3....</div>
            </div>
            <div id="chat-input-top">
                <div id="chat-input-top-row-1">
                    <div className="chat-input-detail-level-slider">
                        <div>Response detail level <br/>
                        </div>
                        <input type="range" min="0" max="5" value="0" className="slider" step="1"
                               id="response-detail-level-slider"/>
                    </div>
                    <div id="ai-response-settings-checkboxes">
                        <label className="checkbox-field">
                            <input type="checkbox"/>
                            <span className="checkbox-label">Include examples</span>
                        </label>
                        <label className="checkbox-field">
                            <input type="checkbox"/>
                            <span className="checkbox-label">Split output</span>
                        </label>

                    </div>
                </div>
                <div id="chat-input-top-row-2">
                    <div id="topics-section">
                        <div id="topics">
                            <div className="topic-tab selected">Graphic design</div>
                            <div className="topic-tab">Programming</div>
                        </div>
                        <div id="add-new-topic-button">
                            <div className="add-new-circle">+</div>
                        </div>
                    </div>
                    <div id="tags-section">
                        <div id="tag-list">
                            <div className="chat-tag">Tag name <div className="chat-tag-delete"
                                                                    style={{opacity: 0}}>X</div>
                            </div>
                        </div>
                        <div id="add-new-tag-button">
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
                    <a className="provider-button" href="#">Provider</a>
                    <a className="provider-button" href="#">Provider</a>
                    <a className="provider-button" href="#">Provider</a>
                    <a className="provider-button" href="#">Provider</a>
                    <a className="provider-button" href="#">Provider</a>
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