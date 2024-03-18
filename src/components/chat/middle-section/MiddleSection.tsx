import React from 'react';
import ChatMessagesToolBar from './ChatMessagesToolBar';
import ChatMessages from './ChatMessages';
import ChatInputSection from './ChatInput';

const MiddleSection: React.FC = () => {
    return (
        <div id="middle-section">
            <ChatMessagesToolBar />
            <ChatMessages />
            <ChatInputSection />
        </div>
    );
};

export default MiddleSection;