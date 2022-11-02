import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionBuilderDialogComponent } from './question-builder-dialog.component';

describe('QuestionBuilderDialogComponent', () => {
  let component: QuestionBuilderDialogComponent;
  let fixture: ComponentFixture<QuestionBuilderDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuestionBuilderDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuestionBuilderDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
