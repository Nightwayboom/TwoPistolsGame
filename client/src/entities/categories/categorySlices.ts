import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { Category } from './types/categoryTypes';
import CategoryApi from './api/categoryApi';

type StateCategory = {
  category: Category[];
  error: string | undefined;
  loading: boolean;
};

const initialState: StateCategory = {
  category: [],
  error: undefined,
  loading: true,
};

export const loadCategoriesThunk = createAsyncThunk('load/categories', () =>
  CategoryApi.getAllCategory(),
);

const CategorySlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadCategoriesThunk.fulfilled, (state, action) => {
        state.category = action.payload;
        state.loading = false;
        
      })
      .addCase(loadCategoriesThunk.pending, (state) => {
        state.loading = true;
      })
      .addCase(loadCategoriesThunk.rejected, (state, action) => {
        state.error = action.error.message;
        state.loading = false;
      });
  },
});

export default CategorySlice;
