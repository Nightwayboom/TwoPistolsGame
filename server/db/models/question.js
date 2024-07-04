'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
	class Question extends Model {
		static associate({ GameLine, Category }) {
			this.hasMany(GameLine, { foreignKey: 'questionId' })
			this.belongsTo(Category, { foreignKey: 'categoryId' })
		}
	}
	Question.init(
		{
			name: DataTypes.STRING,
			answer: DataTypes.STRING,
			img: DataTypes.STRING,
			categoryId: DataTypes.INTEGER,
		},
		{
			sequelize,
			modelName: 'Question',
		}
	)
	return Question
}
