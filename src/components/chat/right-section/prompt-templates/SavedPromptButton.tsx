import React from 'react';

import { IconProp } from "../../../../types/IconProp";

import settingsIcon from "../../../../assets/images/settings.svg";

import creditsIcon from "../../../../assets/images/credits-coin.svg";

import hamburgerIcon from "../../../../assets/images/hamburger.svg";

interface SavedPromptButtonProps {
    promptContents: string;
    promptIcon?: IconProp;
}

const SavedPromptButton: React.FC<SavedPromptButtonProps> = ({ promptContents, promptIcon: icon }) => (
    <div className="prompt-templates-button-outer">
        <div className="button prompt-templates-button-reorder-icon">
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                 viewBox="0 0 28 24">
                <path d="M2,4h24c1.1,0,2-0.9,2-2s-0.9-2-2-2H2C0.9,0,0,0.9,0,2S0.9,4,2,4z"/>
                <path d="M26,10H2c-1.1,0-2,0.9-2,2s0.9,2,2,2h24c1.1,0,2-0.9,2-2S27.1,10,26,10z"/>
                <path d="M26,20H2c-1.1,0-2,0.9-2,2s0.9,2,2,2h24c1.1,0,2-0.9,2-2S27.1,20,26,20z"/>
            </svg>

        </div>
        <div className="button prompt-templates-button-border">
            <div className="prompt-templates-button">
                <div className={"prompt-templates-button-content"}>

                    <div className="prompt-templates-button-info">
                        <>{
                            typeof icon === 'string' ?
                                <img src={icon} alt="User uploaded icon" className={"prompt-templates-button-icon"}/> : // User-uploaded icon (URL)
                                {icon}
                        }</>
                        {promptContents}
                    </div>
                </div>

                <div className="prompt-templates-button-action-buttons">
                    <img src={settingsIcon} className={"button prompt-templates-button-settings-icon"}/>
                    <div className={"button prompt-templates-button-delete-icon"}>×</div>
                </div>
            </div>
        </div>

        <div className="prompt-templates-button-credits">
            <img src={creditsIcon} className={"prompt-templates-button-credits-icon"}/>
            <span className={"prompt-templates-button-credits-amount"}>1352</span>
        </div>
    </div>
        );

        export default SavedPromptButton;
