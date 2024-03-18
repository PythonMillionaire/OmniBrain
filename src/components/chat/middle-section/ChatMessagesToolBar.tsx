import React from 'react';
import SearchButton from "../../general/SearchButton";

const ChatMessagesToolBar: React.FC = () => {
    return (
        <section id="chat-message-action-bar">
            <div id="chat-menu">
                <div id="export-import">Export/import</div>
                <div id="editor-settings">Chat settings</div>
            </div>
            <div id="chat-filter-search">
                <div id="chat-message-filters">
                    <input id="filter-chat-tag-section"/>
                    <div className="chat-tag-filter">Tag name <div className="button chat-tag-delete">X</div>
                    </div>

                </div>
                <div id="chat-message-search-section">
                    <input id="filter-chat-search-section" placeholder="Search messages"/>
                    <div>
                        <SearchButton />
                    </div>

                </div>
            </div>
        </section>
    );
};

export default ChatMessagesToolBar;
