import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './Summary.css';
import QuestionPage from "./QuestionPage";
import Questions from "./resources/Questions";

const Modal = ({ isShowing, hide }) => isShowing ? ReactDOM.createPortal( //Portal: Allows child component to render in another part of the DOM outside of their parent component
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

const Summary = () => {
    const {isShowing, toggle} = useModal();
    return (
        <div className="App">
            <button className="button-default" onClick={toggle}>Review Answers</button>
            <Modal
                isShowing={isShowing}
                hide={toggle}
            />
        </div>
    );
};

export default Summary;