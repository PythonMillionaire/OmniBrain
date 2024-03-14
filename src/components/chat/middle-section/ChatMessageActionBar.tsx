import React from 'react';

const ChatMessageActionBar: React.FC = () => {
    return (
        <section id="chat-message-action-bar">
            <div id="chat-menu">
                <div id="export-import">Export/import</div>
                <div id="editor-settings">Chat settings</div>
            </div>
            <div id="chat-filter-search">
                <div id="chat-message-filters">
                    <input id="filter-chat-tag-section"/>
                    <div className="chat-tag-filter">Tag name <div className="chat-tag-delete" style={{opacity: 0}}>X</div>
                    </div>

                </div>
                <div id="chat-message-search-section">
                    <input id="filter-chat-search-section" placeholder="Search messages"/>
                    <div>
                        <svg className="search-icon" fill="#555" height="20px" viewBox="0 0 490.4 490.4" width="20px"
                            xmlns="http://www.w3.org/2000/svg">
                      <g>
                      <path d="M484.1,454.796l-110.5-110.6c29.8-36.3,47.6-82.8,47.6-133.4c0-116.3-94.3-210.6-210.6-210.6S0,94.496,0,210.796
                                          s94.3,210.6,210.6,210.6c50.8,0,97.4-18,133.8-48l110.5,110.5c12.9,11.8,25,4.2,29.2,0C492.5,475.596,492.5,463.096,484.1,454.796z
                                           M41.1,210.796c0-93.6,75.9-169.5,169.5-169.5s169.6,75.9,169.6,169.5s-75.9,169.5-169.5,169.5S41.1,304.396,41.1,210.796z"></path>
                      </g>
                    </svg>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default ChatMessageActionBar;
