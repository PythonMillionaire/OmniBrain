import React from 'react';

import {ButtonPosition} from '../../types/enums';

interface CollapseButtonProps {
    isVisible: boolean;
    visibilitySetter: React.Dispatch<React.SetStateAction<boolean>>;
    referenceToCollapsedElement: React.RefObject<HTMLElement>;
    buttonPosition: ButtonPosition;
    id: string;
}

const CollapseButton: React.FC<CollapseButtonProps> = (
    {
        isVisible,
        visibilitySetter,
        referenceToCollapsedElement,
        buttonPosition,
        id
    }) => {
    const getArrowStyle = () => {
        switch (buttonPosition) {
            case ButtonPosition.top:
                return {
                    transform: `translate(-50%, 0%) ${isVisible ? 'rotate(180deg)' : 'rotate(0deg)'}`,
                    top: '0',
                    left: '50%',
                    };

            case ButtonPosition.bottom:
                return {
                    transform: `translate(50%, -50%) ${isVisible ? 'rotate(0deg)' : 'rotate(180deg)'}`,
                    bottom: '0',
                    right: '50%',
                };

            case ButtonPosition.left:
                return {
                    transform: `translate(0%, -50%) ${isVisible ? 'rotate(90deg)' : 'rotate(270deg)'}`,
                    right: '0',
                    top: '50%',
                };

            case ButtonPosition.right:
                return {
                    transform: `translate(-50%, -50%) ${isVisible ? 'rotate(-90deg)' : 'rotate(90deg)'}`,
                    left: '0',
                    top: '50%',
                };

            default:
                return {};
    }
};

    function toggleVisibility() {
        visibilitySetter(!isVisible);

        referenceToCollapsedElement.current?.classList.toggle('collapsed');
    }

    return (
        <div
            id={id}
            className="button collapse-button"
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                ...getArrowStyle(), // Apply the dynamic style
            } }
            onClick={toggleVisibility}
        >
            {/* Use a generic arrow that you'll rotate */}
            <span>▼</span>
        </div>
    );
};

export default CollapseButton;
