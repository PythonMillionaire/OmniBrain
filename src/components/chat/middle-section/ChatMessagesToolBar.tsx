import React from 'react';
import SearchButton from "../../general/SearchButton";

import shareChatIcon from "../../../assets/images/share.svg";
import exportImportIcon from "../../../assets/images/export-import.svg";
import settingsIcon from "../../../assets/images/settings.svg";
import Tag from "../../general/Tag";

const ChatMessagesToolBar: React.FC = () => {
    return (
        <section id="chat-messages-tool-bar">
            <div id="chat-message-tool-bar-top">
                <div id="chat-menu">
                    <div id="share-chat" className={"button"}><img src={shareChatIcon}/>Share</div>
                    <div id="export-import" className={"button"}><img src={exportImportIcon}/>Export/import</div>
                    <div id="editor-settings" className={"button"}><img src={settingsIcon}/> Chat settings</div>
                </div>
                <div id="chat-filter-search">
                    <div id="chat-message-filters">
                        <input id="filter-chat-tag-section"/>
                        <Tag className={"chat-tag-filter"} tagName={"Tag name"}/>

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
