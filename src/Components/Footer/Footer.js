import React from 'react';
import './Footer.css';




export default function Footer(props) {
    return (
        <div className="Footer">
            <FooterMessage
                infoMessage = {props.infoMessage}
            />
            <MainButton
                isDisabled = {props.isMainButtonDisabled}
                buttonLabel={props.buttonLabel}
                onClick={props.mainButtonOnClick}
            />
        </div>
    );
}


function FooterMessage (props) {
    //to maintain height for css with empty string, replace with 'zero-width space'.
    const message = props.infoMessage === "" ? "\u200b" : props.infoMessage;

    return (
        <div key={+new Date()} className="FooterMessage">
            <span className="FooterMessageText">{message}</span>
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