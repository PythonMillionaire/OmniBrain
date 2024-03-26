import React, { useLayoutEffect, useEffect, useRef, useState, useCallback } from "react";
import lodash from 'lodash';

import aiLogo from "../../../../assets/images/ai-providers/logo-chatgpt.svg";
import userAvatar from '../../../../assets/images/user-avatar.svg';
import {MessageSender} from "../../../../types/enums";
import AddElementButton from "../../../general/AddElementButton";

import Tag from "../../../general/Tag";

interface MessageProps {
    sender: MessageSender;
    messageContents: string;
    actionButtons: React.ReactNode;
    children?: React.ReactNode;
}

const Message: React.FC<MessageProps> = ({ sender, messageContents, actionButtons, children }) => {
    const chatMessageRef = useRef<HTMLDivElement>(null);
    const sideButtonsRef = useRef<HTMLDivElement>(null);
    const [showSideButtons, setShowSideButtons] = useState(true);

    const checkAndSetButtonVisibility = useCallback(() => {
        const messageContainer = chatMessageRef.current;
        const sideButtons = sideButtonsRef.current;

        if (messageContainer && sideButtons) {
            setShowSideButtons(messageContainer.offsetHeight > sideButtons.offsetHeight);
        }
    }, []);

    // Using lodash's throttle function to limit how often the checkAndSetButtonVisibility function can be invoked
    const debouncedCheck = useCallback(lodash.debounce(checkAndSetButtonVisibility, 30), [checkAndSetButtonVisibility]);

    useLayoutEffect(() => {
        window.addEventListener('resize', debouncedCheck);
        checkAndSetButtonVisibility(); // Initial check for the correct state

        return () => {
            window.removeEventListener('resize', debouncedCheck);
            debouncedCheck.cancel(); // Cancel any pending execution of the throttled function on cleanup
        };
    }, [debouncedCheck, checkAndSetButtonVisibility]);

    useEffect(() => {
        const handleLoad = () => {
            checkAndSetButtonVisibility();
        };

        window.addEventListener('load', handleLoad);

        // Ensure the function runs if the component mounts after the window has already loaded
        if (document.readyState === 'complete') {
            checkAndSetButtonVisibility();
        }

        return () => {
            window.removeEventListener('load', handleLoad);
        };
    }, [checkAndSetButtonVisibility]);


    return (
        <div className={`chat-message-outer-container ${sender.toLowerCase()}`}>
            <div className="chat-message-inner-container">
                <div className="chat-message-info">
                    {sender === MessageSender.Agent ? (
                        <div className="chat-list-item-ai-model-logo-message">
                            <img className={"message-avatar"} src={aiLogo} alt="AI Model Logo" />
                        </div>
                    ) : (
                        <div className="account-avatar-message">
                            <img className={"message-avatar"} src={userAvatar} alt="User avatar" />
                        </div>
                    )}
                    <div className="chat-message-info-sender">{sender}</div>
                </div>

                <div className="chat-message-select-checkbox">
                    <label className="button checkbox-field">
                        <input type="checkbox"/>
                    </label>
                </div>

                <div className="chat-message-wrapper">
                    <div ref={chatMessageRef} className={`chat-message ${sender.toLowerCase()}-message`}>
                        <div className="chat-message-contents">{messageContents}</div>
                    </div>
                </div>

                <div className="chat-message-buttons-side-outer">
                    <div
                        ref={sideButtonsRef}
                        className={`chat-message-buttons-side ${showSideButtons ? 'visible' : ''}`}
                    >
                        {actionButtons}
                    </div>
                </div>


                <div className="chat-message-bottom">
                    {children}

                    <div className="chat-message-action-row">
                        <div className="chat-message-tag-list">
                            <Tag tagName={'Tag name'}/>

                            <AddElementButton type={"new-tag-message"}/>
                        </div>

                        <div className="chat-message-buttons-bottom">
                            {actionButtons}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Message;