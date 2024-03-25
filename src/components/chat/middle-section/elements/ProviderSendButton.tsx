import React from "react";
import {IconProp} from "../../../../types/IconProp";

interface ProviderSendButtonProps {
    providerName: string;
    providerIcon?: IconProp;
}

const ProviderSendButton: React.FC<ProviderSendButtonProps> = ({ providerName, providerIcon }) => {
    return (
        <div className="button provider-button">
            <div className="below-button"></div>
            <div className="button-contents">{providerIcon &&
                (typeof providerIcon === 'string' ? (
                    <img src={providerIcon} alt="User uploaded icon" className="provider-icon"/>
                ) : (
                    React.createElement(providerIcon)
                ))}
                {providerName}</div>
        </div>
    );
};


export default ProviderSendButton;