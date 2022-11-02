import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { QuestionTypes } from '../models';

@Component({
  selector: 'app-question-builder-dialog',
  templateUrl: './question-builder-dialog.component.html',
  styleUrls: ['./question-builder-dialog.component.scss']
})
export class QuestionBuilderDialogComponent {
  questionTypesEnum = QuestionTypes;
  questionTypes = [
    {
      value: QuestionTypes.Paragraph,
      label: 'Paragraph',
    }, {
      value: QuestionTypes.Checkbox,
      label: 'Checkbox list',
    }
  ];

  form: FormGroup;
  get optionsArrayControl(): FormArray {
    return this.form.get('options') as FormArray;
  }

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<QuestionBuilderDialogComponent>,
  ) {
    this.form = this.buildForm();

    let options: FormArray | null = null;
    this.form.get('type')?.valueChanges.subscribe((type) => {
      if (type === QuestionTypes.Paragraph) {
        options = this.form.get('options') as FormArray;
        this.form.removeControl('options');
      } else if (options) {
        this.form.addControl('options', options);
      }
    });
  }

  addAnotherOption(): void {
    const control = this.fb.control('', [Validators.required]);
    this.optionsArrayControl.push(control);
  }

  removeOption(index: number) {
    this.optionsArrayControl.removeAt(index);
  }

  onSubmit(): void {
    if (this.form.invalid) {
      return;
    }

    const question = this.form.value;
    if (question.type === QuestionTypes.Paragraph) {
      delete question.answers;
    }

    this.dialogRef.close(question);
  }

  private buildForm(): FormGroup {
    return this.fb.group({
      type: [QuestionTypes.Checkbox],
      question: ['', [Validators.required]],
      options: this.fb.array([
        this.fb.control('', [Validators.required]),
        this.fb.control('', [Validators.required])
      ]),
      allowOther: [false],
      isRequired: [false],
    });
  }

}
