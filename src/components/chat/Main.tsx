import React from 'react';
import LeftSection from './left-section/LeftSection';
import RightSection from './right-section/RightSection';
import ChatMessagesToolBar from "./middle-section/ChatMessagesToolBar";
import ChatMessagesSection from "./middle-section/ChatMessagesSection";
import ChatInputSection from "./middle-section/ChatInputSection";

const Main = () => {
    return (
        <div id="main">
            <LeftSection />
            <ChatMessagesToolBar/>

            <ChatMessagesSection/>

            <ChatInputSection/>
            <RightSection/>
            <div id="portal-root"></div>
        </div>
    );
};

export default Main;