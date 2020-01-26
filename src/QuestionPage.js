import React from 'react';
import './QuestionPage.css';


export default function QuestionPage(props) {

    return(
        <div className="QuestionPage">
            Question {props.currentQuestion}!
        </div>
    );
}