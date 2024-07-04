'use strict'
const bcrypt = require('bcrypt')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.bulkInsert(
			'Users',
			[
				{
					login: 'admin',
					email: 'admin@admin',
					password: await bcrypt.hash('1234', 10),
				},
			],
			{}
		)
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.bulkDelete('Users', null, {})
	},
}
