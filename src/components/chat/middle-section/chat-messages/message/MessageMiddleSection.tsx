import React, { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';
import lodash from 'lodash';

interface MessageMiddleSectionProps {
    sender: string;
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

    return (
        <>
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
        </>
    )
}

export default MessageMiddleSection;