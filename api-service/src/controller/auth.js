const { hashSync, compareSync } = require('bcrypt')
const userGame = require('../model/user')
const jwt = require('jsonwebtoken')

class AuthController {
  // register
  async register(req, res) {
    try {
      await userGame.create({
        username: req.body.username,
        password: hashSync(req.body.password, 10),
        email: req.body.email,
        avatar:'https://i.ibb.co/CHNnP0g/mankagoose-eddie.png'
      })
      res.status(200).json({
        success: true,
        message: 'Register success',
      })
    } catch (err) {
      res.status(400).json({
        success: false,
        message: 'Register failed',
      })
    }
  }

  // check username
  async checkUsername(req, res) {
    try {
      const result = await userGame.findOne({ username: req.body.username })
      if (result) {
        res.status(200).json({
          success: true,
          data: true,
          message: 'Username already been used',
        })
      } else {
        res.status(200).json({
          success: true,
          data: false,
          message: 'Username is available',
        })
      }
    } catch (err) {
      res.status(500).json({
        success: false,
        data: true,
        message: 'internal server error',
      })
    }
  }

  // login
  async login(req, res) {
    try {
      const result = await userGame.findOne({ username: req.body.username })
      if (result) {
        if (!compareSync(req.body.password, result.password)) {
          res.status(400).json({
            success: false,
            message: 'Username or Password is wrong',
          })
        } else {
          const payload = {
            username: result.username,
            id: result._id,
          }
          const token = jwt.sign(payload, process.env.JWT_SECRET, {
            expiresIn: '1h',
          })

          return res.status(200).json({
            success: true,
            message: 'Successfully to login',
            data: { token: token },
          })
        }
      }
    } catch (error) {
      res.status(400).json({
        success: false,
        message: 'Failed to login',
      })
    }
  }

  // home autentikasi jwt
  async home(req, res) {
    try {
      res.status(200).json({
        success: true,
        message: 'Successfully authenticate',
        user: {
          id: req.user._id,
          username: req.user.username,
        },
      })
    } catch {
      res.status(400).json({
        success: false,
        message: 'failed authenticate',
      })
    }
  }
  async findOne(req, res) {
    try {
      const user = await userGame.findOne({
        where: {
          id: req.user.id,
        },
      })
      res.status(200).send({
        id: user.id,
        email: user.email,
        username: user.username,
      })
    } catch (error) {
      res.status(500).send({
        message: error.message,
      })
    }
  }
}

module.exports = new AuthController()
