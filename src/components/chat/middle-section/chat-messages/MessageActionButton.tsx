import React from "react";

import {MessageExtremity} from "../../../../types/enums";

import copyIcon from "../../../../assets/images/action-buttons/copy.svg";
import scrollArrowIcon from "../../../../assets/images/action-buttons/scroll-arrow.svg";
import thumbsDownIcon from "../../../../assets/images/action-buttons/thumbs-down.svg";
import regenerateIcon from "../../../../assets/images/action-buttons/regenerate.svg";
import saveIcon from "../../../../assets/images/action-buttons/save-favorites.svg";

import copyMessageContents from "./functionality/copyMessageContents";
import scrollToMessageExtremity from "./functionality/scrollToMessageExtremity";
import thumbDownMessage from "./functionality/messageThumbsDown";
import regenerateMessage from "./functionality/regenerateMessage";
import saveToFavorites from "./functionality/saveToFavorites";

interface MessageActionButtonProps {
    buttonIconURL: string;
    buttonAction: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
    className?: string;
}

const MessageActionButton: React.FC<MessageActionButtonProps> = ({buttonIconURL, buttonAction, className}) => {
    return (
        <img src={buttonIconURL} className={`button message-action ${className}`} onClick={buttonAction} />
    )
}

const SaveToFavoritesButton: React.FC = () => (
    <MessageActionButton
        buttonAction={(event) => saveToFavorites(event.currentTarget)}
        buttonIconURL={saveIcon}
        className="message-save-to-favorites"
    />
);

const ScrollToTopButton: React.FC = () => (
    <MessageActionButton
        buttonAction={(event) => scrollToMessageExtremity(event.currentTarget, MessageExtremity.top)}
        buttonIconURL={scrollArrowIcon}
        className="message-scroll-to-top-button"
    />
);

const ScrollToBottomButton: React.FC = () => (
    <MessageActionButton
        buttonAction={(event) => scrollToMessageExtremity(event.currentTarget, MessageExtremity.bottom)}
        buttonIconURL={scrollArrowIcon}
        className="message-scroll-to-bottom-button"
    />
);

const ThumbsDownButton: React.FC = () => (
    <MessageActionButton
        buttonAction={(event) => thumbDownMessage(event.currentTarget)}
        buttonIconURL={thumbsDownIcon}
        className="message-thumbs-down-button"
    />
);

const RegenerateMessageButton: React.FC = () => (
    <MessageActionButton
        buttonAction={(event) => regenerateMessage(event.currentTarget)}
        buttonIconURL={regenerateIcon}
        className="message-regenerate-button"
    />
);

const CopyMessageButton: React.FC = () => (
    <MessageActionButton
        buttonAction={(event) => copyMessageContents(event.currentTarget)}
        buttonIconURL={copyIcon}
        className="copy-message-button"
    />
);

export const AgentMessageActionButtons: React.FC = () => (
        <>
            <SaveToFavoritesButton/>
            <ScrollToTopButton/>
            <ScrollToBottomButton/>
            <ThumbsDownButton/>
            <RegenerateMessageButton/>
            <CopyMessageButton/>
        </>
    );

export const UserMessageActionButtons: React.FC = () => (
        <>
            <ScrollToTopButton/>
            <ScrollToBottomButton/>
            <CopyMessageButton/>
        </>
    );