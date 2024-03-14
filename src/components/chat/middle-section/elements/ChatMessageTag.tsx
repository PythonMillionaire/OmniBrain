import React from "react";

const ChatMessageTag: React.FC = () => {
    return (
        <div className="chat-message-tag">
            <div className="chat-tag button">Tag name <div className="chat-tag-delete" style={{opacity:0}}>X</div>
            </div>
        </div>
    )
}

export default ChatMessageTag;