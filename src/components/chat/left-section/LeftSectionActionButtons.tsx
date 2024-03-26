import React from 'react';
import botIcon from "../../../assets/images/bot.svg";
import exploreIcon from "../../../assets/images/explore.svg";
import upgradeIcon from "../../../assets/images/upgrade.svg";
import creditsIcon from "../../../assets/images/credits.svg";
import supportIcon from "../../../assets/images/support.svg";
import feedbackIcon from "../../../assets/images/feedback.svg";

const LeftSectionActionButtons = () => (
    <div id="left-section-action-buttons">
        <section className={"buttons-section"} id="bots-section">
            <div className={"button left-section-button"} id="create-bot-button">
                <img src={botIcon} alt="Create a chat bot" id="bot-icon" className={"button-icon"}/>
                <div id="create-bot-button-text">Create bot</div>
            </div>

            <div className={"button left-section-button"} id="explore-bots-button">
                <img src={exploreIcon} alt="Explore other user's chat bots" id="explore-icon" className={"button-icon"}/>
                <div id="explore-bots-button-text">Explore</div>
            </div>
        </section>

        <section className={"buttons-section"} id="bots-section">
            <div className={"button left-section-button"} id="create-bot-button">
                <img src={botIcon} alt="Create a chat bot" id="bot-icon" className={"button-icon"}/>
                <div id="create-bot-button-text">Create bot</div>
            </div>

            <div className={"button left-section-button"} id="explore-bots-button">
                <img src={exploreIcon} alt="Explore other user's chat bots" id="explore-icon" className={"button-icon"}/>
                <div id="explore-bots-button-text">Explore</div>
            </div>
        </section>

        <section className={"buttons-section"} id="bots-section">
            <div className={"button left-section-button"} id="send-feedback-button">
                <img src={feedbackIcon} alt="Create a chat bot" id="bot-icon" className={"button-icon"}/>
                <div id="create-bot-button-text">Feedback</div>
            </div>

            <div className={"button left-section-button"} id="support-button">
                <img src={supportIcon} alt="Explore other user's chat bots" id="explore-icon" className={"button-icon"}/>
                <div id="explore-bots-button-text">Support</div>
            </div>
        </section>

        <section className={"buttons-section"} id="upsell-container">
            <div className={"button left-section-button"} id="upgrade-button">
                <img src={upgradeIcon} alt="Upgrade your plan" className={"button-icon"} id="upgrade-icon"/>
                <div id="create-bot-button-text">Upgrade</div>
            </div>

            <div className={"button left-section-button"} id="add-credits-button">
                <img src={creditsIcon} alt="Add more credits" className={"button-icon"} id="credits-icon"/>
                <div id="explore-bots-button-text">Add credits</div>
            </div>
        </section>
    </div>
);

export default LeftSectionActionButtons;