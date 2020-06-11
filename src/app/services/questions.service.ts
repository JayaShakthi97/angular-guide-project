import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ConstantsService} from "./constants.service";

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {


  constructor(public http: HttpClient) {
  }

  getQuestions() {
    const url = ConstantsService.BASE_URL + '?amount=10';
    return this.http.get(url);
  }
}
