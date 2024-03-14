import React from 'react';

interface FollowUpQuestionProps {
    questionContent: string;
}

const FollowUpQuestion: React.FC<FollowUpQuestionProps> = ({questionContent}) => {
    return (
        <div className="follow-up-question">{questionContent}</div>
    )
}

export default FollowUpQuestion;