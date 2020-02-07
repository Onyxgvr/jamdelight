/* eslint-disable no-unused-vars */

// Editing readability
const FIRST = 0;
const SECOND = 1;
const THIRD = 2;
const FOURTH = 3;
const FIFTH = 4;


//I know there are no _correct_ answers, I just wanted to test various structures to account for future changes.


const questions =
    [
        {
            // Question 1
            question: "What is your favorite color?",
            answers: ["Blue!", "Red", "Green", "Pink with white dots"],
            correct_answer: FIRST
        },
        {
            // Question 2
            question: "What is your favorite question?",
            answers: ["This one!", "The previous one.", "The next one!", "What is a question?"],
            correct_answer: FOURTH
        },
        {
            // Question 3
            question: "How many answers does this question have?",
            answers: ["One!", "Two", "Three?", "Zero", "Five"],
            correct_answer: FIFTH
        },
    ];


export default questions;