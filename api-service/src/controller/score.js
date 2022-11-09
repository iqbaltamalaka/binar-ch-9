const scoreModel = require('../model/score')

class ScoreController {
  async create(req, res) {
    try {
      await scoreModel.create({
        user: req.user.id,
        score: req.body.score,
        game: req.params.id,
      })
      res.status(200).json({
        success: true,
        message: 'Create success',
      })
    } catch (err) {
      console.log(err)
      res.status(400).json({
        success: false,
        message: 'Create failed',
      })
    }
  }
  async findAll(req, res) {
    try {
      const result = await scoreModel
        .find({ user: req.user.id })
        .populate('game')
      res.status(200).json({
        success: true,
        data: result,
        message: 'Find all success',
      })
    } catch (err) {
      res.status(400).json({
        success: false,
        message: 'Find all failed',
      })
    }
  }
  async findAllPublic(req, res) {
    try {
      const result = await scoreModel
        .find()
        .populate('game', { created_at: 0 })
        .populate('user', { password: 0, __v: 0, email: 0 })
      res.status(200).json({
        success: true,
        data: result,
        message: 'Find all success',
      })
    } catch (err) {
      console.log(err)
      res.status(400).json({
        success: false,
        message: 'Find all failed',
      })
    }
  }
  async findOne(req, res) {
    try {
      const result = await scoreModel.findOne({ _id: req.params.id })
      res.status(200).json({
        success: true,
        data: result,
        message: 'Find one success',
      })
    } catch (err) {
      res.status(400).json({
        success: false,
        message: 'Find one failed',
      })
    }
  }
}
module.exports = new ScoreController()
