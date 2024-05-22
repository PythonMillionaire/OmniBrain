import React from 'react';

interface FollowUpQuestionProps {
    questionContent: string;
}

const FollowUpQuestion: React.FC<FollowUpQuestionProps> = ({questionContent}) => {
    return (
        <div className={"follow-up-question-outer-border"}>
            <div className="button follow-up-question">{questionContent}</div>
        </div>
    )
}

export default FollowUpQuestion;