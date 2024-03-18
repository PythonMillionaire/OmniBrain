import React from 'react';

interface TooltipProps {
    text: string;
    visible: boolean; // Add a visible prop
}

const Tooltip: React.FC<TooltipProps> = ({text, visible}) => {
    // No need for internal state now, use the prop for visibility
    return (
        <div className="custom-tooltip" style={{visibility: visible ? "visible" : "hidden"}}>
            {text}
        </div>
    )
}

export default Tooltip;
