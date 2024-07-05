const router = require('express').Router()
const { Category } = require('../../db/models')
const path = require('path')

router.get('/', async (req, res) => {
	try {
		const categories = await Category.findAll({
			order: [['id', 'ASC']],
		})
		res.status(200).json({ message: 'success', categories })
	} catch ({ message }) {
		res.status(500).json({ error: message })
	}
})

module.exports = router
