const express = require('express')
const router = express.Router()
const {
  login,
  register,
  checkUsername,
  findOne,
} = require('../controller/auth')
const auth = require('../middleware/authMiddleware')

router.post('/register', register)
router.post('/login', login)
router.post('/check-username', checkUsername)
router.get('/profile', auth, findOne)

module.exports = router
