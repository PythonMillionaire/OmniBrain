import React from 'react';
import ChatMessageActionBar from './ChatMessageActionBar';
import ChatMessagesSection from './ChatMessages';
import ChatInputSection from './ChatInput';

const MiddleSection: React.FC = () => {
    return (
        <div id="middle-section">
            <ChatMessageActionBar />
            <ChatMessagesSection />
            <ChatInputSection />
        </div>
    );
};

export default MiddleSection;