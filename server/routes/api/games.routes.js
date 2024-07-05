const router = require('express').Router()
const { Game, GameLine, Question } = require('../../db/models')
const path = require('path')
const verifyAccessToken = require('../../middleware/verifyAccessToken')

router.get('/findGameCurrent', verifyAccessToken, async (req, res) => {
	try {
		const { game } = res.locals
		const findGame = await Game.findOne({
			where: { id: game.id },
			include: {
				model: GameLine,
				include: Question,
				order: [[{ model: GameLine }, 'id', 'ASC']], // не работает
			},
		})
		// const endGame = findGame.GameLines.every(gameEndLine => gameEndLine.status)
		// if (endGame) {
		// 	console.log('Игра закончилась')
		// }

		res.status(200).json({ message: 'success', findGame })
	} catch ({ message }) {
		res.status(500).json({ error: message })
	}
})

// router.get('/gamesLines', verifyAccessToken, async (req, res) => {
// 	try {
// 		const gameLines = await GameLine.findAll({
// 			where: { gameId: 1 },
// 			include: Question,
// 			order: [['id', 'ASC']],
// 		})
// 		res.status(200).json({ message: 'success', gameLines })
// 	} catch ({ message }) {
// 		res.status(500).json({ error: message })
// 	}
// })

router.post('/gameStart', verifyAccessToken, async (req, res) => {
	try {
		const { user } = res.locals
		const game = await Game.create({ userId: user.id, status: false, point: 0 })
		if (game) {
			const questions = await Question.findAll()
			questions.forEach(question =>
				GameLine.create({
					gameId: game.id,
					questionId: question.id,
					status: false,
				})
			)
			const inrev = setTimeout(async () => {
				const gameLines = await GameLine.findAll({
					where: { gameId: game.id },
					include: Question,
				})
				res.locals.game = game
				res.locals.user = user
				console.log(user)
				res.status(200).json({ message: 'success', game, gameLines })
			}, 2000)
		}
	} catch ({ message }) {
		res.status(500).json({ error: message })
	}
})

router.patch(
	'/gameLinesRight/:gameLineId',
	verifyAccessToken,
	async (req, res) => {
		try {
			const { game } = res.locals //  Текущая игра
			const point = game.point + 100
			const { gameLineId } = req.params // текущий GameLine
			const updateGameLine = await GameLine.update(
				{ status: true },
				{ where: { id: gameLineId, gameId: game.id } }
			)
			if (updateGameLine[0] > 0) {
				const updateGame = await Game.update(
					{ point },
					{ where: { id: game.id } }
				)
				if (updateGame[0] > 0) {
					const gameLine = await GameLine.findOne({
						where: { id: gameLineId },
						include: Question,
					})
					let gameFind = await Game.findOne({ where: { id: game.id } })
					const checkEndGameLines = await GameLine.findAll({
						where: { gameId: game.id },
						include: Question,
						order: [['id', 'ASC']],
					})
					const endGame = checkEndGameLines.every(
						gameEndLine => gameEndLine.status
					)
					if (endGame) {
						console.log('Игра закончилась')
						const updateGame = await Game.update(
							{ status: true },
							{ where: { id: game.id } }
						)
						if (updateGame[0] > 0) {
							res.status(200).json({ message: 'Game over!', gameLine })
							return
						}
					}

					res.status(200).json({ message: 'success', gameLine, game: gameFind })
				}
			}
			// res.status(200).json({ message: 'Ошибка' })
		} catch ({ message }) {
			res.status(500).json({ error: message })
		}
	}
)
router.patch(
	'/gameLinesWrong/:gameLineId',
	verifyAccessToken,
	async (req, res) => {
		try {
			const { game } = res.locals //  Текущая игра
			const point = game.point - 100
			const { gameLineId } = req.params // текущий GameLine
			const updateGameLine = await GameLine.update(
				{ status: true },
				{ where: { id: gameLineId, gameId: game.id } }
			)
			if (updateGameLine[0] > 0) {
				const updateGame = await Game.update(
					{ point },
					{ where: { id: game.id } }
				)
				if (updateGame[0] > 0) {
					const gameLine = await GameLine.findOne({
						where: { id: gameLineId },
						include: Question,
					})
					let gameFind = await Game.findOne({ where: { id: game.id } })
					const checkEndGameLines = await GameLine.findAll({
						where: { gameId: game.id },
						include: Question,
						order: [['id', 'ASC']],
					})
					const endGame = checkEndGameLines.every(
						gameEndLine => gameEndLine.status
					)
					if (endGame) {
						console.log('Игра закончилась')
						const updateGame = await Game.update(
							{ status: true },
							{ where: { id: game.id } }
						)
						if (updateGame[0] > 0) {
							let gameFind = await Game.findOne({ where: { id: game.id } })
							res
								.status(200)
								.json({ message: 'Game over!', gameLine, game: gameFind })
							return
						}
					}
					res.status(200).json({ message: 'success', gameLine, game: gameFind })
				}
			}
			// res.status(200).json({ message: 'Ошибка' })
		} catch ({ message }) {
			res.status(500).json({ error: message })
		}
	}
)

module.exports = router
