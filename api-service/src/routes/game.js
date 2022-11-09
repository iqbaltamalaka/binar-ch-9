const express = require('express')
const router = express.Router()
const {
  create,
  update,
  findAll,
  findOne,
  deleteOne,
} = require('../controller/game')
const auth = require('../middleware/authMiddleware')

router.post('/create', auth, create)
router.put('/update/:id', auth, update)
router.get('/find', auth, findAll)
router.get('/find/:id', auth, findOne)
router.delete('/delete/:id', auth, deleteOne)

module.exports = router
