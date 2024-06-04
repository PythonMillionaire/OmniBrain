// src/components/right-section/prompt-templatess/SavedPromptCategory.tsx

import React from 'react';
import SavedPromptButton from './SavedPromptButton';
import aiLogo from "../../../../assets/images/ai-providers/logo-chatgpt.svg";

interface SavedPromptCategoryProps {
    categoryName: string;
    prompts: { promptContents: string; promptIcon: string }[];
}

const SavedPromptCategory: React.FC<SavedPromptCategoryProps> = ({ categoryName, prompts }) => {
    return (
        <div className="prompt-templates-button-category-container">
            <div className={"prompt-templates-button-category-header-container"}>
                <div className="button prompt-templates-category-reorder-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                         viewBox="0 0 28 24">
                        <path d="M2,4h24c1.1,0,2-0.9,2-2s-0.9-2-2-2H2C0.9,0,0,0.9,0,2S0.9,4,2,4z"/>
                        <path
                            d="M26,10H2c-1.1,0-2,0.9-2,2s0.9,2,2,2h24c1.1,0,2-0.9,2-2S27.1,10,26,10z"/>
                        <path
                            d="M26,20H2c-1.1,0-2,0.9-2,2s0.9,2,2,2h24c1.1,0,2-0.9,2-2S27.1,20,26,20z"/>
                    </svg>
                </div>
                <h3 className="prompt-templates-button-category">{categoryName}</h3>
                <div className={"prompt-templates-minimize-category"}>
                    —
                </div>
            </div>
            {prompts.map((prompt, index) => (
                <SavedPromptButton
                    key={index}
                    promptContents={prompt.promptContents}
                    promptIcon={prompt.promptIcon || aiLogo}
                />
            ))}
        </div>
    );
};

export default SavedPromptCategory;
