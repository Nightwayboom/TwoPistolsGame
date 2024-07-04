'use strict'
/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable('Questions', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			name: {
				type: Sequelize.STRING,
			},
			answer: {
				type: Sequelize.STRING,
			},
			img: {
				type: Sequelize.STRING,
			},
			categoryId: {
				type: Sequelize.INTEGER,
				references: {
					model: 'Categories',
					key: 'id',
				},
				allowNull: false,
				onDelete: 'CASCADE',
				onUpdate: 'CASCADE',
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
		await queryInterface.dropTable('Questions')
	},
}
