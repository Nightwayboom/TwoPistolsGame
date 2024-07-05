'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
	class Game extends Model {
		static associate({ User, GameLine }) {
			this.hasMany(GameLine, { foreignKey: 'gameId' })
			this.belongsTo(User, { foreignKey: 'userId' })
		}
	}
	Game.init(
		{
			userId: DataTypes.INTEGER,
			status: DataTypes.BOOLEAN,
			point: DataTypes.INTEGER,
		},
		{
			sequelize,
			modelName: 'Game',
		}
	)
	return Game
}
