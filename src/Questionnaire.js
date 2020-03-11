import Resources from "./resources/Resources";


export default class Questionnaire {
    answers;
    email;

    constructor(answers = Array(Resources.questions.length).fill(null), email = "") {
        this.answers = answers;
        this.email = email;
    }



    getQuestion(questionIndex) {
        if (questionIndex + 1 === this.getQuestionnaireLength()) { return Resources.strings.EMAIL; }
        return Resources.questions[questionIndex].question;
    }

    getVerboseAnswer(questionIndex) {
        if (questionIndex + 1 === this.getQuestionnaireLength()) { return this.email; }
        return Resources.questions[questionIndex].answers[this.answers[questionIndex]];
    }

    getAnswer(questionIndex) {
        if (questionIndex === this.getQuestionnaireLength()) { return this.email; }
        return this.answers[questionIndex-1];
    }

    getBreadcrumbs() {
        return [...this.answers, this.email];
    }

    getQuestionnaireLength() {
        return this.answers.length + 1;
    }

    getIsNextQuestionBlank(currentQuestion) {
        if (currentQuestion === this.answers.length) {
            return this.email.length <= 0;
        } else {
            return this.answers[currentQuestion] === null;
        }
    }

    getIsCompleted() {
        for (let i = 0; i < this.answers.length; i++) {
            if (this.answers[i] === null) return false;
        }
        // Uncomment this to make email mandatory
        // return this.email.length > 0;
        return true;
    }
}


