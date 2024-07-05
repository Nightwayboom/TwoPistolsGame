import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { Question } from './types/questionType';
import QuestionApi from './api/questionApi';

type StateQuestion = {
  questions: Question[];
  error: string | undefined;
  loading: boolean;
};

const initialState: StateQuestion = {
  questions: [],
  error: undefined,
  loading: true,
};

export const getQuestionThunk = createAsyncThunk('load/questions', () =>
  QuestionApi.getAllQuestion(),
);

const questionsSlice = createSlice({
  name: 'questions',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getQuestionThunk.fulfilled, (state, action) => {
        state.questions = action.payload;
        state.loading = false;
      })
      .addCase(getQuestionThunk.pending, (state) => {
        state.loading = true;
      })
      .addCase(getQuestionThunk.rejected, (state, action) => {
        state.error = action.error.message;
        state.loading = false;
      });
  },
});

export default questionsSlice;
