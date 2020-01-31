import React from 'react';
import './QuestionPage.css';
import Resources from "../../resources/Resources";


export default function QuestionPage(props) {
    const relevantQuestion = Resources.questions[props.currentQuestion-1];
    const currentAnswer = props.currentAnswer;
    const questionText = relevantQuestion.question;
    const selectedAnswerText = currentAnswer !== null ? relevantQuestion.answers[currentAnswer] : "\u200b";


    function renderAnswerButton(relevantQuestion, selected, onAnswerClick, index) {
        return (
            <AnswerButton
                key = {index}
                index = {index}
                className = {selected ? "answerButton selected" : "answerButton"}
                answerText = {relevantQuestion.answers[index]}
                onAnswerClick = {onAnswerClick}
            />
        );
    }

    function populateAnswers(relevantQuestion, onAnswerClick) {
        let buttons = [];

        for (let i = 0; i < relevantQuestion.answers.length; i++) {
            const selected = currentAnswer === i;
            buttons.push(renderAnswerButton(relevantQuestion, selected, onAnswerClick, i));
        }
        return buttons;
    }


    return(
        <div className="QuestionPage">
            <span className="questionLabel">Question {props.currentQuestion}:</span>
            <span className="questionText">{questionText}</span>
            <span className="selectedAnswer">{selectedAnswerText}</span>
            <div className="answersGrid">
                {populateAnswers(relevantQuestion, props.onAnswerClick)}
            </div>

        </div>
    );
}


function AnswerButton(props) {
    return (
        <div className="answerButtonWrapper">
            <button
                className={props.className}
                onClick={() => props.onAnswerClick(props.index)}
            >
                {props.answerText}
            </button>
        </div>
    );
}