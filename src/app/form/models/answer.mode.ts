import { QuestionTypes } from "./question.model";

export interface Answer {
  question: string;
  type: QuestionTypes;
  answer?: string;
  options?: Array<string>;
}
