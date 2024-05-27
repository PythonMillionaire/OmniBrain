import React from 'react';
import botIcon from "../../../assets/images/bot.svg";
import exploreIcon from "../../../assets/images/explore.svg";
import upgradeIcon from "../../../assets/images/upgrade.svg";
import creditsIcon from "../../../assets/images/credits.svg";
import supportIcon from "../../../assets/images/support.svg";
import feedbackIcon from "../../../assets/images/feedback.svg";
import CustomScrollbar from "../../general/CustomScrollbar";
import UsageStatistics from "./UsageStatistics";

const LeftSectionActionButtons = () => (
    <div id="left-section-action-buttons">
        <section id={"usage-statistics"}>
            <div className="section-title">
                <span>Usage statistics</span>
            </div>
            <div className={"left-panel-action-buttons-section"}>
                <UsageStatistics percentage={0.3} size={50}/>

                <div className="usage-statistics-contents">
                    <div className="usage-statistics-title">
                        REMAINING CREDITS
                    </div>
                    <div className="usage-statistics-numbers">
                        1357/10000
                    </div>
                </div>
            </div>
        </section>
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