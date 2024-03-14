import React from "react";
import Message from "./Message";
import ChatMessageTag from "./ChatMessageTag";

interface UserMessageProps {
    messageContents: string;
}

const UserMessage: React.FC<UserMessageProps> = ({ messageContents }) => {
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

    return <Message sender="User" messageContents={messageContents} senderButtonsSide={sideButtons} senderButtonsBottom={bottomButtons} />;
};

export default UserMessage;
