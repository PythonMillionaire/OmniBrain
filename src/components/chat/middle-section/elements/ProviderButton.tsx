import React from "react";

interface ProviderButtonProps {
    providerName: string;
}

const ProviderButton: React.FC<ProviderButtonProps> = ({providerName}) => {
    return (
        <a className="button provider-button" href="#">{providerName}</a>
    )
}

export default ProviderButton;