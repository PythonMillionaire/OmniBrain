import React, { useState } from 'react';

import ChatListItem from "./ChatListItem";
import SearchButton from "../../general/SearchButton";
import AddElementButton from "../../general/AddElementButton";

import arrowIcon from "../../../assets/images/arrow.svg";

// Assuming each ChatListItem can be identified uniquely, for example, by an id
const chatListData = [
    { id: 1, name: "ChatGPT 5", date: "April 5, 2024", title: "Conversation name", description: "Last message sent or description testing testing testing..." },
    { id: 2, name: "ChatGPT 6", date: "April 6, 2024", title: "Another conversation name", description: "Another last message..." },
    // Add more items as needed
];

const ChatList: React.FC = () => {
    // State to keep track of the selected chat list item
    const [selectedId, setSelectedId] = useState<number | null>(null);

    // Handler to update the selectedId state
    const handleSelectItem = (id: number) => {
        setSelectedId(id);
    };

    return (
        <section id="chat-list">
            <div id="add-new-chat-section"><AddElementButton text={"Start new chat"} type={"chat"}/></div>

            <div id="chat-list-top">
                <div id="filter-chat-list-row">
                    <input id="conversation-search" placeholder="Search all conversations"/>
                    <SearchButton/>
                    <div id="filter-chat-list-advanced-options">
                        <div className="button" id="filter-chat-list-filter">Filter</div>
                        <div className="button" id="filter-chat-list-advanced-search">Advanced search</div>
                    </div>
                </div>
            </div>



            <div id="chat-list-main">
                <div id="chat-list-open-chats">
                    {chatListData.map((item) => (
                        <ChatListItem
                            key={item.id}
                            id={item.id}
                            isSelected={selectedId === item.id}
                            onSelect={() => handleSelectItem(item.id)}
                            name={item.name}
                            date={item.date}
                        />
                    ))}
                </div>

                <div className="button" id="chat-list-see-all">
                    <img src={arrowIcon} alt={"See all chats"} />
                    <div>See all chats</div>
                </div>
            </div>
        </section>
    );
}

export default ChatList;
