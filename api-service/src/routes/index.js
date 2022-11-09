const express = require('express')
const { home } = require('../controller/auth')
const router = express.Router()
const auth = require('./auth')
const game = require('./game')
const score = require('./score')
const passport = require('passport')

router.use('/user', auth)
router.use('/game', game)
router.use('/score', score)
router.get('/', passport.authenticate('jwt', { session: false }), home)

module.exports = router
