import React from 'react';

const Questions = ({ question, options, handleAnswer }) => {
    return (
        <div className="question">
            <h2>{question}</h2>
            <div className="options">
                {options.map((option, index) => (
                    <button key={index} onClick={() => handleAnswer(option)}>
                        {option}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default Questions;