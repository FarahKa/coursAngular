import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { QuestionBase } from './question-base';

@Injectable()
export class QuestionControlService {
  constructor() { }

  toFormGroup(questions: QuestionBase<string>[] ) {
    const group: any = {};

    questions.forEach(question => {
      if(question.type === "checkbox") {
        group[question.key] = question.required ? new FormControl(question.value || '', Validators.requiredTrue)
        : new FormControl(question.value || '');
      } else{
      group[question.key] = question.required ? new FormControl(question.value || '', Validators.required)
                                              : new FormControl(question.value || '');        
      }

    });
    return new FormGroup(group);
  }
}