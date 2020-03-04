import React from 'react';
import Modal from "react-bootstrap/Modal";
import Resources from "../resources/Resources";




function FormattedAnswer(props) {
    return (
        <span>
            <p className="mb-0">
                {props.question}
            </p>
            <p className="mt-0 mb-3 ml-3">
                <b>{props.answer}</b>
            </p>
        </span>
    );
}


function DisplayAnswers(props) {
    const q = props.q;
    let formattedAnswers = [];

    for (let i=0; i< q.getQuestionnaireLength(); i++)
    {
        formattedAnswers.push(
            <FormattedAnswer
                key = {i}
                question = {q.getQuestion(i)}
                answer = {q.getVerboseAnswer(i)}
            />
        );
    }

    return (
        <div>
            {formattedAnswers}
        </div>
    );
}




export default function Summary(props) {
    return (
        <React.Fragment>
            <Modal
                show={props.show}
                onHide={props.hideSummary}
                backdrop="static"
                scrollable={true}
                data-cy="Modal"
            >
                <Modal.Header>
                    <Modal.Title className="SummaryTitle">{Resources.strings.THANKYOU}</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <h5 className="text-center">{Resources.strings.QCOMPLETE}</h5>
                    <hr className="w-50" />
                    <p className="mb-4"><i>{Resources.strings.QHEAD}</i></p>

                        <DisplayAnswers
                            q = {props.q}
                        />

                    <p className="mt-5 mb-0"><small>{Resources.strings.QDONE}</small></p>
                </Modal.Body>

                <Modal.Footer>
                    <button
                        className="btn btn-secondary px-4"
                        onClick={props.hideSummary}
                        data-cy="Modal Edit"
                    >
                        {Resources.strings.EDIT}
                    </button>
                    <button
                        className="btn btn-primary px-5"
                        onClick={props.finalizeSummary}
                        data-cy="Modal Finish"
                    >
                        {Resources.strings.FINISH}
                    </button>
                </Modal.Footer>

            </Modal>
        </React.Fragment>
    );
}




