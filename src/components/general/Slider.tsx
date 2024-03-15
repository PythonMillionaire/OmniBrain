import React, { useState } from 'react';

function Slider() {
    // Initialize the slider value state
    const [value, setValue] = useState(50); // Default value set to 50

    // Function to handle slider value change
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(Number(event.target.value));
    };

    return (
        <div>
            <input
                type="range"
                min="0"     // Minimum value
                max="5"   // Maximum value
                value={value} // Current value
                onChange={handleChange} // Function to call when value changes
            />
        </div>
    );
}

export default Slider;
