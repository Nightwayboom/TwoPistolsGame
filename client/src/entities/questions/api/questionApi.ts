import type { AxiosResponse } from 'axios';
import type { Question } from '../types/questionType';
import axiosInstance from '../../../services/axiosInstance';

class QuestionApi {
  static getAllQuestion = async (): Promise<Question[]> => {
    const response: AxiosResponse<{ message: string; questions: Question[] }> =
      await axiosInstance.get('/questions');
    return response.data.questions;
  };
}

export default QuestionApi;
