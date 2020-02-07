import React, {useEffect, useState} from 'react';
import './JamDelight.css';
import Resources from "./resources/Resources.js";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import WelcomePage from "./Components/WelcomePage/WelcomePage";
import QuestionPage from "./Components/QuestionPage/QuestionPage";
import EmailPage from "./Components/EmailPage/EmailPage";
import Questionnaire from "./Questionnaire";



export default function JamDelight() {
    const [q, setQ] = useState(new Questionnaire());
    const [currentQuestion, setCurrentQuestion] = useState(0);

    //Layout variables
    const [info, setInfo] = useState(["", false]);
    const [isMainButtonDisabled, setIsMainButtonDisabled] = useState(false);
    let mainButtonLabel = Resources.strings.FINISH;
    let headerDisplay = 'visible';
    let navigationButtonsActive = {back: true, next: true};



    useEffect(() => {
        if (currentQuestion > 0) setIsMainButtonDisabled(!q.getIsCompleted());
    }, [currentQuestion, q]);



    /*
    * UI functions
     */
    function nextPage() {
        if (currentQuestion >= q.getQuestionnaireLength()) {
            setCurrentQuestion(q.getQuestionnaireLength());
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
        if (1 <= pageNumber && pageNumber <= q.getQuestionnaireLength()) {
            setCurrentQuestion(pageNumber);
        } else {
            infoMessage(Resources.strings.NOSUCHQUESTION);
        }
    }

    function emailSubmitted(event, email, isValid) {
        event.preventDefault();

        if (isValid) {
            const newQ = new Questionnaire(q.answers, email);
            setQ(newQ);

            newQ.getIsCompleted() ?
                infoMessage("Everything has been completed! (Show modal)") //TODO: Replace with summary handling
            :   infoMessage(Resources.strings.EMAILNOTLAST);
        } else {
            infoMessage(Resources.strings.EMAILNOTVALID);
        }
    }

    function answerSubmitted(answerIndex) {
        const goToNext = (q.getIsNextQuestionBlank(currentQuestion) && q.getAnswer(currentQuestion) === null);

        const newAnswers = [...q.answers];
        newAnswers[currentQuestion-1] = answerIndex;
        const newQ = new Questionnaire(newAnswers, q.email);
        setQ(newQ);

        if (goToNext) nextPage();
    }

    function mainButtonClick() {
        if (currentQuestion === 0) {
            setCurrentQuestion(1);
            setIsMainButtonDisabled(true);
        } else {
            q.getIsCompleted() ?
                infoMessage("Everything has been completed! (Show modal)") //TODO: Replace with summary handling
            :   infoMessage(Resources.strings.NOTCOMPLETED);
        }
    }

    function infoMessage(message) {
        setInfo([message, true]);
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
        case currentQuestion === q.getQuestionnaireLength():
        {
            navigationButtonsActive.next = false;
            currentPage = <EmailPage
                email = {q.email}
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
                currentAnswer = {q.getAnswer(currentQuestion)}
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
                answers = {q.getBreadcrumbs()}
                currentQuestion = {currentQuestion}
                goToPage = {goToPage}
            />

            <div className="Main">
                {currentPage}
            </div>

            <Footer
                infoMessage = {info}

                buttonLabel = {mainButtonLabel}
                isMainButtonDisabled = {isMainButtonDisabled}
                mainButtonOnClick = {mainButtonClick}
            />

        </div>
    );
}






