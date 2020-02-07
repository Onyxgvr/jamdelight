import Resources from "./resources/Resources";


export default class Questionnaire {
    answers;
    email;

    constructor(answers = Array(Resources.questions.length).fill(null), email = "") {
        this.answers = answers;
        this.email = email;
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
        return this.email.length > 0;
    }
}


