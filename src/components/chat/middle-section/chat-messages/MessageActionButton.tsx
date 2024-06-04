import React from "react";

import {MessageExtremity} from "../../../../types/enums";

import copyIcon from "../../../../assets/images/action-buttons/copy.svg";
import scrollArrowIcon from "../../../../assets/images/action-buttons/scroll-arrow.svg";
import thumbsDownIcon from "../../../../assets/images/action-buttons/thumbs-down.svg";
import regenerateIcon from "../../../../assets/images/action-buttons/regenerate.svg";
import saveToFavoritesIcon from "../../../../assets/images/action-buttons/save-favorites.svg";
import savePromptIcon from "../../../../assets/images/action-buttons/save-prompt.svg";
import replyInThreadIcon from "../../../../assets/images/action-buttons/reply-in-thread.svg";
import shareReplyIcon from "../../../../assets/images/action-buttons/share.svg";

import copyMessageContents from "./message/functionality/copyMessageContents";
import scrollToMessageExtremity from "./message/functionality/scrollToMessageExtremity";
import thumbDownMessage from "./message/functionality/messageThumbsDown";
import regenerateMessage from "./message/functionality/regenerateMessage";
import saveToFavorites from "./message/functionality/saveToFavorites";
import savePrompt from "./message/functionality/savePrompt";
import createThreadInMainMessageSectionFromMessageInThread
    from "./message/functionality/createThreadInMainMessageSectionFromMessageInThread";

interface MessageActionButtonProps {
    buttonIconURL: string;
    buttonAction: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
    className?: string;
    styles?: React.CSSProperties;
}

const MessageActionButton: React.FC<MessageActionButtonProps> = ({buttonIconURL, buttonAction, className, styles}) => {
    return (
        <img src={buttonIconURL} className={`button message-action ${className}`} onClick={buttonAction} style={styles} />
    )
}

const ShareReplyButton: React.FC = () => (
    <MessageActionButton
        buttonAction={(event) => saveToFavorites(event.currentTarget)}
        buttonIconURL={shareReplyIcon}
        className="share-reply-button"
    />
);

const SaveToFavoritesButton: React.FC = () => (
    <MessageActionButton
        buttonAction={(event) => saveToFavorites(event.currentTarget)}
        buttonIconURL={saveToFavoritesIcon}
        className="message-save-to-favorites-button"
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

const ThumbsUpButton: React.FC = () => (
    <MessageActionButton
        buttonAction={(event) => thumbDownMessage(event.currentTarget)}
        buttonIconURL={thumbsDownIcon}
        className="message-thumbs-down-button"
        styles={{transform: 'rotate(180deg)'}}
    />
);

const RegenerateMessageButton: React.FC = () => (
    <MessageActionButton
        buttonAction={(event) => regenerateMessage(event.currentTarget)}
        buttonIconURL={regenerateIcon}
        className="message-regenerate-button"
    />
);

const SavePromptButton: React.FC = () => (
    <MessageActionButton
        buttonAction={(event) => savePrompt(event.currentTarget)}
        buttonIconURL={savePromptIcon}
        className="add-to-prompt-templatess-button"
    />
);

const CopyMessageButton: React.FC = () => (
    <MessageActionButton
        buttonAction={(event) => copyMessageContents(event.currentTarget)}
        buttonIconURL={copyIcon}
        className="copy-message-button"
    />
);

const CreateThreadInMainMessageSection: React.FC = () => (
    <MessageActionButton
        buttonAction={(event) => createThreadInMainMessageSectionFromMessageInThread(event.currentTarget)}
        buttonIconURL={replyInThreadIcon}
        className="reply-in-thread-button-icon"
    />
)

export const AgentMessageActionButtons: React.FC<{isInsideThread: boolean}> = ({isInsideThread = false}) => (
        <>
            <ShareReplyButton />
            <SaveToFavoritesButton/>
            <ScrollToTopButton/>
            <ScrollToBottomButton/>
            <ThumbsDownButton/>
            <ThumbsUpButton/>
            <RegenerateMessageButton/>
            <CopyMessageButton/>
            {isInsideThread && <CreateThreadInMainMessageSection />}
        </>
    );

export const UserMessageActionButtons: React.FC = () => (
        <>
            <ScrollToTopButton/>
            <ScrollToBottomButton/>
            <CopyMessageButton/>
            <SavePromptButton />
        </>
    );