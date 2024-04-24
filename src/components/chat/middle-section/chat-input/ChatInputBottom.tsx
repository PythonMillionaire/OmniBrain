import React from "react";

import ProviderSendButton from "../elements/ProviderSendButton";
import Checkbox from "../../../general/Checkbox";

import claudeIcon from "../../../../assets/images/ai-providers/logo-claude.svg";
import geminiIcon from "../../../../assets/images/ai-providers/logo-gemini.svg";
import chatGPTIcon from "../../../../assets/images/ai-providers/logo-chatgpt.svg";

const ChatInputBottom = () => {
    return (
        <div id="chat-input-bottom">
            <div id="provider-buttons-container">
                <ProviderSendButton providerName={"Midjourney"}/>
                <ProviderSendButton providerName={"ChatGPT 3.5"}/>
                <ProviderSendButton providerName={"Claude 3"} providerIcon={claudeIcon}/>
                <ProviderSendButton providerName={"Gemini 1.5"} providerIcon={geminiIcon}/>
                <ProviderSendButton providerName={"ChatGPT 4"} providerIcon={chatGPTIcon}/>
            </div>
            <div id="prompt-settings">
                <div id="prompt-settings-checkboxes">
                    <Checkbox text={"Keep prompt after sending"} tooltipText={"Whether the prompt should remain in the input field after the message is sent."} />
                    <Checkbox text={"Improve prompt before sending"} tooltipText={"Whether the prompt should first be improved by the AI defined in Settings before being sent."} />
                    <Checkbox text={"Minify prompt before sending"} tooltipText={"Whether the prompt should first be minified and have unnecessary characters removed, such as multiple spaces in a row, before sending. This reduces usage costs."} />
                    <Checkbox text={"Don't include any previous messages"} tooltipText={"Whether all previous chat messages should be omitted from next request."} />
                </div>
            </div>
        </div>
    );
}

export default ChatInputBottom;