export type Category = {
  id: number;
  name: string;
  answer: string;
  img: string;
  categoryId: number;
};

export type CategoryId = Category['id'];
export type CategoryWithoutId = Omit<Category, 'id'>;