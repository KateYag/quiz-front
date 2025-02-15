/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./config/config.ts":
/*!**************************!*\
  !*** ./config/config.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports["default"] = {
    //host: 'http://localhost:3000/api'
    host: 'https://quiz-back-production-c81a.up.railway.app/api'
};


/***/ }),

/***/ "./src/components/answers.ts":
/*!***********************************!*\
  !*** ./src/components/answers.ts ***!
  \***********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Answers = void 0;
var url_manager_1 = __webpack_require__(/*! ../utils/url-manager */ "./src/utils/url-manager.ts");
var auth_1 = __webpack_require__(/*! ../services/auth */ "./src/services/auth.ts");
var custom_http_1 = __webpack_require__(/*! ../services/custom-http */ "./src/services/custom-http.ts");
var config_1 = __importDefault(__webpack_require__(/*! ../../config/config */ "./config/config.ts"));
var Answers = /** @class */ (function () {
    function Answers() {
        this.questionTitleElement = null;
        this.optionsElement = null;
        this.quiz = null;
        this.whocompletedElement = document.getElementById('who-completed');
        this.routeParams = url_manager_1.UrlManager.getQueryParams();
        if (!this.routeParams.id) {
            location.href = '#/';
            return;
        }
        this.init();
        var quizId = this.routeParams.id;
        var xhr = new XMLHttpRequest();
        xhr.open('GET', 'https://testologia.ru/get-quiz?id=' + quizId, false);
        xhr.send();
        if (xhr.status === 200 && xhr.responseText) {
            try {
                this.quiz = JSON.parse(xhr.responseText);
            }
            catch (e) {
                location.href = '#/';
            }
        }
        else {
            location.href = '#/';
        }
    }
    Answers.prototype.init = function () {
        return __awaiter(this, void 0, void 0, function () {
            var userInfo, result, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        userInfo = auth_1.Auth.getUserInfo();
                        if (!userInfo) {
                            location.href = '#/';
                            return [2 /*return*/];
                        }
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, custom_http_1.CustomHttp.request(config_1.default.host + '/tests/' + this.routeParams.id + '/result/details?userId=' + userInfo.userId)];
                    case 2:
                        result = _a.sent();
                        if (result) {
                            if (result.error) {
                                throw new Error(result.error);
                            }
                            this.quiz = result.test;
                            this.startQuiz();
                        }
                        return [3 /*break*/, 4];
                    case 3:
                        error_1 = _a.sent();
                        console.error(error_1);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    Answers.prototype.startQuiz = function () {
        this.questionTitleElement = document.getElementById('title');
        this.optionsElement = document.getElementById('options');
        if (this.quiz) {
            document.getElementById('pre-title-ans').innerText = this.quiz.name;
            this.optionsElement.innerHTML = '';
            var userInfo = auth_1.Auth.getUserInfo();
            var userEmail = auth_1.Auth.getUserEmail();
            this.showQuestion();
        }
    };
    Answers.prototype.showQuestion = function () {
        var _this = this;
        if (this.quiz && this.whocompletedElement) {
            var userInfo = auth_1.Auth.getUserInfo();
            var userEmail = auth_1.Auth.getUserEmail();
            if (userInfo) {
                this.whocompletedElement.innerHTML = "\u0422\u0435\u0441\u0442 \u0432\u044B\u043F\u043E\u043B\u043D\u0438\u043B <span>".concat(userInfo.fullName, ", ").concat(userEmail, "</span>");
            }
            this.quiz.questions.forEach(function (question, questionIndex) {
                var questionElement = document.createElement('div');
                questionElement.className = 'answers-question-options';
                var questionTitleElement = document.createElement('div');
                questionTitleElement.className = 'answers-question-title';
                questionTitleElement.innerHTML = "<span>\u0412\u043E\u043F\u0440\u043E\u0441 ".concat(questionIndex + 1, ":</span> ").concat(question.question);
                questionElement.appendChild(questionTitleElement);
                question.answers.forEach(function (answer) {
                    var optionElement = document.createElement('div');
                    optionElement.className = 'answers-question-option';
                    var inputId = "answer-".concat(answer.id);
                    var inputElement = document.createElement('input');
                    inputElement.className = 'option-answer';
                    inputElement.setAttribute('id', inputId);
                    inputElement.setAttribute('type', 'radio');
                    inputElement.setAttribute('name', 'answer');
                    inputElement.setAttribute('value', answer.id.toString());
                    var labelElement = document.createElement('label');
                    labelElement.setAttribute('for', inputId);
                    labelElement.innerText = answer.answer;
                    if (answer.hasOwnProperty('correct')) {
                        if (answer.correct) {
                            optionElement.style.color = '#5fdc33';
                            inputElement.style.border = '6px solid #5fdc33';
                        }
                        else {
                            optionElement.style.color = '#dc3333';
                            inputElement.style.border = '6px solid #dc3333';
                        }
                    }
                    optionElement.appendChild(inputElement);
                    optionElement.appendChild(labelElement);
                    questionElement.appendChild(optionElement);
                });
                _this.optionsElement.appendChild(questionElement);
            });
        }
    };
    return Answers;
}());
exports.Answers = Answers;


/***/ }),

/***/ "./src/components/choice.ts":
/*!**********************************!*\
  !*** ./src/components/choice.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Choice = void 0;
var url_manager_1 = __webpack_require__(/*! ../utils/url-manager */ "./src/utils/url-manager.ts");
var custom_http_1 = __webpack_require__(/*! ../services/custom-http */ "./src/services/custom-http.ts");
var config_1 = __importDefault(__webpack_require__(/*! ../../config/config */ "./config/config.ts"));
var auth_1 = __webpack_require__(/*! ../services/auth */ "./src/services/auth.ts");
var Choice = /** @class */ (function () {
    function Choice() {
        this.quizzes = [];
        this.testResult = null;
        this.routeParams = url_manager_1.UrlManager.getQueryParams();
        this.init();
    }
    Choice.prototype.init = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, error_1, userInfo, result, error_2;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        _a = this;
                        return [4 /*yield*/, custom_http_1.CustomHttp.request(config_1.default.host + '/tests')];
                    case 1:
                        _a.quizzes = _b.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        error_1 = _b.sent();
                        console.log(error_1);
                        return [2 /*return*/];
                    case 3:
                        userInfo = auth_1.Auth.getUserInfo();
                        if (!userInfo) return [3 /*break*/, 7];
                        _b.label = 4;
                    case 4:
                        _b.trys.push([4, 6, , 7]);
                        return [4 /*yield*/, custom_http_1.CustomHttp.request(config_1.default.host + '/tests/results?userId=' + userInfo.userId)];
                    case 5:
                        result = _b.sent();
                        if (result) {
                            if (result.error !== undefined) {
                                throw new Error(result.message);
                            }
                            this.testResult = result;
                        }
                        return [3 /*break*/, 7];
                    case 6:
                        error_2 = _b.sent();
                        console.log(error_2);
                        return [2 /*return*/];
                    case 7:
                        this.processQuizzes();
                        return [2 /*return*/];
                }
            });
        });
    };
    Choice.prototype.processQuizzes = function () {
        var _this = this;
        var choiceOptionsElement = document.getElementById('choice-options');
        if (this.quizzes && this.quizzes.length > 0 && choiceOptionsElement) {
            this.quizzes.forEach(function (quiz) {
                var that = _this;
                var choiceOptionElement = document.createElement('div');
                choiceOptionElement.className = 'choice-option';
                choiceOptionElement.setAttribute('data-id', quiz.id.toString());
                choiceOptionElement.onclick = function () {
                    that.chooseQuiz(this);
                };
                var choiceOptionTextElement = document.createElement('div');
                choiceOptionTextElement.className = 'choice-option-text';
                choiceOptionTextElement.innerText = quiz.name;
                var choiceOptionArrowElement = document.createElement('div');
                choiceOptionArrowElement.className = 'choice-option-arrow';
                if (_this.testResult) {
                    var result = _this.testResult.find(function (item) { return item.testId === quiz.id; });
                    if (result) {
                        var choiceOptionResultElement = document.createElement('div');
                        choiceOptionResultElement.className = 'choice-option-result';
                        choiceOptionResultElement.innerHTML = '<div>Результат</div><div>' + result.score + '/' + result.total + '</div>';
                        choiceOptionElement.appendChild(choiceOptionResultElement);
                    }
                }
                var choiceOptionImageElement = document.createElement('img');
                choiceOptionImageElement.setAttribute('src', '/images/arrow.png');
                choiceOptionImageElement.setAttribute('alt', 'arrow');
                choiceOptionArrowElement.appendChild(choiceOptionImageElement);
                choiceOptionElement.appendChild(choiceOptionTextElement);
                choiceOptionElement.appendChild(choiceOptionArrowElement);
                choiceOptionsElement.appendChild(choiceOptionElement);
            });
        }
    };
    Choice.prototype.chooseQuiz = function (element) {
        var dataId = element.getAttribute('data-id');
        if (dataId) {
            location.href = '#/test?id=' + dataId;
        }
    };
    return Choice;
}());
exports.Choice = Choice;


/***/ }),

/***/ "./src/components/form.ts":
/*!********************************!*\
  !*** ./src/components/form.ts ***!
  \********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Form = void 0;
var custom_http_1 = __webpack_require__(/*! ../services/custom-http */ "./src/services/custom-http.ts");
var auth_1 = __webpack_require__(/*! ../services/auth */ "./src/services/auth.ts");
var config_1 = __importDefault(__webpack_require__(/*! ../../config/config */ "./config/config.ts"));
var Form = /** @class */ (function () {
    function Form(page) {
        this.fields = [];
        this.agreeElement = null;
        this.processElement = null;
        this.page = page;
        var accessToken = localStorage.getItem(auth_1.Auth.accessTokenKey);
        if (accessToken) {
            location.href = '#/choice';
            return;
        }
        this.fields = [
            {
                name: 'email',
                id: 'email',
                element: null,
                regex: /^\w+([\.-]\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                valid: false,
            },
            {
                name: 'password',
                id: 'password',
                element: null,
                regex: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/,
                valid: false,
            },
        ];
        if (this.page === 'sign-up') {
            this.fields.unshift({
                name: 'name',
                id: 'name',
                element: null,
                regex: /^[А-Яа-я+]+\s*$/,
                valid: false,
            }, {
                name: 'lastName',
                id: 'last-name',
                element: null,
                regex: /^[А-Яа-я+]+\s*$/,
                valid: false,
            });
        }
        var that = this;
        this.fields.forEach(function (item) {
            item.element = document.getElementById(item.id);
            if (item.element) {
                item.element.onchange = function () {
                    that.validateField.call(that, item, this);
                };
            }
        });
        this.processElement = document.getElementById('process');
        if (this.processElement) {
            this.processElement.onclick = function () {
                that.processForm();
            };
        }
        if (this.page === 'sign-up') {
            this.agreeElement = document.getElementById('agree');
            if (this.agreeElement) {
                this.agreeElement.onchange = function () {
                    that.validateForm();
                };
            }
        }
    }
    Form.prototype.validateField = function (field, element) {
        if (element.parentNode) {
            if (!element.value || !element.value.match(field.regex)) {
                element.parentNode.style.borderColor = 'red';
                field.valid = false;
            }
            else {
                element.parentNode.removeAttribute('style');
                field.valid = true;
            }
        }
        this.validateForm();
    };
    Form.prototype.validateForm = function () {
        var validForm = this.fields.every(function (item) { return item.valid; });
        var isValid = this.agreeElement ? this.agreeElement.checked && validForm : validForm;
        if (this.processElement) {
            if (isValid) {
                this.processElement.removeAttribute('disabled');
            }
            else {
                this.processElement.setAttribute('disabled', 'disabled');
            }
        }
        return isValid;
    };
    Form.prototype.processForm = function () {
        return __awaiter(this, void 0, void 0, function () {
            var email, password, result, error_1, result, error_2;
            var _a, _b, _c, _d, _e, _f, _g, _h;
            return __generator(this, function (_j) {
                switch (_j.label) {
                    case 0:
                        if (!this.validateForm()) return [3 /*break*/, 7];
                        email = (_b = (_a = this.fields.find(function (item) { return item.name === 'email'; })) === null || _a === void 0 ? void 0 : _a.element) === null || _b === void 0 ? void 0 : _b.value;
                        password = (_d = (_c = this.fields.find(function (item) { return item.name === 'password'; })) === null || _c === void 0 ? void 0 : _c.element) === null || _d === void 0 ? void 0 : _d.value;
                        if (!(this.page === 'sign-up')) return [3 /*break*/, 4];
                        _j.label = 1;
                    case 1:
                        _j.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, custom_http_1.CustomHttp.request(config_1.default.host + '/signup', 'POST', {
                                name: (_f = (_e = this.fields.find(function (item) { return item.name === 'name'; })) === null || _e === void 0 ? void 0 : _e.element) === null || _f === void 0 ? void 0 : _f.value,
                                lastName: (_h = (_g = this.fields.find(function (item) { return item.name === 'lastName'; })) === null || _g === void 0 ? void 0 : _g.element) === null || _h === void 0 ? void 0 : _h.value,
                                email: email,
                                password: password,
                            })];
                    case 2:
                        result = _j.sent();
                        if (result) {
                            if (result.error || !result.user) {
                                throw new Error(result.message);
                            }
                        }
                        return [3 /*break*/, 4];
                    case 3:
                        error_1 = _j.sent();
                        console.log(error_1);
                        return [2 /*return*/];
                    case 4:
                        _j.trys.push([4, 6, , 7]);
                        return [4 /*yield*/, custom_http_1.CustomHttp.request(config_1.default.host + '/login', 'POST', {
                                email: email,
                                password: password,
                            })];
                    case 5:
                        result = _j.sent();
                        if (result) {
                            if (result.error || !result.accessToken || !result.refreshToken || !result.fullName || !result.userId) {
                                throw new Error(result.message);
                            }
                            auth_1.Auth.setTokens(result.accessToken, result.refreshToken);
                            auth_1.Auth.setUserInfo({
                                fullName: result.fullName,
                                userId: result.userId,
                            });
                            if (email) {
                                localStorage.setItem('userEmail', email);
                            }
                            location.href = '#/choice';
                        }
                        return [3 /*break*/, 7];
                    case 6:
                        error_2 = _j.sent();
                        console.log(error_2);
                        return [3 /*break*/, 7];
                    case 7: return [2 /*return*/];
                }
            });
        });
    };
    return Form;
}());
exports.Form = Form;


/***/ }),

/***/ "./src/components/result.ts":
/*!**********************************!*\
  !*** ./src/components/result.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Result = void 0;
var url_manager_1 = __webpack_require__(/*! ../utils/url-manager */ "./src/utils/url-manager.ts");
var custom_http_1 = __webpack_require__(/*! ../services/custom-http */ "./src/services/custom-http.ts");
var config_1 = __importDefault(__webpack_require__(/*! ../../config/config */ "./config/config.ts"));
var auth_1 = __webpack_require__(/*! ../services/auth */ "./src/services/auth.ts");
var Result = /** @class */ (function () {
    function Result() {
        var _this = this;
        this.routeParams = url_manager_1.UrlManager.getQueryParams();
        this.init();
        var chosenAnswers = this.routeParams.chosenAnswers;
        var xhr = new XMLHttpRequest();
        xhr.open('POST', 'https://testologia.ru/pass-quiz?id=' + this.routeParams.id, false);
        xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
        xhr.send(JSON.stringify({
            name: this.routeParams.name,
            lastName: this.routeParams.lastName,
            email: this.routeParams.email,
            results: chosenAnswers ? chosenAnswers.split(',').map(Number) : []
        }));
        if (xhr.status === 200 && xhr.responseText) {
            var result = null;
            try {
                result = JSON.parse(xhr.responseText);
            }
            catch (e) {
                location.href = '/#';
            }
            if (result) {
                var answersBtn = document.getElementById('answers-btn');
                if (answersBtn) {
                    answersBtn.addEventListener('click', function (event) {
                        event.preventDefault();
                        // location.href = '#/answers?id=' + this.routeParams.id + '&chosenAnswers=' + chosenAnswers;
                        location.href = '#/answers?id=' + _this.routeParams.id;
                    });
                }
            }
        }
        else {
            location.href = '#/';
        }
    }
    Result.prototype.init = function () {
        return __awaiter(this, void 0, void 0, function () {
            var userInfo, result, resultScoreElement, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        userInfo = auth_1.Auth.getUserInfo();
                        if (!userInfo) {
                            location.href = '#/';
                            return [2 /*return*/];
                        }
                        if (!this.routeParams.id) return [3 /*break*/, 4];
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, custom_http_1.CustomHttp.request(config_1.default.host + '/tests/' + this.routeParams.id + '/result?userId=' + userInfo.userId)];
                    case 2:
                        result = _a.sent();
                        if (result) {
                            if (result.error) {
                                throw new Error(result.message);
                            }
                            resultScoreElement = document.getElementById('result-score');
                            if (resultScoreElement) {
                                resultScoreElement.innerText = result.score + '/' + result.total;
                            }
                            return [2 /*return*/];
                        }
                        return [3 /*break*/, 4];
                    case 3:
                        error_1 = _a.sent();
                        console.log(error_1);
                        return [3 /*break*/, 4];
                    case 4:
                        location.href = '#/';
                        return [2 /*return*/];
                }
            });
        });
    };
    return Result;
}());
exports.Result = Result;


/***/ }),

/***/ "./src/components/test.ts":
/*!********************************!*\
  !*** ./src/components/test.ts ***!
  \********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Test = void 0;
var url_manager_1 = __webpack_require__(/*! ../utils/url-manager */ "./src/utils/url-manager.ts");
var custom_http_1 = __webpack_require__(/*! ../services/custom-http */ "./src/services/custom-http.ts");
var config_1 = __importDefault(__webpack_require__(/*! ../../config/config */ "./config/config.ts"));
var auth_1 = __webpack_require__(/*! ../services/auth */ "./src/services/auth.ts");
var test_store_1 = __webpack_require__(/*! ../utils/test-store */ "./src/utils/test-store.ts");
var action_test_type_1 = __webpack_require__(/*! ../types/action-test.type */ "./src/types/action-test.type.ts");
var Test = /** @class */ (function () {
    function Test() {
        this.interval = 0;
        this.progressBarElement = null;
        this.nextButtonElement = null;
        this.passButtonElement = null;
        this.prevButtonElement = null;
        this.questionTitleElement = null;
        this.optionsElement = null;
        this.quiz = null;
        this.currentQuestionIndex = 1;
        this.userResult = [];
        this.routeParams = url_manager_1.UrlManager.getQueryParams();
        this.init();
    }
    Test.prototype.init = function () {
        return __awaiter(this, void 0, void 0, function () {
            var result, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.routeParams.id) return [3 /*break*/, 4];
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, custom_http_1.CustomHttp.request(config_1.default.host + '/tests/' + this.routeParams.id)];
                    case 2:
                        result = _a.sent();
                        if (result) {
                            if (result.error !== undefined) {
                                throw new Error(result.message);
                            }
                            this.quiz = result;
                            (0, test_store_1.setTestStore)({ quiz: this.quiz });
                            this.startQuiz();
                        }
                        return [3 /*break*/, 4];
                    case 3:
                        error_1 = _a.sent();
                        console.log(error_1);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    Test.prototype.startQuiz = function () {
        var _this = this;
        if (!this.quiz) {
            return;
        }
        this.progressBarElement = document.getElementById('progress-bar');
        this.questionTitleElement = document.getElementById('title');
        this.optionsElement = document.getElementById('options');
        this.nextButtonElement = document.getElementById('next');
        if (this.nextButtonElement) {
            this.nextButtonElement.onclick = function () { return _this.move(action_test_type_1.ActionTestType.next); };
        }
        this.passButtonElement = document.getElementById('pass');
        if (this.passButtonElement) {
            this.passButtonElement.onclick = function () { return _this.move(action_test_type_1.ActionTestType.pass); };
        }
        var preTitleElement = document.getElementById('pre-title');
        if (preTitleElement) {
            preTitleElement.innerText = this.quiz.name;
        }
        this.prevButtonElement = document.getElementById('prev');
        if (this.prevButtonElement) {
            this.prevButtonElement.onclick = function () { return _this.move.bind(action_test_type_1.ActionTestType.prev); };
        }
        this.prepareProgressBar();
        this.showQuestion();
        var timerElement = document.getElementById('timer');
        var seconds = 59;
        var that = this;
        this.interval = window.setInterval(function () {
            seconds--;
            if (timerElement) {
                timerElement.innerText = seconds.toString();
            }
            if (seconds === 0) {
                clearInterval(that.interval);
                that.complete();
            }
        }.bind(this), 1000);
    };
    Test.prototype.prepareProgressBar = function () {
        if (!this.quiz)
            return;
        for (var i = 0; i < this.quiz.questions.length; i++) {
            var itemElement = document.createElement('div');
            itemElement.className = 'test-progress-bar-item ' + (i === 0 ? 'active' : '');
            var itemCircleElement = document.createElement('div');
            itemCircleElement.className = 'test-progress-bar-item-circle';
            var itemTextElement = document.createElement('div');
            itemTextElement.className = 'test-progress-bar-item-text';
            itemTextElement.innerText = 'Вопрос ' + (i + 1);
            itemElement.appendChild(itemCircleElement);
            itemElement.appendChild(itemTextElement);
            if (this.progressBarElement) {
                this.progressBarElement.appendChild(itemElement);
            }
        }
    };
    Test.prototype.showQuestion = function () {
        var _this = this;
        if (!this.quiz)
            return;
        var activeQuestion = this.quiz.questions[this.currentQuestionIndex - 1];
        if (this.questionTitleElement) {
            this.questionTitleElement.innerHTML = '<span>Вопрос ' + this.currentQuestionIndex + ': </span>' + activeQuestion.question;
        }
        if (this.optionsElement) {
            this.optionsElement.innerHTML = '';
        }
        var that = this;
        var chosenOption = this.userResult.find(function (item) { return item.questionId === activeQuestion.id; });
        activeQuestion.answers.forEach(function (answer) {
            var optionElement = document.createElement('div');
            optionElement.className = 'test-question-option';
            var inputId = 'answer-' + answer.id;
            var inputElement = document.createElement('input');
            inputElement.className = 'option-answer';
            inputElement.setAttribute('id', inputId);
            inputElement.setAttribute('type', 'radio');
            inputElement.setAttribute('name', 'answer');
            inputElement.setAttribute('value', answer.id.toString());
            if (chosenOption && chosenOption.chosenAnswerId === answer.id) {
                inputElement.setAttribute('checked', 'checked');
            }
            inputElement.onchange = function () {
                that.chooseAnswer();
            };
            var labelElement = document.createElement('label');
            labelElement.setAttribute('for', inputId);
            labelElement.innerText = answer.answer;
            optionElement.appendChild(inputElement);
            optionElement.appendChild(labelElement);
            if (_this.optionsElement) {
                _this.optionsElement.appendChild(optionElement);
            }
        });
        if (this.nextButtonElement) {
            if (chosenOption && chosenOption.chosenAnswerId) {
                this.nextButtonElement.removeAttribute('disabled');
            }
            else {
                this.nextButtonElement.setAttribute('disabled', 'disabled');
            }
        }
        if (this.nextButtonElement) {
            if (this.currentQuestionIndex === this.quiz.questions.length) {
                this.nextButtonElement.innerText = 'Завершить';
            }
            else {
                this.nextButtonElement.innerText = 'Дальше';
            }
        }
        if (this.prevButtonElement) {
            if (this.currentQuestionIndex > 1) {
                this.prevButtonElement.removeAttribute('disabled');
            }
            else {
                this.prevButtonElement.setAttribute('disabled', 'disabled');
            }
        }
    };
    Test.prototype.chooseAnswer = function () {
        if (this.nextButtonElement) {
            this.nextButtonElement.removeAttribute('disabled');
        }
    };
    Test.prototype.move = function (action) {
        var _this = this;
        if (!this.quiz)
            return;
        var activeQuestion = this.quiz.questions[this.currentQuestionIndex - 1];
        var chosenAnswer = Array.from(document.getElementsByClassName('option-answer')).find(function (element) {
            return element.checked;
        });
        var chosenAnswerId = null;
        if (chosenAnswer && chosenAnswer.value) {
            chosenAnswerId = Number(chosenAnswer.value);
        }
        var existingResult = this.userResult.find(function (item) {
            return item.questionId === activeQuestion.id;
        });
        if (chosenAnswerId) {
            if (existingResult) {
                existingResult.chosenAnswerId = chosenAnswerId;
            }
            else {
                this.userResult.push({
                    questionId: activeQuestion.id,
                    chosenAnswerId: chosenAnswerId
                });
            }
        }
        if (action === action_test_type_1.ActionTestType.next || action === action_test_type_1.ActionTestType.pass) {
            this.currentQuestionIndex++;
        }
        else {
            this.currentQuestionIndex--;
        }
        if (this.currentQuestionIndex > this.quiz.questions.length) {
            clearInterval(this.interval);
            this.complete();
            return;
        }
        if (this.progressBarElement) {
            Array.from(this.progressBarElement.children).forEach(function (item, index) {
                var currentItemIndex = index + 1;
                item.classList.remove('complete');
                item.classList.remove('active');
                if (currentItemIndex === _this.currentQuestionIndex) {
                    item.classList.add('active');
                }
                else if (currentItemIndex < _this.currentQuestionIndex) {
                    item.classList.add('complete');
                }
            });
        }
        this.showQuestion();
    };
    Test.prototype.complete = function () {
        return __awaiter(this, void 0, void 0, function () {
            var userInfo, result, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        userInfo = auth_1.Auth.getUserInfo();
                        if (!userInfo) {
                            location.href = '#/';
                            return [2 /*return*/];
                        }
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        (0, test_store_1.setTestStore)({ userResult: this.userResult });
                        return [4 /*yield*/, custom_http_1.CustomHttp.request(config_1.default.host + '/tests/' + this.routeParams.id + '/pass', 'POST', {
                                userId: userInfo.userId,
                                results: this.userResult
                            })
                            //const chosenAnswersIds = this.userResult.map(result => result.chosenAnswerId).join(',');
                            //const url = new URL(window.location.href);
                            //url.searchParams.set('chosenAnswers', chosenAnswersIds);
                            //  this.routeParams.chosenAnswers;
                        ];
                    case 2:
                        result = _a.sent();
                        //const chosenAnswersIds = this.userResult.map(result => result.chosenAnswerId).join(',');
                        //const url = new URL(window.location.href);
                        //url.searchParams.set('chosenAnswers', chosenAnswersIds);
                        //  this.routeParams.chosenAnswers;
                        if (result) {
                            if (result.error) {
                                throw new Error(result.message);
                            }
                            location.href = '#/result?id=' + this.routeParams.id;
                        }
                        return [3 /*break*/, 4];
                    case 3:
                        error_2 = _a.sent();
                        console.log(error_2);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    return Test;
}());
exports.Test = Test;


/***/ }),

/***/ "./src/router.ts":
/*!***********************!*\
  !*** ./src/router.ts ***!
  \***********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Router = void 0;
var form_1 = __webpack_require__(/*! ./components/form */ "./src/components/form.ts");
var answers_1 = __webpack_require__(/*! ./components/answers */ "./src/components/answers.ts");
var result_1 = __webpack_require__(/*! ./components/result */ "./src/components/result.ts");
var choice_1 = __webpack_require__(/*! ./components/choice */ "./src/components/choice.ts");
var test_1 = __webpack_require__(/*! ./components/test */ "./src/components/test.ts");
var auth_1 = __webpack_require__(/*! ./services/auth */ "./src/services/auth.ts");
var Router = /** @class */ (function () {
    function Router() {
        this.contentElement = document.getElementById('content');
        this.stylesElement = document.getElementById('styles');
        this.titleElement = document.getElementById('page-title');
        this.profileElement = document.getElementById('profile');
        this.profileFullNameElement = document.getElementById('profile-full-name');
        this.routes = [
            {
                route: '#/',
                title: 'Главная',
                template: 'templates/index.html',
                styles: 'styles/index.css',
                load: function () {
                }
            },
            {
                route: '#/signup',
                title: 'Регистрация',
                template: 'templates/signup.html',
                styles: 'styles/form.css',
                load: function () {
                    new form_1.Form('sign-up');
                }
            },
            {
                route: '#/login',
                title: 'Вход в систему',
                template: 'templates/login.html',
                styles: 'styles/form.css',
                load: function () {
                    new form_1.Form('login');
                }
            },
            {
                route: '#/choice',
                title: 'Выбор теста',
                template: 'templates/choice.html',
                styles: 'styles/choice.css',
                load: function () {
                    new choice_1.Choice();
                }
            },
            {
                route: '#/test',
                title: 'Прохождение теста',
                template: 'templates/test.html',
                styles: 'styles/test.css',
                load: function () {
                    new test_1.Test();
                }
            },
            {
                route: '#/result',
                title: 'Результат теста',
                template: 'templates/result.html',
                styles: 'styles/result.css',
                load: function () {
                    new result_1.Result();
                }
            },
            {
                route: '#/answers',
                title: 'Ответы теста',
                template: 'templates/answers.html',
                styles: 'styles/answers.css',
                load: function () {
                    new answers_1.Answers();
                }
            },
        ];
    }
    Router.prototype.openRoute = function () {
        return __awaiter(this, void 0, void 0, function () {
            var urlRoute, result, newRoute, _a, userInfo, accessToken;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        urlRoute = window.location.hash.split('?')[0];
                        if (!(urlRoute === '#/logout')) return [3 /*break*/, 2];
                        return [4 /*yield*/, auth_1.Auth.logout()];
                    case 1:
                        result = _b.sent();
                        if (result) {
                            window.location.href = '#/';
                            return [2 /*return*/];
                        }
                        _b.label = 2;
                    case 2:
                        newRoute = this.routes.find(function (item) {
                            return item.route === urlRoute;
                        });
                        if (!newRoute) {
                            window.location.href = '#/';
                            return [2 /*return*/];
                        }
                        if (!this.contentElement || !this.stylesElement || !this.titleElement || !this.profileElement || !this.profileFullNameElement) {
                            if (urlRoute === '#/') {
                                return [2 /*return*/];
                            }
                            else {
                                window.location.href = '#/';
                                return [2 /*return*/];
                            }
                        }
                        _a = this.contentElement;
                        return [4 /*yield*/, fetch(newRoute.template).then(function (response) { return response.text(); })];
                    case 3:
                        _a.innerHTML =
                            _b.sent();
                        this.stylesElement.setAttribute('href', newRoute.styles);
                        this.titleElement.innerText = newRoute.title;
                        userInfo = auth_1.Auth.getUserInfo();
                        accessToken = localStorage.getItem(auth_1.Auth.accessTokenKey);
                        if (userInfo && accessToken) {
                            this.profileElement.style.display = 'flex';
                            this.profileFullNameElement.innerText = userInfo.fullName;
                        }
                        else {
                            this.profileElement.style.display = 'none';
                        }
                        newRoute.load();
                        return [2 /*return*/];
                }
            });
        });
    };
    return Router;
}());
exports.Router = Router;


/***/ }),

/***/ "./src/services/auth.ts":
/*!******************************!*\
  !*** ./src/services/auth.ts ***!
  \******************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Auth = void 0;
var config_1 = __importDefault(__webpack_require__(/*! ../../config/config */ "./config/config.ts"));
var Auth = /** @class */ (function () {
    function Auth() {
    }
    Auth.processUnauthorizedResponse = function () {
        return __awaiter(this, void 0, void 0, function () {
            var refreshToken, response, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        refreshToken = localStorage.getItem(this.refreshTokenKey);
                        if (!refreshToken) return [3 /*break*/, 3];
                        return [4 /*yield*/, fetch(config_1.default.host + '/refresh', {
                                method: 'POST',
                                headers: {
                                    'Content-type': 'application/json',
                                    'Accept': 'application/json',
                                },
                                body: JSON.stringify({ refreshToken: refreshToken })
                            })];
                    case 1:
                        response = _a.sent();
                        if (!(response && response.status === 200)) return [3 /*break*/, 3];
                        return [4 /*yield*/, response.json()];
                    case 2:
                        result = _a.sent();
                        if (result && !result.error && result.accessToken && result.refreshToken) {
                            this.setTokens(result.accessToken, result.refreshToken);
                            return [2 /*return*/, true];
                        }
                        _a.label = 3;
                    case 3:
                        this.removeTokens();
                        location.href = '#/';
                        return [2 /*return*/, false];
                }
            });
        });
    };
    Auth.logout = function () {
        return __awaiter(this, void 0, void 0, function () {
            var refreshToken, response, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        refreshToken = localStorage.getItem(this.refreshTokenKey);
                        if (!refreshToken) return [3 /*break*/, 3];
                        return [4 /*yield*/, fetch(config_1.default.host + '/logout', {
                                method: 'POST',
                                headers: {
                                    'Content-type': 'application/json',
                                    'Accept': 'application/json',
                                },
                                body: JSON.stringify({ refreshToken: refreshToken })
                            })];
                    case 1:
                        response = _a.sent();
                        if (!(response && response.status === 200)) return [3 /*break*/, 3];
                        return [4 /*yield*/, response.json()];
                    case 2:
                        result = _a.sent();
                        if (result && !result.error) {
                            Auth.removeTokens();
                            localStorage.removeItem(this.userInfoKey);
                            localStorage.removeItem(this.userEmailKey);
                            return [2 /*return*/, true];
                        }
                        _a.label = 3;
                    case 3: return [2 /*return*/, false];
                }
            });
        });
    };
    Auth.setTokens = function (accessToken, refreshToken) {
        localStorage.setItem(this.accessTokenKey, accessToken);
        localStorage.setItem(this.refreshTokenKey, refreshToken);
    };
    Auth.removeTokens = function () {
        localStorage.removeItem(this.accessTokenKey);
        localStorage.removeItem(this.refreshTokenKey);
    };
    Auth.setUserInfo = function (info) {
        localStorage.setItem(this.userInfoKey, JSON.stringify(info));
        if (info.email) {
            localStorage.setItem(this.userEmailKey, info.email);
        }
    };
    Auth.getUserInfo = function () {
        var userInfo = localStorage.getItem(this.userInfoKey);
        if (userInfo) {
            return JSON.parse(userInfo);
        }
        return null;
    };
    Auth.getUserEmail = function () {
        return localStorage.getItem(this.userEmailKey);
    };
    Auth.accessTokenKey = 'accessToken';
    Auth.refreshTokenKey = 'refreshToken';
    Auth.userInfoKey = 'userInfo';
    Auth.userEmailKey = 'userEmail';
    return Auth;
}());
exports.Auth = Auth;


/***/ }),

/***/ "./src/services/custom-http.ts":
/*!*************************************!*\
  !*** ./src/services/custom-http.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CustomHttp = void 0;
var auth_1 = __webpack_require__(/*! ./auth */ "./src/services/auth.ts");
var CustomHttp = /** @class */ (function () {
    function CustomHttp() {
    }
    CustomHttp.request = function (url_1) {
        return __awaiter(this, arguments, void 0, function (url, method, body) {
            var params, token, response, result;
            if (method === void 0) { method = "GET"; }
            if (body === void 0) { body = null; }
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        params = {
                            method: method,
                            headers: {
                                'Content-type': 'application/json',
                                'Accept': 'application/json',
                            }
                        };
                        token = localStorage.getItem(auth_1.Auth.accessTokenKey);
                        if (token) {
                            params.headers['x-access-token'] = token;
                        }
                        if (body) {
                            params.body = JSON.stringify(body);
                        }
                        return [4 /*yield*/, fetch(url, params)];
                    case 1:
                        response = _a.sent();
                        if (!(response.status < 200 || response.status >= 300)) return [3 /*break*/, 6];
                        if (!(response.status === 401)) return [3 /*break*/, 5];
                        return [4 /*yield*/, auth_1.Auth.processUnauthorizedResponse()];
                    case 2:
                        result = _a.sent();
                        if (!result) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.request(url, method, body)];
                    case 3: return [2 /*return*/, _a.sent()];
                    case 4: return [2 /*return*/, null];
                    case 5: throw new Error(response.statusText);
                    case 6: return [4 /*yield*/, response.json()];
                    case 7: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    return CustomHttp;
}());
exports.CustomHttp = CustomHttp;


/***/ }),

/***/ "./src/types/action-test.type.ts":
/*!***************************************!*\
  !*** ./src/types/action-test.type.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ActionTestType = void 0;
var ActionTestType;
(function (ActionTestType) {
    ActionTestType["next"] = "next";
    ActionTestType["prev"] = "prev";
    ActionTestType["pass"] = "pass";
})(ActionTestType || (exports.ActionTestType = ActionTestType = {}));


/***/ }),

/***/ "./src/utils/test-store.ts":
/*!*********************************!*\
  !*** ./src/utils/test-store.ts ***!
  \*********************************/
/***/ (function(__unused_webpack_module, exports) {


var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getTestStore = getTestStore;
exports.setTestStore = setTestStore;
// Инициализация тестового хранилища
var testStore = {
    quiz: null,
    userResult: []
};
// Функция для получения тестового хранилища
function getTestStore() {
    return testStore;
}
// Функция для установки нового состояния в тестовом хранилище
function setTestStore(newStore) {
    testStore = __assign(__assign({}, testStore), newStore);
}


/***/ }),

/***/ "./src/utils/url-manager.ts":
/*!**********************************!*\
  !*** ./src/utils/url-manager.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UrlManager = void 0;
var UrlManager = /** @class */ (function () {
    function UrlManager() {
    }
    UrlManager.getQueryParams = function () {
        var qs = document.location.hash.split('+').join(' ');
        var params = {}, tokens, re = /[?&]([^=]+)=([^&]*)/g;
        while (tokens = re.exec(qs)) {
            params[decodeURIComponent(tokens[1])] = decodeURIComponent(tokens[2]);
        }
        return params;
    };
    return UrlManager;
}());
exports.UrlManager = UrlManager;


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;
/*!********************!*\
  !*** ./src/app.ts ***!
  \********************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
var router_1 = __webpack_require__(/*! ./router */ "./src/router.ts");
var App = /** @class */ (function () {
    function App() {
        this.router = new router_1.Router();
        window.addEventListener('DOMContentLoaded', this.handleRouteChanging.bind(this));
        window.addEventListener('popstate', this.handleRouteChanging.bind(this));
    }
    App.prototype.handleRouteChanging = function () {
        this.router.openRoute();
    };
    return App;
}());
(new App());

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7Ozs7Ozs7O0FDdEJBLHNFQUFnQztBQUVoQztJQUVJO1FBQ0ksSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLGVBQU0sRUFBRSxDQUFDO1FBQzNCLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxrQkFBa0IsRUFBRSxJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDakYsTUFBTSxDQUFDLGdCQUFnQixDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDN0UsQ0FBQztJQUVPLGlDQUFtQixHQUEzQjtRQUNJLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDNUIsQ0FBQztJQUNMLFVBQUM7QUFBRCxDQUFDO0FBRUQsQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9xdWl6LTMvLi9jb25maWcvY29uZmlnLnRzIiwid2VicGFjazovL3F1aXotMy8uL3NyYy9jb21wb25lbnRzL2Fuc3dlcnMudHMiLCJ3ZWJwYWNrOi8vcXVpei0zLy4vc3JjL2NvbXBvbmVudHMvY2hvaWNlLnRzIiwid2VicGFjazovL3F1aXotMy8uL3NyYy9jb21wb25lbnRzL2Zvcm0udHMiLCJ3ZWJwYWNrOi8vcXVpei0zLy4vc3JjL2NvbXBvbmVudHMvcmVzdWx0LnRzIiwid2VicGFjazovL3F1aXotMy8uL3NyYy9jb21wb25lbnRzL3Rlc3QudHMiLCJ3ZWJwYWNrOi8vcXVpei0zLy4vc3JjL3JvdXRlci50cyIsIndlYnBhY2s6Ly9xdWl6LTMvLi9zcmMvc2VydmljZXMvYXV0aC50cyIsIndlYnBhY2s6Ly9xdWl6LTMvLi9zcmMvc2VydmljZXMvY3VzdG9tLWh0dHAudHMiLCJ3ZWJwYWNrOi8vcXVpei0zLy4vc3JjL3R5cGVzL2FjdGlvbi10ZXN0LnR5cGUudHMiLCJ3ZWJwYWNrOi8vcXVpei0zLy4vc3JjL3V0aWxzL3Rlc3Qtc3RvcmUudHMiLCJ3ZWJwYWNrOi8vcXVpei0zLy4vc3JjL3V0aWxzL3VybC1tYW5hZ2VyLnRzIiwid2VicGFjazovL3F1aXotMy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9xdWl6LTMvLi9zcmMvYXBwLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IHtcclxuICAgIC8vaG9zdDogJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGknXHJcbiAgICBob3N0OiAnaHR0cHM6Ly9xdWl6LWJhY2stcHJvZHVjdGlvbi1jODFhLnVwLnJhaWx3YXkuYXBwL2FwaSdcclxufSIsIi8vIGltcG9ydCB7VXJsTWFuYWdlcn0gZnJvbSBcIi4uL3V0aWxzL3VybC1tYW5hZ2VyLnRzXCI7XHJcbi8vIGltcG9ydCB7QXV0aH0gZnJvbSBcIi4uL3NlcnZpY2VzL2F1dGgudHNcIjtcclxuLy8gaW1wb3J0IHtDdXN0b21IdHRwfSBmcm9tIFwiLi4vc2VydmljZXMvY3VzdG9tLWh0dHAudHNcIjtcclxuLy8gaW1wb3J0IGNvbmZpZyBmcm9tIFwiLi4vLi4vY29uZmlnL2NvbmZpZ1wiO1xyXG4vLyBpbXBvcnQge1Rlc3R9IGZyb20gXCIuL3Rlc3QudHNcIjtcclxuLy8gaW1wb3J0IHtnZXRUZXN0U3RvcmV9IGZyb20gXCIuLi91dGlscy90ZXN0LXN0b3JlLnRzXCI7XHJcbi8vXHJcbi8vIGV4cG9ydCBjbGFzcyBBbnN3ZXJzICB7XHJcbi8vXHJcbi8vICAgICBjb25zdHJ1Y3RvcigpIHtcclxuLy8gICAgICAgICB0aGlzLnF1ZXN0aW9uVGl0bGVFbGVtZW50ID0gbnVsbDtcclxuLy8gICAgICAgICB0aGlzLm9wdGlvbnNFbGVtZW50ID0gbnVsbDtcclxuLy8gICAgICAgICB0aGlzLnF1aXogPSBudWxsO1xyXG4vLyAgICAgICAgIHRoaXMud2hvY29tcGxldGVkRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd3aG8tY29tcGxldGVkJyk7XHJcbi8vXHJcbi8vXHJcbi8vXHJcbi8vICAgICAgICAgdGhpcy5yb3V0ZVBhcmFtcyA9IFVybE1hbmFnZXIuZ2V0UXVlcnlQYXJhbXMoKTtcclxuLy8gICAgICAgICBpZiAoIXRoaXMucm91dGVQYXJhbXMuaWQpIHtcclxuLy8gICAgICAgICAgICAgbG9jYXRpb24uaHJlZiA9ICcjLyc7XHJcbi8vICAgICAgICAgICAgIHJldHVybjtcclxuLy8gICAgICAgICB9XHJcbi8vXHJcbi8vICAgICAgICAgdGhpcy5pbml0KCk7XHJcbi8vXHJcbi8vXHJcbi8vXHJcbi8vXHJcbi8vXHJcbi8vXHJcbi8vICAgICAgICAgY29uc3QgcXVpeklkID0gdGhpcy5yb3V0ZVBhcmFtcy5pZDtcclxuLy9cclxuLy9cclxuLy9cclxuLy9cclxuLy8gICAgICAgICBjb25zdCB4aHIgPW5ldyBYTUxIdHRwUmVxdWVzdCgpO1xyXG4vLyAgICAgICAgIHhoci5vcGVuKCdHRVQnLCAnaHR0cHM6Ly90ZXN0b2xvZ2lhLnJ1L2dldC1xdWl6P2lkPScgK3F1aXpJZCwgZmFsc2UpO1xyXG4vLyAgICAgICAgIHhoci5zZW5kKCk7XHJcbi8vICAgICAgICAgaWYgKHhoci5zdGF0dXMgPT09IDIwMCAmJiB4aHIucmVzcG9uc2VUZXh0KSB7XHJcbi8vICAgICAgICAgICAgIHRyeSB7XHJcbi8vICAgICAgICAgICAgICAgICB0aGlzLnF1aXogPSBKU09OLnBhcnNlKHhoci5yZXNwb25zZVRleHQpO1xyXG4vLyAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XHJcbi8vICAgICAgICAgICAgICAgICBsb2NhdGlvbi5ocmVmID0gJyMvJztcclxuLy8gICAgICAgICAgICAgfVxyXG4vL1xyXG4vLyAgICAgICAgIH0gZWxzZSB7XHJcbi8vICAgICAgICAgICAgIGxvY2F0aW9uLmhyZWYgPSAnIy8nO1xyXG4vLyAgICAgICAgIH1cclxuLy8gICAgIH1cclxuLy9cclxuLy8gICAgIGFzeW5jIGluaXQoKSB7XHJcbi8vICAgICAgICAgY29uc3QgdXNlckluZm8gPSBBdXRoLmdldFVzZXJJbmZvKCk7XHJcbi8vICAgICAgICAgaWYgKCF1c2VySW5mbykge1xyXG4vLyAgICAgICAgICAgICBsb2NhdGlvbi5ocmVmID0gJyMvJztcclxuLy8gICAgICAgICAgICAgcmV0dXJuO1xyXG4vLyAgICAgICAgIH1cclxuLy9cclxuLy8gICAgICAgICB0cnkge1xyXG4vLyAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBDdXN0b21IdHRwLnJlcXVlc3QoY29uZmlnLmhvc3QgKyAnL3Rlc3RzLycgKyB0aGlzLnJvdXRlUGFyYW1zLmlkICsgJy9yZXN1bHQvZGV0YWlscz91c2VySWQ9JyArdXNlckluZm8udXNlcklkKTtcclxuLy9cclxuLy9cclxuLy8gICAgICAgICAgICAgaWYgKHJlc3VsdCkge1xyXG4vLyAgICAgICAgICAgICAgICAgaWYgKHJlc3VsdC5lcnJvcikge1xyXG4vLyAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihyZXN1bHQuZXJyb3IpO1xyXG4vLyAgICAgICAgICAgICAgICAgfVxyXG4vL1xyXG4vL1xyXG4vLyAgICAgICAgICAgICAgICAgdGhpcy5xdWl6ID0gcmVzdWx0LnRlc3Q7XHJcbi8vXHJcbi8vICAgICAgICAgICAgICAgICB0aGlzLnN0YXJ0UXVpeigpO1xyXG4vLyAgICAgICAgICAgICB9XHJcbi8vICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuLy8gICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgfVxyXG4vL1xyXG4vL1xyXG4vL1xyXG4vLyAgICAgICAgIHN0YXJ0UXVpeigpIHtcclxuLy9cclxuLy8gICAgICAgICAgICAgdGhpcy5xdWVzdGlvblRpdGxlRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aXRsZScpO1xyXG4vLyAgICAgICAgICAgICB0aGlzLm9wdGlvbnNFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ29wdGlvbnMnKTtcclxuLy8gICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ByZS10aXRsZS1hbnMnKS5pbm5lclRleHQgPSB0aGlzLnF1aXoubmFtZTtcclxuLy8gICAgICAgICAgICAgdGhpcy5vcHRpb25zRWxlbWVudC5pbm5lckhUTUwgPSAnJztcclxuLy8gICAgICAgICAgICAgY29uc3QgdXNlckluZm8gPSBBdXRoLmdldFVzZXJJbmZvKCk7XHJcbi8vICAgICAgICAgICAgIGNvbnN0IHVzZXJFbWFpbD0gQXV0aC5nZXRVc2VyRW1haWwoKTtcclxuLy9cclxuLy8gICAgICAgICAgICAgdGhpcy5zaG93UXVlc3Rpb24oKTtcclxuLy8gICAgICAgICB9XHJcbi8vICAgICAgICAgc2hvd1F1ZXN0aW9uKCkge1xyXG4vL1xyXG4vL1xyXG4vLyAgICAgICAgICAgICAvLyB0aGlzLm9wdGlvbnNFbGVtZW50LmlubmVySFRNTCA9ICcnO1xyXG4vLyAgICAgICAgICAgICAvLyBjb25zdCB1c2VySW5mbyA9IEF1dGguZ2V0VXNlckluZm8oKTtcclxuLy8gICAgICAgICAgICAgLy8gY29uc3QgdXNlckVtYWlsPSBBdXRoLmdldFVzZXJFbWFpbCgpO1xyXG4vL1xyXG4vL1xyXG4vLyAgICAgICAgICAgICAgICAgdGhpcy53aG9jb21wbGV0ZWRFbGVtZW50LmlubmVySFRNTCA9ICfQotC10YHRgiDQstGL0L/QvtC70L3QuNC7IDxzcGFuPicgKyB1c2VySW5mby5mdWxsTmFtZSArICcsICcgKyB1c2VyRW1haWwgKyAnPC9zcGFuPic7XHJcbi8vXHJcbi8vXHJcbi8vXHJcbi8vICAgICAgICAgICAgIHRoaXMucXVpei5xdWVzdGlvbnMuZm9yRWFjaCgocXVlc3Rpb24sIHF1ZXN0aW9uSW5kZXgpID0+IHtcclxuLy8gICAgICAgICAgICAgICAgIGNvbnN0IHF1ZXN0aW9uRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4vLyAgICAgICAgICAgICAgICAgcXVlc3Rpb25FbGVtZW50LmNsYXNzTmFtZSA9ICdhbnN3ZXJzLXF1ZXN0aW9uLW9wdGlvbnMnO1xyXG4vL1xyXG4vLyAgICAgICAgICAgICAgICAgY29uc3QgcXVlc3Rpb25UaXRsZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuLy8gICAgICAgICAgICAgICAgIHF1ZXN0aW9uVGl0bGVFbGVtZW50LmNsYXNzTmFtZSA9ICdhbnN3ZXJzLXF1ZXN0aW9uLXRpdGxlJztcclxuLy8gICAgICAgICAgICAgICAgIHF1ZXN0aW9uVGl0bGVFbGVtZW50LmlubmVySFRNTCA9ICc8c3Bhbj7QktC+0L/RgNC+0YEgJyArIChxdWVzdGlvbkluZGV4ICsgMSkgKyAnOjwvc3Bhbj4gJyArIHF1ZXN0aW9uLnF1ZXN0aW9uO1xyXG4vLyAgICAgICAgICAgICAgICAgcXVlc3Rpb25FbGVtZW50LmFwcGVuZENoaWxkKHF1ZXN0aW9uVGl0bGVFbGVtZW50KTtcclxuLy9cclxuLy9cclxuLy8gICAgICAgICAgICAgICAgIHF1ZXN0aW9uLmFuc3dlcnMuZm9yRWFjaChhbnN3ZXIgPT4ge1xyXG4vLyAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG9wdGlvbkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuLy8gICAgICAgICAgICAgICAgICAgICBvcHRpb25FbGVtZW50LmNsYXNzTmFtZSA9ICdhbnN3ZXJzLXF1ZXN0aW9uLW9wdGlvbic7XHJcbi8vXHJcbi8vXHJcbi8vICAgICAgICAgICAgICAgICAgICAgY29uc3QgaW5wdXRJZCA9ICdhbnN3ZXItJyArIGFuc3dlci5pZDtcclxuLy8gICAgICAgICAgICAgICAgICAgICBjb25zdCBpbnB1dEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4vLyAgICAgICAgICAgICAgICAgICAgIGlucHV0RWxlbWVudC5jbGFzc05hbWUgPSAnb3B0aW9uLWFuc3dlcic7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgaW5wdXRFbGVtZW50LnNldEF0dHJpYnV0ZSgnaWQnLCBpbnB1dElkKTtcclxuLy8gICAgICAgICAgICAgICAgICAgICBpbnB1dEVsZW1lbnQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3JhZGlvJyk7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgaW5wdXRFbGVtZW50LnNldEF0dHJpYnV0ZSgnbmFtZScsICdhbnN3ZXInKTtcclxuLy8gICAgICAgICAgICAgICAgICAgICBpbnB1dEVsZW1lbnQuc2V0QXR0cmlidXRlKCd2YWx1ZScsIGFuc3dlci5pZCApO1xyXG4vL1xyXG4vL1xyXG4vL1xyXG4vL1xyXG4vLyAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGxhYmVsRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgbGFiZWxFbGVtZW50LnNldEF0dHJpYnV0ZSgnZm9yJywgaW5wdXRJZCk7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgbGFiZWxFbGVtZW50LmlubmVyVGV4dCA9IGFuc3dlci5hbnN3ZXI7XHJcbi8vXHJcbi8vXHJcbi8vICAgICAgICAgICAgICAgICAgICAgaWYgKCdjb3JyZWN0JyBpbiBhbnN3ZXIpIHtcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGFuc3dlci5jb3JyZWN0ID09PSB0cnVlKSB7XHJcbi8vXHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25FbGVtZW50LnN0eWxlLmNvbG9yID0gJyM1ZmRjMzMnO1xyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXRFbGVtZW50LnN0eWxlLmJvcmRlciA9ICc2cHggc29saWQgIzVmZGMzMyc7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoYW5zd2VyLmNvcnJlY3QgPT09IGZhbHNlKSB7XHJcbi8vXHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25FbGVtZW50LnN0eWxlLmNvbG9yID0gJyNkYzMzMzMnO1xyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXRFbGVtZW50LnN0eWxlLmJvcmRlciA9ICc2cHggc29saWQgI2RjMzMzMyc7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuLy8gICAgICAgICAgICAgICAgICAgICB9XHJcbi8vXHJcbi8vXHJcbi8vXHJcbi8vXHJcbi8vXHJcbi8vICAgICAgICAgICAgICAgICAgICAgb3B0aW9uRWxlbWVudC5hcHBlbmRDaGlsZChpbnB1dEVsZW1lbnQpO1xyXG4vLyAgICAgICAgICAgICAgICAgICAgIG9wdGlvbkVsZW1lbnQuYXBwZW5kQ2hpbGQobGFiZWxFbGVtZW50KTtcclxuLy8gICAgICAgICAgICAgICAgICAgICBxdWVzdGlvbkVsZW1lbnQuYXBwZW5kQ2hpbGQob3B0aW9uRWxlbWVudClcclxuLy8gICAgICAgICAgICAgfSk7XHJcbi8vICAgICAgICAgICAgICAgICB0aGlzLm9wdGlvbnNFbGVtZW50LmFwcGVuZENoaWxkKHF1ZXN0aW9uRWxlbWVudCk7XHJcbi8vICAgICAgICAgICAgIH0pO1xyXG4vLyAgICAgICAgIH1cclxuLy9cclxuLy8gICAgIH1cclxuXHJcblxyXG5cclxuaW1wb3J0IHsgVXJsTWFuYWdlciB9IGZyb20gXCIuLi91dGlscy91cmwtbWFuYWdlclwiO1xyXG5pbXBvcnQgeyBBdXRoIH0gZnJvbSBcIi4uL3NlcnZpY2VzL2F1dGhcIjtcclxuaW1wb3J0IHsgQ3VzdG9tSHR0cCB9IGZyb20gXCIuLi9zZXJ2aWNlcy9jdXN0b20taHR0cFwiO1xyXG5pbXBvcnQgY29uZmlnIGZyb20gXCIuLi8uLi9jb25maWcvY29uZmlnXCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFF1aXoge1xyXG4gICAgbmFtZTogc3RyaW5nO1xyXG4gICAgcXVlc3Rpb25zOiBRdWVzdGlvbltdO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFF1ZXN0aW9uIHtcclxuICAgIHF1ZXN0aW9uOiBzdHJpbmc7XHJcbiAgICBhbnN3ZXJzOiBBbnN3ZXJbXTtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBBbnN3ZXIge1xyXG4gICAgaWQ6IG51bWJlcjtcclxuICAgIGFuc3dlcjogc3RyaW5nO1xyXG4gICAgY29ycmVjdD86IGJvb2xlYW47XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBBbnN3ZXJzIHtcclxuICAgIHByaXZhdGUgcXVlc3Rpb25UaXRsZUVsZW1lbnQ6IEhUTUxFbGVtZW50IHwgbnVsbDtcclxuICAgIHByaXZhdGUgb3B0aW9uc0VsZW1lbnQ6IEhUTUxFbGVtZW50IHwgbnVsbDtcclxuICAgIHByaXZhdGUgcXVpejogUXVpeiB8IG51bGw7XHJcbiAgICBwcml2YXRlIHdob2NvbXBsZXRlZEVsZW1lbnQ6IEhUTUxFbGVtZW50IHwgbnVsbDtcclxuICAgIHByaXZhdGUgcm91dGVQYXJhbXM6IFJlY29yZDxzdHJpbmcsIGFueT47XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5xdWVzdGlvblRpdGxlRWxlbWVudCA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5vcHRpb25zRWxlbWVudCA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5xdWl6ID0gbnVsbDtcclxuICAgICAgICB0aGlzLndob2NvbXBsZXRlZEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnd2hvLWNvbXBsZXRlZCcpO1xyXG5cclxuICAgICAgICB0aGlzLnJvdXRlUGFyYW1zID0gVXJsTWFuYWdlci5nZXRRdWVyeVBhcmFtcygpO1xyXG4gICAgICAgIGlmICghdGhpcy5yb3V0ZVBhcmFtcy5pZCkge1xyXG4gICAgICAgICAgICBsb2NhdGlvbi5ocmVmID0gJyMvJztcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5pbml0KCk7XHJcblxyXG4gICAgICAgIGNvbnN0IHF1aXpJZCA9IHRoaXMucm91dGVQYXJhbXMuaWQ7XHJcblxyXG4gICAgICAgIGNvbnN0IHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xyXG4gICAgICAgIHhoci5vcGVuKCdHRVQnLCAnaHR0cHM6Ly90ZXN0b2xvZ2lhLnJ1L2dldC1xdWl6P2lkPScgKyBxdWl6SWQsIGZhbHNlKTtcclxuICAgICAgICB4aHIuc2VuZCgpO1xyXG5cclxuICAgICAgICBpZiAoeGhyLnN0YXR1cyA9PT0gMjAwICYmIHhoci5yZXNwb25zZVRleHQpIHtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIHRoaXMucXVpeiA9IEpTT04ucGFyc2UoeGhyLnJlc3BvbnNlVGV4dCkgYXMgUXVpejtcclxuICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICAgICAgbG9jYXRpb24uaHJlZiA9ICcjLyc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBsb2NhdGlvbi5ocmVmID0gJyMvJztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBhc3luYyBpbml0KCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIGNvbnN0IHVzZXJJbmZvID0gQXV0aC5nZXRVc2VySW5mbygpO1xyXG4gICAgICAgIGlmICghdXNlckluZm8pIHtcclxuICAgICAgICAgICAgbG9jYXRpb24uaHJlZiA9ICcjLyc7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IEN1c3RvbUh0dHAucmVxdWVzdChjb25maWcuaG9zdCArICcvdGVzdHMvJyArIHRoaXMucm91dGVQYXJhbXMuaWQgKyAnL3Jlc3VsdC9kZXRhaWxzP3VzZXJJZD0nICsgdXNlckluZm8udXNlcklkKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChyZXN1bHQpIHtcclxuICAgICAgICAgICAgICAgIGlmIChyZXN1bHQuZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IocmVzdWx0LmVycm9yKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLnF1aXogPSByZXN1bHQudGVzdCBhcyBRdWl6O1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuc3RhcnRRdWl6KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzdGFydFF1aXooKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5xdWVzdGlvblRpdGxlRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aXRsZScpO1xyXG4gICAgICAgIHRoaXMub3B0aW9uc0VsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnb3B0aW9ucycpO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5xdWl6KSB7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcmUtdGl0bGUtYW5zJykhLmlubmVyVGV4dCA9IHRoaXMucXVpei5uYW1lO1xyXG4gICAgICAgICAgICB0aGlzLm9wdGlvbnNFbGVtZW50IS5pbm5lckhUTUwgPSAnJztcclxuICAgICAgICAgICAgY29uc3QgdXNlckluZm8gPSBBdXRoLmdldFVzZXJJbmZvKCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHVzZXJFbWFpbCA9IEF1dGguZ2V0VXNlckVtYWlsKCk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnNob3dRdWVzdGlvbigpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHNob3dRdWVzdGlvbigpOiB2b2lkIHtcclxuICAgICAgICBpZiAodGhpcy5xdWl6ICYmIHRoaXMud2hvY29tcGxldGVkRWxlbWVudCkge1xyXG4gICAgICAgICAgICBjb25zdCB1c2VySW5mbyA9IEF1dGguZ2V0VXNlckluZm8oKTtcclxuICAgICAgICAgICAgY29uc3QgdXNlckVtYWlsID0gQXV0aC5nZXRVc2VyRW1haWwoKTtcclxuICAgICAgICAgICAgaWYgKHVzZXJJbmZvKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLndob2NvbXBsZXRlZEVsZW1lbnQuaW5uZXJIVE1MID0gYNCi0LXRgdGCINCy0YvQv9C+0LvQvdC40LsgPHNwYW4+JHt1c2VySW5mby5mdWxsTmFtZX0sICR7dXNlckVtYWlsfTwvc3Bhbj5gO1xyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdGhpcy5xdWl6LnF1ZXN0aW9ucy5mb3JFYWNoKChxdWVzdGlvbiwgcXVlc3Rpb25JbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcXVlc3Rpb25FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgICAgICBxdWVzdGlvbkVsZW1lbnQuY2xhc3NOYW1lID0gJ2Fuc3dlcnMtcXVlc3Rpb24tb3B0aW9ucyc7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgcXVlc3Rpb25UaXRsZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgICAgIHF1ZXN0aW9uVGl0bGVFbGVtZW50LmNsYXNzTmFtZSA9ICdhbnN3ZXJzLXF1ZXN0aW9uLXRpdGxlJztcclxuICAgICAgICAgICAgICAgIHF1ZXN0aW9uVGl0bGVFbGVtZW50LmlubmVySFRNTCA9IGA8c3Bhbj7QktC+0L/RgNC+0YEgJHtxdWVzdGlvbkluZGV4ICsgMX06PC9zcGFuPiAke3F1ZXN0aW9uLnF1ZXN0aW9ufWA7XHJcbiAgICAgICAgICAgICAgICBxdWVzdGlvbkVsZW1lbnQuYXBwZW5kQ2hpbGQocXVlc3Rpb25UaXRsZUVsZW1lbnQpO1xyXG5cclxuICAgICAgICAgICAgICAgIHF1ZXN0aW9uLmFuc3dlcnMuZm9yRWFjaChhbnN3ZXIgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG9wdGlvbkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgICAgICAgICBvcHRpb25FbGVtZW50LmNsYXNzTmFtZSA9ICdhbnN3ZXJzLXF1ZXN0aW9uLW9wdGlvbic7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGlucHV0SWQgPSBgYW5zd2VyLSR7YW5zd2VyLmlkfWA7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaW5wdXRFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgICAgICAgICAgICAgICAgICBpbnB1dEVsZW1lbnQuY2xhc3NOYW1lID0gJ29wdGlvbi1hbnN3ZXInO1xyXG4gICAgICAgICAgICAgICAgICAgIGlucHV0RWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2lkJywgaW5wdXRJZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaW5wdXRFbGVtZW50LnNldEF0dHJpYnV0ZSgndHlwZScsICdyYWRpbycpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlucHV0RWxlbWVudC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAnYW5zd2VyJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgaW5wdXRFbGVtZW50LnNldEF0dHJpYnV0ZSgndmFsdWUnLCBhbnN3ZXIuaWQudG9TdHJpbmcoKSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGxhYmVsRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWxFbGVtZW50LnNldEF0dHJpYnV0ZSgnZm9yJywgaW5wdXRJZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWxFbGVtZW50LmlubmVyVGV4dCA9IGFuc3dlci5hbnN3ZXI7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChhbnN3ZXIuaGFzT3duUHJvcGVydHkoJ2NvcnJlY3QnKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoYW5zd2VyLmNvcnJlY3QpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbkVsZW1lbnQuc3R5bGUuY29sb3IgPSAnIzVmZGMzMyc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dEVsZW1lbnQuc3R5bGUuYm9yZGVyID0gJzZweCBzb2xpZCAjNWZkYzMzJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbkVsZW1lbnQuc3R5bGUuY29sb3IgPSAnI2RjMzMzMyc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dEVsZW1lbnQuc3R5bGUuYm9yZGVyID0gJzZweCBzb2xpZCAjZGMzMzMzJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9uRWxlbWVudC5hcHBlbmRDaGlsZChpbnB1dEVsZW1lbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbkVsZW1lbnQuYXBwZW5kQ2hpbGQobGFiZWxFbGVtZW50KTtcclxuICAgICAgICAgICAgICAgICAgICBxdWVzdGlvbkVsZW1lbnQuYXBwZW5kQ2hpbGQob3B0aW9uRWxlbWVudCk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLm9wdGlvbnNFbGVtZW50IS5hcHBlbmRDaGlsZChxdWVzdGlvbkVsZW1lbnQpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbiIsImltcG9ydCB7VXJsTWFuYWdlcn0gZnJvbSBcIi4uL3V0aWxzL3VybC1tYW5hZ2VyXCI7XHJcbmltcG9ydCB7Q3VzdG9tSHR0cH0gZnJvbSBcIi4uL3NlcnZpY2VzL2N1c3RvbS1odHRwXCI7XHJcbmltcG9ydCBjb25maWcgZnJvbSBcIi4uLy4uL2NvbmZpZy9jb25maWdcIjtcclxuaW1wb3J0IHtBdXRofSBmcm9tIFwiLi4vc2VydmljZXMvYXV0aFwiO1xyXG5pbXBvcnQge1F1ZXJ5UGFyYW1zVHlwZX0gZnJvbSBcIi4uL3R5cGVzL3F1ZXJ5LXBhcmFtcy50eXBlXCI7XHJcbmltcG9ydCB7UXVpekxpc3RUeXBlfSBmcm9tIFwiLi4vdHlwZXMvcXVpei1saXN0LnR5cGVcIjtcclxuaW1wb3J0IHtUZXN0UmVzdWx0VHlwZX0gZnJvbSBcIi4uL3R5cGVzL3Rlc3QtcmVzdWx0LnR5cGVcIjtcclxuaW1wb3J0IHtVc2VySW5mb1R5cGV9IGZyb20gXCIuLi90eXBlcy91c2VyLWluZm8udHlwZVwiO1xyXG5pbXBvcnQge0RlZmF1bHRSZXNwb25zZVR5cGV9IGZyb20gXCIuLi90eXBlcy9kZWZhdWx0LXJlc3BvbnNlLnR5cGVcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBDaG9pY2Uge1xyXG4gICAgcHJpdmF0ZSBxdWl6emVzOiBRdWl6TGlzdFR5cGVbXSA9IFtdO1xyXG4gICAgcHJpdmF0ZSByb3V0ZVBhcmFtczogUXVlcnlQYXJhbXNUeXBlO1xyXG4gICAgcHJpdmF0ZSB0ZXN0UmVzdWx0OiBUZXN0UmVzdWx0VHlwZVtdIHwgbnVsbD0gbnVsbDtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMucm91dGVQYXJhbXMgPSBVcmxNYW5hZ2VyLmdldFF1ZXJ5UGFyYW1zKCk7XHJcbiAgICAgICAgdGhpcy5pbml0KCk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgYXN5bmMgaW5pdCgpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICB0aGlzLnF1aXp6ZXMgPSBhd2FpdCBDdXN0b21IdHRwLnJlcXVlc3QoY29uZmlnLmhvc3QgKyAnL3Rlc3RzJyk7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHVzZXJJbmZvOiBVc2VySW5mb1R5cGUgfCBudWxsID0gQXV0aC5nZXRVc2VySW5mbygpO1xyXG4gICAgICAgIGlmICh1c2VySW5mbykge1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0OiBEZWZhdWx0UmVzcG9uc2VUeXBlIHwgVGVzdFJlc3VsdFR5cGVbXSA9IGF3YWl0IEN1c3RvbUh0dHAucmVxdWVzdChjb25maWcuaG9zdCArICcvdGVzdHMvcmVzdWx0cz91c2VySWQ9JyArIHVzZXJJbmZvLnVzZXJJZCk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICgocmVzdWx0IGFzIERlZmF1bHRSZXNwb25zZVR5cGUpLmVycm9yICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKChyZXN1bHQgYXMgRGVmYXVsdFJlc3BvbnNlVHlwZSkubWVzc2FnZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGVzdFJlc3VsdCA9IHJlc3VsdCBhcyBUZXN0UmVzdWx0VHlwZVtdO1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnByb2Nlc3NRdWl6emVzKCk7XHJcblxyXG5cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHByb2Nlc3NRdWl6emVzKCk6IHZvaWQge1xyXG4gICAgICAgIGNvbnN0IGNob2ljZU9wdGlvbnNFbGVtZW50OiBIVE1MRWxlbWVudCB8IG51bGwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2hvaWNlLW9wdGlvbnMnKVxyXG4gICAgICAgIGlmICh0aGlzLnF1aXp6ZXMgJiYgdGhpcy5xdWl6emVzLmxlbmd0aCA+IDAgJiYgY2hvaWNlT3B0aW9uc0VsZW1lbnQpIHtcclxuICAgICAgICAgICAgdGhpcy5xdWl6emVzLmZvckVhY2goKHF1aXo6IFF1aXpMaXN0VHlwZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdGhhdDogQ2hvaWNlID0gdGhpcztcclxuICAgICAgICAgICAgICAgIGNvbnN0IGNob2ljZU9wdGlvbkVsZW1lbnQ6IEhUTUxFbGVtZW50IHwgbnVsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICAgICAgY2hvaWNlT3B0aW9uRWxlbWVudC5jbGFzc05hbWUgPSAnY2hvaWNlLW9wdGlvbic7XHJcbiAgICAgICAgICAgICAgICBjaG9pY2VPcHRpb25FbGVtZW50LnNldEF0dHJpYnV0ZSgnZGF0YS1pZCcsIHF1aXouaWQudG9TdHJpbmcoKSlcclxuICAgICAgICAgICAgICAgIGNob2ljZU9wdGlvbkVsZW1lbnQub25jbGljayA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGF0LmNob29zZVF1aXooPEhUTUxFbGVtZW50PnRoaXMpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IGNob2ljZU9wdGlvblRleHRFbGVtZW50OiBIVE1MRWxlbWVudCB8IG51bGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgICAgIGNob2ljZU9wdGlvblRleHRFbGVtZW50LmNsYXNzTmFtZSA9ICdjaG9pY2Utb3B0aW9uLXRleHQnO1xyXG4gICAgICAgICAgICAgICAgY2hvaWNlT3B0aW9uVGV4dEVsZW1lbnQuaW5uZXJUZXh0ID0gcXVpei5uYW1lO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IGNob2ljZU9wdGlvbkFycm93RWxlbWVudDogSFRNTEVsZW1lbnQgfCBudWxsICA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICAgICAgY2hvaWNlT3B0aW9uQXJyb3dFbGVtZW50LmNsYXNzTmFtZSA9ICdjaG9pY2Utb3B0aW9uLWFycm93JztcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMudGVzdFJlc3VsdCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdDogVGVzdFJlc3VsdFR5cGUgfCB1bmRlZmluZWQgPSB0aGlzLnRlc3RSZXN1bHQuZmluZChpdGVtID0+IGl0ZW0udGVzdElkID09PSBxdWl6LmlkKVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXN1bHQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY2hvaWNlT3B0aW9uUmVzdWx0RWxlbWVudDogSFRNTEVsZW1lbnQgfCBudWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNob2ljZU9wdGlvblJlc3VsdEVsZW1lbnQuY2xhc3NOYW1lID0gJ2Nob2ljZS1vcHRpb24tcmVzdWx0JztcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2hvaWNlT3B0aW9uUmVzdWx0RWxlbWVudC5pbm5lckhUTUwgPSAnPGRpdj7QoNC10LfRg9C70YzRgtCw0YI8L2Rpdj48ZGl2PicgKyByZXN1bHQuc2NvcmUgKyAnLycgKyByZXN1bHQudG90YWwgKyAnPC9kaXY+JztcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2hvaWNlT3B0aW9uRWxlbWVudC5hcHBlbmRDaGlsZChjaG9pY2VPcHRpb25SZXN1bHRFbGVtZW50KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IGNob2ljZU9wdGlvbkltYWdlRWxlbWVudDogSFRNTEVsZW1lbnQgfCBudWxsICA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gICAgICAgICAgICAgICAgY2hvaWNlT3B0aW9uSW1hZ2VFbGVtZW50LnNldEF0dHJpYnV0ZSgnc3JjJywgJy9pbWFnZXMvYXJyb3cucG5nJyk7XHJcbiAgICAgICAgICAgICAgICBjaG9pY2VPcHRpb25JbWFnZUVsZW1lbnQuc2V0QXR0cmlidXRlKCdhbHQnLCAnYXJyb3cnKTtcclxuXHJcbiAgICAgICAgICAgICAgICBjaG9pY2VPcHRpb25BcnJvd0VsZW1lbnQuYXBwZW5kQ2hpbGQoY2hvaWNlT3B0aW9uSW1hZ2VFbGVtZW50KTtcclxuICAgICAgICAgICAgICAgIGNob2ljZU9wdGlvbkVsZW1lbnQuYXBwZW5kQ2hpbGQoY2hvaWNlT3B0aW9uVGV4dEVsZW1lbnQpO1xyXG4gICAgICAgICAgICAgICAgY2hvaWNlT3B0aW9uRWxlbWVudC5hcHBlbmRDaGlsZChjaG9pY2VPcHRpb25BcnJvd0VsZW1lbnQpO1xyXG5cclxuICAgICAgICAgICAgICAgIGNob2ljZU9wdGlvbnNFbGVtZW50LmFwcGVuZENoaWxkKGNob2ljZU9wdGlvbkVsZW1lbnQpO1xyXG5cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgY2hvb3NlUXVpeihlbGVtZW50OiBIVE1MRWxlbWVudCk6IHZvaWQge1xyXG4gICAgICAgIGNvbnN0IGRhdGFJZDogc3RyaW5nIHwgbnVsbCA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLWlkJyk7XHJcbiAgICAgICAgaWYgKGRhdGFJZCkge1xyXG4gICAgICAgICAgICBsb2NhdGlvbi5ocmVmID0gJyMvdGVzdD9pZD0nICsgZGF0YUlkO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG59XHJcblxyXG4iLCJpbXBvcnQge0N1c3RvbUh0dHB9IGZyb20gXCIuLi9zZXJ2aWNlcy9jdXN0b20taHR0cFwiO1xyXG5pbXBvcnQge0F1dGh9IGZyb20gXCIuLi9zZXJ2aWNlcy9hdXRoXCI7XHJcbmltcG9ydCBjb25maWcgZnJvbSBcIi4uLy4uL2NvbmZpZy9jb25maWdcIjtcclxuaW1wb3J0IHtGb3JtRmllbGRUeXBlfSBmcm9tIFwiLi4vdHlwZXMvZm9ybS1maWVsZC50eXBlXCI7XHJcbmltcG9ydCB7U2lnbnVwUmVzcG9uc2VUeXBlfSBmcm9tIFwiLi4vdHlwZXMvc2lnbnVwLXJlc3BvbnNlLnR5cGVcIjtcclxuaW1wb3J0IHtMb2dpblJlc3BvbnNlVHlwZX0gZnJvbSBcIi4uL3R5cGVzL2xvZ2luLXJlc3BvbnNlLnR5cGVcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBGb3JtIHtcclxuICAgIHJlYWRvbmx5IGFncmVlRWxlbWVudDogSFRNTElucHV0RWxlbWVudCB8IG51bGw7XHJcbiAgICByZWFkb25seSBwcm9jZXNzRWxlbWVudDogSFRNTEVsZW1lbnQgfCBudWxsO1xyXG4gICAgcmVhZG9ubHkgcGFnZTogJ3NpZ24tdXAnIHwgJ2xvZ2luJztcclxuICAgIHByaXZhdGUgZmllbGRzOiBGb3JtRmllbGRUeXBlW10gPSBbXTtcclxuICAgIGNvbnN0cnVjdG9yKHBhZ2U6ICdzaWduLXVwJyB8ICdsb2dpbicpIHtcclxuICAgICAgICB0aGlzLmFncmVlRWxlbWVudCA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5wcm9jZXNzRWxlbWVudCA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5wYWdlID0gcGFnZTtcclxuXHJcbiAgICAgICAgY29uc3QgYWNjZXNzVG9rZW46IHN0cmluZyB8IG51bGwgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShBdXRoLmFjY2Vzc1Rva2VuS2V5KTtcclxuICAgICAgICBpZiAoYWNjZXNzVG9rZW4pIHtcclxuICAgICAgICAgICAgbG9jYXRpb24uaHJlZiA9ICcjL2Nob2ljZSc7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuZmllbGRzID0gW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiAnZW1haWwnLFxyXG4gICAgICAgICAgICAgICAgaWQ6ICdlbWFpbCcsXHJcbiAgICAgICAgICAgICAgICBlbGVtZW50OiBudWxsLFxyXG4gICAgICAgICAgICAgICAgcmVnZXg6IC9eXFx3KyhbXFwuLV1cXHcrKSpAXFx3KyhbXFwuLV0/XFx3KykqKFxcLlxcd3syLDN9KSskLyxcclxuICAgICAgICAgICAgICAgIHZhbGlkOiBmYWxzZSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogJ3Bhc3N3b3JkJyxcclxuICAgICAgICAgICAgICAgIGlkOiAncGFzc3dvcmQnLFxyXG4gICAgICAgICAgICAgICAgZWxlbWVudDogbnVsbCxcclxuICAgICAgICAgICAgICAgIHJlZ2V4OiAvXig/PS4qXFxkKSg/PS4qW2Etel0pKD89LipbQS1aXSlbMC05YS16QS1aXXs4LH0kLyxcclxuICAgICAgICAgICAgICAgIHZhbGlkOiBmYWxzZSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICBdO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5wYWdlID09PSAnc2lnbi11cCcpIHtcclxuICAgICAgICAgICAgdGhpcy5maWVsZHMudW5zaGlmdCh7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ25hbWUnLFxyXG4gICAgICAgICAgICAgICAgICAgIGlkOiAnbmFtZScsXHJcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudDogbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICByZWdleDogL15b0JAt0K/QsC3RjytdK1xccyokLyxcclxuICAgICAgICAgICAgICAgICAgICB2YWxpZDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdsYXN0TmFtZScsXHJcbiAgICAgICAgICAgICAgICAgICAgaWQ6ICdsYXN0LW5hbWUnLFxyXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQ6IG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgcmVnZXg6IC9eW9CQLdCv0LAt0Y8rXStcXHMqJC8sXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsaWQ6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCB0aGF0OiBGb3JtID0gdGhpcztcclxuICAgICAgICB0aGlzLmZpZWxkcy5mb3JFYWNoKChpdGVtOiBGb3JtRmllbGRUeXBlKSA9PiB7XHJcbiAgICAgICAgICAgIGl0ZW0uZWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGl0ZW0uaWQpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XHJcbiAgICAgICAgICAgIGlmIChpdGVtLmVsZW1lbnQpIHtcclxuICAgICAgICAgICAgICAgIGl0ZW0uZWxlbWVudC5vbmNoYW5nZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGF0LnZhbGlkYXRlRmllbGQuY2FsbCh0aGF0LCBpdGVtLCA8SFRNTElucHV0RWxlbWVudD50aGlzKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9KTtcclxuXHJcblxyXG4gICAgICAgIHRoaXMucHJvY2Vzc0VsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvY2VzcycpO1xyXG4gICAgICAgIGlmICggdGhpcy5wcm9jZXNzRWxlbWVudCkge1xyXG4gICAgICAgICAgICB0aGlzLnByb2Nlc3NFbGVtZW50Lm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICB0aGF0LnByb2Nlc3NGb3JtKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnBhZ2UgPT09ICdzaWduLXVwJykge1xyXG4gICAgICAgICAgICB0aGlzLmFncmVlRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZ3JlZScpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmFncmVlRWxlbWVudCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hZ3JlZUVsZW1lbnQub25jaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhhdC52YWxpZGF0ZUZvcm0oKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwcml2YXRlIHZhbGlkYXRlRmllbGQoZmllbGQ6IEZvcm1GaWVsZFR5cGUsIGVsZW1lbnQ6IEhUTUxJbnB1dEVsZW1lbnQpOiB2b2lkIHtcclxuICAgICAgICBpZiAoZWxlbWVudC5wYXJlbnROb2RlKSB7XHJcbiAgICAgICAgICAgIGlmICghZWxlbWVudC52YWx1ZSB8fCAhZWxlbWVudC52YWx1ZS5tYXRjaChmaWVsZC5yZWdleCkpIHtcclxuICAgICAgICAgICAgICAgIChlbGVtZW50LnBhcmVudE5vZGUgYXMgSFRNTEVsZW1lbnQpLnN0eWxlLmJvcmRlckNvbG9yID0gJ3JlZCc7XHJcbiAgICAgICAgICAgICAgICBmaWVsZC52YWxpZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgKGVsZW1lbnQucGFyZW50Tm9kZSBhcyBIVE1MRWxlbWVudCkucmVtb3ZlQXR0cmlidXRlKCdzdHlsZScpO1xyXG4gICAgICAgICAgICAgICAgZmllbGQudmFsaWQgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnZhbGlkYXRlRm9ybSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgdmFsaWRhdGVGb3JtKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIGNvbnN0IHZhbGlkRm9ybTogYm9vbGVhbiA9IHRoaXMuZmllbGRzLmV2ZXJ5KGl0ZW0gPT4gaXRlbS52YWxpZCk7XHJcbiAgICAgICAgY29uc3QgaXNWYWxpZDogYm9vbGVhbiA9IHRoaXMuYWdyZWVFbGVtZW50ID8gdGhpcy5hZ3JlZUVsZW1lbnQuY2hlY2tlZCAmJiB2YWxpZEZvcm0gOiB2YWxpZEZvcm07XHJcbiAgICAgICAgaWYgKHRoaXMucHJvY2Vzc0VsZW1lbnQpIHtcclxuICAgICAgICAgICAgaWYgKGlzVmFsaWQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucHJvY2Vzc0VsZW1lbnQucmVtb3ZlQXR0cmlidXRlKCdkaXNhYmxlZCcpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9jZXNzRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgJ2Rpc2FibGVkJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBpc1ZhbGlkO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgYXN5bmMgcHJvY2Vzc0Zvcm0oKTogUHJvbWlzZTx2b2lkPiB7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnZhbGlkYXRlRm9ybSgpKSB7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBlbWFpbCA9IHRoaXMuZmllbGRzLmZpbmQoaXRlbSA9PiBpdGVtLm5hbWUgPT09ICdlbWFpbCcpPy5lbGVtZW50Py52YWx1ZTtcclxuICAgICAgICAgICAgY29uc3QgIHBhc3N3b3JkID0gdGhpcy5maWVsZHMuZmluZChpdGVtID0+IGl0ZW0ubmFtZSA9PT0gJ3Bhc3N3b3JkJyk/LmVsZW1lbnQ/LnZhbHVlO1xyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMucGFnZSA9PT0gJ3NpZ24tdXAnKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQ6IFNpZ251cFJlc3BvbnNlVHlwZSA9IGF3YWl0IEN1c3RvbUh0dHAucmVxdWVzdChjb25maWcuaG9zdCArICcvc2lnbnVwJywgJ1BPU1QnLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IHRoaXMuZmllbGRzLmZpbmQoaXRlbSA9PiBpdGVtLm5hbWUgPT09ICduYW1lJyk/LmVsZW1lbnQ/LnZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYXN0TmFtZTogdGhpcy5maWVsZHMuZmluZChpdGVtID0+IGl0ZW0ubmFtZSA9PT0gJ2xhc3ROYW1lJyk/LmVsZW1lbnQ/LnZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbWFpbDogZW1haWwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhc3N3b3JkOiBwYXNzd29yZCxcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3VsdCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzdWx0LmVycm9yIHx8ICFyZXN1bHQudXNlcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKHJlc3VsdC5tZXNzYWdlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0OiBMb2dpblJlc3BvbnNlVHlwZSA9IGF3YWl0IEN1c3RvbUh0dHAucmVxdWVzdChjb25maWcuaG9zdCArICcvbG9naW4nLCAnUE9TVCcsIHtcclxuICAgICAgICAgICAgICAgICAgICBlbWFpbDogZW1haWwsXHJcbiAgICAgICAgICAgICAgICAgICAgcGFzc3dvcmQ6IHBhc3N3b3JkLFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXN1bHQuZXJyb3IgfHwgIXJlc3VsdC5hY2Nlc3NUb2tlbiB8fCAhcmVzdWx0LnJlZnJlc2hUb2tlbiB8fCAhcmVzdWx0LmZ1bGxOYW1lIHx8ICFyZXN1bHQudXNlcklkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihyZXN1bHQubWVzc2FnZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBBdXRoLnNldFRva2VucyhyZXN1bHQuYWNjZXNzVG9rZW4sIHJlc3VsdC5yZWZyZXNoVG9rZW4pO1xyXG4gICAgICAgICAgICAgICAgICAgIEF1dGguc2V0VXNlckluZm8oe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmdWxsTmFtZTogcmVzdWx0LmZ1bGxOYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB1c2VySWQ6IHJlc3VsdC51c2VySWQsXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVtYWlsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd1c2VyRW1haWwnLCBlbWFpbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbG9jYXRpb24uaHJlZiA9ICcjL2Nob2ljZSc7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxufVxyXG4iLCJpbXBvcnQge1VybE1hbmFnZXJ9IGZyb20gXCIuLi91dGlscy91cmwtbWFuYWdlclwiO1xyXG5pbXBvcnQge0N1c3RvbUh0dHB9IGZyb20gXCIuLi9zZXJ2aWNlcy9jdXN0b20taHR0cFwiO1xyXG5pbXBvcnQgY29uZmlnIGZyb20gXCIuLi8uLi9jb25maWcvY29uZmlnXCI7XHJcbmltcG9ydCB7QXV0aH0gZnJvbSBcIi4uL3NlcnZpY2VzL2F1dGhcIjtcclxuaW1wb3J0IHtRdWVyeVBhcmFtc1R5cGV9IGZyb20gXCIuLi90eXBlcy9xdWVyeS1wYXJhbXMudHlwZVwiO1xyXG5pbXBvcnQge1VzZXJSZXN1bHRUeXBlfSBmcm9tIFwiLi4vdHlwZXMvdXNlci1yZXN1bHQudHlwZVwiO1xyXG5pbXBvcnQge0RlZmF1bHRSZXNwb25zZVR5cGV9IGZyb20gXCIuLi90eXBlcy9kZWZhdWx0LXJlc3BvbnNlLnR5cGVcIjtcclxuaW1wb3J0IHtQYXNzVGVzdFJlc3BvbnNlVHlwZX0gZnJvbSBcIi4uL3R5cGVzL3Bhc3MtdGVzdC1yZXNwb25zZS50eXBlXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgUmVzdWx0IHtcclxuICAgIHByaXZhdGUgcm91dGVQYXJhbXM6IFF1ZXJ5UGFyYW1zVHlwZTtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMucm91dGVQYXJhbXMgPSBVcmxNYW5hZ2VyLmdldFF1ZXJ5UGFyYW1zKCk7XHJcblxyXG4gICAgICAgIHRoaXMuaW5pdCgpO1xyXG5cclxuICAgICAgICBjb25zdCBjaG9zZW5BbnN3ZXJzID0gdGhpcy5yb3V0ZVBhcmFtcy5jaG9zZW5BbnN3ZXJzO1xyXG5cclxuICAgICAgICBjb25zdCB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcclxuICAgICAgICB4aHIub3BlbignUE9TVCcsICdodHRwczovL3Rlc3RvbG9naWEucnUvcGFzcy1xdWl6P2lkPScgKyB0aGlzLnJvdXRlUGFyYW1zLmlkLCBmYWxzZSk7XHJcbiAgICAgICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoJ0NvbnRlbnQtVHlwZScsICdhcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9VVRGLTgnKTtcclxuICAgICAgICB4aHIuc2VuZChKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgICAgIG5hbWU6IHRoaXMucm91dGVQYXJhbXMubmFtZSxcclxuICAgICAgICAgICAgbGFzdE5hbWU6IHRoaXMucm91dGVQYXJhbXMubGFzdE5hbWUsXHJcbiAgICAgICAgICAgIGVtYWlsOiB0aGlzLnJvdXRlUGFyYW1zLmVtYWlsLFxyXG4gICAgICAgICAgICByZXN1bHRzOiBjaG9zZW5BbnN3ZXJzID8gY2hvc2VuQW5zd2Vycy5zcGxpdCgnLCcpLm1hcChOdW1iZXIpIDogW11cclxuICAgICAgICB9KSk7XHJcbiAgICAgICAgaWYgKHhoci5zdGF0dXMgPT09IDIwMCAmJiB4aHIucmVzcG9uc2VUZXh0KSB7XHJcbiAgICAgICAgICAgIGxldCByZXN1bHQgPSBudWxsO1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gSlNPTi5wYXJzZSh4aHIucmVzcG9uc2VUZXh0KTtcclxuICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICAgICAgbG9jYXRpb24uaHJlZiA9ICcvIyc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHJlc3VsdCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYW5zd2Vyc0J0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhbnN3ZXJzLWJ0bicpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGFuc3dlcnNCdG4pIHtcclxuICAgICAgICAgICAgICAgICAgICBhbnN3ZXJzQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgLy8gbG9jYXRpb24uaHJlZiA9ICcjL2Fuc3dlcnM/aWQ9JyArIHRoaXMucm91dGVQYXJhbXMuaWQgKyAnJmNob3NlbkFuc3dlcnM9JyArIGNob3NlbkFuc3dlcnM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uLmhyZWYgPSAnIy9hbnN3ZXJzP2lkPScgKyB0aGlzLnJvdXRlUGFyYW1zLmlkO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBsb2NhdGlvbi5ocmVmID0gJyMvJztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBhc3luYyBpbml0KCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIGNvbnN0IHVzZXJJbmZvOiBVc2VyUmVzdWx0VHlwZSB8IG51bGwgPSBBdXRoLmdldFVzZXJJbmZvKCkgYXMgVXNlclJlc3VsdFR5cGUgfCBudWxsO1xyXG4gICAgICAgIGlmICghdXNlckluZm8pIHtcclxuICAgICAgICAgICAgbG9jYXRpb24uaHJlZiA9ICcjLyc7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnJvdXRlUGFyYW1zLmlkKSB7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0OiBEZWZhdWx0UmVzcG9uc2VUeXBlIHwgUGFzc1Rlc3RSZXNwb25zZVR5cGUgPSBhd2FpdCBDdXN0b21IdHRwLnJlcXVlc3QoY29uZmlnLmhvc3QgKyAnL3Rlc3RzLycgKyB0aGlzLnJvdXRlUGFyYW1zLmlkICsgJy9yZXN1bHQ/dXNlcklkPScgKyB1c2VySW5mby51c2VySWQpXHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICgocmVzdWx0IGFzIERlZmF1bHRSZXNwb25zZVR5cGUpLmVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcigocmVzdWx0IGFzIERlZmF1bHRSZXNwb25zZVR5cGUpLm1lc3NhZ2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXN1bHRTY29yZUVsZW1lbnQ6IEhUTUxFbGVtZW50IHwgbnVsbCA9ICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVzdWx0LXNjb3JlJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3VsdFNjb3JlRWxlbWVudCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHRTY29yZUVsZW1lbnQuaW5uZXJUZXh0ID0gKHJlc3VsdCBhcyBQYXNzVGVzdFJlc3BvbnNlVHlwZSkuc2NvcmUgKyAnLycgKyAocmVzdWx0IGFzIFBhc3NUZXN0UmVzcG9uc2VUeXBlKS50b3RhbDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBsb2NhdGlvbi5ocmVmID0gJyMvJztcclxuICAgIH1cclxufVxyXG5cclxuXHJcblxyXG4iLCJpbXBvcnQge1VybE1hbmFnZXJ9IGZyb20gXCIuLi91dGlscy91cmwtbWFuYWdlclwiO1xyXG5pbXBvcnQge0N1c3RvbUh0dHB9IGZyb20gXCIuLi9zZXJ2aWNlcy9jdXN0b20taHR0cFwiO1xyXG5pbXBvcnQgY29uZmlnIGZyb20gXCIuLi8uLi9jb25maWcvY29uZmlnXCI7XHJcbmltcG9ydCB7QXV0aH0gZnJvbSBcIi4uL3NlcnZpY2VzL2F1dGhcIjtcclxuaW1wb3J0IHtzZXRUZXN0U3RvcmV9IGZyb20gXCIuLi91dGlscy90ZXN0LXN0b3JlXCI7XHJcbmltcG9ydCB7UXVlcnlQYXJhbXNUeXBlfSBmcm9tIFwiLi4vdHlwZXMvcXVlcnktcGFyYW1zLnR5cGVcIjtcclxuaW1wb3J0IHtRdWl6QW5zd2VyVHlwZSwgUXVpelF1ZXN0aW9uVHlwZSwgUXVpelR5cGV9IGZyb20gXCIuLi90eXBlcy9xdWl6LnR5cGVcIjtcclxuaW1wb3J0IHtVc2VyUmVzdWx0VHlwZX0gZnJvbSBcIi4uL3R5cGVzL3VzZXItcmVzdWx0LnR5cGVcIjtcclxuaW1wb3J0IHtEZWZhdWx0UmVzcG9uc2VUeXBlfSBmcm9tIFwiLi4vdHlwZXMvZGVmYXVsdC1yZXNwb25zZS50eXBlXCI7XHJcbmltcG9ydCB7QWN0aW9uVGVzdFR5cGV9IGZyb20gXCIuLi90eXBlcy9hY3Rpb24tdGVzdC50eXBlXCI7XHJcbmltcG9ydCB7VXNlckluZm9UeXBlfSBmcm9tIFwiLi4vdHlwZXMvdXNlci1pbmZvLnR5cGVcIjtcclxuaW1wb3J0IHtQYXNzVGVzdFJlc3BvbnNlVHlwZX0gZnJvbSBcIi4uL3R5cGVzL3Bhc3MtdGVzdC1yZXNwb25zZS50eXBlXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgVGVzdCB7XHJcbiAgICBwcml2YXRlIHByb2dyZXNzQmFyRWxlbWVudDogSFRNTEVsZW1lbnQgfCBudWxsO1xyXG4gICAgcHJpdmF0ZSBuZXh0QnV0dG9uRWxlbWVudDogSFRNTEVsZW1lbnQgfCBudWxsO1xyXG4gICAgcHJpdmF0ZSBwYXNzQnV0dG9uRWxlbWVudDogSFRNTEVsZW1lbnQgfCBudWxsO1xyXG4gICAgcHJpdmF0ZSBwcmV2QnV0dG9uRWxlbWVudDogSFRNTEVsZW1lbnQgfCBudWxsO1xyXG4gICAgcHJpdmF0ZSBxdWVzdGlvblRpdGxlRWxlbWVudDogSFRNTEVsZW1lbnQgfCBudWxsO1xyXG4gICAgcHJpdmF0ZSBvcHRpb25zRWxlbWVudDogSFRNTEVsZW1lbnQgfCBudWxsO1xyXG4gICAgcHJpdmF0ZSBxdWl6OiBRdWl6VHlwZSB8IG51bGw7XHJcbiAgICBwcml2YXRlIGN1cnJlbnRRdWVzdGlvbkluZGV4OiBudW1iZXI7XHJcbiAgICByZWFkb25seSB1c2VyUmVzdWx0OiBVc2VyUmVzdWx0VHlwZVtdIDtcclxuICAgIHByaXZhdGUgcm91dGVQYXJhbXM6IFF1ZXJ5UGFyYW1zVHlwZTtcclxuICAgIHByaXZhdGUgaW50ZXJ2YWw6IG51bWJlciA9IDA7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLnByb2dyZXNzQmFyRWxlbWVudCA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5uZXh0QnV0dG9uRWxlbWVudCA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5wYXNzQnV0dG9uRWxlbWVudCA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5wcmV2QnV0dG9uRWxlbWVudCA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5xdWVzdGlvblRpdGxlRWxlbWVudCA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5vcHRpb25zRWxlbWVudCA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5xdWl6ID0gbnVsbDtcclxuICAgICAgICB0aGlzLmN1cnJlbnRRdWVzdGlvbkluZGV4ID0gMTtcclxuICAgICAgICB0aGlzLnVzZXJSZXN1bHQgPSBbXTtcclxuICAgICAgICB0aGlzLnJvdXRlUGFyYW1zID0gVXJsTWFuYWdlci5nZXRRdWVyeVBhcmFtcygpO1xyXG5cclxuICAgICAgICB0aGlzLmluaXQoKTtcclxuXHJcblxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgYXN5bmMgaW5pdCgpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICBpZiAodGhpcy5yb3V0ZVBhcmFtcy5pZCkge1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0OiBEZWZhdWx0UmVzcG9uc2VUeXBlIHwgUXVpelR5cGUgPSBhd2FpdCBDdXN0b21IdHRwLnJlcXVlc3QoY29uZmlnLmhvc3QgKyAnL3Rlc3RzLycgKyB0aGlzLnJvdXRlUGFyYW1zLmlkKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKChyZXN1bHQgYXMgRGVmYXVsdFJlc3BvbnNlVHlwZSkuZXJyb3IgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoKHJlc3VsdCBhcyBEZWZhdWx0UmVzcG9uc2VUeXBlKS5tZXNzYWdlKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5xdWl6ID0gcmVzdWx0IGFzIFF1aXpUeXBlO1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFRlc3RTdG9yZSh7cXVpejp0aGlzLnF1aXp9KTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXJ0UXVpeigpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc3RhcnRRdWl6KCk6IHZvaWQge1xyXG4gICAgICAgIGlmICghdGhpcy5xdWl6KSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5wcm9ncmVzc0JhckVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvZ3Jlc3MtYmFyJyk7XHJcbiAgICAgICAgdGhpcy5xdWVzdGlvblRpdGxlRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aXRsZScpO1xyXG4gICAgICAgIHRoaXMub3B0aW9uc0VsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnb3B0aW9ucycpO1xyXG4gICAgICAgIHRoaXMubmV4dEJ1dHRvbkVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV4dCcpO1xyXG4gICAgICAgIGlmICh0aGlzLm5leHRCdXR0b25FbGVtZW50KSB7XHJcbiAgICAgICAgICAgIHRoaXMubmV4dEJ1dHRvbkVsZW1lbnQub25jbGljayAgPSAoKSA9PiB0aGlzLm1vdmUoQWN0aW9uVGVzdFR5cGUubmV4dCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMucGFzc0J1dHRvbkVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGFzcycpO1xyXG4gICAgICAgIGlmICh0aGlzLnBhc3NCdXR0b25FbGVtZW50KSB7XHJcbiAgICAgICAgICAgIHRoaXMucGFzc0J1dHRvbkVsZW1lbnQub25jbGljayA9ICgpID0+IHRoaXMubW92ZShBY3Rpb25UZXN0VHlwZS5wYXNzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgcHJlVGl0bGVFbGVtZW50OiBIVE1MRWxlbWVudCB8IG51bGwgPSAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ByZS10aXRsZScpO1xyXG4gICAgICAgIGlmIChwcmVUaXRsZUVsZW1lbnQpIHtcclxuICAgICAgICAgICAgcHJlVGl0bGVFbGVtZW50LmlubmVyVGV4dCA9IHRoaXMucXVpei5uYW1lO1xyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIHRoaXMucHJldkJ1dHRvbkVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJldicpO1xyXG4gICAgICAgIGlmICh0aGlzLnByZXZCdXR0b25FbGVtZW50KSB7XHJcbiAgICAgICAgICAgIHRoaXMucHJldkJ1dHRvbkVsZW1lbnQub25jbGljayA9ICgpID0+IHRoaXMubW92ZS5iaW5kKEFjdGlvblRlc3RUeXBlLnByZXYpO1xyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIHRoaXMucHJlcGFyZVByb2dyZXNzQmFyKCk7XHJcbiAgICAgICAgdGhpcy5zaG93UXVlc3Rpb24oKTtcclxuXHJcbiAgICAgICAgY29uc3QgdGltZXJFbGVtZW50OiBIVE1MRWxlbWVudCB8IG51bGwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGltZXInKTtcclxuICAgICAgICBsZXQgc2Vjb25kcyA9IDU5O1xyXG4gICAgICAgIGNvbnN0IHRoYXQ6IFRlc3QgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMuaW50ZXJ2YWwgPSB3aW5kb3cuc2V0SW50ZXJ2YWwoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBzZWNvbmRzLS07XHJcbiAgICAgICAgICAgIGlmICh0aW1lckVsZW1lbnQpIHtcclxuICAgICAgICAgICAgICAgIHRpbWVyRWxlbWVudC5pbm5lclRleHQgPSBzZWNvbmRzLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChzZWNvbmRzID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKHRoYXQuaW50ZXJ2YWwpO1xyXG4gICAgICAgICAgICAgICAgdGhhdC5jb21wbGV0ZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfS5iaW5kKHRoaXMpLCAxMDAwKVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcHJlcGFyZVByb2dyZXNzQmFyKCk6IHZvaWQge1xyXG4gICAgICAgIGlmICghdGhpcy5xdWl6KSByZXR1cm47XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnF1aXoucXVlc3Rpb25zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGl0ZW1FbGVtZW50OiBIVE1MRWxlbWVudCB8IG51bGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgaXRlbUVsZW1lbnQuY2xhc3NOYW1lID0gJ3Rlc3QtcHJvZ3Jlc3MtYmFyLWl0ZW0gJyArIChpID09PSAwID8gJ2FjdGl2ZScgOiAnJyk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBpdGVtQ2lyY2xlRWxlbWVudDogSFRNTEVsZW1lbnQgfCBudWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgIGl0ZW1DaXJjbGVFbGVtZW50LmNsYXNzTmFtZSA9ICd0ZXN0LXByb2dyZXNzLWJhci1pdGVtLWNpcmNsZSc7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBpdGVtVGV4dEVsZW1lbnQ6IEhUTUxFbGVtZW50IHwgbnVsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICBpdGVtVGV4dEVsZW1lbnQuY2xhc3NOYW1lID0gJ3Rlc3QtcHJvZ3Jlc3MtYmFyLWl0ZW0tdGV4dCc7XHJcbiAgICAgICAgICAgIGl0ZW1UZXh0RWxlbWVudC5pbm5lclRleHQgPSAn0JLQvtC/0YDQvtGBICcgKyAoaSArIDEpO1xyXG5cclxuICAgICAgICAgICAgaXRlbUVsZW1lbnQuYXBwZW5kQ2hpbGQoaXRlbUNpcmNsZUVsZW1lbnQpO1xyXG4gICAgICAgICAgICBpdGVtRWxlbWVudC5hcHBlbmRDaGlsZChpdGVtVGV4dEVsZW1lbnQpO1xyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMucHJvZ3Jlc3NCYXJFbGVtZW50KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnByb2dyZXNzQmFyRWxlbWVudC5hcHBlbmRDaGlsZChpdGVtRWxlbWVudCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcblxyXG5cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICBwcml2YXRlIHNob3dRdWVzdGlvbigpOiB2b2lkIHtcclxuICAgICAgICBpZiAoIXRoaXMucXVpeikgcmV0dXJuO1xyXG4gICAgICAgIGNvbnN0IGFjdGl2ZVF1ZXN0aW9uOiBRdWl6UXVlc3Rpb25UeXBlID0gdGhpcy5xdWl6LnF1ZXN0aW9uc1t0aGlzLmN1cnJlbnRRdWVzdGlvbkluZGV4IC0gMV07XHJcbiAgICAgICAgaWYgKHRoaXMucXVlc3Rpb25UaXRsZUVsZW1lbnQpIHtcclxuICAgICAgICAgICAgdGhpcy5xdWVzdGlvblRpdGxlRWxlbWVudC5pbm5lckhUTUwgPSAnPHNwYW4+0JLQvtC/0YDQvtGBICcgKyB0aGlzLmN1cnJlbnRRdWVzdGlvbkluZGV4ICsgJzogPC9zcGFuPicgKyBhY3RpdmVRdWVzdGlvbi5xdWVzdGlvbjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICggdGhpcy5vcHRpb25zRWxlbWVudCkge1xyXG4gICAgICAgICAgICB0aGlzLm9wdGlvbnNFbGVtZW50LmlubmVySFRNTCA9ICcnO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgdGhhdDogVGVzdCA9IHRoaXM7XHJcbiAgICAgICAgY29uc3QgY2hvc2VuT3B0aW9uOiBVc2VyUmVzdWx0VHlwZSB8IHVuZGVmaW5lZCA9IHRoaXMudXNlclJlc3VsdC5maW5kKGl0ZW0gPT4gaXRlbS5xdWVzdGlvbklkID09PSBhY3RpdmVRdWVzdGlvbi5pZCk7XHJcbiAgICAgICAgYWN0aXZlUXVlc3Rpb24uYW5zd2Vycy5mb3JFYWNoKChhbnN3ZXI6IFF1aXpBbnN3ZXJUeXBlKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IG9wdGlvbkVsZW1lbnQ6IEhUTUxFbGVtZW50IHwgbnVsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICBvcHRpb25FbGVtZW50LmNsYXNzTmFtZSA9ICd0ZXN0LXF1ZXN0aW9uLW9wdGlvbic7XHJcblxyXG5cclxuICAgICAgICAgICAgY29uc3QgaW5wdXRJZCA9ICdhbnN3ZXItJyArIGFuc3dlci5pZDtcclxuICAgICAgICAgICAgY29uc3QgaW5wdXRFbGVtZW50OiBIVE1MRWxlbWVudCB8IG51bGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgICAgICAgICBpbnB1dEVsZW1lbnQuY2xhc3NOYW1lID0gJ29wdGlvbi1hbnN3ZXInO1xyXG4gICAgICAgICAgICBpbnB1dEVsZW1lbnQuc2V0QXR0cmlidXRlKCdpZCcsIGlucHV0SWQpO1xyXG4gICAgICAgICAgICBpbnB1dEVsZW1lbnQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3JhZGlvJyk7XHJcbiAgICAgICAgICAgIGlucHV0RWxlbWVudC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAnYW5zd2VyJyk7XHJcbiAgICAgICAgICAgIGlucHV0RWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgYW5zd2VyLmlkLnRvU3RyaW5nKCkpO1xyXG4gICAgICAgICAgICBpZiAoY2hvc2VuT3B0aW9uICYmIGNob3Nlbk9wdGlvbi5jaG9zZW5BbnN3ZXJJZCA9PT0gYW5zd2VyLmlkKSB7XHJcbiAgICAgICAgICAgICAgICBpbnB1dEVsZW1lbnQuc2V0QXR0cmlidXRlKCdjaGVja2VkJywgJ2NoZWNrZWQnKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaW5wdXRFbGVtZW50Lm9uY2hhbmdlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgdGhhdC5jaG9vc2VBbnN3ZXIoKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGxhYmVsRWxlbWVudDogSFRNTEVsZW1lbnQgfCBudWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcclxuICAgICAgICAgICAgbGFiZWxFbGVtZW50LnNldEF0dHJpYnV0ZSgnZm9yJywgaW5wdXRJZCk7XHJcbiAgICAgICAgICAgIGxhYmVsRWxlbWVudC5pbm5lclRleHQgPSBhbnN3ZXIuYW5zd2VyO1xyXG5cclxuICAgICAgICAgICAgb3B0aW9uRWxlbWVudC5hcHBlbmRDaGlsZChpbnB1dEVsZW1lbnQpO1xyXG4gICAgICAgICAgICBvcHRpb25FbGVtZW50LmFwcGVuZENoaWxkKGxhYmVsRWxlbWVudCk7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLm9wdGlvbnNFbGVtZW50KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9wdGlvbnNFbGVtZW50LmFwcGVuZENoaWxkKG9wdGlvbkVsZW1lbnQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgaWYgKHRoaXMubmV4dEJ1dHRvbkVsZW1lbnQpIHtcclxuICAgICAgICAgICAgaWYgKGNob3Nlbk9wdGlvbiAmJiBjaG9zZW5PcHRpb24uY2hvc2VuQW5zd2VySWQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubmV4dEJ1dHRvbkVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKCdkaXNhYmxlZCcpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5uZXh0QnV0dG9uRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgJ2Rpc2FibGVkJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCB0aGlzLm5leHRCdXR0b25FbGVtZW50KSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmN1cnJlbnRRdWVzdGlvbkluZGV4ID09PSB0aGlzLnF1aXoucXVlc3Rpb25zLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5uZXh0QnV0dG9uRWxlbWVudC5pbm5lclRleHQgPSAn0JfQsNCy0LXRgNGI0LjRgtGMJztcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubmV4dEJ1dHRvbkVsZW1lbnQuaW5uZXJUZXh0ID0gJ9CU0LDQu9GM0YjQtSc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICggdGhpcy5wcmV2QnV0dG9uRWxlbWVudCkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5jdXJyZW50UXVlc3Rpb25JbmRleCA+IDEpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucHJldkJ1dHRvbkVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKCdkaXNhYmxlZCcpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wcmV2QnV0dG9uRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgJ2Rpc2FibGVkJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgY2hvb3NlQW5zd2VyKCk6IHZvaWQge1xyXG4gICAgICAgIGlmICggIHRoaXMubmV4dEJ1dHRvbkVsZW1lbnQpIHtcclxuICAgICAgICAgICAgdGhpcy5uZXh0QnV0dG9uRWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgbW92ZShhY3Rpb246IEFjdGlvblRlc3RUeXBlKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKCF0aGlzLnF1aXopIHJldHVybjtcclxuICAgICAgICBjb25zdCBhY3RpdmVRdWVzdGlvbjogUXVpelF1ZXN0aW9uVHlwZSA9IHRoaXMucXVpei5xdWVzdGlvbnNbdGhpcy5jdXJyZW50UXVlc3Rpb25JbmRleCAtIDFdO1xyXG4gICAgICAgIGNvbnN0IGNob3NlbkFuc3dlcjogSFRNTElucHV0RWxlbWVudCB8IHVuZGVmaW5lZCA9IEFycmF5LmZyb20oZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnb3B0aW9uLWFuc3dlcicpKS5maW5kKGVsZW1lbnQgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gKGVsZW1lbnQgYXMgSFRNTElucHV0RWxlbWVudCkuY2hlY2tlZDtcclxuICAgICAgICB9KSBhcyBIVE1MSW5wdXRFbGVtZW50O1xyXG5cclxuICAgICAgICBsZXQgY2hvc2VuQW5zd2VySWQ6IG51bWJlciB8IG51bGwgPSBudWxsO1xyXG4gICAgICAgIGlmIChjaG9zZW5BbnN3ZXIgJiYgY2hvc2VuQW5zd2VyLnZhbHVlKSB7XHJcbiAgICAgICAgICAgIGNob3NlbkFuc3dlcklkID0gTnVtYmVyKGNob3NlbkFuc3dlci52YWx1ZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBleGlzdGluZ1Jlc3VsdDogVXNlclJlc3VsdFR5cGUgfCB1bmRlZmluZWQgPSB0aGlzLnVzZXJSZXN1bHQuZmluZChpdGVtID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIGl0ZW0ucXVlc3Rpb25JZCA9PT0gYWN0aXZlUXVlc3Rpb24uaWQ7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgaWYgKGNob3NlbkFuc3dlcklkKSB7XHJcbiAgICAgICAgICAgIGlmIChleGlzdGluZ1Jlc3VsdCkge1xyXG4gICAgICAgICAgICAgICAgZXhpc3RpbmdSZXN1bHQuY2hvc2VuQW5zd2VySWQgPSBjaG9zZW5BbnN3ZXJJZDtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudXNlclJlc3VsdC5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICBxdWVzdGlvbklkOiBhY3RpdmVRdWVzdGlvbi5pZCxcclxuICAgICAgICAgICAgICAgICAgICBjaG9zZW5BbnN3ZXJJZDogY2hvc2VuQW5zd2VySWRcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuXHJcblxyXG5cclxuICAgICAgICBpZiAoYWN0aW9uID09PSBBY3Rpb25UZXN0VHlwZS5uZXh0IHx8IGFjdGlvbiA9PT0gQWN0aW9uVGVzdFR5cGUucGFzcykge1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRRdWVzdGlvbkluZGV4Kys7XHJcblxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFF1ZXN0aW9uSW5kZXgtLTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnRRdWVzdGlvbkluZGV4ID4gdGhpcy5xdWl6LnF1ZXN0aW9ucy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgY2xlYXJJbnRlcnZhbCggdGhpcy5pbnRlcnZhbCk7XHJcbiAgICAgICAgICAgIHRoaXMuY29tcGxldGUoKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMucHJvZ3Jlc3NCYXJFbGVtZW50KSB7XHJcbiAgICAgICAgICAgIEFycmF5LmZyb20odGhpcy5wcm9ncmVzc0JhckVsZW1lbnQuY2hpbGRyZW4pLmZvckVhY2goKGl0ZW06IEVsZW1lbnQsIGluZGV4OiBudW1iZXIpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRJdGVtSW5kZXg6IG51bWJlciA9IGluZGV4ICsgMTtcclxuICAgICAgICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnY29tcGxldGUnKTtcclxuICAgICAgICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRJdGVtSW5kZXggPT09IHRoaXMuY3VycmVudFF1ZXN0aW9uSW5kZXgpIHtcclxuICAgICAgICAgICAgICAgICAgICBpdGVtLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChjdXJyZW50SXRlbUluZGV4IDwgdGhpcy5jdXJyZW50UXVlc3Rpb25JbmRleCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LmFkZCgnY29tcGxldGUnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICB0aGlzLnNob3dRdWVzdGlvbigpO1xyXG4gICAgfVxyXG5cclxuICAgcHJpdmF0ZSBhc3luYyBjb21wbGV0ZSgpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICBjb25zdCB1c2VySW5mbzogVXNlckluZm9UeXBlIHwgbnVsbCA9IEF1dGguZ2V0VXNlckluZm8oKTtcclxuICAgICAgICBpZiAoIXVzZXJJbmZvKSB7XHJcbiAgICAgICAgICAgIGxvY2F0aW9uLmhyZWYgPSAnIy8nO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBzZXRUZXN0U3RvcmUoeyB1c2VyUmVzdWx0OiB0aGlzLnVzZXJSZXN1bHQgfSk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCByZXN1bHQ6IERlZmF1bHRSZXNwb25zZVR5cGUgfCBQYXNzVGVzdFJlc3BvbnNlVHlwZSA9IGF3YWl0IEN1c3RvbUh0dHAucmVxdWVzdChjb25maWcuaG9zdCArICcvdGVzdHMvJyArIHRoaXMucm91dGVQYXJhbXMuaWQgKyAnL3Bhc3MnLCAnUE9TVCcsIHtcclxuICAgICAgICAgICAgICAgIHVzZXJJZDogdXNlckluZm8udXNlcklkLFxyXG4gICAgICAgICAgICAgICAgcmVzdWx0czogdGhpcy51c2VyUmVzdWx0XHJcbiAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICAvL2NvbnN0IGNob3NlbkFuc3dlcnNJZHMgPSB0aGlzLnVzZXJSZXN1bHQubWFwKHJlc3VsdCA9PiByZXN1bHQuY2hvc2VuQW5zd2VySWQpLmpvaW4oJywnKTtcclxuICAgICAgICAgICAgLy9jb25zdCB1cmwgPSBuZXcgVVJMKHdpbmRvdy5sb2NhdGlvbi5ocmVmKTtcclxuICAgICAgICAgICAgLy91cmwuc2VhcmNoUGFyYW1zLnNldCgnY2hvc2VuQW5zd2VycycsIGNob3NlbkFuc3dlcnNJZHMpO1xyXG4gICAgICAgICAgLy8gIHRoaXMucm91dGVQYXJhbXMuY2hvc2VuQW5zd2VycztcclxuXHJcblxyXG5cclxuICAgICAgICAgICAgaWYgKHJlc3VsdCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKChyZXN1bHQgYXMgRGVmYXVsdFJlc3BvbnNlVHlwZSkuZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoKHJlc3VsdCBhcyBEZWZhdWx0UmVzcG9uc2VUeXBlKS5tZXNzYWdlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGxvY2F0aW9uLmhyZWYgPSAnIy9yZXN1bHQ/aWQ9JyArIHRoaXMucm91dGVQYXJhbXMuaWQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICB9XHJcbn0iLCJpbXBvcnQge0Zvcm19IGZyb20gXCIuL2NvbXBvbmVudHMvZm9ybVwiO1xyXG5cclxuaW1wb3J0IHtBbnN3ZXJzfSBmcm9tIFwiLi9jb21wb25lbnRzL2Fuc3dlcnNcIjtcclxuaW1wb3J0IHtSZXN1bHR9IGZyb20gXCIuL2NvbXBvbmVudHMvcmVzdWx0XCI7XHJcbmltcG9ydCB7Q2hvaWNlfSBmcm9tIFwiLi9jb21wb25lbnRzL2Nob2ljZVwiO1xyXG5pbXBvcnQge1Rlc3R9IGZyb20gXCIuL2NvbXBvbmVudHMvdGVzdFwiO1xyXG5pbXBvcnQge0F1dGh9IGZyb20gXCIuL3NlcnZpY2VzL2F1dGhcIjtcclxuaW1wb3J0IHtSb3V0ZVR5cGV9IGZyb20gXCIuL3R5cGVzL3JvdXRlLnR5cGVcIjtcclxuaW1wb3J0IHtVc2VySW5mb1R5cGV9IGZyb20gXCIuL3R5cGVzL3VzZXItaW5mby50eXBlXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgUm91dGVyIHtcclxuICAgIHJlYWRvbmx5IGNvbnRlbnRFbGVtZW50OiBIVE1MRWxlbWVudCB8IG51bGw7XHJcbiAgICByZWFkb25seSBzdHlsZXNFbGVtZW50OiBIVE1MRWxlbWVudCB8IG51bGw7XHJcbiAgICByZWFkb25seSB0aXRsZUVsZW1lbnQ6IEhUTUxFbGVtZW50IHwgbnVsbDtcclxuICAgIHJlYWRvbmx5IHByb2ZpbGVFbGVtZW50OiBIVE1MRWxlbWVudCB8IG51bGw7XHJcbiAgICByZWFkb25seSBwcm9maWxlRnVsbE5hbWVFbGVtZW50OiBIVE1MRWxlbWVudCB8IG51bGw7XHJcblxyXG4gICAgcHJpdmF0ZSByb3V0ZXM6IFJvdXRlVHlwZVtdO1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcblxyXG4gICAgICAgIHRoaXMuY29udGVudEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xyXG4gICAgICAgIHRoaXMuc3R5bGVzRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdHlsZXMnKTtcclxuICAgICAgICB0aGlzLnRpdGxlRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwYWdlLXRpdGxlJyk7XHJcbiAgICAgICAgdGhpcy5wcm9maWxlRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9maWxlJyk7XHJcbiAgICAgICAgdGhpcy5wcm9maWxlRnVsbE5hbWVFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2ZpbGUtZnVsbC1uYW1lJyk7XHJcblxyXG4gICAgICAgIHRoaXMucm91dGVzID0gW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByb3V0ZTogJyMvJyxcclxuICAgICAgICAgICAgICAgIHRpdGxlOiAn0JPQu9Cw0LLQvdCw0Y8nLFxyXG4gICAgICAgICAgICAgICAgdGVtcGxhdGU6ICd0ZW1wbGF0ZXMvaW5kZXguaHRtbCcsXHJcbiAgICAgICAgICAgICAgICBzdHlsZXM6ICdzdHlsZXMvaW5kZXguY3NzJyxcclxuICAgICAgICAgICAgICAgIGxvYWQ6ICgpID0+IHtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcm91dGU6ICcjL3NpZ251cCcsXHJcbiAgICAgICAgICAgICAgICB0aXRsZTogJ9Cg0LXQs9C40YHRgtGA0LDRhtC40Y8nLFxyXG4gICAgICAgICAgICAgICAgdGVtcGxhdGU6ICd0ZW1wbGF0ZXMvc2lnbnVwLmh0bWwnLFxyXG4gICAgICAgICAgICAgICAgc3R5bGVzOiAnc3R5bGVzL2Zvcm0uY3NzJyxcclxuICAgICAgICAgICAgICAgIGxvYWQ6ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBuZXcgRm9ybSgnc2lnbi11cCcpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByb3V0ZTogJyMvbG9naW4nLFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6ICfQktGF0L7QtCDQsiDRgdC40YHRgtC10LzRgycsXHJcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZTogJ3RlbXBsYXRlcy9sb2dpbi5odG1sJyxcclxuICAgICAgICAgICAgICAgIHN0eWxlczogJ3N0eWxlcy9mb3JtLmNzcycsXHJcbiAgICAgICAgICAgICAgICBsb2FkOiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmV3IEZvcm0oJ2xvZ2luJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJvdXRlOiAnIy9jaG9pY2UnLFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6ICfQktGL0LHQvtGAINGC0LXRgdGC0LAnLFxyXG4gICAgICAgICAgICAgICAgdGVtcGxhdGU6ICd0ZW1wbGF0ZXMvY2hvaWNlLmh0bWwnLFxyXG4gICAgICAgICAgICAgICAgc3R5bGVzOiAnc3R5bGVzL2Nob2ljZS5jc3MnLFxyXG4gICAgICAgICAgICAgICAgbG9hZDogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIG5ldyBDaG9pY2UoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcm91dGU6ICcjL3Rlc3QnLFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6ICfQn9GA0L7RhdC+0LbQtNC10L3QuNC1INGC0LXRgdGC0LAnLFxyXG4gICAgICAgICAgICAgICAgdGVtcGxhdGU6ICd0ZW1wbGF0ZXMvdGVzdC5odG1sJyxcclxuICAgICAgICAgICAgICAgIHN0eWxlczogJ3N0eWxlcy90ZXN0LmNzcycsXHJcbiAgICAgICAgICAgICAgICBsb2FkOiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmV3IFRlc3QoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcm91dGU6ICcjL3Jlc3VsdCcsXHJcbiAgICAgICAgICAgICAgICB0aXRsZTogJ9Cg0LXQt9GD0LvRjNGC0LDRgiDRgtC10YHRgtCwJyxcclxuICAgICAgICAgICAgICAgIHRlbXBsYXRlOiAndGVtcGxhdGVzL3Jlc3VsdC5odG1sJyxcclxuICAgICAgICAgICAgICAgIHN0eWxlczogJ3N0eWxlcy9yZXN1bHQuY3NzJyxcclxuICAgICAgICAgICAgICAgIGxvYWQ6ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBuZXcgUmVzdWx0KCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJvdXRlOiAnIy9hbnN3ZXJzJyxcclxuICAgICAgICAgICAgICAgIHRpdGxlOiAn0J7RgtCy0LXRgtGLINGC0LXRgdGC0LAnLFxyXG4gICAgICAgICAgICAgICAgdGVtcGxhdGU6ICd0ZW1wbGF0ZXMvYW5zd2Vycy5odG1sJyxcclxuICAgICAgICAgICAgICAgIHN0eWxlczogJ3N0eWxlcy9hbnN3ZXJzLmNzcycsXHJcbiAgICAgICAgICAgICAgICBsb2FkOiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmV3IEFuc3dlcnMoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICBdXHJcblxyXG4gICAgfVxyXG4gICAgcHVibGljIGFzeW5jIG9wZW5Sb3V0ZSgpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICBjb25zdCB1cmxSb3V0ZTogc3RyaW5nID0gd2luZG93LmxvY2F0aW9uLmhhc2guc3BsaXQoJz8nKVswXVxyXG4gICAgICAgIGlmICh1cmxSb3V0ZSA9PT0gJyMvbG9nb3V0Jykge1xyXG4gICAgICAgICAgICBjb25zdCByZXN1bHQ6IGJvb2xlYW4gPSBhd2FpdCBBdXRoLmxvZ291dCgpO1xyXG4gICAgICAgICAgICBpZiAocmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9ICcjLyc7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBuZXdSb3V0ZTogUm91dGVUeXBlIHwgdW5kZWZpbmVkID0gdGhpcy5yb3V0ZXMuZmluZChpdGVtID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIGl0ZW0ucm91dGUgPT09IHVybFJvdXRlO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpZiAoIW5ld1JvdXRlKSB7XHJcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gJyMvJztcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCF0aGlzLmNvbnRlbnRFbGVtZW50IHx8ICF0aGlzLnN0eWxlc0VsZW1lbnQgfHwgIXRoaXMudGl0bGVFbGVtZW50IHx8ICF0aGlzLnByb2ZpbGVFbGVtZW50IHx8ICEgdGhpcy5wcm9maWxlRnVsbE5hbWVFbGVtZW50KSB7XHJcbiAgICAgICAgICAgIGlmICh1cmxSb3V0ZSA9PT0gJyMvJykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9ICcjLyc7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jb250ZW50RWxlbWVudC5pbm5lckhUTUwgPVxyXG4gICAgICAgICAgICBhd2FpdCBmZXRjaChuZXdSb3V0ZS50ZW1wbGF0ZSkudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS50ZXh0KCkpO1xyXG5cclxuICAgICAgICB0aGlzLnN0eWxlc0VsZW1lbnQuc2V0QXR0cmlidXRlKCdocmVmJywgbmV3Um91dGUuc3R5bGVzKTtcclxuICAgICAgICB0aGlzLnRpdGxlRWxlbWVudC5pbm5lclRleHQgPSBuZXdSb3V0ZS50aXRsZTtcclxuXHJcbiAgICAgICAgY29uc3QgdXNlckluZm86IFVzZXJJbmZvVHlwZSB8IG51bGwgPSBBdXRoLmdldFVzZXJJbmZvKCk7XHJcbiAgICAgICAgY29uc3QgYWNjZXNzVG9rZW46IHN0cmluZyB8IG51bGwgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShBdXRoLmFjY2Vzc1Rva2VuS2V5KTtcclxuICAgICAgICBpZiAodXNlckluZm8gJiYgYWNjZXNzVG9rZW4pIHtcclxuICAgICAgICAgICAgdGhpcy5wcm9maWxlRWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xyXG4gICAgICAgICAgICB0aGlzLnByb2ZpbGVGdWxsTmFtZUVsZW1lbnQuaW5uZXJUZXh0ID0gdXNlckluZm8uZnVsbE5hbWU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5wcm9maWxlRWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbmV3Um91dGUubG9hZCgpO1xyXG5cclxuXHJcblxyXG4gICAgfVxyXG59IiwiaW1wb3J0IGNvbmZpZyBmcm9tIFwiLi4vLi4vY29uZmlnL2NvbmZpZ1wiO1xyXG5pbXBvcnQge1VzZXJJbmZvVHlwZX0gZnJvbSBcIi4uL3R5cGVzL3VzZXItaW5mby50eXBlXCI7XHJcbmltcG9ydCB7UmVmcmVzaFJlc3BvbnNlVHlwZX0gZnJvbSBcIi4uL3R5cGVzL3JlZnJlc2gtcmVzcG9uc2UudHlwZVwiO1xyXG5pbXBvcnQge0xvZ291dFJlc3BvbnNlVHlwZX0gZnJvbSBcIi4uL3R5cGVzL2xvZ291dC1yZXNwb25zZS50eXBlXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgQXV0aCB7XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBhY2Nlc3NUb2tlbktleTogc3RyaW5nID0gJ2FjY2Vzc1Rva2VuJztcclxuICAgIHByaXZhdGUgc3RhdGljIHJlZnJlc2hUb2tlbktleTogc3RyaW5nID0gJ3JlZnJlc2hUb2tlbic7XHJcbiAgICBwcml2YXRlIHN0YXRpYyB1c2VySW5mb0tleTogc3RyaW5nID0gJ3VzZXJJbmZvJztcclxuICAgIHByaXZhdGUgc3RhdGljIHVzZXJFbWFpbEtleTogc3RyaW5nID0gJ3VzZXJFbWFpbCc7XHJcblxyXG5cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGFzeW5jIHByb2Nlc3NVbmF1dGhvcml6ZWRSZXNwb25zZSgpOiBQcm9taXNlPGJvb2xlYW4+IHtcclxuICAgICAgICBjb25zdCByZWZyZXNoVG9rZW46IHN0cmluZyB8IG51bGwgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSh0aGlzLnJlZnJlc2hUb2tlbktleSk7XHJcbiAgICAgICAgaWYgKHJlZnJlc2hUb2tlbikge1xyXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZTogUmVzcG9uc2UgPSBhd2FpdCBmZXRjaChjb25maWcuaG9zdCArICcvcmVmcmVzaCcsIHtcclxuICAgICAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgICAgICdDb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7cmVmcmVzaFRva2VuOiByZWZyZXNoVG9rZW59KVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgaWYgKHJlc3BvbnNlICYmIHJlc3BvbnNlLnN0YXR1cyA9PT0gMjAwKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQ6IFJlZnJlc2hSZXNwb25zZVR5cGUgfCBudWxsID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdCAmJiAhcmVzdWx0LmVycm9yICYmIHJlc3VsdC5hY2Nlc3NUb2tlbiAmJiByZXN1bHQucmVmcmVzaFRva2VuKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRUb2tlbnMocmVzdWx0LmFjY2Vzc1Rva2VuLCByZXN1bHQucmVmcmVzaFRva2VuKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnJlbW92ZVRva2VucygpO1xyXG4gICAgICAgIGxvY2F0aW9uLmhyZWYgPSAnIy8nO1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGFzeW5jIGxvZ291dCgpOiBQcm9taXNlPGJvb2xlYW4+IHtcclxuICAgICAgICBjb25zdCByZWZyZXNoVG9rZW46IHN0cmluZyB8IG51bGwgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSh0aGlzLnJlZnJlc2hUb2tlbktleSk7XHJcbiAgICAgICAgaWYgKHJlZnJlc2hUb2tlbikge1xyXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZTogUmVzcG9uc2UgPSBhd2FpdCBmZXRjaChjb25maWcuaG9zdCArICcvbG9nb3V0Jywge1xyXG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgJ0NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgICAgICAgICAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtyZWZyZXNoVG9rZW46IHJlZnJlc2hUb2tlbn0pXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBpZiAocmVzcG9uc2UgJiYgcmVzcG9uc2Uuc3RhdHVzID09PSAyMDApIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdDogTG9nb3V0UmVzcG9uc2VUeXBlIHwgbnVsbCA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICAgICAgICAgIGlmIChyZXN1bHQgJiYgIXJlc3VsdC5lcnJvcikge1xyXG4gICAgICAgICAgICAgICAgICAgIEF1dGgucmVtb3ZlVG9rZW5zKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0odGhpcy51c2VySW5mb0tleSk7XHJcbiAgICAgICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0odGhpcy51c2VyRW1haWxLZXkpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuXHJcbiAgICB9XHJcbiAgICBwdWJsaWMgc3RhdGljIHNldFRva2VucyhhY2Nlc3NUb2tlbjogc3RyaW5nLCByZWZyZXNoVG9rZW46IHN0cmluZyk6IHZvaWQge1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKHRoaXMuYWNjZXNzVG9rZW5LZXksIGFjY2Vzc1Rva2VuKTtcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSh0aGlzLnJlZnJlc2hUb2tlbktleSwgcmVmcmVzaFRva2VuKTtcclxuICAgIH1cclxuICAgIHByaXZhdGUgc3RhdGljIHJlbW92ZVRva2VucygpOiB2b2lkIHtcclxuICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSh0aGlzLmFjY2Vzc1Rva2VuS2V5KTtcclxuICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSh0aGlzLnJlZnJlc2hUb2tlbktleSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBzZXRVc2VySW5mbyhpbmZvOiBVc2VySW5mb1R5cGUpOiB2b2lkIHtcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSh0aGlzLnVzZXJJbmZvS2V5LCBKU09OLnN0cmluZ2lmeShpbmZvKSk7XHJcbiAgICAgICAgaWYgKGluZm8uZW1haWwpIHtcclxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0odGhpcy51c2VyRW1haWxLZXksIGluZm8uZW1haWwpO1xyXG5cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgc3RhdGljIGdldFVzZXJJbmZvKCk6IFVzZXJJbmZvVHlwZSB8IG51bGwge1xyXG4gICAgICAgIGNvbnN0IHVzZXJJbmZvOiBzdHJpbmcgfCBudWxsID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0odGhpcy51c2VySW5mb0tleSk7XHJcbiAgICAgICAgaWYgKHVzZXJJbmZvKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBKU09OLnBhcnNlKHVzZXJJbmZvKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbiAgICBzdGF0aWMgZ2V0VXNlckVtYWlsKCkge1xyXG4gICAgICAgIHJldHVybiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSh0aGlzLnVzZXJFbWFpbEtleSk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQge0F1dGh9IGZyb20gXCIuL2F1dGhcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBDdXN0b21IdHRwIHtcclxuICAgcHVibGljIHN0YXRpYyBhc3luYyByZXF1ZXN0KHVybDogc3RyaW5nLCBtZXRob2Q6IHN0cmluZyA9IFwiR0VUXCIsIGJvZHk6IGFueSA9IG51bGwpOiBQcm9taXNlPGFueT4ge1xyXG5cclxuICAgICAgICBjb25zdCBwYXJhbXM6IGFueSA9IHtcclxuICAgICAgICAgICAgbWV0aG9kOiBtZXRob2QsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICdDb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAgICAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICBsZXQgdG9rZW46IHN0cmluZyB8IG51bGwgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShBdXRoLmFjY2Vzc1Rva2VuS2V5KTtcclxuICAgICAgICBpZiAodG9rZW4pIHtcclxuICAgICAgICAgICAgcGFyYW1zLmhlYWRlcnNbJ3gtYWNjZXNzLXRva2VuJ10gPSB0b2tlbjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChib2R5KSB7XHJcbiAgICAgICAgICAgIHBhcmFtcy5ib2R5ID0gSlNPTi5zdHJpbmdpZnkoYm9keSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlOiBSZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCwgcGFyYW1zKTtcclxuXHJcbiAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA8IDIwMCB8fCByZXNwb25zZS5zdGF0dXMgPj0gMzAwKSB7XHJcblxyXG4gICAgICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSA0MDEpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdDogYm9vbGVhbiA9IGF3YWl0IEF1dGgucHJvY2Vzc1VuYXV0aG9yaXplZFJlc3BvbnNlKCk7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICBhd2FpdCB0aGlzLnJlcXVlc3QodXJsLCBtZXRob2QsIGJvZHkpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKHJlc3BvbnNlLnN0YXR1c1RleHQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG5cclxuICAgIH1cclxufSIsImV4cG9ydCBlbnVtIEFjdGlvblRlc3RUeXBlIHtcclxuICAgIG5leHQgPSAnbmV4dCcsXHJcbiAgICBwcmV2ID0gJ3ByZXYnLFxyXG4gICAgcGFzcyA9ICdwYXNzJyxcclxufSIsIi8vXHJcbi8vIGxldCB0ZXN0U3RvcmUgPSB7XHJcbi8vICAgICBxdWl6OiBudWxsLFxyXG4vLyAgICAgdXNlclJlc3VsdDogW11cclxuLy8gfTtcclxuLy9cclxuLy8gZXhwb3J0IGZ1bmN0aW9uIGdldFRlc3RTdG9yZSgpIHtcclxuLy8gICAgIHJldHVybiB0ZXN0U3RvcmU7XHJcbi8vIH1cclxuLy9cclxuLy8gIGV4cG9ydCBmdW5jdGlvbiBzZXRUZXN0U3RvcmUobmV3U3RvcmUpIHtcclxuLy8gICAgIHRlc3RTdG9yZSA9IHsgLi4udGVzdFN0b3JlLCAuLi5uZXdTdG9yZSB9O1xyXG4vLyB9XHJcbi8vINCe0L/RgNC10LTQtdC70Y/QtdC8INGC0LjQv9GLINC00LvRjyDQstCw0YjQtdCz0L4g0YHQvtGB0YLQvtGP0L3QuNGPXHJcbmludGVyZmFjZSBRdWl6IHtcclxuICAgIC8vINCU0L7QsdCw0LLRjNGC0LUg0L3QtdC+0LHRhdC+0LTQuNC80YvQtSDQv9C+0LvRjyDQtNC70Y8g0LjQvdGC0LXRgNGE0LXQudGB0LAgUXVpelxyXG4gICAgaWQ6IG51bWJlcjsgLy8g0J/RgNC40LzQtdGAINC/0L7Qu9GPXHJcbiAgICB0aXRsZT86IHN0cmluZzsgLy8g0J/RgNC40LzQtdGAINC/0L7Qu9GPXHJcbiAgICAvLyDQlNC+0LHQsNCy0YzRgtC1INC00YDRg9Cz0LjQtSDQv9C+0LvRjyDQsiDQt9Cw0LLQuNGB0LjQvNC+0YHRgtC4INC+0YIg0LLQsNGI0LXQuSDQvNC+0LTQtdC70Lgg0LTQsNC90L3Ri9GFXHJcbn1cclxuXHJcbmludGVyZmFjZSBVc2VyUmVzdWx0IHtcclxuICAgIHF1ZXN0aW9uSWQ6IG51bWJlcjtcclxuICAgIGNob3NlbkFuc3dlcklkOiBudW1iZXI7XHJcbiAgICB1c2VySWQ/OiBudW1iZXI7IC8vINCV0YHQu9C4INGDINCy0LDRgSDQtdGB0YLRjCDRjdGC0L4g0L/QvtC70LVcclxufVxyXG5cclxuLy8g0J7Qv9GA0LXQtNC10LvRj9C10Lwg0YLQuNC/INC00LvRjyDRgtC10YHRgtC+0LLQvtCz0L4g0YXRgNCw0L3QuNC70LjRidCwXHJcbmludGVyZmFjZSBUZXN0U3RvcmUge1xyXG4gICAgcXVpej86IFF1aXogfCBudWxsO1xyXG4gICAgdXNlclJlc3VsdDogVXNlclJlc3VsdFtdO1xyXG59XHJcblxyXG4vLyDQmNC90LjRhtC40LDQu9C40LfQsNGG0LjRjyDRgtC10YHRgtC+0LLQvtCz0L4g0YXRgNCw0L3QuNC70LjRidCwXHJcbmxldCB0ZXN0U3RvcmU6IFRlc3RTdG9yZSA9IHtcclxuICAgIHF1aXo6IG51bGwsXHJcbiAgICB1c2VyUmVzdWx0OiBbXVxyXG59O1xyXG5cclxuLy8g0KTRg9C90LrRhtC40Y8g0LTQu9GPINC/0L7Qu9GD0YfQtdC90LjRjyDRgtC10YHRgtC+0LLQvtCz0L4g0YXRgNCw0L3QuNC70LjRidCwXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRUZXN0U3RvcmUoKTogVGVzdFN0b3JlIHtcclxuICAgIHJldHVybiB0ZXN0U3RvcmU7XHJcbn1cclxuXHJcbi8vINCk0YPQvdC60YbQuNGPINC00LvRjyDRg9GB0YLQsNC90L7QstC60Lgg0L3QvtCy0L7Qs9C+INGB0L7RgdGC0L7Rj9C90LjRjyDQsiDRgtC10YHRgtC+0LLQvtC8INGF0YDQsNC90LjQu9C40YnQtVxyXG5leHBvcnQgZnVuY3Rpb24gc2V0VGVzdFN0b3JlKG5ld1N0b3JlOiBQYXJ0aWFsPFRlc3RTdG9yZT4pOiB2b2lkIHtcclxuICAgIHRlc3RTdG9yZSA9IHsgLi4udGVzdFN0b3JlLCAuLi5uZXdTdG9yZSB9O1xyXG59XHJcbiIsImltcG9ydCB7UXVlcnlQYXJhbXNUeXBlfSBmcm9tIFwiLi4vdHlwZXMvcXVlcnktcGFyYW1zLnR5cGVcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBVcmxNYW5hZ2VyIHtcclxuXHJcbiAgIHB1YmxpYyBzdGF0aWMgZ2V0UXVlcnlQYXJhbXMoKTogUXVlcnlQYXJhbXNUeXBlIHtcclxuICAgICAgICBjb25zdCBxczogc3RyaW5nID0gZG9jdW1lbnQubG9jYXRpb24uaGFzaC5zcGxpdCgnKycpLmpvaW4oJyAnKTtcclxuXHJcbiAgICAgICAgbGV0IHBhcmFtczogUXVlcnlQYXJhbXNUeXBlID0ge30sXHJcbiAgICAgICAgICAgIHRva2VuczogUmVnRXhwRXhlY0FycmF5IHwgbnVsbCxcclxuICAgICAgICAgICAgcmU6IFJlZ0V4cCA9IC9bPyZdKFtePV0rKT0oW14mXSopL2c7XHJcblxyXG4gICAgICAgIHdoaWxlICh0b2tlbnMgPSByZS5leGVjKHFzKSkge1xyXG4gICAgICAgICAgICBwYXJhbXNbZGVjb2RlVVJJQ29tcG9uZW50KHRva2Vuc1sxXSldID0gZGVjb2RlVVJJQ29tcG9uZW50KHRva2Vuc1syXSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gcGFyYW1zO1xyXG4gICAgfVxyXG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsImltcG9ydCB7Um91dGVyfSBmcm9tIFwiLi9yb3V0ZXJcIjtcclxuXHJcbmNsYXNzIEFwcCB7XHJcbiAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyO1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5yb3V0ZXIgPSBuZXcgUm91dGVyKCk7XHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCB0aGlzLmhhbmRsZVJvdXRlQ2hhbmdpbmcuYmluZCh0aGlzKSk7XHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3BvcHN0YXRlJywgdGhpcy5oYW5kbGVSb3V0ZUNoYW5naW5nLmJpbmQodGhpcykpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgaGFuZGxlUm91dGVDaGFuZ2luZygpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnJvdXRlci5vcGVuUm91dGUoKTtcclxuICAgIH1cclxufVxyXG5cclxuKG5ldyBBcHAoKSk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9