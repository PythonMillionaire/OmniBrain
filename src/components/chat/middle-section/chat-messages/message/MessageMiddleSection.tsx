import React, { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';
import lodash from 'lodash';
import MessageSender from "../../../../../types/messages/MessageSender";
import {MessageSenderType} from "../../../../../types/enums";

import showFullResponse from '../../../../../assets/images/circle-arrow.svg';

interface MessageMiddleSectionProps {
    sender: MessageSender;
    messageContents: string;
    actionButtons: React.ReactNode;
    onShowSideButtonsChange: (isVisible: boolean) => void; // New callback prop
}

const MessageMiddleSection: React.FC<MessageMiddleSectionProps> = ({
                                                                       sender,
                                                                       messageContents,
                                                                       actionButtons,
                                                                       onShowSideButtonsChange
                                                                   }) => {
    const chatMessageRef = useRef<HTMLDivElement>(null);
    const sideButtonsRef = useRef<HTMLDivElement>(null);
    const [showSideButtons, setShowSideButtons] = useState(true);
    const [truncateText, setTruncateText] = useState(true);

    const checkAndSetButtonVisibility = useCallback(() => {
        const messageContainer = chatMessageRef.current;
        const sideButtons = sideButtonsRef.current;

        if (messageContainer && sideButtons) {
            const isVisible = messageContainer.offsetHeight > sideButtons.offsetHeight;
            setShowSideButtons(isVisible);
            onShowSideButtonsChange(isVisible); // Call the parent callback
        }
    }, [onShowSideButtonsChange]);

    // using lodash's debounce function to limit how often the checkAndSetButtonVisibility function can be invoked
    const debouncedCheck = useCallback(lodash.debounce(checkAndSetButtonVisibility, 20), [checkAndSetButtonVisibility]);

    // handle resize events
    useLayoutEffect(() => {
        window.addEventListener('resize', debouncedCheck);
        checkAndSetButtonVisibility(); // Initial check for the correct state

        return () => {
            window.removeEventListener('resize', debouncedCheck);
            debouncedCheck.cancel(); // Cancel any pending execution of the throttled function on cleanup
        };
    }, [debouncedCheck, checkAndSetButtonVisibility]);

    // call it initially
    useEffect(() => {
        const handleLoad = () => {
            checkAndSetButtonVisibility();
        };

        window.addEventListener('load', handleLoad);

        // ensure the function runs if the component mounts after the window has already loaded
        if (document.readyState === 'complete') {
            checkAndSetButtonVisibility();
        }

        return () => {
            window.removeEventListener('load', handleLoad);
        };
    }, [checkAndSetButtonVisibility]);


    const maxCharsBeforeTruncating = MessageSenderType.user === sender.type ? 200 : 2400;
    const isAboveThreshold = messageContents.length > maxCharsBeforeTruncating; // check if text is below

    // check if text is longer than minimum threshold and truncate if it is
    useEffect(() => {
        if (isAboveThreshold) {
            setTruncateText(true);
        } else {
            setTruncateText(false);
        }
    }, [messageContents]);

    // function to set truncated text to visible when the button below is clicked on
    const handleShowTruncatedText = () => {
        setTruncateText(!truncateText);
    };

    return (
        <>
            <div className="chat-message-select-checkbox">
                <label className="button checkbox-field">
                    <input type="checkbox"/>
                </label>
            </div>

            <div className="chat-message-wrapper">
                <div ref={chatMessageRef} className={`chat-message ${sender.type.toLowerCase()}-message`}>
                    <div className={`chat-message-contents`}>
                        <div className={`chat-message-contents-text${truncateText ? ' truncated' : ''}`}>
                            {messageContents}
                        </div>
                        <div className="button chat-message-show-truncated-contents"  style={{ display: isAboveThreshold ? 'flex' : 'none' }} onClick={handleShowTruncatedText}>
                            <img src={showFullResponse} alt="Show full response" className={"chat-message-show-truncated-contents-icon"} style={{ transform: !truncateText ? 'rotate(180deg)' : ''}}/>
                            { truncateText ? 'Show full response' : 'Collapse response' }
                        </div>
                    </div>
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
        </>
    )
}

export default MessageMiddleSection;