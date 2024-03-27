import React, {useRef, useState} from 'react';

import gridIcon from '../../../assets/images/grid-display.svg';
import listIcon from '../../../assets/images/list-display.svg';

import aiLogo from "../../../assets/images/ai-providers/logo-chatgpt.svg";

import SavedPromptButton from "./saved-prompts/SavedPromptButton";

import saveIcon from "../../../assets/images/action-buttons/save-prompt.svg";

import settingsIcon from "../../../assets/images/settings.svg";
import AddElementButton from "../../general/AddElementButton";
import CollapseButton from "../../general/CollapseSectionButton";
import {ButtonPosition} from "../../../types/enums";

const RightSection = () => {
    const [isVisible, setIsVisible] = useState(true);
    const elementRef = useRef<HTMLDivElement>(null);

    return (
        <div id="right-section" style={!isVisible ? { width: '10px' } : {}}>

        <CollapseButton isVisible={isVisible} buttonPosition={ButtonPosition.right} toggleVisibility={() => setIsVisible(!isVisible)} id={'right-section-collapse-button'} />

            <div id="right-section-inner" ref={elementRef} style={{ display: isVisible ? 'flex' : 'none'}}>
                <section id="tab-headers-section">
                    <div className="button tab-header selected"><img src={saveIcon} id="saved-prompt-button-tab-icon"/> Saved prompts</div>
                    <div className="button tab-header"><img src={settingsIcon} id="settings-tab-icon"/> Settings</div>
                </section>

                <section id="tab-contents">
                    <div className="saved-prompt-button-topic-list">
                        <div className="button saved-prompt-button-topic selected">All</div>
                        <div className="button saved-prompt-button-topic">Graphic design</div>
                        <div className="button saved-prompt-button-topic">Programming</div>
                    </div>

                    <div id="saved-prompt-buttons-list-header">
                        <div id="saved-prompt-buttons-display">
                            <div className={"button"} id="saved-prompt-buttons-display-grid">
                                <img src={gridIcon} id="saved-prompt-buttons-display-grid-icon" alt="Display saved prompts as grid"/>

                                <div id="saved-prompt-buttons-display-grid-text">Show as grid</div>
                            </div>

                            <div className={"button"} id="saved-prompt-buttons-display-list">
                                <img src={listIcon} id="saved-prompt-buttons-display-list-icon" alt="Display saved prompts as list"/>

                                <div id="saved-prompt-buttons-display-grid-text">Show as list</div>
                            </div>
                        </div>

                        <div className={"button"} id="saved-prompt-buttons-list-settings">
                            <img src={settingsIcon} id="saved-prompt-buttons-list-settings-icon" alt="Settings"/>
                            Settings
                        </div>
                    </div>

                    <div id="saved-prompt-buttons-list">

                        <div id="add-new-saved-prompt-button-section"><AddElementButton text={"Add new saved prompt"} type={"saved-prompt"}/></div>

                        <div className="saved-prompt-button-category-container">
                            <h3 className="saved-prompt-button-category">The Naked Truth</h3>
                            <SavedPromptButton promptContents={"Ajahn Brahm is just so beautiful!!!"} promptIcon={aiLogo}/>
                            <SavedPromptButton promptContents={"Ajahn Brahm is just so beautiful!!!"} promptIcon={aiLogo}/>
                            <SavedPromptButton promptContents={"Ajahn Brahm is just so beautiful!!!"} promptIcon={aiLogo}/>
                            <SavedPromptButton promptContents={"Ajahn Brahm is just so beautiful!!!"} promptIcon={aiLogo}/>
                        </div>
                        <div className="saved-prompt-button-category-container">
                            <h3 className="saved-prompt-button-category">General</h3>
                            <SavedPromptButton promptContents={"Ajahn Brahm is just so beautiful!!!"} promptIcon={aiLogo}/>
                            <SavedPromptButton promptContents={"Ajahn Brahm is just so beautiful!!!"} promptIcon={aiLogo}/>
                            <SavedPromptButton promptContents={"Ajahn Brahm is just so beautiful!!!"} promptIcon={aiLogo}/>
                            <SavedPromptButton promptContents={"Ajahn Brahm is just so beautiful!!!"} promptIcon={aiLogo}/>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default RightSection;
