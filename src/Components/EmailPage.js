import React, {useState} from 'react';
import Resources from "../resources/Resources";

function validateEmail(email) {
    const regEx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/igm;

    return !(email === '' || !regEx.test(email));
}

export default function EmailPage(props) {
    const previousEmail = (props.email) ? props.email : "";
    const [userEmail, setUserEmail] = useState (previousEmail);

    return (
        <form
            className="col w-100 d-block text-center p-5"
            onSubmit={(event) => props.onEmailSubmitted(event, userEmail, validateEmail(userEmail))}
        >
            <span className="row mb-3 h4 justify-content-center">{Resources.strings.EMAILLABEL}</span>
            <input
                name="email"
                className="row w-50 mt-2 mx-auto very-rounded text-center"
                value={userEmail}
                onChange={(event => setUserEmail (event.target.value))}
                placeholder={Resources.strings.EMAILPLACEHOLDER}
                data-cy="eMail Input"
            />
            <button
                className="row btn btn-primary mt-5"
                type="submit"
                data-cy="eMail Submit Button"
            >
                <span className="h5">{Resources.strings.SUBMIT}</span>
            </button>
        </form>
    );
}


