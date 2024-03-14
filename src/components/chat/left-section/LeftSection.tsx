import React from 'react';

import userAvatar from '../../../assets/images/user-avatar.svg';
import settingsIcon from '../../../assets/images/settings.svg';


const LeftSection: React.FC = () => {
    return (
        <div id="left-section">
            <section id="chat-list">
                <div id="chat-list-top">
                    <div id="chat-list-top-row">
                        <div id="logo">
                            <img
                                src="https://assets-global.website-files.com/plugins/Basic/assets/placeholder.60f9b1840c.svg" alt="OmniBrain Logo"/>
                        </div>
                        <div id="add-new-chat-button">
                            <div className="add-new-circle">+</div>
                            <div className="add-new-chat-text">New chat</div>
                        </div>
                    </div>
                    <div id="filter-chat-list-row">
                        <input id="conversation-search" placeholder="Search all conversations"/>
                    </div>
                </div>

                <div id="chat-list-main">
                    <div className="chat-list-item-container">
                        <div className="chat-list-item-ai-model-logo">
                            <img
                                src="https://assets-global.website-files.com/plugins/Basic/assets/placeholder.60f9b1840c.svg" />
                        </div>
                        <div className="chat-list-item-information">
                            <div className="chat-list-item-top-row">
                                <div className="chat-list-item-ai-model-name">ChatGPT 5</div>
                                <div className="chat-list-item-date">April 5, 2024</div>
                            </div>
                            <div className="chat-list-item-middle-row">
                                <div className="chat-list-item-info-content">
                                    <div className="chat-list-item-title">Conversation name</div>
                                    <div className="chat-list-item-description">Last message sent or description...
                                    </div>
                                </div>
                                <div className="chat-list-item-menu">...</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="left-section-bottom">
                <div id="account-info">
                    <div id="account-avatar">
                        <img src={userAvatar} alt="User avatar"/>
                    </div>
                    <div id="account-name">Account Name <br/>
                    </div>
                </div>
                <div id="account-settings">
                    <img src={settingsIcon} alt="Settings"/>
                </div>
            </section>
        </div>
    );
};

export default LeftSection;
