import React from "react";
import './WelcomePage.css';
import Resources from "../../resources/Resources";



export default function WelcomePage() {
    return(
        <div className="WelcomePage">
            <span className="WelcomeHead">{Resources.strings.WELCOMEHEAD}</span>
            <span className="WelcomeBody">{Resources.strings.WELCOMEBODY}</span>
            <span className="WelcomeFoot">{Resources.strings.WELCOMEFOOT}</span>
        </div>
    );
}