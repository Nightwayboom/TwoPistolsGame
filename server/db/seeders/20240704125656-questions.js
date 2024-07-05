'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.bulkInsert(
			'Questions',
			[
				{
					name: 'С одной ноги за 300',
					answer: 'Черная шутка 1',
					img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTg3EemQJru6rT1A6ZCT-coregPPEmtO9D86w&s',
					categoryId: 1,
				},
				{
					name: 'С двух ног за 400',
					answer: 'Черная шутка 2',
					img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTg3EemQJru6rT1A6ZCT-coregPPEmtO9D86w&s',
					categoryId: 1,
				},
				{
					name: 'С головы за 500',
					answer: 'Черная шутка 3',
					img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTg3EemQJru6rT1A6ZCT-coregPPEmtO9D86w&s',
					categoryId: 1,
				},
				{
					name: 'Junior фотка за 300',
					answer: 'угадай слово',
					img: 'img/theme2/1.jpeg',
					categoryId: 2,
				},
				{
					name: 'Middle фотка за 400',
					answer: 'угадай слово',
					img: 'img/theme2/2.jpeg',
					categoryId: 2,
				},
				{
					name: 'Senior фотка за 500',
					answer: 'угадай слово',
					img: 'img/theme2/3.jpg',
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
