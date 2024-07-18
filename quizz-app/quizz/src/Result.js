import React from 'react';

const Result = ({ score, totalQuestions , restartQuiz}) => {
    const percentage = (score / totalQuestions) * 100;

    return (
        <div className="result">
            <h2>Quiz Result</h2>
            <p>
                You scored {score} out of {totalQuestions} questions.
            </p>
            <p>Your percentage: {percentage.toFixed(2)}%</p>
            <button onClick={restartQuiz}>Restart Quiz</button>
        </div>
    );
};

export default Result;