export type Question = {
  id: number;
  name: string;
  answer: string;
  categoryId: number;
  img: string;
};

export type QuestionId = Question['id'];
export type QuestionWithoutId = Omit<Question, 'id'>;
