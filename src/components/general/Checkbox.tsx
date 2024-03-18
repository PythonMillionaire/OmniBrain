import React, { useState } from 'react';
import Tooltip from "./Tooltip";

interface CheckboxProps {
    text: string;
    tooltipText?: string;
}

const Checkbox: React.FC<CheckboxProps> = ({text, tooltipText}) => {
    // Manage hover state in the parent
    const [isHovered, setIsHovered] = useState(false);

    return (
        // Use mouse enter and leave events on the parent element
        <label className="checkbox-field"
               onMouseEnter={() => setIsHovered(true)}
               onMouseLeave={() => setIsHovered(false)}>
            {tooltipText && <Tooltip text={tooltipText} visible={isHovered}/>}
            <input type="checkbox"/>
            <span className="checkbox-label">{text}</span>
        </label>
    )
}

export default Checkbox;
