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

export interface BlogInterface {
  id: number;
  title: string;
  slug: string;
  body_markdown: any;
  html: any;
  cover_image: string;
}

export interface ErrorInterface {
  code: "FILE_ERROR" | "GENERAL_ERROR" | "NO_MATCH";
  errorMessage: string;
}
