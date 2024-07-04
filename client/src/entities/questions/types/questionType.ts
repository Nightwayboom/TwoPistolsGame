export type Question = {
  id: number;
  question: string;
  answer: string;
  themeId: number;
  img: string;
};

export type QuestionId = Question['id'];
export type QuestionWithoutId = Omit<Question, 'id'>;
