import React from 'react';

import userAvatar from '../../../assets/images/user-avatar.svg';
import settingsIcon from '../../../assets/images/settings.svg';
import ChatList from "./ChatList";
import LeftSectionActionButtons from "./LeftSectionActionButtons";

import botIcon from "../../../assets/images/bot.svg";
import exploreIcon from "../../../assets/images/explore.svg";
import upgradeIcon from "../../../assets/images/upgrade.svg";
import creditsIcon from "../../../assets/images/credits.svg";
import logoText from "../../../assets/images/logo.svg";
import logoImage from "../../../assets/images/logo.png";
import AddElementButton from "../../general/AddElementButton";
import CustomScrollbar from "../../general/CustomScrollbar";

const LeftSection = () => {
    return (
        <div id="left-section">
            <section id="left-section-top">
                <div id="logo">
                    <img src={logoImage} alt="OmniBrain Logo"/>
                    <img src={logoText} alt="OmniBrain Logo"/>
                </div>
                <ChatList />
            </section>


            <section id="left-section-middle">
                <LeftSectionActionButtons/>
            </section>

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
