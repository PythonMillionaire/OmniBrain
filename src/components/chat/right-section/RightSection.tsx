import React, {useRef, useState} from 'react';

import gridIcon from '../../../assets/images/grid-display.svg';
import listIcon from '../../../assets/images/list-display.svg';

import aiLogo from "../../../assets/images/ai-providers/logo-chatgpt.svg";

import saveIcon from "../../../assets/images/action-buttons/save-prompt.svg";

import settingsIcon from "../../../assets/images/settings.svg";
import AddElementButton from "../../general/AddElementButton";
import CollapseButton from "../../general/CollapseSectionButton";
import {ButtonPosition} from "../../../types/enums";
import CustomScrollbar from "../../general/CustomScrollbar";
import SavedPromptCategory from "./prompt-templates/SavedPromptCategory";

const RightSection = () => {
    const [isVisible, setIsVisible] = useState(true);

    const collapseDivRef = useRef<HTMLDivElement>(null);

    const prompts = [
        { promptContents: "Ajahn Brahm is just so beautiful!!!", promptIcon: aiLogo },
        { promptContents: "Ajahn Brahm is just so beautiful!!!", promptIcon: aiLogo },
        { promptContents: "Ajahn Brahm is just so beautiful!!!", promptIcon: aiLogo },
        { promptContents: "Ajahn Brahm is just so beautiful!!!", promptIcon: aiLogo }
    ];

    return (
        <div id="right-section" ref={collapseDivRef} style={!isVisible ? { width: '10px' } : {}}>

        <CollapseButton isVisible={isVisible} buttonPosition={ButtonPosition.right}  referenceToCollapsedElement={collapseDivRef} visibilitySetter={setIsVisible} id={'right-section-collapse-button'} />

            <div id="right-section-inner" style={{ display: isVisible ? 'flex' : 'none'}}>
                <section id="tab-headers-section-container">
                    <div id="tab-headers-section">
                        <CustomScrollbar>
                            <div id="tab-headers-container">
                                <div className="button tab-header selected">
                                    <img src={saveIcon} id="prompt-templates-button-tab-icon"/>
                                    Prompt templates
                                </div>
                                <div className="button tab-header">
                                    <img src={settingsIcon} id="settings-tab-icon"/>
                                    AutoGPT
                                </div>
                                <div className="button tab-header">
                                    <img src={settingsIcon} id="settings-tab-icon"/>
                                    File manager
                                </div>
                            </div>
                        </CustomScrollbar>
                    </div>
                </section>
                <section id="tab-contents">
                    <div className="prompt-templates-button-topic-list">
                        <div className="button prompt-templates-button-topic selected">Single prompts</div>
                        <div className="button prompt-templates-button-topic">Chained prompts</div>
                        <div className="button prompt-templates-button-topic">Programming</div>
                        <div className="button prompt-templates-button-topic">Marketing</div>
                    </div>

                    <div id="prompt-templates-buttons-list-header">
                        <div id="prompt-templates-buttons-display">
                            <div className={"button"} id="prompt-templates-buttons-display-grid">
                                <img src={gridIcon} id="prompt-templates-buttons-display-grid-icon" alt="Display prompt templates as grid"/>

                                <div id="prompt-templates-buttons-display-grid-text">Show as grid</div>
                            </div>

                            <div className={"button"} id="prompt-templates-buttons-display-list">
                                <img src={listIcon} id="prompt-templates-buttons-display-list-icon" alt="Display prompt templates as list"/>

                                <div id="prompt-templates-buttons-display-grid-text">Show as list</div>
                            </div>
                        </div>

                        <div className={"button"} id="prompt-templates-buttons-list-settings">
                            <img src={settingsIcon} id="prompt-templates-buttons-list-settings-icon" alt="Settings"/>
                            Settings
                        </div>
                    </div>

                    <div id="prompt-templates-buttons-list-container">

                        <div id="add-new-prompt-templates-button-section">
                            <AddElementButton text={"New prompt template category"} type={"prompt-templates"}/>
                        </div>

                        <div id={"prompt-templates-buttons-list"}>
                            <SavedPromptCategory categoryName="The Naked Truth" prompts={prompts}/>
                            <SavedPromptCategory categoryName="General" prompts={prompts}/>
                        </div>

                    </div>
                </section>
            </div>
        </div>
    );
};

export default RightSection;
