import React, { useState } from 'react';

interface SliderProps {
    step?: number,
    min?: number,
    max?: number,
    labelText: string,
    id: string,
    classes?: string
}

const Slider: React.FC<SliderProps> = ({ step = 1, min= 1, max= 5, labelText, id, classes }) => {
    // Initialize the slider value state
    const [value, setValue] = useState(max); // Default value set to 50

    // Function to handle slider value change
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(Number(event.target.value));
    };

    return (
        <div className={`${classes}`} id={id}>
            <label>{labelText}</label>
            <div id="chat-response-detail">
                <input
                    type="range"
                    step={step}
                    min={min}
                    max={max}
                    value={value}
                    onChange={handleChange}
                    style={{ padding: 0 }}
                />
            </div>
        </div>
    );
}

export default Slider;
