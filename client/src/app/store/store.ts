import { configureStore } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import questionsSlice from '../../entities/questions/questionSlice';
import CategorySlice from '../../entities/categories/categorySlices';
import GameSlice from '../../entities/game/gameSlices';

const store = configureStore({
  reducer: {
    questions: questionsSlice.reducer,
    categories: CategorySlice.reducer,
    game: GameSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;
export type StoreType = typeof store;

export const useAppSelector = useSelector.withTypes<RootState>();
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();

export default store;
