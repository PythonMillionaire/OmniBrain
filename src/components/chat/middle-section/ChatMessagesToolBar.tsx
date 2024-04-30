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
import shareChatIcon from "../../../assets/images/share.svg";
import exportImportIcon from "../../../assets/images/export-import.svg";
import settingsIcon from "../../../assets/images/settings.svg";
import Tag from "../../general/Tag";
import AddElementButton from "../../general/AddElementButton";

const ChatThreadTab: React.FC<{ id: string; }> = ({ id }) => {
    return (
        <div id={`chat-thread-tab-${id}`} className="button chat-thread-tab">
            <span>Thread</span> <i>{id}</i>
            <div className="button chat-page-thread-tab-delete">X</div>
        </div>
    );
}

const ChatPageTab: React.FC<{ current: number; }> = ({ current }) => {
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
        { id: '7', type: 'page', content: <ChatPageTab current={7} /> }
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
                    <div id="share-chat" className={"button"}><img src={shareChatIcon} alt="Share"/>Share</div>
                    <div id="export-import" className={"button"}><img src={exportImportIcon} alt="Export/Import"/>Export/import</div>
                    <div id="editor-settings" className={"button"}><img src={settingsIcon} alt="Settings"/>Chat settings</div>
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
                <div id="chat-pages-menu">
                    <div id="previous-page" className={"button"}><span>←</span> Previous</div>
                    <div id="chat-page-number">
                        <b>1</b> <i>of</i> <b>13</b> <i>pages</i>
                    </div>
                    <div id="next-page" className={"button"}>Next <span>→</span></div>
                    <div id="create-new-page" className={"button"}><AddElementButton text={"Create new page"} type={"page"}/></div>
                </div>
                <DragDropContext onDragEnd={handleOnDragEnd}>
                    <Droppable droppableId="tabs" direction={"horizontal"}>
                        {(provided: DroppableProvided) => (
                            <div {...provided.droppableProps} ref={provided.innerRef}
                                 id="chat-page-and-thread-tabs-section">
                                <div id={`chat-page-tab-1`} className="button chat-page-tab chat-main-page">
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
            </div>
        </section>
    );
};

export default ChatMessagesToolBar;