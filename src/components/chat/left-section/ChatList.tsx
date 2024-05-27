import React, { useState } from 'react';

import ChatListItem from "./ChatListItem";

import archiveIcon from "../../../assets/images/archive.svg";

import CustomScrollbar from "../../general/CustomScrollbar";

// Assuming each ChatListItem can be identified uniquely, for example, by an id
const chatListData = [
    { id: 1, name: "ChatGPT 5", date: "April 5, 2024", title: "Conversation name", description: "Last message sent or description testing testing testing..." },
    { id: 2, name: "ChatGPT 6", date: "April 6, 2024", title: "Another conversation name", description: "Another last message..." },
    { id: 3, name: "ChatGPT 7", date: "April 7, 2024", title: "Another conversation name", description: "Another message..." },
    { id: 4, name: "ChatGPT 7", date: "April 7, 2024", title: "Another conversation name", description: "Another message..." },
    { id: 5, name: "ChatGPT 7", date: "April 7, 2024", title: "Another conversation name", description: "Another message..." },
    { id: 6, name: "ChatGPT 7", date: "April 7, 2024", title: "Another conversation name", description: "Another message..." },
    { id: 7, name: "ChatGPT 7", date: "April 7, 2024", title: "Another conversation name", description: "Another message..." },
    { id: 8, name: "ChatGPT 7", date: "April 7, 2024", title: "Another conversation name", description: "Another message..." },
    { id: 9, name: "ChatGPT 7", date: "April 7, 2024", title: "Another conversation name", description: "Another message..." },
];

const ChatList = () => {
    // State to keep track of the selected chat list item
    const [selectedId, setSelectedId] = useState<number | null>(null);

    // Handler to update the selectedId state
    const handleSelectItem = (id: number) => {
        setSelectedId(id);
    };

    return (
        <section id="chat-list">
            <div id="chat-list-main">
                <CustomScrollbar>
                    <div id="chat-list-open-chats">
                        {chatListData.map((item, index) => (
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
                </CustomScrollbar>

                <div className="button" id="chat-list-see-all">
                    <img src={archiveIcon} alt={"See all chats"}/>
                    <div>See all chats</div>
                </div>
            </div>

        </section>
    );
}

export default ChatList;
