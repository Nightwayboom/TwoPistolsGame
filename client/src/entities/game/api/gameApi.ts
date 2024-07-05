import type { AxiosResponse } from 'axios';
import type { Game, GameLineWithQuestion, RefreshGame } from '../types/gameTypes';
import axiosInstance from '../../../services/axiosInstance';

class GameApi {
  static getCurrentGameAndLines = async (): Promise<{ message: 'success'; findGame: RefreshGame }> => {
    try {
      const result: AxiosResponse<{ message: 'success'; findGame: RefreshGame }> =
        await axiosInstance.get('/games/findGameCurrent');
      return result.data;
    } catch (error) {
      throw new Error('Не получил все активные вопросы');
    }
  };

  static createNewGame = async (): Promise<{
    message: 'success';
    game: Game;
    gameLines: GameLineWithQuestion[];
  }> => {
    try {
      const result: AxiosResponse<{
        message: 'success';
        game: Game;
        gameLines: GameLineWithQuestion[];
      }> = await axiosInstance.post('/games/gameStart');
      return result.data;
    } catch (error) {
      throw new Error('Не создал новую игру');
    }
  };

	static answeredQuestionRight = async(id:number): Promise<{ message: 'success', gameLine: GameLineWithQuestion, game: Game }> => {
		try {
			const result: AxiosResponse<{ message: 'success', gameLine: GameLineWithQuestion, game: Game }> = await axiosInstance.patch(`/games/gameLinesRight/${id}`)
			return result.data
		} catch (error) {
			throw new Error('Не обновил статус отвеченного вопроса');
		}
	}

	static answeredQuestionWrong = async(id:number): Promise<{ message: 'success', gameLine: GameLineWithQuestion, game: Game }> => {
		try {
			const result: AxiosResponse<{ message: 'success', gameLine: GameLineWithQuestion, game: Game }> = await axiosInstance.patch(`/games/gameLinesWrong/${id}`)
			return result.data
		} catch (error) {
			throw new Error('Не обновил статус отвеченного вопроса');
		}
	}
}

export default GameApi;
