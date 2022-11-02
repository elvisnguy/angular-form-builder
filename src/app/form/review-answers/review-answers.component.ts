import { Component, OnInit } from '@angular/core';
import { QuestionTypes } from '../models';
import { FormService } from '../services/form.service';

@Component({
  selector: 'app-review-answers',
  templateUrl: './review-answers.component.html',
  styleUrls: ['./review-answers.component.scss']
})
export class ReviewAnswersComponent implements OnInit {

  questionTypeEnum = QuestionTypes;

  constructor(
    public formService: FormService,
  ) { }

  ngOnInit(): void {
  }

}
