/* eslint-disable no-unused-vars */

// Editing readability
import images from "./Images";

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
            question_image: images.BREAKFAST_JAMS,
            answers: ["Blue!", "Red", "Green", "Pink with white dots"],
            answers_images: [
                images.JAM_STRAWBERRY,
                images.JAM_ORANGE,
                images.JAM_STRAWBERRY,
                images.JAM_STRAWBERRY,
            ],
            correct_answer: FIRST
        },
        {
            // Question 2
            question: "What is your favorite question?",
            question_image: null,
            answers: ["This one!", "The previous one.", "The next one!", "What is a question?"],
            answers_images: [
                images.JAM_STRAWBERRY,
                images.JAM_ORANGE,
                images.JAM_ORANGE,
                images.JAM_ORANGE,
            ],
            correct_answer: FOURTH
        },
        {
            // Question 3
            question: "How many answers does this question have?",
            question_image: images.BREAKFAST_JAMS,
            answers: ["One!", "Two", "Three?", "Zero", "Five"],
            answers_images: [
                images.JAM_STRAWBERRY,
                images.JAM_STRAWBERRY,
                images.JAM_STRAWBERRY,
                images.JAM_ORANGE,
                images.JAM_ORANGE,
            ],
            correct_answer: FIFTH
        },
    ];


export default questions;