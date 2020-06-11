import {Component, OnInit} from '@angular/core';
import {Question} from "../../models/Question";
import {QuestionsService} from "../../services/questions.service";

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {
  questions: Question[];
  loading: boolean;

  constructor(private questionService: QuestionsService) {
    this.loading = true;
    this.questions = [];
  }

  ngOnInit(): void {
    this.questionService.getQuestions().subscribe((res) => {
      if (res['response_code'] === 0) {
        res['results'].forEach(r => {
          this.questions.push(r);
        });
      }
      this.loading = false;
    });
  }

}
