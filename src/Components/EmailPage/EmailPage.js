import React, {useState} from 'react';
import './EmailPage.css';
import Resources from "../../resources/Resources";

function validateEmail(email) {
    const regEx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/igm;

    return !(email === '' || !regEx.test(email));
}

export default function EmailPage(props) {
    const previousEmail = (props.email) ? props.email : "";
    const [userEmail, setUserEmail] = useState (previousEmail);

    return (
        <form
            className="EmailContainer"
            onSubmit={(event) => props.onEmailSubmitted(event, userEmail, validateEmail(userEmail))}
        >
            <span className="EmailLabel">{Resources.strings.EMAILLABEL}</span>
            <input
                name="email"
                className="EmailInput"
                value={userEmail}
                onChange={(event => setUserEmail (event.target.value))}
                placeholder={Resources.strings.EMAILPLACEHOLDER}
            />
            <button
                className="EmailSubmit"
                type="submit"
            >
                {Resources.strings.EMAILSUBMIT}
            </button>
        </form>
    );
}


