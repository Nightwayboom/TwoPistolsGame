import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { Game, GameLine } from './types/gameTypes';
import GameApi from './api/gameApi';

type StateCurrentGame = {
  game?: Game | undefined;
  gameLines: GameLine[];
  error: string | undefined;
  loading: boolean;
};

const initialState: StateCurrentGame = {
  game: undefined,
  gameLines: [],
  error: undefined,
  loading: true,
};

export const loadGameLinesThunk = createAsyncThunk('load/games', () => GameApi.getGameLines());

export const createNewGameLinesThunk = createAsyncThunk('create/games', () =>
  GameApi.createNewGame(),
);

export const updateAnswerQuestionThunk = createAsyncThunk('update/gameQuest', (id: number) =>
  GameApi.answeredQuestion(id),
);

const GameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadGameLinesThunk.fulfilled, (state, action) => {
        state.gameLines = action.payload;
        state.loading = false;
      })
      .addCase(createNewGameLinesThunk.fulfilled, (state, action) => {
        state.game = action.payload.game;
        state.gameLines = action.payload.gameLines;
        state.loading = false;
      })
      .addCase(createNewGameLinesThunk.pending, (state) => {
        state.loading = true;
      })
      .addCase(createNewGameLinesThunk.rejected, (state, action) => {
        state.error = action.error.message;
        state.loading = false;
      })
      .addCase(updateAnswerQuestionThunk.fulfilled, (state, action) => {
        state.gameLines = state.gameLines.map((gameLine) =>
          gameLine.id === action.payload.id ? action.payload : gameLine,
        );
      });
  },
});

export default GameSlice;
