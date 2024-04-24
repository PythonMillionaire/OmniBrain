import React from "react";

import {MessageExtremity} from "../../../../types/enums";

import copyIcon from "../../../../assets/images/action-buttons/copy.svg";
import scrollArrowIcon from "../../../../assets/images/action-buttons/scroll-arrow.svg";
import thumbsDownIcon from "../../../../assets/images/action-buttons/thumbs-down.svg";
import regenerateIcon from "../../../../assets/images/action-buttons/regenerate.svg";
import saveToFavoritesIcon from "../../../../assets/images/action-buttons/save-favorites.svg";
import savePromptIcon from "../../../../assets/images/action-buttons/save-prompt.svg";

import copyMessageContents from "./message/functionality/copyMessageContents";
import scrollToMessageExtremity from "./message/functionality/scrollToMessageExtremity";
import thumbDownMessage from "./message/functionality/messageThumbsDown";
import regenerateMessage from "./message/functionality/regenerateMessage";
import saveToFavorites from "./message/functionality/saveToFavorites";
import savePrompt from "./message/functionality/savePrompt";

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

const SaveToFavoritesButton = () => (
    <MessageActionButton
        buttonAction={(event) => saveToFavorites(event.currentTarget)}
        buttonIconURL={saveToFavoritesIcon}
        className="message-save-to-favorites"
    />
);

const ScrollToTopButton = () => (
    <MessageActionButton
        buttonAction={(event) => scrollToMessageExtremity(event.currentTarget, MessageExtremity.top)}
        buttonIconURL={scrollArrowIcon}
        className="message-scroll-to-top-button"
    />
);

const ScrollToBottomButton = () => (
    <MessageActionButton
        buttonAction={(event) => scrollToMessageExtremity(event.currentTarget, MessageExtremity.bottom)}
        buttonIconURL={scrollArrowIcon}
        className="message-scroll-to-bottom-button"
    />
);

const ThumbsDownButton = () => (
    <MessageActionButton
        buttonAction={(event) => thumbDownMessage(event.currentTarget)}
        buttonIconURL={thumbsDownIcon}
        className="message-thumbs-down-button"
    />
);

const RegenerateMessageButton = () => (
    <MessageActionButton
        buttonAction={(event) => regenerateMessage(event.currentTarget)}
        buttonIconURL={regenerateIcon}
        className="message-regenerate-button"
    />
);

const SavePromptButton = () => (
    <MessageActionButton
        buttonAction={(event) => savePrompt(event.currentTarget)}
        buttonIconURL={savePromptIcon}
        className="add-to-saved-prompts-button"
    />
);

const CopyMessageButton = () => (
    <MessageActionButton
        buttonAction={(event) => copyMessageContents(event.currentTarget)}
        buttonIconURL={copyIcon}
        className="copy-message-button"
    />
);

export const AgentMessageActionButtons = () => (
        <>
            <SaveToFavoritesButton/>
            <ScrollToTopButton/>
            <ScrollToBottomButton/>
            <ThumbsDownButton/>
            <RegenerateMessageButton/>
            <CopyMessageButton/>
        </>
    );

export const UserMessageActionButtons = () => (
        <>
            <ScrollToTopButton/>
            <ScrollToBottomButton/>
            <CopyMessageButton/>
            <SavePromptButton />
        </>
    );