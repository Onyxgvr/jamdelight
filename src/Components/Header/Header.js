import React from 'react';
import './Header.css';
import Resources from "../../resources/Resources";


export default function Header(props) {
    const backButtonState = (props.navigationButtonsActive.back) ? "" : " disabled";
    const nextButtonState = (props.navigationButtonsActive.next) ? "" : " disabled";

    return(
        <div className={"Header " + props.headerDisplay}>
            <div className="NavigationBarContainer">
                <button
                    id="NavigationBarButtonBack"
                    className={"NavigationBarButton" + backButtonState}
                    onClick={() => props.previousPage()}
                >
                    {Resources.strings.BACK}
                </button>
                <Breadcrumbs
                    answers = {props.answers}
                    currentQuestion = {props.currentQuestion}
                    goToPage = {props.goToPage}
                />
                <button
                    id="NavigationBarButtonForward"
                    className={"NavigationBarButton" + nextButtonState}
                    onClick={() => props.nextPage()}
                >
                    {Resources.strings.NEXT}
                </button>
            </div>
        </div>
    );
}


function Breadcrumbs(props) {
    const answers = props.answers;
    const crumbLabel = (answers.length > 6)? Resources.strings.CRUMBLABELSHORT : Resources.strings.CRUMBLABEL;

    let crumbs = [];
    for (let i=1; i < answers.length; i++) {
        const breadCrumb = (i === props.currentQuestion)? "BreadCrumb CurrentCrumb" : "BreadCrumb";
        const crumbValue = (answers[i] === null) ? i : i + "✔";

        crumbs.push(
            <div
                key={i}
                className={breadCrumb}
                onClick={() => {props.goToPage(i)}}
            >
                <div className="CrumbLabel">{crumbLabel}</div>
                <span className="CrumbValue">{crumbValue}</span>
            </div>
        );
    }

    return (
        <div className="BreadcrumbsContainer">
            {crumbs}
        </div>
    );
}

