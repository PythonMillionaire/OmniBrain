import React from 'react';
import ChatMessagesToolBar from './ChatMessagesToolBar';
import ChatMessagesSection from './ChatMessagesSection';
import ChatInputSection from './ChatInputSection';
import {ReplyModeProvider} from "../../general/messages/ReplyModeContext";

const MiddleSection = () => {
    return (
        <div id="middle-section">
            <ChatMessagesToolBar />

            <ReplyModeProvider>
                <ChatMessagesSection />
                <ChatInputSection />
            </ReplyModeProvider>
        </div>
    );
};

export default MiddleSection;