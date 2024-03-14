import React from 'react';
import ChatMessageActionBar from './ChatMessageActionBar';
import ChatMessages from './ChatMessages';
import ChatInputSection from './ChatInput';

const MiddleSection: React.FC = () => {
    return (
        <div id="middle-section">
            <ChatMessageActionBar />
            <ChatMessages />
            <ChatInputSection />
        </div>
    );
};

export default MiddleSection;