import React from 'react';

interface AddElementButtonProps {
    tagName: string;
    className?: string;
}

const Tag: React.FC<AddElementButtonProps> = ({className= 'chat-tag', tagName}) => {
    return (
            <div className={`tag-border`}>
                <div className={`tag ${className}`}>
                    { tagName }
                    <div className="button chat-tag-delete">X</div>
                </div>
            </div>
    )
}

export default Tag;