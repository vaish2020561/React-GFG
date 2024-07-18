import React, {
    useState,
    useEffect,
} from "react";
import Questions from "./Questions";
import Result from "./Result";
import questions from "./data";

const Quiz = () => {
    const [currentQuestion, setCurrentQuestion] =
        useState(0);
    const [score, setScore] = useState(0);
    const [showResult, setShowResult] =
        useState(false);
    const [timeLeft, setTimeLeft] = useState(60);
    const totalQuestions = questions.length;

    useEffect(() => {
        const timer = setTimeout(() => {
            if (timeLeft > 0) {
                setTimeLeft(timeLeft - 1);
            } else {
                setShowResult(true);
            }
        }, 1000);

        return () => clearTimeout(timer);
    }, [timeLeft]);

    const handleAnswer = (selectedOption) => {
        const correctAnswer =
            questions[currentQuestion].answer;
        if (selectedOption === correctAnswer) {
            setScore(score + 1);
        }

        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < totalQuestions) {
            setCurrentQuestion(nextQuestion);
        } else {
            setShowResult(true);
        }
    };

    const restartQuiz = () => {
        setCurrentQuestion(0);
        setScore(0);
        setShowResult(false);
        setTimeLeft(60);
    };

    return (
        <div className="quiz">
            {showResult ? (
                <Result score={score}
                    totalQuestions={
                        totalQuestions
                    }
                    restartQuiz={restartQuiz}
                />
            ) : (
                <>
                    <div className="timer">
                        Time Left: {timeLeft}{" "}
                        seconds
                    </div>
                    <div className="question-number">
                        Question {currentQuestion + 1}/
                        {totalQuestions}
                    </div>
                    <Questions
                        question={
                            questions[
                                currentQuestion
                            ].question
                        }
                        options={
                            questions[
                                currentQuestion
                            ].options
                        }
                        handleAnswer={
                            handleAnswer
                        }
                    />
                </>
            )}
        </div>
    );
};

export default Quiz;