import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './Summary.css';
import questions from "./resources/Questions";

function questionsAnswers(questions, answers){
    let formattedAnswers = [];

    for(let i=1; i<=questions.length+1; i++){
        if(typeof answers[i] === "string"){
            formattedAnswers.push (<li>{
                answers[i]
            }</li>)
        }
        else{
            if(answers[i] !== null) {
                const answer = (answers[i] !== null) ? questions[i-1].answers[answers[i]] :'No Answer';
                formattedAnswers.push(<li>
                    {
                        questions[i - 1].question + ' ' + answer
                    }
                </li>)
            }
        }
    }
    
    return(
        <ol>
            {formattedAnswers}
        </ol>
    );
}

const Modal = ({ isShowing, hide, questions, answers }) => isShowing ? ReactDOM.createPortal( //Portal: Allows child component to render in another part of the DOM outside of their parent component

    <React.Fragment>
        <div className="modal-overlay"/>
        <div className="modal-wrapper" aria-modal aria-hidden tabIndex={-1} role="dialog">
            <div className="modal">
                <div className="modal-header">
                    <button type="button" className="modal-close-button" data-dismiss="modal" aria-label="Close" onClick={hide}>
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <p>
                    These are your answers!
                    <br />

                    {questionsAnswers(questions, answers)}

                </p>
            </div>
        </div>
    </React.Fragment>, document.body
) : null;

const useModal = () => {
    const [isShowing, setIsShowing] = useState(false);

    function toggle() {
        setIsShowing(!isShowing);
    }

    return {
        isShowing,
        toggle,
    }
};

const Summary = (props) => {
    const {isShowing, toggle} = useModal();
    return (
        <div className="App">
            <button className="button-default" onClick={toggle}>Review Answers</button>
            <Modal
                answers={props.answers}
                questions={questions}
                isShowing={isShowing}
                hide={toggle}
            />
        </div>
    );
};

export default Summary;