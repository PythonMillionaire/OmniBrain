import FollowUpQuestion from "../elements/FollowUpQuestion";
import React from "react";

const ChatInputFollowUpQuestions = () => {
    return (
        <div id="follow-up-questions-section">
            <FollowUpQuestion questionContent="Ajahn Brahm is the VERY BEST. No question..." />
            <FollowUpQuestion questionContent="Ajahn Brahm is the VERY BEST. Indeed" />
            <FollowUpQuestion questionContent="Ajahn Brahm is the VERY BEST. No question..." />
            <FollowUpQuestion questionContent="Ajahn Brahm is the VERY BEST. " />
        </div>
    );
}

export default ChatInputFollowUpQuestions;