import { QuestionBase } from './dynamic/question-base';

export class TextboxQuestion extends QuestionBase<string> {
  controlType = 'textbox';
}