import type { AxiosResponse } from 'axios';
import type { Game, GameLineWithQuestion } from '../types/gameTypes';
import axiosInstance from '../../../services/axiosInstance';

class GameApi {
  static getGameLines = async (): Promise<GameLineWithQuestion[]> => {
    try {
      const result: AxiosResponse<{ message: 'success'; gameLines: GameLineWithQuestion[] }> =
        await axiosInstance.get('/games/gamesLines');
      return result.data.gameLines;
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

	static answeredQuestion = async(id:number): Promise<GameLineWithQuestion> => {
		try {
			const result: AxiosResponse<{ message: 'success', gameLine: GameLineWithQuestion }> = await axiosInstance.patch(`/games/gameLines/${id}`)
			return result.data.gameLine
		} catch (error) {
			throw new Error('Не обновил статус отвеченного вопроса');
		}
	}
}

export default GameApi;
