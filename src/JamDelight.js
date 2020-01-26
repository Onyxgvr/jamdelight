import React, { useState } from 'react';
import './JamDelight.css';
import Resources from "./resources/Resources.js";
import Header from "./Header";
import Footer from "./Footer";
import WelcomePage from "./WelcomePage";
import QuestionPage from "./QuestionPage";



export default function JamDelight() {
    let mainButtonLabel = Resources.strings.FINISH;

    const [info, setInfo] = useState("");

    // Setup: 0 (welcome), 1-X (questions), X+1 (Email), X+2 (Thank you)
    const [answers, setAnswers]  = useState(Array(Resources.questions.length + 3).fill(null));
    const [currentQuestion, setCurrentQuestion] = useState(0);



    // Main Page handling
    let currentPage;
    if (currentQuestion === 0) {
        currentPage = <WelcomePage
                        message="Test one!"
                        />;
        mainButtonLabel = Resources.strings.START;
    }
    else if (currentQuestion === answers.length - 1) {
        // currentPage = <SummaryPage
        //
        //                  />;
        console.log("Summary Page");
    }
    else if (currentQuestion === answers.length - 2) {
        // currentPage = <EmailPage
        //
        //                 />;
        console.log("eMail Page");
    } else {
        currentPage = <QuestionPage
                        currentQuestion = {currentQuestion}
                        />;
    }


    function infoMessage(message) {
        setInfo(message);
    }
    function clearMessage() {
        setInfo("");
    }

    function nextPage() {

    }
    function previousPage() {

    }

    function mainButtonClick() {
        //infoMessage("button pressed!");
        setCurrentQuestion(currentQuestion + 1);
    }


    return (
        <div className="JamDelight">

            <Header
                // currentQuestion = index
            />

            <div className="Main">
                {currentPage}
            </div>

            <Footer
                infoMessage = {info}
                clearMessage = {clearMessage}

                buttonLabel = {mainButtonLabel}
                mainButtonOnClick = {mainButtonClick}
            />

        </div>
    );
}






