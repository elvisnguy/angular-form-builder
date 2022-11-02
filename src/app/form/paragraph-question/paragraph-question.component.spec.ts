import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParagraphQuestionComponent } from './paragraph-question.component';

describe('ParagraphQuestionComponent', () => {
  let component: ParagraphQuestionComponent;
  let fixture: ComponentFixture<ParagraphQuestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParagraphQuestionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParagraphQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
