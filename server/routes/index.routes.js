const router = require('express').Router();

const authRoutes = require('./api/auth.routes');
const tokensRoutes = require('./api/tokens.routes');
const questionsRoutes = require('./api/questions.routes');
const categoriesRoutes = require('./api/categories.routes');
const gamesRoutes = require('./api/games.routes');

router.use('/auth', authRoutes);
router.use('/tokens', tokensRoutes);
router.use('/questions', questionsRoutes);
router.use('/categories', categoriesRoutes);
router.use('/games', gamesRoutes);


module.exports = router;
