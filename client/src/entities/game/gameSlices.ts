import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { Game, GameLineWithQuestion } from './types/gameTypes';
import GameApi from './api/gameApi';
import type { GameRating } from '../users/types/userTypes';

type StateCurrentGame = {
  game: Game | undefined;
  rating: GameRating[];
  gameLines: GameLineWithQuestion[];
  error: string | undefined;
  loading: boolean;
};

const initialState: StateCurrentGame = {
  game: undefined,
  gameLines: [],
  rating: [],
  error: undefined,
  loading: false,
};

export const loadCurrentGameAndGameLineThunk = createAsyncThunk('load/games', () =>
  GameApi.getCurrentGameAndLines(),
);

export const createNewGameLinesThunk = createAsyncThunk('create/games', () =>
  GameApi.createNewGame(),
);

export const updateAnswerQuestionPlusThunk = createAsyncThunk(
  'updateRight/gameQuest',
  (id: number) => GameApi.answeredQuestionRight(id),
);
export const updateAnswerQuestionMinusThunk = createAsyncThunk(
  'updateWrong/gameQuest',
  (id: number) => GameApi.answeredQuestionWrong(id),
);
export const getGamesRatingThunk = createAsyncThunk('rating/games', () => GameApi.getGamesRating());

const GameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadCurrentGameAndGameLineThunk.fulfilled, (state, action) => {
        state.gameLines = action.payload.findGame.GameLines;
        state.game = action.payload.findGame;
        delete state.game.GameLines;
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
      .addCase(updateAnswerQuestionPlusThunk.fulfilled, (state, action) => {
        state.gameLines = state.gameLines.map((gameLine) =>
          gameLine.id === action.payload.gameLine.id ? action.payload.gameLine : gameLine,
        );
        state.game = action.payload.game;
      })
      .addCase(updateAnswerQuestionMinusThunk.fulfilled, (state, action) => {
        // if (action.payload.message === 'success') {
        state.gameLines = state.gameLines.map((gameLine) =>
          gameLine.id === action.payload.gameLine.id ? action.payload.gameLine : gameLine,
        );
        state.game = action.payload.game;
        // } else if (action.payload.message === 'Game over!') {
        //   state.gameLines = state.gameLines.map((gameLine) =>
        //     gameLine.id === action.payload.gameLine.id ? action.payload.gameLine : gameLine,
        //   );
        // }
      })
      .addCase(getGamesRatingThunk.fulfilled, (state, action) => {
        state.rating = action.payload.gamesRating;
        state.loading = false;
      });
  },
});

export default GameSlice;
