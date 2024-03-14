import React from 'react';
import ChatListItem from "./ChatListItem";
import SearchButton from "../../general/SearchButton";

const ChatList: React.FC = () => {
    return (
        <section id="chat-list">
            <div id="chat-list-top">
                <div id="chat-list-top-row">
                    <div id="logo">
                        <img
                            src="https://assets-global.website-files.com/plugins/Basic/assets/placeholder.60f9b1840c.svg" alt="OmniBrain Logo"/>
                    </div>
                    <div id="add-new-chat-button">
                        <div className="add-new-circle">+</div>
                        <div className="add-new-chat-text">New chat</div>
                    </div>
                </div>
                <div id="filter-chat-list-row">
                    <input id="conversation-search" placeholder="Search all conversations" />
                    <SearchButton />
                </div>
            </div>

            <div id="chat-list-main">
                <ChatListItem />
                <ChatListItem />
                <ChatListItem />
            </div>
        </section>
    )
}

export default ChatList;