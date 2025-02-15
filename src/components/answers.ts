// import {UrlManager} from "../utils/url-manager.ts";
// import {Auth} from "../services/auth.ts";
// import {CustomHttp} from "../services/custom-http.ts";
// import config from "../../config/config";
// import {Test} from "./test.ts";
// import {getTestStore} from "../utils/test-store.ts";
//
// export class Answers  {
//
//     constructor() {
//         this.questionTitleElement = null;
//         this.optionsElement = null;
//         this.quiz = null;
//         this.whocompletedElement = document.getElementById('who-completed');
//
//
//
//         this.routeParams = UrlManager.getQueryParams();
//         if (!this.routeParams.id) {
//             location.href = '#/';
//             return;
//         }
//
//         this.init();
//
//
//
//
//
//
//         const quizId = this.routeParams.id;
//
//
//
//
//         const xhr =new XMLHttpRequest();
//         xhr.open('GET', 'https://testologia.ru/get-quiz?id=' +quizId, false);
//         xhr.send();
//         if (xhr.status === 200 && xhr.responseText) {
//             try {
//                 this.quiz = JSON.parse(xhr.responseText);
//             } catch (e) {
//                 location.href = '#/';
//             }
//
//         } else {
//             location.href = '#/';
//         }
//     }
//
//     async init() {
//         const userInfo = Auth.getUserInfo();
//         if (!userInfo) {
//             location.href = '#/';
//             return;
//         }
//
//         try {
//             const result = await CustomHttp.request(config.host + '/tests/' + this.routeParams.id + '/result/details?userId=' +userInfo.userId);
//
//
//             if (result) {
//                 if (result.error) {
//                     throw new Error(result.error);
//                 }
//
//
//                 this.quiz = result.test;
//
//                 this.startQuiz();
//             }
//         } catch (error) {
//             console.error(error);
//         }
//     }
//
//
//
//         startQuiz() {
//
//             this.questionTitleElement = document.getElementById('title');
//             this.optionsElement = document.getElementById('options');
//             document.getElementById('pre-title-ans').innerText = this.quiz.name;
//             this.optionsElement.innerHTML = '';
//             const userInfo = Auth.getUserInfo();
//             const userEmail= Auth.getUserEmail();
//
//             this.showQuestion();
//         }
//         showQuestion() {
//
//
//             // this.optionsElement.innerHTML = '';
//             // const userInfo = Auth.getUserInfo();
//             // const userEmail= Auth.getUserEmail();
//
//
//                 this.whocompletedElement.innerHTML = 'Тест выполнил <span>' + userInfo.fullName + ', ' + userEmail + '</span>';
//
//
//
//             this.quiz.questions.forEach((question, questionIndex) => {
//                 const questionElement = document.createElement('div');
//                 questionElement.className = 'answers-question-options';
//
//                 const questionTitleElement = document.createElement('div');
//                 questionTitleElement.className = 'answers-question-title';
//                 questionTitleElement.innerHTML = '<span>Вопрос ' + (questionIndex + 1) + ':</span> ' + question.question;
//                 questionElement.appendChild(questionTitleElement);
//
//
//                 question.answers.forEach(answer => {
//                     const optionElement = document.createElement('div');
//                     optionElement.className = 'answers-question-option';
//
//
//                     const inputId = 'answer-' + answer.id;
//                     const inputElement = document.createElement('input');
//                     inputElement.className = 'option-answer';
//                     inputElement.setAttribute('id', inputId);
//                     inputElement.setAttribute('type', 'radio');
//                     inputElement.setAttribute('name', 'answer');
//                     inputElement.setAttribute('value', answer.id );
//
//
//
//
//                     const labelElement = document.createElement('label');
//                     labelElement.setAttribute('for', inputId);
//                     labelElement.innerText = answer.answer;
//
//
//                     if ('correct' in answer) {
//                         if (answer.correct === true) {
//
//                             optionElement.style.color = '#5fdc33';
//                             inputElement.style.border = '6px solid #5fdc33';
//                         } else if (answer.correct === false) {
//
//                             optionElement.style.color = '#dc3333';
//                             inputElement.style.border = '6px solid #dc3333';
//                         }
//                     }
//
//
//
//
//
//                     optionElement.appendChild(inputElement);
//                     optionElement.appendChild(labelElement);
//                     questionElement.appendChild(optionElement)
//             });
//                 this.optionsElement.appendChild(questionElement);
//             });
//         }
//
//     }



import { UrlManager } from "../utils/url-manager";
import { Auth } from "../services/auth";
import { CustomHttp } from "../services/custom-http";
import config from "../../config/config";

export interface Quiz {
    name: string;
    questions: Question[];
}

export interface Question {
    question: string;
    answers: Answer[];
}

export interface Answer {
    id: number;
    answer: string;
    correct?: boolean;
}

export class Answers {
    private questionTitleElement: HTMLElement | null;
    private optionsElement: HTMLElement | null;
    private quiz: Quiz | null;
    private whocompletedElement: HTMLElement | null;
    private routeParams: Record<string, any>;

    constructor() {
        this.questionTitleElement = null;
        this.optionsElement = null;
        this.quiz = null;
        this.whocompletedElement = document.getElementById('who-completed');

        this.routeParams = UrlManager.getQueryParams();
        if (!this.routeParams.id) {
            location.href = '#/';
            return;
        }

        this.init();

        const quizId = this.routeParams.id;

        const xhr = new XMLHttpRequest();
        xhr.open('GET', 'https://testologia.ru/get-quiz?id=' + quizId, false);
        xhr.send();

        if (xhr.status === 200 && xhr.responseText) {
            try {
                this.quiz = JSON.parse(xhr.responseText) as Quiz;
            } catch (e) {
                location.href = '#/';
            }
        } else {
            location.href = '#/';
        }
    }

    private async init(): Promise<void> {
        const userInfo = Auth.getUserInfo();
        if (!userInfo) {
            location.href = '#/';
            return;
        }

        try {
            const result = await CustomHttp.request(config.host + '/tests/' + this.routeParams.id + '/result/details?userId=' + userInfo.userId);

            if (result) {
                if (result.error) {
                    throw new Error(result.error);
                }

                this.quiz = result.test as Quiz;

                this.startQuiz();
            }
        } catch (error) {
            console.error(error);
        }
    }

    private startQuiz(): void {
        this.questionTitleElement = document.getElementById('title');
        this.optionsElement = document.getElementById('options');

        if (this.quiz) {
            document.getElementById('pre-title-ans')!.innerText = this.quiz.name;
            this.optionsElement!.innerHTML = '';
            const userInfo = Auth.getUserInfo();
            const userEmail = Auth.getUserEmail();

            this.showQuestion();
        }
    }

    private showQuestion(): void {
        if (this.quiz && this.whocompletedElement) {
            const userInfo = Auth.getUserInfo();
            const userEmail = Auth.getUserEmail();
            if (userInfo) {
                this.whocompletedElement.innerHTML = `Тест выполнил <span>${userInfo.fullName}, ${userEmail}</span>`;

            }

            this.quiz.questions.forEach((question, questionIndex) => {
                const questionElement = document.createElement('div');
                questionElement.className = 'answers-question-options';

                const questionTitleElement = document.createElement('div');
                questionTitleElement.className = 'answers-question-title';
                questionTitleElement.innerHTML = `<span>Вопрос ${questionIndex + 1}:</span> ${question.question}`;
                questionElement.appendChild(questionTitleElement);

                question.answers.forEach(answer => {
                    const optionElement = document.createElement('div');
                    optionElement.className = 'answers-question-option';

                    const inputId = `answer-${answer.id}`;
                    const inputElement = document.createElement('input');
                    inputElement.className = 'option-answer';
                    inputElement.setAttribute('id', inputId);
                    inputElement.setAttribute('type', 'radio');
                    inputElement.setAttribute('name', 'answer');
                    inputElement.setAttribute('value', answer.id.toString());

                    const labelElement = document.createElement('label');
                    labelElement.setAttribute('for', inputId);
                    labelElement.innerText = answer.answer;

                    if (answer.hasOwnProperty('correct')) {
                        if (answer.correct) {
                            optionElement.style.color = '#5fdc33';
                            inputElement.style.border = '6px solid #5fdc33';
                        } else {
                            optionElement.style.color = '#dc3333';
                            inputElement.style.border = '6px solid #dc3333';
                        }
                    }

                    optionElement.appendChild(inputElement);
                    optionElement.appendChild(labelElement);
                    questionElement.appendChild(optionElement);
                });

                this.optionsElement!.appendChild(questionElement);
            });
        }
    }
}

