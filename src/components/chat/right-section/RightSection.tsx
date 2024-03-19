import React from 'react';

import gridIcon from '../../../assets/images/grid-display.svg';
import listIcon from '../../../assets/images/list-display.svg';

import aiLogo from "../../../assets/images/ai-providers/logo-chatgpt.svg";

import SavedPromptButton from "./saved-prompts/SavedPromptButton";

import saveIcon from "../../../assets/images/action-buttons/save-prompt.svg";

import settingsIcon from "../../../assets/images/settings.svg";

const RightSection: React.FC = () => {
    return (
        <div id="right-section">
            <section id="tab-headers-section">
                <div className="button tab-header"><img src={saveIcon} id="saved-prompt-tab-icon"/> Saved prompts</div>
                <div className="button tab-header"><img src={settingsIcon} id="settings-tab-icon"/> Settings</div>
            </section>

            <section id="tab-contents">
                <div className="saved-prompt-topic-list">
                    <div className="button saved-prompt-topic selected">All</div>
                    <div className="button saved-prompt-topic">Graphic design</div>
                    <div className="button saved-prompt-topic">Programming</div>
                </div>

                <div id="saved-prompts-list">
                    <div id="saved-prompts-list-header">
                        <div id="saved-prompts-display">
                            <div className={"button"} id="saved-prompts-display-grid">
                                <img src={gridIcon} id="saved-prompts-display-grid-icon" alt="Display saved prompts as grid"/>

                                <div id="saved-prompts-display-grid-text">Show as grid</div>
                            </div>

                            <div className={"button"} id="saved-prompts-display-list">
                                <img src={listIcon} id="saved-prompts-display-list-icon" alt="Display saved prompts as list"/>

                                <div id="saved-prompts-display-grid-text">Show as list</div>
                            </div>
                        </div>

                        <div className={"button"} id="saved-prompts-list-settings">
                            <img src={settingsIcon} id="saved-prompts-list-settings-icon" alt="Settings"/>
                            Settings
                        </div>
                    </div>
                    
                    <div className={"button"} id="add-saved-prompt">
                        <div className="add-new-circle">+</div>
                        <div className="add-saved-prompt-text">Add new saved prompt</div>
                    </div>

                    <div className="saved-prompt-category-container">
                        <h3 className="saved-prompt-category">The Naked Truth</h3>
                        <SavedPromptButton promptContents={"Ajahn Brahm is just so beautiful!!!"} promptIcon={aiLogo}/>
                        <SavedPromptButton promptContents={"Ajahn Brahm is just so beautiful!!!"} promptIcon={aiLogo}/>
                        <SavedPromptButton promptContents={"Ajahn Brahm is just so beautiful!!!"} promptIcon={aiLogo}/>
                        <SavedPromptButton promptContents={"Ajahn Brahm is just so beautiful!!!"} promptIcon={aiLogo}/>
                    </div>
                    <div className="saved-prompt-category-container">
                        <h3 className="saved-prompt-category">General</h3>
                        <SavedPromptButton promptContents={"Ajahn Brahm is just so beautiful!!!"} promptIcon={aiLogo}/>
                        <SavedPromptButton promptContents={"Ajahn Brahm is just so beautiful!!!"} promptIcon={aiLogo}/>
                        <SavedPromptButton promptContents={"Ajahn Brahm is just so beautiful!!!"} promptIcon={aiLogo}/>
                        <SavedPromptButton promptContents={"Ajahn Brahm is just so beautiful!!!"} promptIcon={aiLogo}/>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default RightSection;
