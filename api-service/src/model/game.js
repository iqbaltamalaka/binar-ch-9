const mongoose = require('mongoose')

const Schema = mongoose.Schema

const GameSchema = new Schema(
  {
    name: { type: String, required: true },
    path: { type: String, required: true },
    icon: { type: String, required: true },
    created_at: { type: Date, default: Date.now },
  },
  { versionKey: false },
)
module.exports = mongoose.model('game', GameSchema)
