'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.bulkInsert(
			'Categories',
			[
				{
					title: 'Первая категория',
					img: 'https://opis-cdn.tinkoffjournal.ru/mercury/kategorii-prav-1.pmeffyynjsfc..png',
				},
				{
					title: 'Вторая категория',
					img: 'https://opis-cdn.tinkoffjournal.ru/mercury/kategorii-prav-1.pmeffyynjsfc..png',
				},
				{
					title: 'Третья категория',
					img: 'https://opis-cdn.tinkoffjournal.ru/mercury/kategorii-prav-1.pmeffyynjsfc..png',
				},
			],
			{}
		)
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.bulkDelete('Categories', null, {})
	},
}
