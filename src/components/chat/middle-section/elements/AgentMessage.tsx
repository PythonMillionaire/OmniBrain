import React from "react";
import Message from "./Message";

interface AgentMessageProps {
    messageContents: string;
}

const AgentMessage: React.FC<AgentMessageProps> = ({ messageContents }) => {
    const bottomButtons = (
        <div className="chat-message-buttons-bottom">
            <a className="button" href="#">_ <br/>
            </a>
            <a className="button" href="#">_ <br/>
            </a>
            <a className="button" href="#">_ <br/>
            </a>
        </div>
    )

    const sideButtons = (
        <>
            <a className="button" href="#">_ <br/>
            </a>
            <a className="button" href="#">_ <br/>
            </a>
            <a className="button" href="#">_ <br/>
            </a>
        </>
    )


    // Define Agent-specific buttons and the thread info section
    const agentElements = (
            <div className="chat-message-thread-info">
                <div className="replies-info">
                    <div className="replies-counter">8 replies</div>
                    <div className="last-thread-interaction">Last
                        interaction: <span>3 days and 12 hours ago</span></div>
                </div>
                <div className="view-thread">View thread</div>
            </div>
    );

    return <Message sender="Agent" messageContents={messageContents} senderButtonsSide={sideButtons} senderButtonsBottom={bottomButtons} children={agentElements}></Message>;
};

export default AgentMessage;
