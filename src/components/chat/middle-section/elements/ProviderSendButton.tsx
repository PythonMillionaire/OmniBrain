import React from "react";
import {IconProp} from "../../../../types/IconProp";

interface ProviderSendButtonProps {
    providerName: string;
    providerIcon?: IconProp;
}

const ProviderSendButton: React.FC<ProviderSendButtonProps> = ({ providerName, providerIcon }) => {
    return (
        <div className="button provider-button">
            {providerIcon &&
                (typeof providerIcon === 'string' ? (
                    <img src={providerIcon} alt="User uploaded icon" className="provider-icon" />
                ) : (
                    React.createElement(providerIcon) // Correct way to dynamically create a component
                ))}
            {providerName}
        </div>
    );
};


export default ProviderSendButton;