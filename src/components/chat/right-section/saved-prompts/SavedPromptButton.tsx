import React from 'react';

import { IconProp } from "../../../../types/IconProp";

import settingsIcon from "../../../../assets/images/settings.svg";

import hamburgerIcon from "../../../../assets/images/hamburger.svg";

interface SavedPromptButtonProps {
    promptContents: string;
    promptIcon?: IconProp;
}

const SavedPromptButton: React.FC<SavedPromptButtonProps> = ({ promptContents, promptIcon: icon }) => (
    <div className="button saved-prompt-button">
        <div className={"saved-prompt-button-content"}>
            <div>
                <img className="save-prompt-hamburger" src={hamburgerIcon} alt="Click to reorder"/>
            </div>
            <div className="saved-prompt-button-info">
                <>{
                    typeof icon === 'string' ?
                        <img src={icon} alt="User uploaded icon" className={"saved-prompt-button-icon"}/> : // User-uploaded icon (URL)
                        {icon}
                }</>
                {promptContents}
            </div>
        </div>

        <div className="saved-prompt-button-action-buttons">
            <img src={settingsIcon} className={"button saved-prompt-button-settings-icon"}/>
            <div className={"button saved-prompt-button-delete-icon"}>×</div>
        </div>
    </div>
);

export default SavedPromptButton;
