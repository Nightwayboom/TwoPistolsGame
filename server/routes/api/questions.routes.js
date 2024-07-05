const router = require('express').Router()
const { Category, Question } = require('../../db/models')
const path = require('path')
const verifyAccessToken = require('../../middleware/verifyAccessToken')

router.get('/', async (req, res) => {
	try {
		const questions = await Question.findAll({
			include: Category,
			order: [['id', 'ASC']],
		})
		res.status(200).json({ message: 'success', questions })
	} catch ({ message }) {
		res.status(500).json({ error: message })
	}
})

module.exports = router
