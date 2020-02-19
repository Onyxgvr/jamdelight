import React from 'react';




export default function Footer(props) {
    return (
        <div className="text-center m-1">
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
        <div key={+new Date()} className="FooterMessage m-1">
            <span className="d-inline-block">{message}</span>
        </div>
    );
}


function MainButton(props) {
    const buttonState = (props.isDisabled) ? " grayedout" : " btn-primary";
    return (
        <button
            className={"btn mt-2 w-25" + buttonState}
            onClick={() => props.onClick()}
        >
            <span className="h3">{props.buttonLabel}</span>
        </button>
    );
}