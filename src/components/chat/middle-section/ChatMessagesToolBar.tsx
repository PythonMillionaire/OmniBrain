import React from 'react';
import SearchButton from "../../general/SearchButton";

import exportImportIcon from "../../../assets/images/export-import.svg";

import settingsIcon from "../../../assets/images/settings.svg";

const ChatMessagesToolBar: React.FC = () => {
    return (
        <section id="chat-messages-tool-bar">
            <div id="chat-message-tool-bar-top">
                <div id="chat-menu">
                    <div id="export-import"><img src={exportImportIcon}/>Export/import</div>
                    <div id="editor-settings"><img src={settingsIcon}/> Chat settings</div>
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
                            <SearchButton/>
                        </div>

                    </div>
                </div>
            </div>


            <div id="chat-message-tool-bar-bottom">
                
            </div>
        </section>
    );
};

export default ChatMessagesToolBar;
