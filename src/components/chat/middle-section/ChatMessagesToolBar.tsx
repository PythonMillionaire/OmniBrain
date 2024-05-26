import React, { useState } from 'react';
import {
    DragDropContext,
    Droppable,
    Draggable,
    DropResult,
    DroppableProvided,
    DraggableProvided
} from 'react-beautiful-dnd';

import SearchButton from "../../general/SearchButton";
import shareChatIcon from "../../../assets/images/action-buttons/share.svg";
import exportImportIcon from "../../../assets/images/export-import.svg";
import settingsIcon from "../../../assets/images/settings.svg";
import Tag from "../../general/Tag";
import AddElementButton from "../../general/AddElementButton";

import pageNavigationArrow from "../../../assets/images/next-page.svg";
import CustomScrollbar from "../../general/CustomScrollbar";

const ChatThreadTab: React.FC<{ id: string; }> = ({ id }) => {
    return (
        <div id={`chat-thread-tab-${id}`} className="button chat-thread-tab">
            <span>Thread</span> <i>{id}</i>
            <div className="button chat-page-thread-tab-delete">X</div>
        </div>
    );
}

const ChatPageTab: React.FC<{ current: string; }> = ({ current }) => {
    return (
        <div id={`chat-page-tab-${current}`} className="button chat-page-tab">
            <span>Page</span> <i>{current}</i>
            <div className="button chat-page-thread-tab-delete">X</div>
        </div>
    );
}


const ChatMessagesToolBar: React.FC = () => {
    const [tabs, setTabs] = useState([
        { id: 'P3-45', type: 'thread', content: <ChatThreadTab id="P3-45" /> },
        { id: '7', type: 'page', content: <ChatPageTab current={"OmniBrain - 7"} /> },
        { id: '8', type: 'page', content: <ChatPageTab current={"Happiness Hub - 11"} /> },
        { id: '9', type: 'page', content: <ChatPageTab current={"Happiness Hub - 15"} /> },
        { id: '10', type: 'page', content: <ChatPageTab current={"Happiness Hub - 29"} /> },
        { id: '11', type: 'page', content: <ChatPageTab current={"OmniBrain - 55"} /> }
    ]);

    const handleOnDragEnd = (result: DropResult) => {
        if (!result.destination) return; // if dropped outside the list

        const items = Array.from(tabs);
        const [reorderedItem] = items.splice(result.source.index, 1);
        items.splice(result.destination.index, 0, reorderedItem);

        // Ensure that the main page tab always stays first
        const mainTabIndex = items.findIndex(item => item.id === 'main');
        if (mainTabIndex > 0) {
            const mainTab = items.splice(mainTabIndex, 1)[0]; // safely extract the main tab
            items.unshift(mainTab); // reinsert at the beginning
        }

        setTabs(items);
    };

    return (
        <section id="chat-messages-tool-bar">
            <div id="chat-message-tool-bar-top">
                <div id="chat-menu">
                    <div id="share-chat" className={"button chat-menu-button"}><img src={shareChatIcon} alt="Share"/>Share</div>
                    <div id="export-import" className={"button chat-menu-button"}><img src={exportImportIcon} alt="Export/Import"/>Export/import</div>
                    <div id="editor-settings" className={"button chat-menu-button"}><img src={settingsIcon} alt="Settings"/>Current chat's settings</div>
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
                <div className={"left"}>
                    <div id="chat-pages-menu">
                        <div id="previous-page" className={"button"}><img className={"page-navigation-arrow"}
                                                                          src={pageNavigationArrow}
                                                                          alt="Previous page"/> Previous
                        </div>
                        <div id="chat-page-number">
                            <input id={"chat-page-number-input-field"} maxLength={3}/><i>of</i> <b>13</b> <i>pages</i>
                        </div>
                        <div id="next-page" className={"button"}>Next <img className={"page-navigation-arrow"}
                                                                           src={pageNavigationArrow} alt="Next page"/>
                        </div>
                        <div id="create-new-page" className={"button"}><AddElementButton text={"Create new page"}
                                                                                         type={"page"}/></div>
                    </div>
                </div>
                <div className={"right"}>
                    <CustomScrollbar>
                        <DragDropContext onDragEnd={handleOnDragEnd}>
                            <Droppable droppableId="tabs" direction={"horizontal"}>
                                {(provided: DroppableProvided) => (
                                    <div {...provided.droppableProps} ref={provided.innerRef}
                                         id="chat-page-and-thread-tabs-section">
                                        <div id={`chat-page-tab-1`} className="button chat-page-tab chat-main-page selected">
                                            <span>Page</span> <i>1</i>
                                        </div>

                                        {tabs.map((tab, index) => (
                                            <Draggable
                                                key={tab.id}
                                                draggableId={`chat-${tab.type === 'page' ? 'page' : tab.type === 'thread' ? 'thread' : 'main'}-tab-${tab.id}`}
                                                index={index}>
                                                {(provided: DraggableProvided) => {
                                                    let transform = provided.draggableProps.style?.transform;
                                                    if (transform) {
                                                        transform = transform.replace(/,\s*[-+]?[\d]+px\)/, ", 0px)");
                                                    }
                                                    const style = transform ? {
                                                        ...provided.draggableProps.style,
                                                        transform
                                                    } : provided.draggableProps.style;

                                                    return (
                                                        <div
                                                            ref={provided.innerRef}
                                                            {...provided.draggableProps}
                                                            {...provided.dragHandleProps}
                                                            style={style}>
                                                            {tab.content}
                                                        </div>
                                                    );
                                                }}
                                            </Draggable>
                                        ))}
                                        {provided.placeholder}
                                    </div>
                                )}
                            </Droppable>
                        </DragDropContext>
                    </CustomScrollbar>
                </div>
            </div>
        </section>
    );
};

export default ChatMessagesToolBar;