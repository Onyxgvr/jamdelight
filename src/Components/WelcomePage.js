import React from "react";
import Resources from "../resources/Resources";



export default function WelcomePage() {
    return(
        <div className="jumbotron">
            <h1 className="text-center">{Resources.strings.WELCOMEHEAD}</h1>
            <h4 className="text-center w-50 mx-auto mt-3">{Resources.strings.WELCOMEBODY}</h4>
            <h6 className="text-center text-muted pt-5">{Resources.strings.WELCOMEFOOT}</h6>
        </div>
    );
}