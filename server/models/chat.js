const mongoose = require("mongoose")

const chatSchema = new mongoose.Schema({
  timedate: {
    type: Date,
    default: Date.now,
  },
  userName: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
})

module.exports = mongoose.model("Chat", chatSchema)
