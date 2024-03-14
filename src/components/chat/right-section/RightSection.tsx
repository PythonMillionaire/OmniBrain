import React from 'react';

const RightSection: React.FC = () => {
    return (
        <div id="right-section">
            <section id="tab-headers-section">
                <div className="tab-header">Saved prompts</div>
                <div className="tab-header">Model settings</div>
            </section>
            <section id="tab-contents">
                <div id="add-saved-prompt">
                    <div className="add-new-circle">+</div>
                    <div className="add-saved-prompt-text">Add new saved prompt</div>
                </div>
                <div id="saved-prompts-list">
                    <div className="saved-prompt">Ajahn Brahm is just so beautiful!!!</div>
                </div>
            </section>
        </div>
    );
};

export default RightSection;
