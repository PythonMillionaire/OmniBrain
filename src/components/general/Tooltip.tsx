import React, { useEffect, useState, useRef } from 'react';
import ReactDOM from 'react-dom';

interface TooltipProps {
    text: string;
    visible: boolean;
    parentRef?: React.RefObject<HTMLElement>;
}

const Tooltip: React.FC<TooltipProps> = ({ text, visible, parentRef }) => {
    const [position, setPosition] = useState({ top: 0, left: 0 });
    const [isPositioned, setIsPositioned] = useState(false); // State to track if the position has been set
    const tooltipRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const updatePosition = () => {
            if (parentRef?.current && tooltipRef.current) {
                const rect = parentRef.current.getBoundingClientRect();
                const tooltipHeight = tooltipRef.current.offsetHeight;

                setPosition({
                    top: rect.bottom + window.scrollY - tooltipHeight - 26,
                    left: rect.left + window.scrollX + rect.width / 2,
                });
                setIsPositioned(true); // Mark as positioned once the position is set
            }
        };

        if (visible) {
            // Initially mark as not positioned
            setIsPositioned(false);
            requestAnimationFrame(updatePosition);
            window.addEventListener('resize', updatePosition);
        }

        return () => {
            window.removeEventListener('resize', updatePosition);
            // Reset positioned state when the tooltip hides
            if (!visible) {
                setIsPositioned(false);
            }
        };
    }, [visible, parentRef]);

    if (!visible) return null;

    const style: React.CSSProperties = {
        visibility: isPositioned ? 'visible' : 'hidden', // Only show the tooltip after positioning
        zIndex: 1000,
        top: `${position.top}px`,
        left: `${position.left}px`,
    };

    const portalRoot = document.getElementById('portal-root');
    if (portalRoot !== null) {
        return ReactDOM.createPortal(
            <div ref={tooltipRef} className="custom-tooltip" style={style}>
                {text}
            </div>,
            portalRoot
        );
    } else {
        // Handle the case where the portal root isn't found
        // This could be a fallback rendering, an error, or even a no-op
        console.error("Portal root not found");
        return null;
    }
};

export default Tooltip;
