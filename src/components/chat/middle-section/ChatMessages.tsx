import React from 'react';

const ChatMessagesSection: React.FC = () => {
    return (
        <section id="chat-messages-section">
            <div className="chat-message-user-outer-container">
                <div className="chat-message-info">
                    <div className="chat-message-info-sender">User</div>
                </div>

                <div className="chat-message-inner-container">
                    <div className="chat-message-select-checkbox">
                        <label className="checkbox-field">
                            <input type="checkbox"/>
                            <span>
                      <br/>
                    </span>
                        </label>
                    </div>

                    <div className="chat-message-wrapper">
                        <div className="chat-message user-msg">
                            <div className="message-contents">This is a test message. Ajahn Brahm is the very best! You
                                are so FUCKING
                                LUCKY, you better start fucking PRACTICING!!!!!<br/>This is a test message. Ajahn Brahm
                                    is the very best! You are so FUCKING
                                    LUCKY, you better start fucking PRACTICING!!!!!<br/>This is a test message. Ajahn
                                        Brahm is the very best! You are so FUCKING
                                        LUCKY, you better start fucking PRACTICING!!!!!
                            </div>
                        </div>
                    </div>

                    <div className="chat-message-buttons-side">
                        <a className="button" href="#">_ <br/>
                        </a>
                        <a className="button" href="#">_ <br/>
                        </a>
                        <a className="button" href="#">_ <br/>
                        </a>
                    </div>


                    <div className="chat-message-action-buttons">
                        <div className="chat-message-tag">
                            <div className="chat-tag">Tag name <div className="chat-tag-delete"
                                                                    style={{opacity:0}}>X</div>
                            </div>
                        </div>
                        <div className="chat-message-buttons-bottom">
                            <a className="button" href="#">_ <br/>
                            </a>
                            <a className="button" href="#">_ <br/>
                            </a>
                            <a className="button" href="#">_ <br/>
                            </a>
                        </div>
                    </div>

                    <div className="chat-message-thread-info">
                        <div className="replies-info">
                            <div className="replies-counter">8 replies</div>
                            <div className="last-thread-interaction">Last
                                interaction: <span>3 days and 12 hours ago</span></div>
                        </div>
                        <div className="view-thread">View thread</div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default ChatMessagesSection;
