'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class GameLine extends Model {
    static associate({Game,Question}) {
      this.belongsTo(Game, { foreignKey: 'gameId' });
      this.belongsTo(Question, { foreignKey: 'questionId' });
    }
  }
  GameLine.init({
    gameId: DataTypes.INTEGER,
    questionId: DataTypes.INTEGER,
    status: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'GameLine',
  });
  return GameLine;
};