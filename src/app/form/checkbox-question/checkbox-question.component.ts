import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { Answer, Question, QuestionTypes } from '../models';

@Component({
  selector: 'app-checkbox-question',
  templateUrl: './checkbox-question.component.html',
  styleUrls: ['./checkbox-question.component.scss']
})
export class CheckboxQuestionComponent implements OnChanges {
  @Input() question!: Question;
  @Input() isSubmited = false;
  @Output() formChanges = new EventEmitter<{ answer: Answer, isValid: boolean }>();

  questionTypeEnum = QuestionTypes;

  form!: FormGroup;
  isEnabledOtherOption = false;

  get optionsArrayControl(): FormArray {
    return this.form.get('options') as FormArray;
  }

  get isValid(): boolean {
    if (!this.question.isRequired) {
      return true;
    }
    const value = this.form.value;
    return value.options.filter((item: any) => item.selected).length > 0 || value.otherOption?.trim().length > 0
  }

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      options: this.fb.array([]),
      otherOption: [''],
    });

    this.form.valueChanges.subscribe(value => {
      const options = value.options
        .filter((item: { selected: boolean }) => item.selected)
        .map((item: { text: string }) => item.text);

      if (value.otherOption.trim().length > 0) {
        options.push(`Other - ${value.otherOption}`)
      }

      this.formChanges.emit({
        answer: {
          question: this.question.question,
          type: QuestionTypes.Checkbox,
          options,
        },
        isValid: this.isValid
      });
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['question'] && this.question) {
      this.question.options?.forEach((option) => {
        this.addOption(option)
      });
    }
  }

  addOption(option: string): void {
    const group = this.fb.group({
      text: [option],
      selected: []
    });
    this.optionsArrayControl.push(group);
  }

}
