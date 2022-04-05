const express = require("express")
const router = express.Router()
const Chat = require("./../models/chat")


router.get("/", async (req, res) => {
  await Chat.find()
    .then((chat) => res.json(chat))
    .catch((e) => console.error(e))
})

router.post("/", async (req, res) => {
  const newMessage = new Chat(req.body)
  newMessage.save().catch((err) => console.error(err))
})

module.exports = router
