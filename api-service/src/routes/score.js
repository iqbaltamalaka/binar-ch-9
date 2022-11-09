const express = require('express')
const router = express.Router()
const {
  create,
  findAll,
  findOne,
  findAllPublic,
} = require('../controller/score')
const auth = require('../middleware/authMiddleware')

router.post('/create/:id', auth, create)
router.get('/find', auth, findAll)
router.get('/find-public', findAllPublic)
router.get('/find/:id', auth, findOne)

module.exports = router
