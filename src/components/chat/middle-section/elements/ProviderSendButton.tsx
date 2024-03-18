import React from "react";

interface ProviderSendButtonProps {
    providerName: string;
}

const ProviderSendButton: React.FC<ProviderSendButtonProps> = ({providerName}) => {
    return (
        <a className="button provider-button" href="#">{providerName}</a>
    )
}

export default ProviderSendButton;