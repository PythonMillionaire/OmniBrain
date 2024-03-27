import CollapseButton from "../../../general/CollapseSectionButton";
import {ButtonPosition} from "../../../../types/enums";
import Slider from "../../../general/Slider";
import Checkbox from "../../../general/Checkbox";
import React, {useRef, useState} from "react";

const ChatInputTop = () => {
    const [isVisible, setIsVisible] = useState(true);
    const elementRef = useRef<HTMLDivElement>(null);

    return (
        <div id="chat-input-top">
            <CollapseButton isVisible={isVisible} buttonPosition={ButtonPosition.bottom} toggleVisibility={() => setIsVisible(!isVisible)} id={"chat-input-top-collapse-button"} />

            <div id="chat-input-top-response-settings" ref={elementRef} style={{ display: isVisible ? 'flex' : 'none'}}>
                <div className="chat-input-detail-level-slider">
                    <div>Response detail level <br/>
                    </div>
                    <Slider/>
                </div>
                <div id="ai-response-settings-checkboxes">
                    <Checkbox text={"Include examples"} tooltipText={"Whether or not the AI should include illustrative examples in its output."} />
                    <Checkbox text={"Include explanation"} tooltipText={"Whether or not the AI should also provide explanations in addition to completing the given task."} />
                    <Checkbox text={"Split output"} tooltipText={"Whether the AI's output should split into sections, as defined in Settings."} />
                </div>
            </div>
        </div>
    )
}

export default ChatInputTop;