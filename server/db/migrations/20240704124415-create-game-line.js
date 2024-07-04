'use strict'
/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable('GameLines', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			gameId: {
				type: Sequelize.INTEGER,
				references: {
					model: 'Games',
					key: 'id',
				},
				allowNull: false,
				onDelete: 'CASCADE',
				onUpdate: 'CASCADE',
			},
			questionId: {
				type: Sequelize.INTEGER,
				references: {
					model: 'Questions',
					key: 'id',
				},
				allowNull: false,
				onDelete: 'CASCADE',
				onUpdate: 'CASCADE',
			},
			status: {
				type: Sequelize.BOOLEAN,
			},
			createdAt: {
				allowNull: true,
				type: Sequelize.DATE,
				defaultValue: new Date(),
			},
			updatedAt: {
				allowNull: true,
				type: Sequelize.DATE,
				defaultValue: new Date(),
			},
		})
	},
	async down(queryInterface, Sequelize) {
		await queryInterface.dropTable('GameLines')
	},
}
