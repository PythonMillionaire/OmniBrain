import React from 'react';
import botIcon from "../../../assets/images/bot.svg";
import exploreIcon from "../../../assets/images/explore.svg";
import upgradeIcon from "../../../assets/images/upgrade.svg";
import creditsIcon from "../../../assets/images/credits.svg";
import supportIcon from "../../../assets/images/support.svg";
import feedbackIcon from "../../../assets/images/feedback.svg";
import CustomScrollbar from "../../general/CustomScrollbar";

const LeftSectionActionButtons = () => (
    <div id="left-section-action-buttons">
        <CustomScrollbar styles={{filter: "var(--soft-shadow-top)"}}>
            <section>
                <div className="section-title">
                    <span>ChatBots</span>
                </div>
                <div className={"left-panel-action-buttons-section"}>
                    <div className={"button left-panel-action-button"} id="create-bot">
                        <img src={botIcon} alt="Create a chat bot" id="create-bot-icon" className={"button-icon"}/>
                        <div id="create-bot-button-text">Create a bot</div>
                    </div>

                    <div className={"button left-panel-action-button"} id="explore-bots">
                        <img src={exploreIcon} alt="Explore other user's chat bots" id="explore-bots-icon"
                             className={"button-icon"}/>
                        <div id="explore-bots-button-text">Explore bot gallery</div>
                    </div>
                </div>
            </section>

            <section>
                <div className="section-title">
                    <span>Billing</span>
                </div>
                <div className={"left-panel-action-buttons-section"}>
                    <div className={"button left-panel-action-button"} id="upgrade-plan">
                        <img src={upgradeIcon} alt="Upgrade your plan" className={"button-icon"}
                             id="upgrade-plan-icon"/>
                        <div id="create-bot-button-text">Upgrade plan</div>
                    </div>

                    <div className={"button left-panel-action-button"} id="add-credits">
                        <img src={creditsIcon} alt="Add more credits" className={"button-icon"} id="add-credits-icon"/>
                        <div id="explore-bots-button-text">Add credits</div>
                    </div>
                </div>
            </section>

            <section>
                <div className="section-title">
                    <span>Support</span>
                </div>
                <div className={"left-panel-action-buttons-section"}>
                    <div className={"button left-panel-action-button"} id="send-feedback">
                        <img src={feedbackIcon} alt="Create a chat bot" id="send-feedback-icon"
                             className={"button-icon"}/>
                        <div id="create-bot-button-text">Send feedback</div>
                    </div>

                    <div className={"button left-panel-action-button"} id="technical-support">
                        <img src={supportIcon} alt="Explore other user's chat bots" id="technical-support-icon"
                             className={"button-icon"}/>
                        <div id="explore-bots-button-text">Technical support</div>
                    </div>
                </div>
            </section>

        </CustomScrollbar>
    </div>
);

export default LeftSectionActionButtons;