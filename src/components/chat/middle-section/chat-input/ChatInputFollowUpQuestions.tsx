import FollowUpQuestion from "../elements/FollowUpQuestion";
import React, { useState, useEffect, useRef } from 'react';

const ChatInputFollowUpQuestions = () => {
    const [elementHeight, setElementHeight] = useState(90);
    const elementRef = useRef<HTMLDivElement>(null);

    const updateHeight = () => {
        if (elementRef.current) {
            setElementHeight(elementRef.current.clientHeight);
            console.log("Setting height to", elementRef.current.clientHeight);
        }
    };

    useEffect(() => {
        const handleResize = () => {
            updateHeight();
        };

        window.addEventListener('resize', handleResize);

        // Initial height set
        updateHeight();

        // ResizeObserver to detect changes in element size
        const resizeObserver = new ResizeObserver(() => {
            updateHeight();
        });

        if (elementRef.current) {
            resizeObserver.observe(elementRef.current);
        }

        // Cleanup event listeners and observers
        return () => {
            window.removeEventListener('resize', handleResize);
            if (elementRef.current) {
                resizeObserver.unobserve(elementRef.current);
            }
        };
    }, []);

    return (
        <div id="follow-up-questions-section" ref={elementRef} style={{ top: `-${elementHeight}px` }}>
            <FollowUpQuestion questionContent="Ajahn Brahm is the VERY BEST. No question..." />
            <FollowUpQuestion questionContent="Ajahn Brahm is the VERY BEST. Indeed" />
            <FollowUpQuestion questionContent="Ajahn Brahm is the VERY BEST. No question..." />
            <FollowUpQuestion questionContent="Ajahn Brahm is the VERY BEST. " />
        </div>
    );
}

export default ChatInputFollowUpQuestions;