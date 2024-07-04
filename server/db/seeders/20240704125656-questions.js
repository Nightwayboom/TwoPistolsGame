'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.bulkInsert(
			'Questions',
			[
				{
					name: 'Первый вопрос1',
					answer: 'Да',
					img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTg3EemQJru6rT1A6ZCT-coregPPEmtO9D86w&s',
					categoryId: 1,
				},
				{
					name: 'Второй вопрос1',
					answer: 'Да',
					img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTg3EemQJru6rT1A6ZCT-coregPPEmtO9D86w&s',
					categoryId: 1,
				},
				{
					name: 'Третий вопрос1',
					answer: 'Да',
					img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTg3EemQJru6rT1A6ZCT-coregPPEmtO9D86w&s',
					categoryId: 1,
				},
				{
					name: 'Первый вопрос2',
					answer: 'Да',
					img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTg3EemQJru6rT1A6ZCT-coregPPEmtO9D86w&s',
					categoryId: 2,
				},
				{
					name: 'Второй вопрос2',
					answer: 'Да',
					img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTg3EemQJru6rT1A6ZCT-coregPPEmtO9D86w&s',
					categoryId: 2,
				},
				{
					name: 'Третий вопрос2',
					answer: 'Да',
					img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTg3EemQJru6rT1A6ZCT-coregPPEmtO9D86w&s',
					categoryId: 2,
				},
				{
					name: 'Первый вопрос3',
					answer: 'Да',
					img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTg3EemQJru6rT1A6ZCT-coregPPEmtO9D86w&s',
					categoryId: 3,
				},
				{
					name: 'Второй вопрос3',
					answer: 'Да',
					img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTg3EemQJru6rT1A6ZCT-coregPPEmtO9D86w&s',
					categoryId: 3,
				},
				{
					name: 'Третий вопрос3',
					answer: 'Да',
					img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTg3EemQJru6rT1A6ZCT-coregPPEmtO9D86w&s',
					categoryId: 3,
				},
			],
			{}
		)
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.bulkDelete('Questions', null, {})
	},
}
