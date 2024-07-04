import type { AxiosResponse } from 'axios';
import type { Category } from '../types/categoryTypes';
import axiosInstance from '../../../services/axiosInstance';

class CategoryApi {
  static getAllCategory = async (): Promise<Category[]> => {
    try {
      const result: AxiosResponse<{ message: 'success'; genres: Category[] }> =
        await axiosInstance.get('/categories');
      return result.data.genres;
    } catch (error) {
      throw new Error('Не получил все категории');
    }
  };
}

export default CategoryApi;
