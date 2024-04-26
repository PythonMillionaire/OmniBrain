import React from 'react';
import ChatMessagesToolBar from './ChatMessagesToolBar';
import ChatMessagesSection from './ChatMessagesSection';
import ChatInputSection from './ChatInputSection';

const MiddleSection = () => {
    return (
        <div id="middle-section">
            <ChatMessagesToolBar />

            <ChatMessagesSection />

            <ChatInputSection />
        </div>
    );
};

export default MiddleSection;