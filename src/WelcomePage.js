import React from "react";
import './WelcomePage.css';



export default function WelcomePage(props) {
    return(
        <div className="WelcomePage">
            Welcome message!
            <p>{props.message}</p>
        </div>
    );
}