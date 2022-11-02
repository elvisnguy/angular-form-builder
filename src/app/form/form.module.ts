import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { TextFieldModule } from '@angular/cdk/text-field';

import { FormRoutingModule } from './form-routing.module';
import { QuestionsPageComponent } from './questions-page/questions-page.component';
import { QuestionBuilderDialogComponent } from './question-builder-dialog/question-builder-dialog.component';
import { ReviewAnswersComponent } from './review-answers/review-answers.component';
import { ParagraphQuestionComponent } from './paragraph-question/paragraph-question.component';
import { CheckboxQuestionComponent } from './checkbox-question/checkbox-question.component';
import { FormService } from './services/form.service';

@NgModule({
  declarations: [
    QuestionsPageComponent,
    QuestionBuilderDialogComponent,
    ReviewAnswersComponent,
    ParagraphQuestionComponent,
    CheckboxQuestionComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,

    MatToolbarModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatCheckboxModule,
    MatCardModule,
    TextFieldModule,
    MatIconModule,

    FormRoutingModule,
  ],
  providers: [
    FormService
  ]
})
export class FormModule { }
