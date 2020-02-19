import React from 'react';
import Resources from "../resources/Resources";


export default function Header(props) {
    const backButtonState = (props.navigationButtonsActive.back) ? " btn-info" : " grayedout";
    const nextButtonState = (props.navigationButtonsActive.next) ? " btn-info" : " grayedout";

    return(
        <div className={"row mg-0 " + props.headerDisplay}>
            <button
                id="NavigationBarButtonBack"
                className={"col-1 btn border" + backButtonState}
                onClick={() => props.previousPage()}
            >
                <img
                    className="buttonIcon px-1 rotate"
                    src={Resources.images.ARROW.src}
                    alt={Resources.images.ARROW.alt}
                />
                {Resources.strings.BACK}
            </button>
            <Breadcrumbs
                answers = {props.answers}
                currentQuestion = {props.currentQuestion}
                goToPage = {props.goToPage}
            />
            <button
                id="NavigationBarButtonForward"
                className={"col-1 btn border" + nextButtonState}
                onClick={() => props.nextPage()}
            >
                {Resources.strings.NEXT}
                <img
                    className="buttonIcon px-1"
                    src={Resources.images.ARROW.src}
                    alt={Resources.images.ARROW.alt}
                />
            </button>
        </div>
    );
}


function Breadcrumbs(props) {
    const answers = props.answers;
    const crumbLabel = (answers.length > 6)? Resources.strings.CRUMBLABELSHORT : Resources.strings.CRUMBLABEL;

    let crumbs = [];
    for (let i=0; i < answers.length; i++) {
        const breadCrumb = (i+1 === props.currentQuestion)? " CurrentCrumb" : "";
        const crumbValue = (answers[i] === null || answers[i] === "") ? i+1 : i+1 + "✔";

        crumbs.push(
            <div
                key={i}
                className={"col" + breadCrumb}
                onClick={() => {props.goToPage(i+1)}}
            >
                <div className="CrumbLabel">{crumbLabel}</div>
                <span className="CrumbValue">{crumbValue}</span>
            </div>
        );
    }

    return (
        <div className="col-10 text-center bg-gradient-info cursor-pointer">
            <div className="row">
                {crumbs}
            </div>
        </div>
    );
}

