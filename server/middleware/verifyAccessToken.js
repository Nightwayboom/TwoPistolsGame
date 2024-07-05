require('dotenv').config();
const jwt = require('jsonwebtoken');
const {  Game } = require('../db/models');
async function verifyAccessToken(req, res, next) {
  try {

    const accessToken = req.headers.authorization.split(' ')[1];
    const { user } = jwt.verify(accessToken, process.env.ACCESS_TOKEN);
    
    res.locals.user = user;
    let game = await Game.findOne({ where: { userId: res.locals.user.id, status: false } })
    res.locals.game = game
    console.log(res.locals);

    next();
  } catch (error) {
    console.log('Invalid access token');
    res.status(403).send('Invalid access token');
  }
}

module.exports = verifyAccessToken;
