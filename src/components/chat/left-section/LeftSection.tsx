import React from 'react';

import userAvatar from '../../../assets/images/user-avatar.svg';
import settingsIcon from '../../../assets/images/settings.svg';
import ChatList from "./ChatList";
import LeftSectionActionButtons from "./LeftSectionActionButtons";

import botIcon from "../../../assets/images/bot.svg";
import exploreIcon from "../../../assets/images/explore.svg";
import upgradeIcon from "../../../assets/images/upgrade.svg";
import creditsIcon from "../../../assets/images/credits.svg";
import logo from "../../../assets/images/logo.svg";
import AddElementButton from "../../general/AddElementButton";

const LeftSection = () => {
    return (
        <div id="left-section">
            <div id="left-section-top">
                <div id="logo">
                    <img src={logo} alt="OmniBrain Logo"/>
                </div>
                <ChatList />
            </div>

            <div id="left-section-middle">
                <LeftSectionActionButtons/>
            </div>

            <section id="left-section-bottom">
                <div id="account-info">
                    <div id="account-avatar-left">
                        <img src={userAvatar} alt="User avatar"/>
                    </div>
                    <div id="account-name">Account Name <br/>
                    </div>
                </div>
                <div className="button" id="account-settings">
                    <img src={settingsIcon} alt="Settings"/>
                </div>
            </section>
        </div>
    );
};

export default LeftSection;
