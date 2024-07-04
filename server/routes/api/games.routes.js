const router = require('express').Router()
const { Game, GameLine, Question } = require('../../db/models')
const path = require('path')

router.get('/games', async (req, res) => {
	try {
		const games = await Game.findAll({
			order: [['id', 'ASC']],
		})
		console.log(games)
		res.status(200).json({ message: 'success', games })
	} catch ({ message }) {
		res.status(500).json({ error: message })
	}
})

router.get('/gamesLines', async (req, res) => {
	try {
		const gameLines = await GameLine.findAll({
			where: { gameId: 1 },
			include: Question,
			order: [['id', 'ASC']],
		})
		res.status(200).json({ message: 'success', gameLines })
	} catch ({ message }) {
		res.status(500).json({ error: message })
	}
})

router.post('/gameStart', async (req, res) => {
	try {
		const game = await Game.create({ userId: 1, status: false, point: 0 })
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
				res.status(200).json({ message: 'success', game, gameLines })
			}, 2000)
		}
	} catch ({ message }) {
		res.status(500).json({ error: message })
	}
})

router.patch('/gameLines/:gameLineId', async (req, res) => {
	try {
		const { gameLineId } = req.params
		const updateGameLine = await GameLine.update(
			{ status: true },
			{
				// игра будет доставаться из рес локалс
				where: { id: gameLineId, gameId: 1 },
			}
		)
		if (updateGameLine[0] > 0) {
			const gameLine = await GameLine.findOne({
				where: { id: gameLineId },
				include: Question,
			})
			res.status(200).json({ message: 'success', gameLine })
		}
	} catch ({ message }) {
		res.status(500).json({ error: message })
	}
})

module.exports = router
