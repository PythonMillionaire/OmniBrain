import React, { useState, useRef } from 'react';
import Tooltip from "./Tooltip";

interface CheckboxProps {
    text: string;
    tooltipText?: string;
}

const Checkbox: React.FC<CheckboxProps> = ({ text, tooltipText }) => {
    const [isHovered, setIsHovered] = useState(false);
    const parentRef = useRef<HTMLLabelElement>(null); // Ref for the label

    return (
        <label className="checkbox-field"
               onMouseEnter={() => setIsHovered(true)}
               onMouseLeave={() => setIsHovered(false)}>
            {tooltipText && (
                <Tooltip
                    text={tooltipText}
                    visible={isHovered}
                    parentRef={parentRef} // Pass the ref to Tooltip
                />
            )}
            <input type="checkbox"/>
            <span ref={parentRef} className="checkbox-label">{text}</span>
        </label>
    );
}

export default Checkbox;