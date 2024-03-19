import React from 'react';

import { IconProp } from "../../../../types/IconProp";

import settingsIcon from "../../../../assets/images/settings.svg";

interface SavedPromptButtonProps {
    promptContents: string;
    promptIcon?: IconProp;
}

const SavedPromptButton: React.FC<SavedPromptButtonProps> = ({ promptContents, promptIcon: icon }) => (
    <div className="saved-prompt">
        <div className="saved-prompt-info">
            <>{
                typeof icon === 'string' ?
                    <img src={icon} alt="User uploaded icon" className={"saved-prompt-icon"}/> : // User-uploaded icon (URL)
                    {icon}
            }</>
            {promptContents}
        </div>

        <div className="saved-prompt-buttons">
            <img src={settingsIcon} className={"button saved-prompt-settings-icon"}/>
            <div className={"button saved-prompt-delete-icon"}>×</div>
        </div>
    </div>
);

export default SavedPromptButton;
