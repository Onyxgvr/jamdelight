import React from 'react';
import Resources from "../resources/Resources";


export default function QuestionPage(props) {
    const relevantQuestion = Resources.questions[props.currentQuestion-1];
    const currentAnswer = props.currentAnswer;
    const questionText = relevantQuestion.question;
    const selectedAnswerText = currentAnswer !== null ? relevantQuestion.answers[currentAnswer] : "\u200b";


    function renderAnswerButton(relevantQuestion, selected, onAnswerClick, index) {
        const answerClass = "btn text-dark";
        return (
            <AnswerButton
                key = {index}
                index = {index}
                className = {selected ? answerClass + " btn-warning" : answerClass + " btn-outline-warning"}
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
        <div className="col text-center">
            <span className="row w-50 mx-auto">Question {props.currentQuestion}:</span>
            <h4 className="row justify-content-center mt-3">{questionText}</h4>
            <h5 className="row justify-content-center text-muted mt-3">{selectedAnswerText}</h5>
            <div className="row w-75 mx-auto my-5">
                {populateAnswers(relevantQuestion, props.onAnswerClick)}
            </div>

        </div>
    );
}


function AnswerButton(props) {
    return (
        <div
            className="col"
            data-cy="Answer Button Array"
        >
            <button
                className={props.className}
                onClick={() => props.onAnswerClick(props.index)}
            >
                {props.answerText}
            </button>
        </div>
    );
}