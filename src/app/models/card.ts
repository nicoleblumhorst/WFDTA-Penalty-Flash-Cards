export class Card {
    questionText: string;
    questionImage: string;
    answerCode: string;
    answerDescription: string;
    answerIncluding: string;

    constructor(questionText: string,questionImage: string,answerCode: string, answerDescription: string, answerIncluding?: string) {
        this.questionText = questionText;
        this.questionImage = questionImage;
        this.answerCode = answerCode;
        this.answerDescription = answerDescription;
        this.answerIncluding = answerIncluding
    }
}
