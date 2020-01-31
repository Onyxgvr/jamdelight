import React, {useEffect, useState} from 'react';
import './JamDelight.css';
import Resources from "./resources/Resources.js";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import WelcomePage from "./Components/WelcomePage/WelcomePage";
import QuestionPage from "./Components/QuestionPage/QuestionPage";
import EmailPage from "./Components/EmailPage/EmailPage";



export default function JamDelight() {
    // Setup: 0 (welcome), 1-X (questions), X+1 (Email) (If you change this, change getLastAnswerIndex)
    const [answers, setAnswers]  = useState(Array(Resources.questions.length + 2).fill(null));
    const [currentQuestion, setCurrentQuestion] = useState(0);

    //Layout variables
    const [info, setInfo] = useState("");
    const [isMainButtonDisabled, setIsMainButtonDisabled] = useState(false);
    let mainButtonLabel = Resources.strings.FINISH;
    let headerDisplay = 'visible';
    let navigationButtonsActive = {back: true, next: true};





    useEffect(() => {
        if (currentQuestion > 0) setIsMainButtonDisabled(!isQuestionnaireCompleted());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [answers, currentQuestion]);




    /*
    * UI functions
     */


    function nextPage() {
        if (currentQuestion >= getLastAnswerIndex()) {
            setCurrentQuestion(getLastAnswerIndex());
            infoMessage(Resources.strings.NONEXTQUESTION);
        } else {
            setCurrentQuestion(currentQuestion + 1);
        }
    }
    function previousPage() {
        if (currentQuestion <= 1) {
            setCurrentQuestion(1);
            infoMessage(Resources.strings.NOPREVIOUSQUESTION);
        } else {
            setCurrentQuestion(currentQuestion - 1);
        }
    }
    function goToPage(pageNumber) {
        if (1 <= pageNumber && pageNumber <= getLastAnswerIndex()) {
            setCurrentQuestion(pageNumber);
        } else {
            infoMessage(Resources.strings.NOSUCHQUESTION);
        }
    }

    function emailSubmitted(event, email, isValid) {
        event.preventDefault();

        if (isValid) {
            const newAnswers = [...answers];
            newAnswers[currentQuestion] = email;
            setAnswers(newAnswers);
            isQuestionnaireCompleted(newAnswers) ?
                    infoMessage("Everything has been completed! (Show modal)") //TODO: Replace with summary handling
                :   infoMessage(Resources.strings.EMAILNOTLAST);
        } else {
            infoMessage(Resources.strings.EMAILNOTVALID);
        }
    }

    function answerSubmitted(answerIndex) {
        const goToNext = (isNextQuestionBlank() && answers[currentQuestion] === null);

        const newAnswers = [...answers];
        newAnswers[currentQuestion] = answerIndex;
        setAnswers(newAnswers);

        if (goToNext) nextPage();
    }

    function mainButtonClick() {
        if (currentQuestion === 0) {
            setCurrentQuestion(1);
            setIsMainButtonDisabled(true);
        } else {
            isQuestionnaireCompleted()?
                        infoMessage("Everything has been completed! (Show modal)") //TODO: Replace with summary handling
                    :   infoMessage(Resources.strings.NOTCOMPLETED);
        }
    }

    function infoMessage(message) {
        setInfo(message);
    }
    function clearMessage() {
        setInfo("");
    }



    /*
    * Helper Functions
     */

    function isQuestionnaireCompleted(questionnaire) {
        const checkingAnswers = questionnaire ? questionnaire : answers;
        for (let i = 1; i <= getLastAnswerIndex(); i++) {
            if (checkingAnswers[i] === null) return false;
        }
        return true;
    }

    function isNextQuestionBlank() {
        return currentQuestion < getLastAnswerIndex() && answers[currentQuestion+1] === null;
    }

    // Only need to change this if the answers[] setup is changed.
    function getLastAnswerIndex() {
        return answers.length - 1;
    }




    /*
    * Main Page setup
     */


    let currentPage;
    switch(true) {
        // Welcome Page
        case currentQuestion === 0:
        {
            mainButtonLabel = Resources.strings.START;
            headerDisplay = 'hidden';
            currentPage = <WelcomePage />;
            break;
        }
        // e-Mail Page
        case currentQuestion === getLastAnswerIndex():
        {
            navigationButtonsActive.next = false;
            currentPage = <EmailPage
                email = {answers[getLastAnswerIndex()]}
                onEmailSubmitted = {emailSubmitted}
            />;
            break;
        }
        // Question Page
        default:
        {
            if (currentQuestion === 1) {
                navigationButtonsActive.back = false;
            }
            currentPage = <QuestionPage
                currentQuestion = {currentQuestion}
                currentAnswer = {answers[currentQuestion]}
                onAnswerClick = {answerSubmitted}
            />;
        }
    }



    return (
        <div className="JamDelight">

            <Header
                nextPage = {nextPage}
                previousPage = {previousPage}
                headerDisplay = {headerDisplay}
                navigationButtonsActive = {navigationButtonsActive}
                // For Breadcrumbs
                answers = {answers}
                currentQuestion = {currentQuestion}
                goToPage = {goToPage}
            />

            <div className="Main">
                {currentPage}
            </div>

            <Footer
                infoMessage = {info}
                clearMessage = {clearMessage}

                buttonLabel = {mainButtonLabel}
                isMainButtonDisabled = {isMainButtonDisabled}
                mainButtonOnClick = {mainButtonClick}
            />

        </div>
    );
}






