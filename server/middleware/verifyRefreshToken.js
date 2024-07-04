const jwt = require('jsonwebtoken')
require('dotenv').config()
const { User, Game } = require('../db/models')

async function verifyRefreshToken(req, res, next) {
	try {
		const { refresh } = req.cookies

		if (!refresh) {
			return res.status(401).send('No refresh token provided')
		}

		let { user } = jwt.verify(refresh, process.env.REFRESH_TOKEN)

		let game = await Game.findOne({ where: { userId: user.id, status: false } })

		res.locals.user = user
		res.locals.game = game

		next()
	} catch (error) {
		console.error('Invalid refresh token', error)
		res.clearCookie('refresh').sendStatus(401)
	}
}

module.exports = verifyRefreshToken
