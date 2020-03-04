import React, {Suspense} from 'react';
import Resources from "../resources/Resources";


export default function QuestionPage(props) {
    const relevantQuestion = Resources.questions[props.currentQuestion-1];
    const currentAnswer = props.currentAnswer;
    const questionText = relevantQuestion.question;
    const questionImage = confirmImage(relevantQuestion.question_image);
    //const selectedAnswerText = currentAnswer !== null ? relevantQuestion.answers[currentAnswer] : "\u200b";


    function renderAnswerButton(relevantQuestion, selected, onAnswerClick, index) {
        return (
            <AnswerButton
                key = {index}
                index = {index}
                selected = {selected}
                answerImage = {confirmImage(relevantQuestion.answers_images[index])}
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
            <div className="mt-1 position-relative">
                <Suspense fallback={
                    <div className="spinner-border" role="status">
                        <span className="sr-only">{Resources.strings.LOADINGIMAGE}...</span>
                    </div>
                } >
                    <img className="img-fluid rounded" src={questionImage.src} alt={questionImage.alt} />
                </Suspense>
                <span className="row mx-auto top_left contrast_backdrop p-1 rounded text-contrast">{Resources.strings.QUESTION} {props.currentQuestion}:</span>
                <h2 className="row bottom_center contrast_backdrop p-1 rounded text-contrast">{questionText}</h2>
                {/*<h5 className="row very_bottom_center text-contrast text-muted">{selectedAnswerText}</h5>*/}
            </div>
            <div className="row w-75 mx-auto my-5">
                {populateAnswers(relevantQuestion, props.onAnswerClick)}
            </div>
        </div>
    );
}


function AnswerButton(props) {
    const selected_border = props.selected ? "selected-border" : "";
    const selected_icon = props.selected ? "visible" : "hidden";
    return (
        <div
            className="answer-card col card mx-3 position-relative"
            data-cy="Answer Button Array"
            onClick={() => props.onAnswerClick(props.index)}
        >
            <div className={"overshadow " + selected_border}>
                <h1 className={"top_right text-contrast font-weight-bolder " + selected_icon}>✔</h1>
            </div>
            <img
                className="card-img-top rounded mt-1"
                src={props.answerImage.src}
                alt={props.answerImage.alt}
            />
            <h5 className="test">{props.answerText}</h5>
        </div>
    );
}


function confirmImage(image) {
    return image ? image : Resources.images.NO_IMAGE;
}