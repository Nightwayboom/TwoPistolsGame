import type { Question } from '../../questions/types/questionType';

export type Game = {
  id: number;
  userId: number;
  status: boolean;
  point: number;
  GameLines?: GameLineWithQuestion[]
};

export type GameLine = {
  id: number;
  gameId: number;
  questionId: number;
  status: boolean;
};

export type GameLineWithQuestion = {
  Question: Question;
} & GameLine;

export type RefreshGame = {
  GameLines: GameLineWithQuestion[];
} & Game;
