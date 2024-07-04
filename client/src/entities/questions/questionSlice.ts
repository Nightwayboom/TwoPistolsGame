import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { Question } from './types/questionType';
import QuestionApi from './api/questionApi';

type StateQuestion = {
  questions: Question[];
};

const initialState: StateQuestion = {
  questions: [],
};

export const getQuestionThunk = createAsyncThunk('load/questions', () =>
  QuestionApi.getAllQuestion(),
);

const questionsSlice = createSlice({
  name: 'questions',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getQuestionThunk.fulfilled, (state, action) => {
      state.questions = action.payload;
    });
  },
});

export default questionsSlice;
