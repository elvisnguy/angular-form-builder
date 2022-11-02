import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { filter } from 'rxjs';
import { Answer, Question, QuestionTypes } from '../models';
import { QuestionBuilderDialogComponent } from '../question-builder-dialog/question-builder-dialog.component';
import { FormService } from '../services/form.service';

@Component({
  selector: 'app-questions-page',
  templateUrl: './questions-page.component.html',
  styleUrls: ['./questions-page.component.scss']
})
export class QuestionsPageComponent implements OnInit {

  questionTypeEnum = QuestionTypes;
  questions: Array<Question> = [];
  checkValid: Map<number, boolean> = new Map();
  answers: Map<number, Answer> = new Map();
  isSubmited = false;

  constructor(
    private router: Router,
    private dialog: MatDialog,
    private formService: FormService,
  ) {

  }
  ngOnInit(): void {
    this.formService.questions$.subscribe(questions => {
      this.questions = questions;
    });
  }

  openFormBuilderDialog(): void {
    this.isSubmited = false;
    this.dialog.open(QuestionBuilderDialogComponent, {
      width: '580px',
      disableClose: true,
    }).afterClosed()
      .pipe(
        filter(question => !!question)
      )
      .subscribe((question: Question) => {
        const q = question
        console.log('q', q);
       this.formService.addQuestion(question);
      });
  }

  onFormChanged(event: { answer: Answer, isValid: boolean }, index: number): void {
    this.checkValid.set(index, event.isValid);
    this.answers.set(index, event.answer);
  }

  goToReviewMyAnswers() {
    this.isSubmited = true;
    if (this.checkValidateAnswers()) {

      this.formService.saveAnswers(Array.from(this.answers.values()));

      this.router.navigate(['form', 'answers']);
    }
  }

  private checkValidateAnswers(): boolean {
    return Array.from(this.checkValid.values()).filter(isValid => !isValid).length === 0;
  }

}
