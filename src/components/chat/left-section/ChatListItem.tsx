// ChatListItem.tsx
import React from 'react';
import aiLogo from "../../../assets/images/ai-providers/logo-chatgpt.svg";

interface ChatListItemProps {
    id: number;
    isSelected: boolean;
    onSelect: (id: number) => void; // Updated to pass id back on select
    name: string;
    date: string;
}

const ChatListItem: React.FC<ChatListItemProps> = ({
                                                       id,
                                                       isSelected,
                                                       onSelect,
                                                       name,
                                                       date,
                                                   }) => {
    return (
        <div className={`chat-list-item-container ${isSelected ? 'selected' : ''}`} onClick={() => onSelect(id)}>
            <div className="chat-list-item-ai-model-logo">
                <img src={aiLogo} alt="AI Logo" />
            </div>
            <div className="chat-list-item-information">
                <div className="chat-list-item-top-row">
                    <div className="chat-list-item-ai-model-name">{name}</div>
                    <div className="chat-list-item-date">{date}</div>
                </div>
                <div className="chat-list-item-middle-row">
                    <div className="chat-list-item-info-content">
                        <div className="chat-list-item-title">Conversation name</div>
                        <div className="chat-list-item-description">Last message sent or description testing testing testing...</div>
                    </div>
                    <div className="chat-list-item-menu">...
                        <div className="dropdown-menu">
                            <ul>
                                <li><a href="#">Duplicate</a></li>
                                <li><a href="#">Archive</a></li>
                                <li><a href="#">Delete</a></li>
                                <li><a href="#">Move to Project</a></li>
                                <li><a href="#">Move to Workspace</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ChatListItem;