export enum QuestionTypes {
  Paragraph,
  Checkbox
}

export interface Question {
  type: QuestionTypes;
  question: string;
  options?: Array<string>;
  isRequired: boolean;
  allowOther: boolean;
}
