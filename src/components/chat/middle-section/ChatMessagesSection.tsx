import React from 'react';
import Conversation from "./chat-messages/Conversation";
import CustomScrollbar from "../../general/CustomScrollbar";

import arrowIcon from "../../../assets/images/arrow-two.svg";

const ChatMessagesSection = () => {
    return (
        <CustomScrollbar scrollbarId="chat-messages-section-container">
            <section id="chat-messages-section">
                <Conversation />
            </section>
            <div className={"button"} id={"scroll-to-top-button"}>
                <img src={arrowIcon} alt="Scroll to top"/>
                <div>
                    Scroll to top
                </div>
            </div>
        </CustomScrollbar>
    );
};

export default ChatMessagesSection;