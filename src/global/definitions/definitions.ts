export interface QAndAInterface {
  questions: QuestionInterface[];
  facts: FactInterface[];
}

export interface QuestionInterface {
  id: number;
  background: boolean;
  questionHypertext: any;
  answerHypertext: any;
}

export interface FactInterface {
  id: number;
  quote: string;
}
