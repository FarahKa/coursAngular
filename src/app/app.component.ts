import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { QuestionBase } from './dynamic/question-base';
import { QuestionService } from './dynamic/question.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:  [QuestionService]
})
export class AppComponent {
  title = 'testest';
  questions$: Observable<QuestionBase<any>[]>;

  constructor(service: QuestionService) {
    this.questions$ = service.getQuestions();
  }
}
