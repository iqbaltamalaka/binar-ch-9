const gameModel = require('../model/game')

class GameController {
  // list game
  async create(req, res) {
    try {
      await gameModel.create({
        name: req.body.name,
        path: req.body.path,
        icon: req.body.icon,
      })
      res.status(200).json({
        success: true,
        message: 'Create success',
      })
    } catch (err) {
      res.status(400).json({
        success: false,
        message: 'Create failed',
      })
    }
  }
  async findAll(req, res) {
    try {
      const result = await gameModel.find()
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
  async findOne(req, res) {
    try {
      const result = await gameModel.findOne({ _id: req.params.id })
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
  async update(req, res) {
    try {
      await gameModel.updateOne(
        { _id: req.params.id },
        {
          name: req.body.name,
          path: req.body.path,
          icon: req.body.icon,
        },
      )
      res.status(200).json({
        success: true,
        message: 'Update success',
      })
    } catch (err) {
      res.status(400).json({
        success: false,
        message: 'Update failed',
      })
    }
  }
  async deleteOne(req, res) {
    try {
      await gameModel.deleteOne({ _id: req.params.id })
      res.status(200).json({
        success: true,
        message: 'Delete success',
      })
    } catch (err) {
      res.status(400).json({
        success: false,
        message: 'Delete failed',
      })
    }
  }
}

module.exports = new GameController()
