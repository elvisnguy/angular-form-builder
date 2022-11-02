import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuestionsPageComponent } from './questions-page/questions-page.component';
import { ReviewAnswersComponent } from './review-answers/review-answers.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'builder',
  },
  {
    path: 'builder',
    component: QuestionsPageComponent,
  },
  {
    path: 'answers',
    component: ReviewAnswersComponent,
  },
  // { path: '**', redirectTo: '404' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormRoutingModule { }
