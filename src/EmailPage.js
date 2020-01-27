import React, {useState} from 'react';
import './EmailPage.css';

function UseValidateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/igm;
    console.log(email);
    if (email === '' || !re.test(email))
    {
        alert('Please enter a valid email address.');
    }
    else {
        //setEmail(userEmail = email);
        console.log("correct");
    }
}

function EmailPage(props) {
    const [userEmail, setEmail] = useState ('');

    return (
        <div>
            <h1>Enter Email</h1>
            <input
                name="email"
                value={userEmail}
                onChange={(event => setEmail (event.target.value))}
                placeholder="Enter Email Address"/>
            <button onClick={() => UseValidateEmail (userEmail)}>Submit</button>
        </div>
    );
}

export default EmailPage;

