import {UrlManager} from "../utils/url-manager";
import {CustomHttp} from "../services/custom-http";
import config from "../../config/config";
import {Auth} from "../services/auth";
import {QueryParamsType} from "../types/query-params.type";
import {UserResultType} from "../types/user-result.type";
import {DefaultResponseType} from "../types/default-response.type";
import {PassTestResponseType} from "../types/pass-test-response.type";

export class Result {
    private routeParams: QueryParamsType;
    constructor() {
        this.routeParams = UrlManager.getQueryParams();

        this.init();

        const chosenAnswers = this.routeParams.chosenAnswers;

        const xhr = new XMLHttpRequest();
        xhr.open('POST', 'https://testologia.ru/pass-quiz?id=' + this.routeParams.id, false);
        xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
        xhr.send(JSON.stringify({
            name: this.routeParams.name,
            lastName: this.routeParams.lastName,
            email: this.routeParams.email,
            results: chosenAnswers ? chosenAnswers.split(',').map(Number) : []
        }));
        if (xhr.status === 200 && xhr.responseText) {
            let result = null;
            try {
                result = JSON.parse(xhr.responseText);
            } catch (e) {
                location.href = '/#';
            }
            if (result) {
                const answersBtn = document.getElementById('answers-btn');
                if (answersBtn) {
                    answersBtn.addEventListener('click', (event) => {
                        event.preventDefault();
                       // location.href = '#/answers?id=' + this.routeParams.id + '&chosenAnswers=' + chosenAnswers;
                        location.href = '#/answers?id=' + this.routeParams.id;


                    })
                }

            }
        } else {
            location.href = '#/';
        }
    }

    private async init(): Promise<void> {
        const userInfo: UserResultType | null = Auth.getUserInfo() as UserResultType | null;
        if (!userInfo) {
            location.href = '#/';
            return;
        }

        if (this.routeParams.id) {
            try {

                const result: DefaultResponseType | PassTestResponseType = await CustomHttp.request(config.host + '/tests/' + this.routeParams.id + '/result?userId=' + userInfo.userId)

                if (result) {
                    if ((result as DefaultResponseType).error) {
                        throw new Error((result as DefaultResponseType).message);
                    }
                    const resultScoreElement: HTMLElement | null =  document.getElementById('result-score');
                    if (resultScoreElement) {
                        resultScoreElement.innerText = (result as PassTestResponseType).score + '/' + (result as PassTestResponseType).total;
                    }

                    return;
                }
            } catch (error) {
                console.log(error);
            }
        }
        location.href = '#/';
    }
}



