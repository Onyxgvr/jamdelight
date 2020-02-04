import React, {useEffect, useState} from 'react';
import './Footer.css';
import Summary from "../../Summary";




export default function Footer(props) {
    const [isHidden, setIsHidden] = useState(true);

    //Need to destructure these outside useEffect (dependency on props triggers on _any_ prop change)
    const message = props.infoMessage;
    const clearMessage = props.clearMessage;

    //Hide message after a few seconds
    useEffect(() => {
        if (message.length > 0) {
            setIsHidden(false);

            //TODO: Change the handling to prevent erroneous triggers.
            setTimeout(() => setIsHidden(true), 3000);
            setTimeout(() => clearMessage(), 4000);
        }
    }, [message.length, clearMessage]);

    return (
        <div className="Footer">
            <FooterMessage
                isHidden = {isHidden}
                infoMessage = {props.infoMessage}
            />
            <MainButton
                isDisabled = {props.isMainButtonDisabled}
                buttonLabel={props.buttonLabel}
                onClick={props.mainButtonOnClick}
            />
            <Summary
                answers={props.answers}
            />
        </div>
    );
}


function FooterMessage (props) {
    //to maintain height for css with empty string, replace with 'zero-width space'.
    const message = props.infoMessage === ""? "\u200b" : props.infoMessage;

    return (
        <div className={"FooterMessage " + (props.isHidden ? ' hidden' : '')}>
            <span className={"FooterMessageText"}>{message}</span>
        </div>
    );
}


function MainButton(props) {
    const buttonState = (props.isDisabled) ? " disabled" : "";
    return (
        <button
            className={"MainButton" + buttonState}
            onClick={() => props.onClick()}
        >
            {props.buttonLabel}
        </button>
    );

}