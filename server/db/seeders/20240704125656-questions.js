'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.bulkInsert(
			'Questions',
			[
				{
					name: 'Что видит оптимист на кладбище?',
					answer: 'Одни плюсы',
					img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTg3EemQJru6rT1A6ZCT-coregPPEmtO9D86w&s',
					categoryId: 1,
				},
				{
					name: 'Почему полных людей не берут в стриптиз?',
					answer: 'Они перегибают палку',
					img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTg3EemQJru6rT1A6ZCT-coregPPEmtO9D86w&s',
					categoryId: 1,
				},
				{
					name: 'Почему эпилептиков не пускают на пенные вечеринки?',
					answer: 'Со своим нельзя',
					img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTg3EemQJru6rT1A6ZCT-coregPPEmtO9D86w&s',
					categoryId: 1,
				},
				{
					name: 'Junior фотка',
					answer: 'Дичь',
					img: 'img/theme2/1.jpeg',
					categoryId: 2,
				},
				{
					name: 'Middle фотка',
					answer: 'Нормально',
					img: 'img/theme2/2.jpeg',
					categoryId: 2,
				},
				{
					name: 'Senior фотка за 500',
					answer: 'Врун',
					img: 'img/theme2/3.jpg',
					categoryId: 2,
				},
				{
					name: 'Кто же это?',
					answer: 'Пага',
					img: 'https://i.pinimg.com/564x/18/7c/40/187c40c6e8cf843fc48deaf85f3d069e.jpg',
					categoryId: 3,
				},
				{
					name: 'А это?)',
					answer: 'Лера',
					img: 'https://thumbs.dfs.ivi.ru/storage9/contents/1/f/755503a17c8404526a5404790ba66a.jpg',
					categoryId: 3,
				},
				{
					name: 'На закуску',
					answer: 'Олег',
					img: 'https://avatars.dzeninfra.ru/get-zen_doc/1899275/pub_5e54b51f6948c51ea07bcd07_5e54b5f4e977e25b8eec76fc/scale_1200',
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
