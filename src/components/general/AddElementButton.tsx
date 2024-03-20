import React from 'react';

interface AddElementButtonProps {
    text?: string;
    type: string;
}

const AddElementButton: React.FC<AddElementButtonProps> = ({text, type}) => {

    return (
        <div className="button add-new" id={`add-new-${type}-button`}>
            <div className="add-new-circle">+</div>
            {
                text && <div className={`add-new-${type}-text`}>{text}</div>
            }
        </div>
    )
}

export default AddElementButton;