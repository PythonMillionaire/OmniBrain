import React from 'react';

const ChatListItem: React.FC = () => {
    return (
        <div className="chat-list-item-container">
            <div className="chat-list-item-ai-model-logo">
                <img
                    src="https://assets-global.website-files.com/plugins/Basic/assets/placeholder.60f9b1840c.svg" />
            </div>
            <div className="chat-list-item-information">
                <div className="chat-list-item-top-row">
                    <div className="chat-list-item-ai-model-name">ChatGPT 5</div>
                    <div className="chat-list-item-date">April 5, 2024</div>
                </div>
                <div className="chat-list-item-middle-row">
                    <div className="chat-list-item-info-content">
                        <div className="chat-list-item-title">Conversation name</div>
                        <div className="chat-list-item-description">Last message sent or description...
                        </div>
                    </div>
                    <div className="chat-list-item-menu">...</div>
                </div>
            </div>
        </div>
    )
}

export default ChatListItem;