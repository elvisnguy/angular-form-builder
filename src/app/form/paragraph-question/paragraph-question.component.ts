import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Answer, Question, QuestionTypes } from '../models';

@Component({
  selector: 'app-paragraph-question',
  templateUrl: './paragraph-question.component.html',
  styleUrls: ['./paragraph-question.component.scss']
})
export class ParagraphQuestionComponent implements OnChanges {

  @Input() question!: Question;
  @Input() isSubmited = false;
  @Output() formChanges = new EventEmitter<{ answer: Answer, isValid: boolean }>();

  questionTypeEnum = QuestionTypes;
  form!: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      answer: ['']
    });

    this.form.valueChanges.subscribe(value => {

      this.formChanges.emit({
        answer: {
          question: this.question.question,
          type: QuestionTypes.Paragraph,
          answer: value.answer.trim(),
        },
        isValid: this.form.valid
      });
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['question'] && this.question && this.question.isRequired) {
      this.form.get('answer')?.setValidators(Validators.required);
    }
  }

}
