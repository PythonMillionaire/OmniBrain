import React from 'react';
import Tag from "../../../../general/Tag";
import AddElementButton from "../../../../general/AddElementButton";

interface MessageBottomSectionProps {
    children?: React.ReactNode;
    actionButtons: React.ReactNode;
    showSideButtons: boolean;
}

const MessageBottomSection: React.FC<MessageBottomSectionProps> = ({ children, actionButtons, showSideButtons }) => {
    return (
        <div className="chat-message-bottom">
            <div className="chat-message-action-row">
                <div className="chat-message-tag-list">
                    <Tag tagName={'Tag name'}/>

                    <AddElementButton type={"new-tag-message"}/>
                </div>

                <div className={`chat-message-buttons-bottom ${showSideButtons ? 'invisible' : ''}`} >
                    {actionButtons}
                </div>
            </div>

            {children}
        </div>
    );
}

export default MessageBottomSection;