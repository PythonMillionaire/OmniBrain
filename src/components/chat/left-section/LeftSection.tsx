import React from 'react';

import userAvatar from '../../../assets/images/user-avatar.svg';
import settingsIcon from '../../../assets/images/settings.svg';
import ChatList from "./ChatList";


const LeftSection: React.FC = () => {
    return (
        <div id="left-section">
            <ChatList />

            <section id="left-section-bottom">
                <div id="account-info">
                    <div id="account-avatar-left">
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
