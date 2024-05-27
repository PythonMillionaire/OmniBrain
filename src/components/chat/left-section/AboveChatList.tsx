import React, { useState } from 'react';

import SearchButton from "../../general/SearchButton";

import filterIcon from "../../../assets/images/filter.svg";
import advancedSearchIcon from "../../../assets/images/advanced-search.svg";


const NewChatIcon: React.FC = () => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 256 256"
            xmlSpace="preserve"
        >
            <defs>
                <style>{`.st0{fill:hsl(226 100% 66% / 1);}.st1{fill:rgba(0,0,0,0.75);}`}</style>
            </defs>
            <g>
                <g id="XMLID_2_">
                    <g>
                        <path
                            className="st1"
                            d="M257,57c0,5.3,0,10.7,0,16c-1.7,5.5-2.9,11.2-5.1,16.6c-11.6,28.4-42.1,44.5-71.9,38.1c-30.3-6.4-51.4-33-51-64.1c0.4-30.1,22.8-56.3,52.7-61.6c1.1-0.2,2.2-0.7,3.3-1c5.3,0,10.7,0,16,0c0.9,0.3,1.8,0.8,2.8,0.9c26.1,5.3,42.9,20.8,50.9,46C255.6,50.9,256.2,54,257,57z M193.2,113c26.2-0.1,47.9-21.6,47.8-47.6c0-27.2-21.4-48.4-48.6-48.4c-25.9,0-47.4,21.9-47.4,48.2C145.1,91.6,166.7,113.1,193.2,113z"
                        />
                        <path
                            className="st1"
                            d="M209,154.6c0.1,7.5,0.1,15,0,22.5c-0.3,18-14.2,31.8-32.3,31.9c-24.2,0.1-48.3-0.1-72.5,0.1c-2.5,0-5.5,1.2-7.5,2.8C79,226.8,61.5,241.9,44,257c-2,0-4,0-6,0c-4-2.8-5.3-6.7-5.1-11.6c0.3-5.8,0.1-11.6,0.1-17.5c0-6.3,0-12.5,0-18.8c-12.2-0.9-21.4-5.8-27.4-15.8c-1.9-3.2-3.1-6.9-4.6-10.3c0-36,0-72,0-108c1.2-2.9,2.1-5.9,3.6-8.6c6-11,15.3-17.1,27.8-17.3c23.7-0.3,47.3-0.1,71-0.1c5.9,0,9.5,3,9.6,7.9c0.1,4.9-3.7,8.1-9.9,8.1c-22.7,0-45.3,0-68,0C23.2,65,17,71.3,17,83.2c0,30.5,0,61,0,91.5c0,12,6.2,18.2,18.1,18.3c1.7,0,3.3,0,5,0c5.8,0.2,8.8,3.1,8.9,9c0.1,9.3,0.1,18.7,0.2,28c0,0.1,0.2,0.2,0.7,0.8c8.4-7.2,16.8-14.3,25.2-21.5c5.1-4.3,9.9-8.9,15.3-12.8c2.5-1.8,5.9-3.3,8.9-3.3c25.3-0.3,50.7-0.1,76-0.1c11.2,0,17.7-6.5,17.7-17.6c0-6.8,0-13.7,0-20.5c0-6.2,3.1-9.9,8.1-9.9C205.9,145.1,208.9,148.7,209,154.6z"
                        />
                    </g>
                </g>
                <g id="XMLID_1_">
                    <g>
                        <path
                            className="st0"
                            d="M225,64.9c0,4.9-3.5,7.9-9.4,8c-4.5,0.1-9,0.1-13.5,0.2c-0.2,0-0.3,0.1-1.1,0.5c0,4.4,0,9.2,0,14c-0.1,5.9-3.1,9.4-8,9.4c-4.9,0-7.9-3.6-7.9-9.5c0-4.6,0-9.3,0-14.5c-5.1,0-9.9,0.1-14.7,0c-5.8-0.1-9.4-3.3-9.3-8.2c0.1-4.7,3.6-7.7,9.1-7.8c4.7-0.1,9.3-0.1,14-0.2c0.1,0,0.2-0.2,0.9-0.8c0-4.3-0.1-9.1,0-13.9c0.1-5.5,3.1-9,7.8-9.1c4.9-0.1,8.1,3.5,8.2,9.3c0.1,4.7,0,9.3,0,14.7c4.9,0,9.7,0,14.5,0C221.4,57.1,224.9,60.1,225,64.9z"
                        />
                    </g>
                </g>
            </g>
        </svg>
    );
};


const AboveChatList = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleDropdown = () => setIsOpen(!isOpen);

    return (
        <>
            <section id="start-new-chat-section">
                <div id={"start-new-chat-button"} className={"button"}>
                    <span>
                        <NewChatIcon/>
                        <div>Start a new chat</div>
                    </span>
                </div>
            </section>

            <section id="chat-list-top">
                <div id="filter-chat-list-row">
                    <input id="conversation-search" placeholder="Search all conversations"/>
                    <SearchButton/>
                    <div id="filter-chat-list-advanced-options">
                        <div className="button" id="filter-chat-list-filter">
                            <img id="filter-chats-icon" src={filterIcon}/>
                            Filter
                        </div>
                        <div className="button" id="filter-chat-list-advanced-search">
                            <img id="advanced-search-chats-icon" src={advancedSearchIcon}/>
                            Advanced search
                        </div>
                    </div>
                </div>

                <div id="filter-chat-list-by-project">
                    <div id="filter-chat-list-by-project-title" onClick={toggleDropdown}>
                        <span className={"dropdown-text"}>All projects</span>
                        <span className={"dropdown-arrow"}>▼</span>
                    </div>
                    {isOpen && (
                        <ul className="dropdown-menu">
                            <li>Project 1</li>
                            <li>Project 2</li>
                            <li>Project 3</li>
                            <li>Project 4</li>
                        </ul>
                    )}
                </div>
            </section>
        </>
)
    ;
}

export default AboveChatList;
