'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.bulkInsert(
			'Categories',
			[
				{
					title: 'ЧЕРНУХА',
					img: 'https://opis-cdn.tinkoffjournal.ru/mercury/kategorii-prav-1.pmeffyynjsfc..png',
				},
				{
					title: 'УГАДАЙ СЛОВО ПО IMG',
					img: 'https://opis-cdn.tinkoffjournal.ru/mercury/kategorii-prav-1.pmeffyynjsfc..png',
				},
				{
					title: 'УГАДАЙ КТО',
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
