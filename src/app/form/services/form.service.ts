import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Question, QuestionTypes, Answer } from '../models';

@Injectable()
export class FormService {
  get questions$() {
    return this._questions$.asObservable();
  }

  get answers$() {
    return this._answers$.asObservable();
  }

  private _questions$ = new BehaviorSubject<Array<Question>>([]);

  private _answers$ = new BehaviorSubject<Array<Answer>>([]);

  constructor() { }

  addQuestion(question: Question): void {
    console.log('cau hoi', question);
    this._questions$.next([
      ...this._questions$.value,
      question
    ]);
  }

  saveAnswers(answers: Array<Answer>) {
    this._answers$.next(answers);
  }
}
