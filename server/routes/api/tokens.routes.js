const router = require('express').Router();
const verifyRefreshToken = require('../../middleware/verifyRefreshToken');
const generateTokens = require('../../utils/authUtils');

router.get('/refresh', verifyRefreshToken, (req, res) => {
  const { user,game } = res.locals;
  const { accessToken, refreshToken } = generateTokens({ user });
  res
    .cookie('refresh', refreshToken, { httpOnly: true })
    .status(200)
    .json({ message: 'success', accessToken, user,game });
});

module.exports = router;
